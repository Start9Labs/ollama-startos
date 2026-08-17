<p align="center">
  <img src="icon.svg" alt="Ollama Logo" width="21%">
</p>

# Ollama on StartOS

> Everything not listed in this document should behave the same as upstream
> Ollama. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Ollama](https://github.com/ollama/ollama) runs large language models locally and serves them over an HTTP API. This package is a thin wrapper: it ships upstream's image unmodified, builds a second variant for AMD GPUs, and exposes the API as a network interface for a client or UI to consume.

- **Upstream repo:** <https://github.com/ollama/ollama>
- **Wrapper repo:** <https://github.com/Start9Labs/ollama-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The package builds in two variants from unmodified upstream images, and **StartOS picks one for you** — the most hardware-specific variant compatible with the machine. There is no variant selector.

| Property      | `generic`                      | `rocm`                                    |
| ------------- | ------------------------------ | ----------------------------------------- |
| Image         | `ollama/ollama`                | `ollama/ollama` ROCm build                |
| Architectures | x86_64, aarch64                | x86_64                                    |
| Declared for  | Everything not matching `rocm` | A discrete AMD GPU on the `amdgpu` driver |
| Entrypoint    | Upstream's                     | Upstream's                                |

One subcontainer, `ollama-sub`, runs the single `primary` daemon — the one to `attach` to.

### GPU acceleration

The manifest sets `hardwareAcceleration: true` and nothing else is configurable: GPU use is upstream's own auto-detection.

**NVIDIA** goes through the `generic` variant, whose image is declared `nvidiaContainer: true`. This only does anything on the `-nvidia` platform flavors of StartOS, which bundle the driver and container toolkit — there, StartOS overlays the host driver userspace into the container and passes the `/dev/nvidia*` devices through, and Ollama's CUDA detection finds the card. On the standard and `-nonfree` flavors there is no NVIDIA runtime on the host, so inference falls back to CPU **even with a card physically present**.

**AMD** goes through the `rocm` variant, whose hardware requirement is narrowed to _discrete_ AMD GPUs, matched by product name (Navi, Radeon RX, Radeon VII, Instinct). Integrated Radeon graphics — the 680M in Ryzen APUs and similar — are deliberately excluded because ROCm is unreliable on them; those machines get `generic` and run on CPU. The match is a positive allowlist rather than an iGPU exclusion because StartOS's regex engine has no lookahead.

**Blackwell (sm_121, DGX Spark GB10)** is the one case needing a package-side setting. Only Ollama's CUDA 13 runner targets sm_121 — the CUDA 12 runner's SASS tops out at sm_120 — and that runner ships as PTX the driver must JIT-compile on first load. The container's default CUDA cache is ephemeral, so that compilation would repeat on every start; the package pins it into the data volume instead:

| Variable             | Value                            | Effect                          |
| -------------------- | -------------------------------- | ------------------------------- |
| `CUDA_CACHE_PATH`    | `/root/.ollama/.nv/ComputeCache` | The JIT cache survives restarts |
| `CUDA_CACHE_MAXSIZE` | 4 GiB                            | Room for the compiled backend   |

Both are inert on CPU and on GPUs the CUDA 12 runner serves, which ship real SASS and never JIT.

**To check which backend is live**, read the service logs at startup: Ollama names the compute backend it discovered, and reports "no compatible GPUs were discovered" when it is on CPU.

## Volume and Data Layout

One volume, holding everything Ollama has on disk.

| Volume | Mount Point     | Purpose                                                             |
| ------ | --------------- | ------------------------------------------------------------------- |
| `main` | `/root/.ollama` | Model blobs and manifests, Ollama's keypair, and the CUDA JIT cache |

Model weights dominate it — a handful of models is tens of gigabytes — and they live here rather than anywhere StartOS treats as cache.

## File Models

None. Ollama takes no configuration file, and this package models none.

The only environment it sets is the CUDA JIT cache pair above. Everything else — the listen address, the model directory, parallelism, how many models stay loaded — is left entirely to the image and to Ollama's own defaults, and there is no action or form here that changes any of it.

## Dependencies

None. Nothing is required, and nothing is exported for a dependent to mount.

## Network Access and Interfaces

One interface: Ollama's HTTP API, which is also what its clients and web UIs speak.

| Interface  | Id    | Type | Port  | Description     |
| ---------- | ----- | ---- | ----- | --------------- |
| Ollama API | `api` | api  | 11434 | Your Ollama API |

The port is bound on the `api-multi` MultiHost and is not masked.

**The API is unauthenticated.** Ollama ships no login, no token, and no per-client authorization, and this package adds none — anything that can reach the interface can list, run, pull, and delete models. Treat the addresses you publish for it as the whole of the access control.

## Installation and First-Run Flow

Nothing to configure and nothing to reveal: install it, start it, and the API is up. There is no task, no credential, and no setup form.

**No model is bundled.** A fresh install serves an API with an empty model list, and the first thing to do is pull one — through the API directly, or through whichever client or UI you point at it. That pull is a large download and the models are what fill the volume.

## Actions

None. Ollama is managed entirely through its API, including pulling and deleting models, so the package adds no action of its own.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check, on the only daemon.

| Check     | Displayed    | Method                  |
| --------- | ------------ | ----------------------- |
| `primary` | "Ollama API" | Port 11434 is listening |

Ollama binds the port immediately and does not wait on models, so this goes green quickly and a failure means the process itself did not come up — the service logs say why. A GPU it cannot use is **not** a failure here: Ollama falls back to CPU and reports healthy, which is why the log line naming the backend is the thing to read.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`. No dump step and nothing excluded.

- **Included:** every downloaded model, Ollama's keypair, and the CUDA JIT cache.
- **Worth knowing:** the model weights are the bulk of it, and they are re-downloadable from upstream. A backup of this service is therefore large in proportion to how little of it is irreplaceable.
- **Restore:** complete, and the models are immediately available without re-pulling.

## Limitations and Differences

1. **The API is unauthenticated**, as upstream ships it.
2. **Nothing is configurable.** No actions, no file model, and none of Ollama's tuning environment variables are exposed.
3. **The variant is chosen by StartOS, not by you**, from the machine's hardware.
4. **NVIDIA acceleration requires an `-nvidia` flavor of StartOS.** On other flavors a present NVIDIA card is unused and inference silently runs on CPU.
5. **Integrated AMD GPUs are excluded on purpose.** They fall back to the CPU variant rather than attempting ROCm.
6. **The `rocm` variant is x86_64 only.**
7. **Backups include model weights**, which can make them very large.
8. **No riscv64 build.**

---

## Quick Reference for AI Consumers

```yaml
package_id: ollama
image: ollama/ollama # rocm variant uses upstream's ROCm build of the same image
architectures:
  - x86_64
  - aarch64 # generic variant only; rocm is x86_64
subcontainers:
  - ollama-sub # the only container
volumes:
  main: /root/.ollama
file_models: [] # Ollama takes no configuration file
startos_managed_env_vars:
  - CUDA_CACHE_PATH
  - CUDA_CACHE_MAXSIZE
dependencies: []
interfaces:
  api: { type: api, port: 11434 } # unauthenticated
actions: []
tasks: []
health_checks:
  - primary # displayed "Ollama API"
```
