import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.11:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.11 (includes 0.30.10): Command A and North family models now run on Apple Silicon via the MLX engine, the underlying llama.cpp engine is updated, and agent launching is improved (auto-install Claude Code/opencode, thinking-capability detection) alongside several GPU/memory and inference fixes. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    es_ES:
      'Actualiza Ollama → 0.30.11 (incluye 0.30.10): los modelos de las familias Command A y North ahora funcionan en Apple Silicon mediante el motor MLX, se actualiza el motor llama.cpp subyacente y se mejora el lanzamiento de agentes (instalación automática de Claude Code/opencode, detección de capacidad de razonamiento), junto con varias correcciones de GPU/memoria e inferencia. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    de_DE:
      'Aktualisiert Ollama → 0.30.11 (enthält 0.30.10): Modelle der Command-A- und North-Familie laufen nun über die MLX-Engine auf Apple Silicon, die zugrunde liegende llama.cpp-Engine wurde aktualisiert, und der Agenten-Start wurde verbessert (automatische Installation von Claude Code/opencode, Erkennung der Thinking-Fähigkeit), zusammen mit mehreren GPU-/Speicher- und Inferenz-Korrekturen. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    pl_PL:
      'Aktualizuje Ollama → 0.30.11 (zawiera 0.30.10): modele z rodzin Command A i North działają teraz na Apple Silicon dzięki silnikowi MLX, zaktualizowano bazowy silnik llama.cpp oraz ulepszono uruchamianie agentów (automatyczna instalacja Claude Code/opencode, wykrywanie zdolności myślenia), wraz z kilkoma poprawkami GPU/pamięci i wnioskowania. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    fr_FR:
      'Met à jour Ollama → 0.30.11 (inclut 0.30.10) : les modèles des familles Command A et North fonctionnent désormais sur Apple Silicon via le moteur MLX, le moteur llama.cpp sous-jacent est mis à jour, et le lancement d’agents est amélioré (installation automatique de Claude Code/opencode, détection de la capacité de raisonnement), avec plusieurs correctifs GPU/mémoire et d’inférence. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.11',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
