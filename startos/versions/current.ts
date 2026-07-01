import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.31.1:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.31.1: the underlying llama.cpp engine is updated (build 9840), the MLX engine gains a new small-batch matmul kernel, and Gemma 4 model loading and multi-token-prediction performance are improved. Full notes: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    es_ES:
      'Actualiza Ollama → 0.31.1: se actualiza el motor llama.cpp subyacente (build 9840), el motor MLX incorpora un nuevo kernel de multiplicación de matrices para lotes pequeños y se mejoran la carga del modelo Gemma 4 y el rendimiento de la predicción de múltiples tokens. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    de_DE:
      'Aktualisiert Ollama → 0.31.1: Die zugrunde liegende llama.cpp-Engine wurde aktualisiert (Build 9840), die MLX-Engine erhält einen neuen Matmul-Kernel für kleine Batches, und das Laden des Gemma-4-Modells sowie die Multi-Token-Prediction-Leistung wurden verbessert. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    pl_PL:
      'Aktualizuje Ollama → 0.31.1: zaktualizowano bazowy silnik llama.cpp (build 9840), silnik MLX otrzymał nowe jądro mnożenia macierzy dla małych partii, a ładowanie modelu Gemma 4 oraz wydajność predykcji wielu tokenów zostały ulepszone. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    fr_FR:
      'Met à jour Ollama → 0.31.1 : le moteur llama.cpp sous-jacent est mis à jour (build 9840), le moteur MLX gagne un nouveau noyau matmul pour petits lots, et le chargement du modèle Gemma 4 ainsi que les performances de prédiction multi-tokens sont améliorés. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.31.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
