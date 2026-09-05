import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.33.3:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.33.3, covering everything released since 0.33.0.

- Honors the default generation parameters defined by GGUF models.
- Reports cached prompt tokens in API usage data.
- Updates the bundled llama.cpp inference engine to b10760.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.33.3
All changes since 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.3`,
    es_ES: `Actualiza Ollama a 0.33.3 e incluye todo lo publicado desde la versión 0.33.0.

- Respeta los parámetros de generación predeterminados definidos por los modelos GGUF.
- Informa de los tokens de indicación almacenados en caché en los datos de uso de la API.
- Actualiza el motor de inferencia llama.cpp incluido a b10760.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.33.3
Todos los cambios desde 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.3`,
    de_DE: `Aktualisiert Ollama auf 0.33.3 und umfasst alles, was seit Version 0.33.0 veröffentlicht wurde.

- Berücksichtigt die in GGUF-Modellen definierten Standardparameter für die Generierung.
- Meldet zwischengespeicherte Prompt-Tokens in den API-Nutzungsdaten.
- Aktualisiert die mitgelieferte llama.cpp-Inferenz-Engine auf b10760.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.33.3
Alle Änderungen seit 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.3`,
    pl_PL: `Aktualizuje Ollama do 0.33.3, obejmując wszystko, co wydano od wersji 0.33.0.

- Uwzględnia domyślne parametry generowania zdefiniowane przez modele GGUF.
- Podaje liczbę tokenów podpowiedzi zapisanych w pamięci podręcznej w danych użycia API.
- Aktualizuje dołączony silnik wnioskowania llama.cpp do wersji b10760.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.33.3
Wszystkie zmiany od wersji 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.3`,
    fr_FR: `Met à jour Ollama vers la version 0.33.3 et inclut tout ce qui a été publié depuis la version 0.33.0.

- Respecte les paramètres de génération par défaut définis par les modèles GGUF.
- Indique le nombre de jetons de prompt mis en cache dans les données d'utilisation de l'API.
- Met à jour le moteur d'inférence llama.cpp intégré vers b10760.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.33.3
Tous les changements depuis la version 0.33.0 : https://github.com/ollama/ollama/compare/v0.33.0...v0.33.3`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
