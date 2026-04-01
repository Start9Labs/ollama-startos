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

| Property | Value |
|----------|-------|
| Image | `ollama/ollama` (upstream unmodified) |
| Architectures | x86_64, aarch64 |
| Entrypoint | Default upstream entrypoint |

---

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `main` | `/root/.ollama` | All Ollama data (models, blobs, manifests) |

**Key directories on the `main` volume:**

- `models/` -- downloaded model files (blobs and manifests)

---

## Installation and First-Run Flow

| Step | Upstream | StartOS |
|------|----------|---------|
| Installation | `curl -fsSL https://ollama.com/install.sh \| sh` | Install from marketplace or sideload `.s9pk` |
| Start service | `ollama serve` | Automatic via StartOS |
| Pull models | `ollama pull <model>` | Use API or a connected UI (e.g. Open WebUI) |

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

| Interface | Port | Protocol | Type | Purpose |
|-----------|------|----------|------|---------|
| Ollama API | 11434 | HTTP | API | Model inference and management API |

**Access methods (StartOS 0.4.0):**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

**API endpoints (subset):**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/generate` | POST | Generate text completion |
| `/api/chat` | POST | Chat completion |
| `/api/pull` | POST | Download a model |
| `/api/tags` | GET | List local models |
| `/api/show` | POST | Show model info |
| `/api/delete` | DELETE | Remove a model |

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

| Check | Method | Grace Period |
|-------|--------|--------------|
| Ollama API | Port listening on 11434 | Default |

**Messages:**

- Success: "Your Ollama API is ready"
- Error: "Error launching your Ollama API"

---

## Limitations and Differences

1. **No GPU passthrough** -- StartOS does not currently support GPU passthrough, so inference runs on CPU only
2. **No exposed configuration** -- environment variables and runtime settings cannot be changed through StartOS
3. **Large storage requirements** -- models are stored on-device and can consume significant disk space (4-5 GB per 7B model)
4. **Memory requirements** -- 8 GB RAM minimum for 7B models, 16 GB for 13B, 32 GB for 33B+
5. **CPU-only performance** -- without GPU acceleration, inference is significantly slower than GPU-accelerated setups

---

## What Is Unchanged from Upstream

- Full Ollama API compatibility
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
architectures: [x86_64, aarch64]
volumes:
  main: /root/.ollama
ports:
  api: 11434
dependencies: none
fixed_config:
  host: 0.0.0.0:11434
  models_dir: /root/.ollama
actions: none
health_checks:
  - port_listening: 11434
backup_volumes:
  - main
```
