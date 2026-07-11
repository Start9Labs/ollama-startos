# Ollama

Ollama is an API server, not an app you open in a browser. To use it you point another client at the **Ollama API** interface — most commonly the **Open WebUI** package on this StartOS, but any Ollama-compatible client works.

## Documentation

- [Ollama documentation](https://docs.ollama.com/) — the upstream user and API reference.

## What you get on StartOS

- The Ollama API on a single network interface (`Ollama API`). It speaks Ollama's HTTP API; there is no built-in web UI in this package.
- A persistent volume for downloaded models, manifests, and blobs. Models stay on disk across restarts and are included in backups.

## Getting set up

Ollama needs no setup of its own — it starts and the API is ready. The work is connecting a client and pulling at least one model.

### Option A — Use Open WebUI on this StartOS (recommended)

1. Install and start the **Open WebUI** package from the marketplace.
2. Open WebUI lists Ollama as an optional dependency; configure it to point at your Ollama service when prompted. Once both are running, Open WebUI handles model browsing, pulling, and chat for you.

### Option B — Use any Ollama-compatible client

1. Open the **Ollama API** interface and copy the address — this is your `OLLAMA_HOST`.
2. Point your client at it. Examples:
   - **`ollama` CLI** on your laptop: `OLLAMA_HOST=<address> ollama pull llama3` then `ollama run llama3`.
   - **Official libraries** ([`ollama-python`](https://github.com/ollama/ollama-python), [`ollama-js`](https://github.com/ollama/ollama-js)): pass the host to the client constructor.
   - **Any third-party app** that speaks the Ollama HTTP API.
3. Pull a model on first use — `ollama pull <model>` (CLI) or the equivalent in your client. Downloaded models persist on the server.

## Using Ollama

### Ollama API interface

The `Ollama API` interface exposes Ollama's full HTTP API — `/api/generate`, `/api/chat`, `/api/pull`, `/api/tags`, `/api/show`, `/api/embeddings`, and so on, exactly as upstream documents. Any client that supports Ollama works against it unchanged.

### Models

Models are pulled by your client (Open WebUI's UI, the `ollama` CLI, or a library call) and stored on the server in the package's main volume. Pull once, reuse across clients. Large models occupy several GB each, so the volume can grow quickly; backups grow accordingly.

## Limitations

- **No GPU acceleration.** This package runs Ollama on CPU only. Inference works but is materially slower than GPU-accelerated setups; expect noticeable latency on larger models. A separate `rocm` variant is auto-selected for hosts with a supported **discrete** AMD GPU; integrated Radeon graphics (such as the Radeon 680M in many Ryzen mini-PCs) are not eligible and fall back to the default variant.
- **No upstream environment variables exposed.** `OLLAMA_HOST`, `OLLAMA_MODELS`, `OLLAMA_NUM_PARALLEL`, `OLLAMA_MAX_LOADED_MODELS`, and GPU/CUDA tuning all use upstream defaults; they cannot be changed from StartOS.
