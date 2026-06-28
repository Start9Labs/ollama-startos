import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.11:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.11 (includes 0.30.10): updates the underlying llama.cpp engine, improves `ollama launch` (thinking-capability detection plus auto-install of Claude Code and opencode), and fixes several GPU-detection and memory-sizing issues, including `ollama ps` double-counting mmap’d weights on partial offload. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    es_ES:
      'Actualiza Ollama → 0.30.11 (incluye 0.30.10): actualiza el motor llama.cpp subyacente, mejora `ollama launch` (detección de capacidad de razonamiento e instalación automática de Claude Code y opencode) y corrige varios problemas de detección de GPU y de cálculo de memoria, incluido el doble conteo de `ollama ps` de los pesos mapeados con mmap en descargas parciales. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    de_DE:
      'Aktualisiert Ollama → 0.30.11 (enthält 0.30.10): aktualisiert die zugrunde liegende llama.cpp-Engine, verbessert `ollama launch` (Erkennung der Thinking-Fähigkeit sowie automatische Installation von Claude Code und opencode) und behebt mehrere Probleme bei der GPU-Erkennung und Speicherberechnung, darunter das Doppelzählen von mmap-Gewichten durch `ollama ps` bei teilweisem Offload. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    pl_PL:
      'Aktualizuje Ollama → 0.30.11 (zawiera 0.30.10): aktualizuje bazowy silnik llama.cpp, ulepsza `ollama launch` (wykrywanie zdolności myślenia oraz automatyczną instalację Claude Code i opencode) i naprawia kilka problemów z wykrywaniem GPU oraz obliczaniem pamięci, w tym podwójne liczenie przez `ollama ps` wag mapowanych mmap przy częściowym odciążeniu. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    fr_FR:
      'Met à jour Ollama → 0.30.11 (inclut 0.30.10) : met à jour le moteur llama.cpp sous-jacent, améliore `ollama launch` (détection de la capacité de raisonnement et installation automatique de Claude Code et d’opencode) et corrige plusieurs problèmes de détection GPU et de calcul mémoire, dont le double comptage par `ollama ps` des poids mappés en mmap lors d’un déchargement partiel. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.11',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
