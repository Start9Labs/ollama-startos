import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.11:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.11 (includes 0.30.10): updates the underlying llama.cpp engine, improves `ollama launch` (auto-installs Claude Code and opencode, adds thinking-capability detection), preserves generation headroom for shifted prompts, and fixes `ollama ps` double-counting mmap’d weights on partial offload. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    es_ES:
      'Actualiza Ollama → 0.30.11 (incluye 0.30.10): actualiza el motor llama.cpp subyacente, mejora `ollama launch` (instala automáticamente Claude Code y opencode, añade detección de capacidad de razonamiento), conserva margen de generación para prompts desplazados y corrige que `ollama ps` contara dos veces los pesos mapeados en memoria con descarga parcial. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    de_DE:
      'Aktualisiert Ollama → 0.30.11 (enthält 0.30.10): aktualisiert die zugrunde liegende llama.cpp-Engine, verbessert `ollama launch` (installiert Claude Code und opencode automatisch, erkennt Thinking-Fähigkeiten), bewahrt Generierungs-Spielraum für verschobene Prompts und behebt die doppelte Zählung von mmap-Gewichten durch `ollama ps` bei teilweiser Auslagerung. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    pl_PL:
      'Aktualizuje Ollama → 0.30.11 (zawiera 0.30.10): aktualizuje silnik llama.cpp, ulepsza `ollama launch` (automatycznie instaluje Claude Code i opencode, wykrywa zdolność myślenia), zachowuje zapas generacji dla przesuniętych promptów oraz naprawia podwójne liczenie wag mmap przez `ollama ps` przy częściowym odciążeniu. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    fr_FR:
      'Met à jour Ollama → 0.30.11 (inclut 0.30.10) : met à jour le moteur llama.cpp sous-jacent, améliore `ollama launch` (installe automatiquement Claude Code et opencode, ajoute la détection de capacité de raisonnement), préserve la marge de génération pour les prompts décalés et corrige le double comptage par `ollama ps` des poids mmap lors d’un déchargement partiel. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.11',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
