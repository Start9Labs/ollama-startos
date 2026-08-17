# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **This is a variant package.** The Makefile overrides `TARGETS`/`ARCHES` with `<variant>-<arch>` leaf rules that recurse into `s9pk.mk` with `VARIANT` set, producing `ollama_<variant>_<arch>.s9pk`; `VARIANT` (default `generic`) selects the image config in `startos/manifest/index.ts`. Adding a variant means touching both — a manifest entry alone builds nothing.
- **The AMD GPU match must stay a positive allowlist.** StartOS's regex engine has no lookahead, so an iGPU exclusion cannot be expressed; the pattern names discrete families instead. Widening it to plain `Radeon` would put `rocm` on Ryzen APU graphics, where ROCm is unreliable.
- **`CUDA_CACHE_PATH` must point inside the `main` volume.** It exists for Blackwell (sm_121), which only the PTX-only `cuda_v13` runner serves, so the whole backend JIT-compiles on first load; the container's default cache is ephemeral and the compile would repeat every start.
- **`nvidiaContainer: true` only takes effect on the `-nvidia` platform flavors.** Elsewhere there is no host NVIDIA runtime and Ollama falls back to CPU without erroring, so a report of "GPU not used" is not necessarily a package bug.
