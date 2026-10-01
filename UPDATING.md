# Updating the upstream version

Ollama ships as a prebuilt upstream Docker image; no source build or submodule is involved. The version pin lives in the manifest.

## Determining the upstream version

- **Ollama** ([`ollama/ollama`](https://github.com/ollama/ollama)) — upstream ships stable patch releases once or twice a week, so this package updates **at most every two weeks**: **upstream moved only when the pinned release is at least 14 days old _and_ a newer stable release exists.** A newer release inside that window is never a reason to bump. Check the age of the current pin first:

  ```bash
  PIN=$(grep -oE "ollama/ollama:[0-9.]+" startos/manifest/index.ts | head -1 | cut -d: -f2)
  echo "v$PIN is $(( ($(date +%s) - $(date -d "$(gh release view -R ollama/ollama "v$PIN" --json publishedAt -q .publishedAt)" +%s)) / 86400 )) days old"
  ```

  Under 14 days, there is no update. Otherwise inspect recent tags and select the newest stable release — never an `-rc` pre-release:

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
