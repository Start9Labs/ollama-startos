import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_23_3_0 = VersionInfo.of({
  version: '0.23.3:0',
  releaseNotes: {
    en_US: `**Bumps**

- Ollama → 0.23.3
- start-sdk → 1.5.0`,
    es_ES: `**Cambios de versión**

- Ollama → 0.23.3
- start-sdk → 1.5.0`,
    de_DE: `**Versionssprünge**

- Ollama → 0.23.3
- start-sdk → 1.5.0`,
    pl_PL: `**Aktualizacje wersji**

- Ollama → 0.23.3
- start-sdk → 1.5.0`,
    fr_FR: `**Mises à niveau**

- Ollama → 0.23.3
- start-sdk → 1.5.0`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
