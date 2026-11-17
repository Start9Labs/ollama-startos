import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.40.16:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.40.16.

- Adds support for MiMo V2.6 and Ripple Preview models.
- Recurrent and vision GGUF models can serve more than one request at a time, and Qwen3 and Qwen3.5 models with long-context scaling are supported.
- The OpenAI-compatible \`/v1/responses\` endpoint respects \`truncation\` and no longer truncates silently by default; \`/v1/models\` returns an empty list when no models are installed.
- Requires StartOS 0.4.2 or later.

Full upstream changes: https://github.com/ollama/ollama/compare/v0.40.14...v0.40.16`,
    es_ES: `Ollama se actualizó a la versión 0.40.16.

- Añade compatibilidad con los modelos MiMo V2.6 y Ripple Preview.
- Los modelos GGUF recurrentes y de visión pueden atender más de una solicitud a la vez, y se admiten los modelos Qwen3 y Qwen3.5 con escalado de contexto largo.
- El endpoint compatible con OpenAI \`/v1/responses\` respeta \`truncation\` y ya no trunca en silencio de forma predeterminada; \`/v1/models\` devuelve una lista vacía cuando no hay modelos instalados.
- Requiere StartOS 0.4.2 o posterior.

Todos los cambios del proyecto original: https://github.com/ollama/ollama/compare/v0.40.14...v0.40.16`,
    de_DE: `Ollama wurde auf Version 0.40.16 aktualisiert.

- Ergänzt Unterstützung für die Modelle MiMo V2.6 und Ripple Preview.
- Rekurrente und Vision-GGUF-Modelle können mehrere Anfragen gleichzeitig bedienen, und Qwen3- sowie Qwen3.5-Modelle mit Langkontext-Skalierung werden unterstützt.
- Der OpenAI-kompatible Endpunkt \`/v1/responses\` beachtet \`truncation\` und kürzt standardmäßig nicht mehr stillschweigend; \`/v1/models\` liefert eine leere Liste, wenn keine Modelle installiert sind.
- Benötigt StartOS 0.4.2 oder neuer.

Alle Upstream-Änderungen: https://github.com/ollama/ollama/compare/v0.40.14...v0.40.16`,
    pl_PL: `Ollama została zaktualizowana do wersji 0.40.16.

- Dodaje obsługę modeli MiMo V2.6 i Ripple Preview.
- Rekurencyjne i wizyjne modele GGUF mogą obsługiwać wiele żądań jednocześnie, a modele Qwen3 i Qwen3.5 ze skalowaniem długiego kontekstu są obsługiwane.
- Endpoint zgodny z OpenAI \`/v1/responses\` respektuje \`truncation\` i domyślnie nie przycina już po cichu; \`/v1/models\` zwraca pustą listę, gdy nie zainstalowano żadnych modeli.
- Wymaga StartOS 0.4.2 lub nowszego.

Wszystkie zmiany projektu źródłowego: https://github.com/ollama/ollama/compare/v0.40.14...v0.40.16`,
    fr_FR: `Ollama a été mis à jour vers la version 0.40.16.

- Ajoute la prise en charge des modèles MiMo V2.6 et Ripple Preview.
- Les modèles GGUF récurrents et de vision peuvent traiter plusieurs requêtes à la fois, et les modèles Qwen3 et Qwen3.5 avec mise à l'échelle du contexte long sont pris en charge.
- Le point d'accès compatible OpenAI \`/v1/responses\` respecte \`truncation\` et ne tronque plus silencieusement par défaut ; \`/v1/models\` renvoie une liste vide lorsqu'aucun modèle n'est installé.
- Nécessite StartOS 0.4.2 ou ultérieur.

Tous les changements en amont : https://github.com/ollama/ollama/compare/v0.40.14...v0.40.16`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
