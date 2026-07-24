import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.32.3:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.32.3 (0.32.2 was withdrawn upstream).

- Fixes model downloads that stall before sending data.
- Lowers memory use on Linux CUDA and ROCm integrated GPUs, and adds NVIDIA B200 support via CUDA 12.
- Adds chat, thinking, and tool calling support for Laguna 2.1 models.
- Fixes GLM tool calls being silently dropped at the end of generation.
- Improves Gemma 4 tool calling and multi-turn reasoning.
- Fixes an MLX model cache leak that could grow memory use across requests.
- Updates the MLX and llama.cpp engines.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.32.3`,
    es_ES: `Actualiza Ollama a 0.32.3 (la versión 0.32.2 fue retirada por el proyecto original).

- Corrige las descargas de modelos que se detenían antes de enviar datos.
- Reduce el uso de memoria en GPU integradas con CUDA y ROCm en Linux, y añade compatibilidad con NVIDIA B200 mediante CUDA 12.
- Añade compatibilidad de chat, razonamiento y llamadas a herramientas para los modelos Laguna 2.1.
- Corrige que las llamadas a herramientas de GLM se descartaran silenciosamente al final de la generación.
- Mejora las llamadas a herramientas y el razonamiento multironda de Gemma 4.
- Corrige una fuga en la caché de modelos MLX que podía aumentar el uso de memoria entre solicitudes.
- Actualiza los motores MLX y llama.cpp.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.32.3`,
    de_DE: `Aktualisiert Ollama auf 0.32.3 (Version 0.32.2 wurde vom Projekt zurückgezogen).

- Behebt Modell-Downloads, die vor dem Senden von Daten hängen blieben.
- Senkt den Speicherverbrauch auf integrierten CUDA- und ROCm-GPUs unter Linux und ergänzt NVIDIA-B200-Unterstützung über CUDA 12.
- Ergänzt Chat, Thinking und Tool-Calling für Laguna-2.1-Modelle.
- Behebt, dass GLM-Tool-Calls am Ende der Generierung stillschweigend verworfen wurden.
- Verbessert Tool-Calling und mehrstufiges Reasoning von Gemma 4.
- Behebt ein Leck im MLX-Modell-Cache, das den Speicherverbrauch über mehrere Anfragen erhöhen konnte.
- Aktualisiert die MLX- und llama.cpp-Engines.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.32.3`,
    pl_PL: `Aktualizuje Ollama do 0.32.3 (wersja 0.32.2 została wycofana przez twórców).

- Naprawia pobieranie modeli, które zatrzymywało się przed wysłaniem danych.
- Zmniejsza zużycie pamięci na zintegrowanych układach GPU z CUDA i ROCm w systemie Linux oraz dodaje obsługę NVIDIA B200 przez CUDA 12.
- Dodaje obsługę czatu, rozumowania i wywoływania narzędzi dla modeli Laguna 2.1.
- Naprawia ciche pomijanie wywołań narzędzi GLM na końcu generowania.
- Ulepsza wywoływanie narzędzi i wielokrokowe rozumowanie w Gemma 4.
- Naprawia wyciek w pamięci podręcznej modeli MLX, który mógł zwiększać zużycie pamięci między żądaniami.
- Aktualizuje silniki MLX i llama.cpp.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.32.3`,
    fr_FR: `Met à jour Ollama vers 0.32.3 (la version 0.32.2 a été retirée en amont).

- Corrige les téléchargements de modèles qui se bloquaient avant l'envoi des données.
- Réduit l'utilisation mémoire sur les GPU intégrés CUDA et ROCm sous Linux, et ajoute la prise en charge des NVIDIA B200 via CUDA 12.
- Ajoute la prise en charge du chat, du raisonnement et des appels d'outils pour les modèles Laguna 2.1.
- Corrige les appels d'outils GLM silencieusement ignorés en fin de génération.
- Améliore les appels d'outils et le raisonnement multitours de Gemma 4.
- Corrige une fuite du cache de modèles MLX qui pouvait augmenter l'utilisation mémoire entre les requêtes.
- Met à jour les moteurs MLX et llama.cpp.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.32.3`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
