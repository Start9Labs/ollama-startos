import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.31.1:0',
  releaseNotes: {
    en_US:
      'Updated Ollama → 0.31.1 (from 0.30.11). Highlights: Gemma 4 runs significantly faster on Apple Silicon — up to ~90% faster token generation via multi-token prediction (MTP), on by default with no configuration and no change to output; the MLX engine is updated with a new small-batch matmul kernel and tightened Gemma 4 MoE loading; the underlying llama.cpp engine is updated to build 9840; and tool-call parsing now ignores braces inside JSON strings. Full notes: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    es_ES:
      'Actualiza Ollama → 0.31.1 (desde 0.30.11). Novedades: Gemma 4 funciona mucho más rápido en Apple Silicon —hasta ~90 % más rápido en la generación de tokens mediante la predicción de múltiples tokens (MTP), activada por defecto, sin configuración y sin cambiar la salida—; el motor MLX se actualiza con un nuevo kernel de multiplicación de matrices para lotes pequeños y una carga optimizada de los modelos MoE de Gemma 4; el motor llama.cpp subyacente se actualiza a la compilación 9840; y el análisis de llamadas a herramientas ahora ignora las llaves dentro de cadenas JSON. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    de_DE:
      'Aktualisiert Ollama → 0.31.1 (von 0.30.11). Highlights: Gemma 4 läuft auf Apple Silicon deutlich schneller – bis zu ~90 % schnellere Token-Generierung durch Multi-Token-Prediction (MTP), standardmäßig aktiviert, ohne Konfiguration und ohne Änderung der Ausgabe; die MLX-Engine wurde mit einem neuen Small-Batch-Matmul-Kernel und optimiertem Laden der Gemma-4-MoE-Modelle aktualisiert; die zugrunde liegende llama.cpp-Engine wurde auf Build 9840 aktualisiert; und das Parsen von Tool-Aufrufen ignoriert nun geschweifte Klammern innerhalb von JSON-Zeichenketten. Vollständige Hinweise: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    pl_PL:
      'Aktualizuje Ollama → 0.31.1 (z 0.30.11). Najważniejsze zmiany: Gemma 4 działa znacznie szybciej na Apple Silicon — nawet ~90% szybsze generowanie tokenów dzięki predykcji wielu tokenów (MTP), włączonej domyślnie, bez konfiguracji i bez zmiany wyników; silnik MLX zaktualizowano o nowe jądro mnożenia macierzy dla małych partii oraz zoptymalizowane ładowanie modeli MoE Gemma 4; bazowy silnik llama.cpp zaktualizowano do kompilacji 9840; a analiza wywołań narzędzi ignoruje teraz nawiasy klamrowe wewnątrz łańcuchów JSON. Pełne informacje: https://github.com/ollama/ollama/releases/tag/v0.31.1',
    fr_FR:
      'Met à jour Ollama → 0.31.1 (depuis 0.30.11). Points forts : Gemma 4 fonctionne beaucoup plus vite sur Apple Silicon — jusqu’à ~90 % de génération de tokens en plus grâce à la prédiction multi-tokens (MTP), activée par défaut, sans configuration et sans modifier la sortie ; le moteur MLX est mis à jour avec un nouveau noyau matmul pour petits lots et un chargement optimisé des modèles MoE de Gemma 4 ; le moteur llama.cpp sous-jacent passe au build 9840 ; et l’analyse des appels d’outils ignore désormais les accolades à l’intérieur des chaînes JSON. Notes complètes : https://github.com/ollama/ollama/releases/tag/v0.31.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
