import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.10:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.10: Command A and North family models now run on Apple Silicon with the MLX engine, updates the underlying llama.cpp engine to build 9672, and fixes build artifacts for MLX. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.10',
    es_ES:
      'Actualiza Ollama → 0.30.10: los modelos de las familias Command A y North ahora funcionan en Apple Silicon con el motor MLX, actualiza el motor subyacente llama.cpp a la compilación 9672 y corrige los artefactos de compilación de MLX. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.10',
    de_DE:
      'Aktualisiert Ollama → 0.30.10: Modelle der Command-A- und North-Familie laufen nun auf Apple Silicon mit der MLX-Engine, aktualisiert die zugrunde liegende llama.cpp-Engine auf Build 9672 und behebt Build-Artefakte für MLX. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.10',
    pl_PL:
      'Aktualizuje Ollama → 0.30.10: modele z rodzin Command A i North działają teraz na Apple Silicon z silnikiem MLX, aktualizuje bazowy silnik llama.cpp do kompilacji 9672 oraz naprawia artefakty kompilacji dla MLX. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.10',
    fr_FR:
      'Met à jour Ollama → 0.30.10 : les modèles des familles Command A et North fonctionnent désormais sur Apple Silicon avec le moteur MLX, met à jour le moteur llama.cpp sous-jacent vers la build 9672 et corrige les artefacts de compilation pour MLX. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.10',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
