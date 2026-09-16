import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.34.3:0',
  releaseNotes: {
    en_US:
      'Updated Ollama to 0.34.3. Full notes: https://github.com/ollama/ollama/releases/tag/v0.34.3',
    es_ES:
      'Ollama se actualizó a la versión 0.34.3. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.34.3',
    de_DE:
      'Ollama wurde auf Version 0.34.3 aktualisiert. Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.34.3',
    pl_PL:
      'Ollama została zaktualizowana do wersji 0.34.3. Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.34.3',
    fr_FR:
      'Ollama a été mis à jour vers la version 0.34.3. Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.34.3',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
