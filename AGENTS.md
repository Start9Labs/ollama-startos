# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (architecture, for developers and LLMs) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Package id is `ollama`.** Variant package: the Makefile overrides `TARGETS`/`ARCHES` and defines `generic`/`rocm` leaf rules that recurse into `s9pk.mk` with `VARIANT` set, producing `ollama_<variant>_<arch>.s9pk`. The `VARIANT` env var (default `generic`) selects the docker image config in `startos/manifest/index.ts`; the `rocm` variant declares an AMD GPU hardware requirement.

## Inspecting a running install

To run a command inside the service's container (read its generated config, grep app logs), use `start-cli package attach ollama -n ollama-sub -- <cmd>`. Select the subcontainer by **name** with `-n` (the name passed to `SubContainer.of` in `main.ts` — here `ollama-sub`) or by image with `-i`. Note: `-s/--subcontainer` matches the internal **Guid**, not the name, so passing a name to `-s` fails with "no matching subcontainers".
