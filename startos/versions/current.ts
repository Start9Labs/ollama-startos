import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.32.15:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.32.15, covering everything released since 0.32.13. A performance and stability release:

- Resolved model metadata is cached between requests, cutting time to first token roughly in half.
- Chat and generate no longer wedge after a mid-stream parser error.
- WebP images are transcoded for llama-server, so vision models accept them.
- Qwen 3.8 system messages are normalized, so a system message that is not the first message is handled consistently.
- Updated the MLX and llama.cpp dependencies.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.32.15
All changes since 0.32.13: https://github.com/ollama/ollama/compare/v0.32.13...v0.32.15`,
    es_ES: `Actualiza Ollama a 0.32.15, incluyendo todo lo publicado desde 0.32.13. Una versión de rendimiento y estabilidad:

- Los metadatos de modelo resueltos se almacenan en caché entre solicitudes, lo que reduce aproximadamente a la mitad el tiempo hasta el primer token.
- El chat y la generación ya no se bloquean tras un error del analizador a mitad de la transmisión.
- Las imágenes WebP se transcodifican para llama-server, de modo que los modelos de visión las aceptan.
- Los mensajes de sistema de Qwen 3.8 se normalizan, de modo que un mensaje de sistema que no es el primero se trata de forma coherente.
- Se actualizaron las dependencias MLX y llama.cpp.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.32.15
Todos los cambios desde 0.32.13: https://github.com/ollama/ollama/compare/v0.32.13...v0.32.15`,
    de_DE: `Aktualisiert Ollama auf 0.32.15 und umfasst alles, was seit 0.32.13 veröffentlicht wurde. Eine Version für Leistung und Stabilität:

- Aufgelöste Modell-Metadaten werden zwischen Anfragen zwischengespeichert, wodurch sich die Zeit bis zum ersten Token etwa halbiert.
- Chat und Generierung bleiben nach einem Parser-Fehler mitten im Stream nicht mehr hängen.
- WebP-Bilder werden für llama-server transkodiert, sodass Vision-Modelle sie akzeptieren.
- Systemnachrichten von Qwen 3.8 werden normalisiert, sodass eine Systemnachricht, die nicht die erste Nachricht ist, einheitlich behandelt wird.
- Die Abhängigkeiten MLX und llama.cpp wurden aktualisiert.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.32.15
Alle Änderungen seit 0.32.13: https://github.com/ollama/ollama/compare/v0.32.13...v0.32.15`,
    pl_PL: `Aktualizuje Ollama do 0.32.15, obejmując wszystko, co wydano od wersji 0.32.13. Wydanie poprawiające wydajność i stabilność:

- Ustalone metadane modelu są buforowane między żądaniami, co skraca czas do pierwszego tokenu mniej więcej o połowę.
- Czat i generowanie nie zawieszają się już po błędzie parsera w trakcie strumienia.
- Obrazy WebP są transkodowane dla llama-server, dzięki czemu modele wizyjne je akceptują.
- Wiadomości systemowe Qwen 3.8 są normalizowane, dzięki czemu wiadomość systemowa, która nie jest pierwsza, jest obsługiwana spójnie.
- Zaktualizowano zależności MLX i llama.cpp.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.32.15
Wszystkie zmiany od wersji 0.32.13: https://github.com/ollama/ollama/compare/v0.32.13...v0.32.15`,
    fr_FR: `Met à jour Ollama vers 0.32.15, en couvrant tout ce qui est sorti depuis 0.32.13. Une version axée sur les performances et la stabilité :

- Les métadonnées de modèle résolues sont mises en cache entre les requêtes, ce qui réduit de moitié environ le délai avant le premier jeton.
- Le chat et la génération ne se bloquent plus après une erreur d'analyse survenue en cours de flux.
- Les images WebP sont transcodées pour llama-server, si bien que les modèles de vision les acceptent.
- Les messages système de Qwen 3.8 sont normalisés, si bien qu'un message système qui n'est pas le premier est traité de manière cohérente.
- Les dépendances MLX et llama.cpp ont été mises à jour.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.32.15
Tous les changements depuis 0.32.13 : https://github.com/ollama/ollama/compare/v0.32.13...v0.32.15`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
