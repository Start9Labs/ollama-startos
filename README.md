<p align="center">
  <img src="icon.svg" alt="Ollama Logo" width="21%">
</p>

# Ollama on StartOS

> **Upstream docs:** <https://docs.ollama.com/>
>
> Everything not listed in this document should behave the same as upstream
> Ollama. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable.

[Ollama](https://github.com/ollama/ollama) makes it easy to get up and running with self-hosted, open source large language models (LLMs). It supports a wide range of models from the [Ollama library](https://ollama.com/library).

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [GPU Acceleration](#gpu-acceleration)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Dependencies](#dependencies)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The package builds in two variants, both from unmodified upstream images:

| Property      | `generic` variant                                   | `rocm` variant                                   |
| ------------- | --------------------------------------------------- | ------------------------------------------------ |
| Image         | `ollama/ollama` (upstream unmodified)               | `ollama/ollama` ROCm build (upstream unmodified) |
| Architectures | x86_64, aarch64                                     | x86_64                                           |
| Entrypoint    | Default upstream entrypoint                         | Default upstream entrypoint                      |
| GPU support   | NVIDIA -- see [GPU Acceleration](#gpu-acceleration) | AMD -- requires a discrete AMD GPU               |

When installing from a registry, StartOS automatically selects the most specific variant compatible with the machine's hardware: machines with a supported discrete AMD GPU receive `rocm`; all others receive `generic`. Users never pick a variant manually.

---

## GPU Acceleration

The manifest sets `hardwareAcceleration: true`. GPU use is upstream auto-detection -- the package exposes nothing to configure.

**NVIDIA (`generic` variant):** The image is declared with `nvidiaContainer: true`. On the `-nvidia` platform flavors of StartOS (`x86_64-nvidia` / `aarch64-nvidia` install images, which bundle the NVIDIA driver and container toolkit), StartOS overlays the host NVIDIA driver userspace into the container and passes through the `/dev/nvidia*` devices, so Ollama's CUDA auto-detection picks up the GPU. On the other StartOS flavors (standard and `-nonfree`), no NVIDIA runtime exists on the host and inference falls back to CPU -- even if an NVIDIA card is physically present.

**AMD (`rocm` variant):** Built from upstream's ROCm image (x86_64 only). The variant declares a hardware requirement narrowed to _discrete_ AMD GPUs -- the `amdgpu` driver, matched by GPU product name (Navi / Radeon RX / Instinct) -- so StartOS installs it only on machines with a discrete AMD GPU. Integrated Radeon graphics (e.g. the Radeon 680M in Ryzen APUs), where ROCm is unreliable, fall back to `generic` (CPU).

**Verification:** Ollama logs the compute backend it discovered at startup. A CUDA/ROCm entry in the service logs means acceleration is active; "no compatible GPUs were discovered" means it is running on CPU.

---

## Volume and Data Layout

| Volume | Mount Point     | Purpose                                    |
| ------ | --------------- | ------------------------------------------ |
| `main` | `/root/.ollama` | All Ollama data (models, blobs, manifests) |

**Key directories on the `main` volume:**

- `models/` -- downloaded model files (blobs and manifests)

---

## Installation and First-Run Flow

| Step          | Upstream                                         | StartOS                                      |
| ------------- | ------------------------------------------------ | -------------------------------------------- |
| Installation  | `curl -fsSL https://ollama.com/install.sh \| sh` | Install from marketplace or sideload `.s9pk` |
| Start service | `ollama serve`                                   | Automatic via StartOS                        |
| Pull models   | `ollama pull <model>`                            | Use API or a connected UI (e.g. Open WebUI)  |

**Key difference:** On StartOS, the Ollama API is exposed as a network interface. Use a compatible client or UI service (such as Open WebUI) to interact with it.

---

## Configuration Management

Ollama on StartOS runs with default upstream configuration. No user-configurable settings are currently exposed through StartOS actions.

**Configuration NOT exposed on StartOS:**

- `OLLAMA_HOST` -- fixed: `0.0.0.0:11434`
- `OLLAMA_MODELS` -- fixed: `/root/.ollama`
- `OLLAMA_NUM_PARALLEL` -- uses upstream default
- `OLLAMA_MAX_LOADED_MODELS` -- uses upstream default
- GPU/CUDA settings -- uses upstream auto-detection
- Proxy settings

---

## Network Access and Interfaces

| Interface  | Port  | Protocol | Type | Purpose                            |
| ---------- | ----- | -------- | ---- | ---------------------------------- |
| Ollama API | 11434 | HTTP     | API  | Model inference and management API |

**Access methods (StartOS 0.4.0):**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

**API endpoints (subset):**

| Endpoint        | Method | Purpose                  |
| --------------- | ------ | ------------------------ |
| `/api/generate` | POST   | Generate text completion |
| `/api/chat`     | POST   | Chat completion          |
| `/api/pull`     | POST   | Download a model         |
| `/api/tags`     | GET    | List local models        |
| `/api/show`     | POST   | Show model info          |
| `/api/delete`   | DELETE | Remove a model           |

---

## Actions (StartOS UI)

None. Ollama is managed entirely through its API.

---

## Dependencies

None. Ollama is a standalone application.

---

## Backups and Restore

**Included in backup:**

- `main` volume -- all Ollama data including downloaded models

**Restore behavior:**

- All models and data are restored
- No reconfiguration needed

**Note:** Backups can be very large depending on the number and size of downloaded models. A single 7B parameter model is typically 4-5 GB.

---

## Health Checks

| Check      | Method                  | Grace Period |
| ---------- | ----------------------- | ------------ |
| Ollama API | Port listening on 11434 | Default      |

**Messages:**

- Success: "Your Ollama API is ready"
- Error: "Error launching your Ollama API"

---

## Limitations and Differences

1. **GPU acceleration requires platform support** -- NVIDIA GPUs are used only on the `-nvidia` StartOS flavors (which bundle the NVIDIA driver and container runtime); discrete AMD GPUs are served by the `rocm` variant (x86_64 only). On a standard or `-nonfree` StartOS install, inference runs on CPU even if a GPU is present. See [GPU Acceleration](#gpu-acceleration).
2. **No exposed configuration** -- environment variables and runtime settings cannot be changed through StartOS
3. **Large storage requirements** -- models are stored on-device and can consume significant disk space (4-5 GB per 7B model)
4. **Memory requirements** -- 8 GB RAM minimum for 7B models, 16 GB for 13B, 32 GB for 33B+
5. **CPU fallback performance** -- without GPU acceleration, inference is significantly slower than GPU-accelerated setups

---

## What Is Unchanged from Upstream

- Full Ollama API compatibility
- GPU auto-detection (CUDA / ROCm / CPU fallback)
- All supported model formats (GGUF, Safetensors via conversion)
- Model pulling from Ollama library
- Chat and generate endpoints
- Concurrent request handling
- Model loading and unloading
- Modelfile support for custom models
- Embedding generation
- All client library compatibility (Python, JavaScript, Go, etc.)

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: ollama
image: ollama/ollama
variants:
  generic:
    architectures: [x86_64, aarch64]
    gpu: NVIDIA CUDA on -nvidia StartOS flavors; CPU fallback otherwise
  rocm:
    architectures: [x86_64]
    gpu: AMD ROCm; requires a discrete AMD GPU (auto-selected; integrated Radeon falls back to generic)
volumes:
  main: /root/.ollama
ports:
  api: 11434
dependencies: none
startos_managed_env_vars: []
actions: none
```
