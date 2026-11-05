import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.40.14:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.40.14.

- Adds Linux support for Flint and LFM3 models, and support for Nemotron 3.5 Bolt E4B and d3 decision models.
- OpenAI-compatible endpoints respect model sampling defaults, preserve prior response content, and report streaming generation failures.
- Fixes compressed cloud web search responses and tool-only assistant turns from Kimi CLI.
- Requires StartOS 0.4.1 or later.

Full upstream changes: https://github.com/ollama/ollama/compare/v0.40.8...v0.40.14`,
    es_ES: `Ollama se actualizó a la versión 0.40.14.

- Añade compatibilidad con Linux para los modelos Flint y LFM3, y compatibilidad con Nemotron 3.5 Bolt E4B y los modelos de decisión d3.
- Los endpoints compatibles con OpenAI respetan los valores de muestreo del modelo, conservan el contenido de respuestas anteriores e informan de los fallos de generación en streaming.
- Corrige las respuestas comprimidas de búsqueda web en la nube y los turnos del asistente de Kimi CLI que solo contienen llamadas a herramientas.
- Requiere StartOS 0.4.1 o posterior.

Todos los cambios del proyecto original: https://github.com/ollama/ollama/compare/v0.40.8...v0.40.14`,
    de_DE: `Ollama wurde auf Version 0.40.14 aktualisiert.

- Ergänzt Linux-Unterstützung für Flint- und LFM3-Modelle sowie Unterstützung für Nemotron 3.5 Bolt E4B und d3-Entscheidungsmodelle.
- OpenAI-kompatible Endpunkte beachten die Sampling-Vorgaben des Modells, bewahren Inhalte vorheriger Antworten und melden Fehler bei der Streaming-Generierung.
- Behebt komprimierte Antworten der Cloud-Websuche und reine Werkzeugaufruf-Antworten von Kimi CLI.
- Benötigt StartOS 0.4.1 oder neuer.

Alle Upstream-Änderungen: https://github.com/ollama/ollama/compare/v0.40.8...v0.40.14`,
    pl_PL: `Ollama została zaktualizowana do wersji 0.40.14.

- Dodaje obsługę modeli Flint i LFM3 w systemie Linux oraz modeli Nemotron 3.5 Bolt E4B i modeli decyzyjnych d3.
- Endpointy zgodne z OpenAI respektują domyślne ustawienia próbkowania modelu, zachowują treść wcześniejszych odpowiedzi i zgłaszają błędy generowania strumieniowego.
- Naprawia skompresowane odpowiedzi wyszukiwania internetowego w chmurze oraz tury asystenta Kimi CLI zawierające wyłącznie wywołania narzędzi.
- Wymaga StartOS 0.4.1 lub nowszego.

Wszystkie zmiany projektu źródłowego: https://github.com/ollama/ollama/compare/v0.40.8...v0.40.14`,
    fr_FR: `Ollama a été mis à jour vers la version 0.40.14.

- Ajoute la prise en charge de Flint et LFM3 sous Linux, ainsi que de Nemotron 3.5 Bolt E4B et des modèles de décision d3.
- Les points d'accès compatibles OpenAI respectent les paramètres d'échantillonnage du modèle, préservent le contenu des réponses précédentes et signalent les échecs de génération en streaming.
- Corrige les réponses compressées de recherche web dans le cloud et les tours de l'assistant Kimi CLI contenant uniquement des appels d'outils.
- Nécessite StartOS 0.4.1 ou ultérieur.

Tous les changements en amont : https://github.com/ollama/ollama/compare/v0.40.8...v0.40.14`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
