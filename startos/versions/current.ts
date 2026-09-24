import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.34.4:0',
  releaseNotes: {
    en_US:
      'Updated Ollama to 0.34.4. Full notes: https://github.com/ollama/ollama/releases/tag/v0.34.4',
    es_ES:
      'Ollama se actualizó a la versión 0.34.4. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.34.4',
    de_DE:
      'Ollama wurde auf Version 0.34.4 aktualisiert. Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.34.4',
    pl_PL:
      'Ollama została zaktualizowana do wersji 0.34.4. Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.34.4',
    fr_FR:
      'Ollama a été mis à jour vers la version 0.34.4. Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.34.4',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
