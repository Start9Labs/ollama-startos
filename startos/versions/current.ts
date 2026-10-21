import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.40.8:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.40.8.

- Stops trusting certificates from a compromised certificate authority (eMudhra) when pulling models.
- Supports multimodal embeddings, and more draft models for speculative decoding.
- Fixes continuing OpenAI-compatible Responses conversations that include custom tool calls or switch between models.
- Updates the llama.cpp engine, adding Nemotron 3.5 support.

Full upstream changes: https://github.com/ollama/ollama/compare/v0.40.3...v0.40.8`,
    es_ES: `Ollama se actualizó a la versión 0.40.8.

- Deja de confiar en los certificados de una autoridad de certificación comprometida (eMudhra) al descargar modelos.
- Admite embeddings multimodales y más modelos borrador para la decodificación especulativa.
- Corrige la continuación de conversaciones de Responses compatibles con OpenAI que incluyen llamadas a herramientas personalizadas o cambian de modelo.
- Actualiza el motor llama.cpp, con compatibilidad con Nemotron 3.5.

Todos los cambios del proyecto original: https://github.com/ollama/ollama/compare/v0.40.3...v0.40.8`,
    de_DE: `Ollama wurde auf Version 0.40.8 aktualisiert.

- Vertraut beim Herunterladen von Modellen keinen Zertifikaten einer kompromittierten Zertifizierungsstelle (eMudhra) mehr.
- Unterstützt multimodale Embeddings und weitere Draft-Modelle für spekulatives Dekodieren.
- Behebt das Fortsetzen OpenAI-kompatibler Responses-Unterhaltungen, die eigene Werkzeugaufrufe enthalten oder zwischen Modellen wechseln.
- Aktualisiert die llama.cpp-Engine und ergänzt Unterstützung für Nemotron 3.5.

Alle Upstream-Änderungen: https://github.com/ollama/ollama/compare/v0.40.3...v0.40.8`,
    pl_PL: `Ollama została zaktualizowana do wersji 0.40.8.

- Podczas pobierania modeli przestaje ufać certyfikatom skompromitowanego urzędu certyfikacji (eMudhra).
- Obsługuje osadzenia multimodalne i więcej modeli szkicowych do dekodowania spekulatywnego.
- Naprawia kontynuowanie zgodnych z OpenAI rozmów Responses, które zawierają własne wywołania narzędzi lub przełączają się między modelami.
- Aktualizuje silnik llama.cpp, dodając obsługę Nemotron 3.5.

Wszystkie zmiany projektu źródłowego: https://github.com/ollama/ollama/compare/v0.40.3...v0.40.8`,
    fr_FR: `Ollama a été mis à jour vers la version 0.40.8.

- Ne fait plus confiance, lors du téléchargement des modèles, aux certificats d'une autorité de certification compromise (eMudhra).
- Prend en charge les embeddings multimodaux et davantage de modèles de brouillon pour le décodage spéculatif.
- Corrige la poursuite des conversations Responses compatibles OpenAI qui comportent des appels d'outils personnalisés ou changent de modèle.
- Met à jour le moteur llama.cpp, avec la prise en charge de Nemotron 3.5.

Tous les changements en amont : https://github.com/ollama/ollama/compare/v0.40.3...v0.40.8`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
