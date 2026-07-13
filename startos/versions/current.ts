import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.31.2:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.31.2.

- Enables flash attention on older NVIDIA GPUs (compute capability 6.x).
- Integrated GPUs can now offload vision models, padding them to fit the available memory.
- Fixes structured output for thinking models when thinking is disabled.
- Fixes loading models from paths containing non-UTF-8 characters.
- Hardens GGUF model creation.
- Updates the MLX and llama.cpp engines.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.31.2`,
    es_ES: `Actualiza Ollama a 0.31.2.

- Activa la atención flash en GPU NVIDIA antiguas (capacidad de cómputo 6.x).
- Las GPU integradas ya pueden descargar modelos de visión, ajustándolos a la memoria disponible.
- Corrige la salida estructurada en los modelos de razonamiento cuando el razonamiento está desactivado.
- Corrige la carga de modelos desde rutas que contienen caracteres no UTF-8.
- Refuerza la creación de modelos GGUF.
- Actualiza los motores MLX y llama.cpp.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.31.2`,
    de_DE: `Aktualisiert Ollama auf 0.31.2.

- Aktiviert Flash Attention auf älteren NVIDIA-GPUs (Compute Capability 6.x).
- Integrierte GPUs können nun Vision-Modelle auslagern und passen sie an den verfügbaren Speicher an.
- Behebt die strukturierte Ausgabe bei Thinking-Modellen, wenn Thinking deaktiviert ist.
- Behebt das Laden von Modellen aus Pfaden mit Nicht-UTF-8-Zeichen.
- Härtet die Erstellung von GGUF-Modellen ab.
- Aktualisiert die MLX- und llama.cpp-Engines.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.31.2`,
    pl_PL: `Aktualizuje Ollama do 0.31.2.

- Włącza flash attention na starszych kartach NVIDIA (compute capability 6.x).
- Zintegrowane układy graficzne mogą teraz obsługiwać modele wizyjne, dopasowując je do dostępnej pamięci.
- Naprawia ustrukturyzowane wyjście w modelach rozumujących, gdy rozumowanie jest wyłączone.
- Naprawia wczytywanie modeli ze ścieżek zawierających znaki spoza UTF-8.
- Wzmacnia proces tworzenia modeli GGUF.
- Aktualizuje silniki MLX i llama.cpp.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.31.2`,
    fr_FR: `Met à jour Ollama vers 0.31.2.

- Active flash attention sur les anciens GPU NVIDIA (capacité de calcul 6.x).
- Les GPU intégrés peuvent désormais décharger les modèles de vision en les ajustant à la mémoire disponible.
- Corrige la sortie structurée des modèles de raisonnement lorsque le raisonnement est désactivé.
- Corrige le chargement des modèles depuis des chemins contenant des caractères non UTF-8.
- Renforce la création des modèles GGUF.
- Met à jour les moteurs MLX et llama.cpp.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.31.2`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
