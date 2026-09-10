# Updating the upstream version

Ollama ships as a prebuilt upstream Docker image; no source build or submodule is involved. The version pin lives in the manifest.

## Determining the upstream version

- **Ollama** ([`ollama/ollama`](https://github.com/ollama/ollama)) — inspect recent tags and select the newest stable release:

  ```bash
  gh api 'repos/ollama/ollama/tags?per_page=30' --jq '.[].name'
  gh release view -R ollama/ollama "v<version>" --json tagName,isDraft,isPrerelease,url
  ```

  Verify the exact generic and ROCm tags through the Docker Hub API (the ROCm variant occasionally lags):

  ```bash
  for tag in '<version>' '<version>-rocm'; do
    curl -fsSL "https://hub.docker.com/v2/repositories/ollama/ollama/tags/$tag" \
      | jq '{name, digest, images: [.images[] | {architecture, os, status}]}'
  done
  ```

  Pinned in `startos/manifest/index.ts` as `imageConfigs.generic.source.dockerTag` (`ollama/ollama:<version>`) and `imageConfigs.rocm.source.dockerTag` (`ollama/ollama:<version>-rocm`).

## Applying the bump

- **`startos/manifest/index.ts`** — update both `dockerTag` values in `imageConfigs`:
  - `generic.source.dockerTag` → `ollama/ollama:<new version>`
  - `rocm.source.dockerTag` → `ollama/ollama:<new version>-rocm`
- **`startos/versions/current.ts`** — edit in place: set `version` to `'<new version>:0'` and update `releaseNotes` (all locales) to reflect the bump. Leave `index.ts` and the `current` export untouched. Only spin off a historical version file when the bump carries an `up`/`down` migration.
