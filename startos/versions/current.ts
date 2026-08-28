import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.33.1:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.33.1. A small maintenance release:

- The bundled llama.cpp inference engine was updated to b10630, picking up upstream model and performance fixes.
- The Linux llama.cpp container build was repaired.
- The rest of the release targets the macOS MLX runner and the desktop app, neither of which runs on StartOS.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.33.1
All changes since 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.1`,
    es_ES: `Actualiza Ollama a 0.33.1. Una pequeña versión de mantenimiento:

- El motor de inferencia llama.cpp incluido se actualizó a b10630, incorporando correcciones de modelos y de rendimiento del proyecto original.
- Se reparó la compilación del contenedor de llama.cpp para Linux.
- El resto de la versión afecta al ejecutor MLX de macOS y a la aplicación de escritorio, que no se ejecutan en StartOS.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.33.1
Todos los cambios desde 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.1`,
    de_DE: `Aktualisiert Ollama auf 0.33.1. Eine kleine Wartungsversion:

- Die mitgelieferte Inferenz-Engine llama.cpp wurde auf b10630 aktualisiert und übernimmt Modell- und Leistungskorrekturen des Ursprungsprojekts.
- Der llama.cpp-Container-Build für Linux wurde repariert.
- Der Rest der Version betrifft den MLX-Runner für macOS und die Desktop-Anwendung, die beide nicht unter StartOS laufen.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.33.1
Alle Änderungen seit 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.1`,
    pl_PL: `Aktualizuje Ollama do 0.33.1. Niewielkie wydanie konserwacyjne:

- Dołączony silnik wnioskowania llama.cpp zaktualizowano do b10630, przejmując poprawki modeli i wydajności z projektu źródłowego.
- Naprawiono budowanie kontenera llama.cpp dla systemu Linux.
- Pozostała część wydania dotyczy modułu MLX dla macOS oraz aplikacji desktopowej, z których żadne nie działa w StartOS.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.33.1
Wszystkie zmiany od wersji 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.1`,
    fr_FR: `Met à jour Ollama vers 0.33.1. Une petite version de maintenance :

- Le moteur d'inférence llama.cpp intégré est passé à b10630, ce qui apporte des correctifs de modèles et de performances du projet amont.
- La construction du conteneur llama.cpp pour Linux a été réparée.
- Le reste de la version concerne l'exécuteur MLX de macOS et l'application de bureau, qui ne fonctionnent ni l'un ni l'autre sur StartOS.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.33.1
Tous les changements depuis 0.33.0 : https://github.com/ollama/ollama/compare/v0.33.0...v0.33.1`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
