# Ollama

## Documentation

- [Ollama documentation](https://docs.ollama.com/) — upstream guides for the API, supported models, environment variables, and clients.

## What you get on StartOS

- A running Ollama server exposing the **Ollama API** interface on port 11434, ready for any compatible client or front-end to use for chat, generation, and embeddings.
- A persistent model store: every model you pull lives on the package's data volume and is included in StartOS backups.
- Optional **AMD GPU acceleration** via the `rocm` variant of the package on hosts with a supported AMD GPU; the default `generic` variant runs on CPU (and on NVIDIA hardware when the platform's NVIDIA container support is available).

## Getting set up

Ollama on StartOS has no setup wizard and no actions to run. Once it starts:

1. Open the **Ollama API** interface and copy one of its addresses — that's the base URL your client points at.
2. Install or point a front-end at that URL. [Open WebUI](https://github.com/open-webui/open-webui) is a popular one; any client that speaks the Ollama or OpenAI-compatible API will work.
3. Pull a model. From a client that supports it, or directly against the API:

   ```
   curl http://<your-ollama-address>/api/pull -d '{"name":"llama3.2"}'
   ```

   Browse the [Ollama model library](https://ollama.com/library) for the catalog.

## Using Ollama

Day-to-day use is entirely through the Ollama API — there is no built-in web UI. Common endpoints:

- `POST /api/generate` — single-prompt completion.
- `POST /api/chat` — chat-style completion with message history.
- `POST /api/pull` — download a model from the library.
- `GET /api/tags` — list the models you currently have installed.
- `POST /api/show` — show details about an installed model.
- `DELETE /api/delete` — remove an installed model.

Full request/response shapes are in the upstream API documentation linked above.

## Limitations

- Models are large. A 7B model typically occupies 4–5 GB on the data volume; backups include every model you've pulled, so size your backup destination accordingly.
- Without a supported GPU, inference runs on CPU and will be noticeably slower than GPU-accelerated setups. Use the `rocm` variant if you have an AMD GPU; install the `generic` variant on hosts with NVIDIA support or CPU-only hosts.
