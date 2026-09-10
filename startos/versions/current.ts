import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.34.0:0',
  releaseNotes: {
    en_US:
      'Updated Ollama to 0.34.0. OpenAI-compatible clients can now use tool search and response compaction. Full notes: https://github.com/ollama/ollama/releases/tag/v0.34.0',
    es_ES:
      'Ollama se actualizó a la versión 0.34.0. Los clientes compatibles con OpenAI ahora pueden usar la búsqueda de herramientas y la compactación de respuestas. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.34.0',
    de_DE:
      'Ollama wurde auf Version 0.34.0 aktualisiert. OpenAI-kompatible Clients können jetzt Werkzeugsuche und Antwortkomprimierung verwenden. Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.34.0',
    pl_PL:
      'Ollama została zaktualizowana do wersji 0.34.0. Klienty zgodne z OpenAI mogą teraz korzystać z wyszukiwania narzędzi i kompresji odpowiedzi. Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.34.0',
    fr_FR:
      'Ollama a été mis à jour vers la version 0.34.0. Les clients compatibles avec OpenAI peuvent désormais utiliser la recherche d’outils et la compaction des réponses. Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.34.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
