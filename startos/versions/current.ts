import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.33.2:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.33.2, replacing the unreleased 0.33.1 build.

- The bundled llama.cpp inference engine was updated to b10630, picking up upstream model and performance fixes, and its Linux container build was repaired (0.33.1).
- 0.33.2 itself changes nothing a StartOS user can reach: it fixes the macOS and Windows desktop app and the Claude Desktop proxy, and removes unused server code.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.33.2
All changes since 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.2`,
    es_ES: `Actualiza Ollama a 0.33.2, en sustitución de la versión 0.33.1 que no llegó a publicarse.

- El motor de inferencia llama.cpp incluido se actualizó a b10630, incorporando correcciones de modelos y de rendimiento del proyecto original, y se reparó su compilación del contenedor para Linux (0.33.1).
- La versión 0.33.2 en sí no cambia nada que un usuario de StartOS pueda utilizar: corrige la aplicación de escritorio de macOS y Windows y el proxy de Claude Desktop, y elimina código de servidor sin uso.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.33.2
Todos los cambios desde 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.2`,
    de_DE: `Aktualisiert Ollama auf 0.33.2 und ersetzt damit die nie veröffentlichte Version 0.33.1.

- Die mitgelieferte Inferenz-Engine llama.cpp wurde auf b10630 aktualisiert und übernimmt Modell- und Leistungskorrekturen des Ursprungsprojekts; ihr Linux-Container-Build wurde repariert (0.33.1).
- Version 0.33.2 selbst ändert nichts, was unter StartOS erreichbar ist: Sie korrigiert die Desktop-Anwendung für macOS und Windows sowie den Claude-Desktop-Proxy und entfernt ungenutzten Servercode.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.33.2
Alle Änderungen seit 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.2`,
    pl_PL: `Aktualizuje Ollama do 0.33.2, zastępując nieopublikowane wydanie 0.33.1.

- Dołączony silnik wnioskowania llama.cpp zaktualizowano do b10630, przejmując poprawki modeli i wydajności z projektu źródłowego, oraz naprawiono jego budowanie kontenera dla systemu Linux (0.33.1).
- Samo wydanie 0.33.2 nie zmienia niczego, co jest dostępne w StartOS: poprawia aplikację desktopową dla macOS i Windows oraz proxy Claude Desktop, a także usuwa nieużywany kod serwera.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.33.2
Wszystkie zmiany od wersji 0.33.0: https://github.com/ollama/ollama/compare/v0.33.0...v0.33.2`,
    fr_FR: `Met à jour Ollama vers 0.33.2, en remplacement de la version 0.33.1 jamais publiée.

- Le moteur d'inférence llama.cpp intégré est passé à b10630, ce qui apporte des correctifs de modèles et de performances du projet amont, et sa construction du conteneur pour Linux a été réparée (0.33.1).
- La version 0.33.2 elle-même ne change rien d'accessible depuis StartOS : elle corrige l'application de bureau macOS et Windows ainsi que le proxy Claude Desktop, et supprime du code serveur inutilisé.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.33.2
Tous les changements depuis 0.33.0 : https://github.com/ollama/ollama/compare/v0.33.0...v0.33.2`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
