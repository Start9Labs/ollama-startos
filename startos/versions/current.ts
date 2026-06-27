import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.30.11:0',
  releaseNotes: {
    en_US:
      'Bumps Ollama → 0.30.11: updates the underlying llama.cpp engine and improves GPU memory handling, including more accurate mmproj offload sizing, a fix for "ollama ps" double-counting memory-mapped weights on partial offload, and more headroom preserved for shifted prompts. Full notes: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    es_ES:
      'Actualiza Ollama → 0.30.11: actualiza el motor subyacente llama.cpp y mejora la gestión de memoria de GPU, incluyendo un cálculo más preciso del tamaño de descarga de mmproj, una corrección para que «ollama ps» no cuente dos veces los pesos mapeados en memoria con descarga parcial, y más margen para los prompts desplazados. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    de_DE:
      'Aktualisiert Ollama → 0.30.11: aktualisiert die zugrunde liegende llama.cpp-Engine und verbessert die GPU-Speicherverwaltung, einschließlich einer genaueren Berechnung der mmproj-Offload-Größe, einer Korrektur, damit »ollama ps« speichergemappte Gewichte bei teilweisem Offload nicht doppelt zählt, und mehr Spielraum für verschobene Prompts. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    pl_PL:
      'Aktualizuje Ollama → 0.30.11: aktualizuje bazowy silnik llama.cpp i usprawnia zarządzanie pamięcią GPU, w tym dokładniejsze obliczanie rozmiaru offloadu mmproj, poprawkę, dzięki której „ollama ps” nie liczy podwójnie wag mapowanych w pamięci przy częściowym offloadzie, oraz większy zapas dla przesuniętych promptów. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.30.11',
    fr_FR:
      'Met à jour Ollama → 0.30.11 : met à jour le moteur llama.cpp sous-jacent et améliore la gestion de la mémoire GPU, notamment un calcul plus précis de la taille de déchargement mmproj, une correction empêchant « ollama ps » de compter deux fois les poids mappés en mémoire lors d\'un déchargement partiel, et davantage de marge préservée pour les prompts décalés. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.30.11',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
