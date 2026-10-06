import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.35.0:1',
  releaseNotes: {
    en_US: `Updated Ollama to 0.35.0. Decision models now return choices, probabilities, and scores through /v1/systemone. Creating a GGUF model from safetensors now requires converting and quantizing with llama.cpp tooling first. Full notes: https://github.com/ollama/ollama/compare/v0.34.0...v0.35.0

StartOS package improvements.`,
    es_ES: `Ollama se actualizó a la versión 0.35.0. Los modelos de decisión ahora devuelven elecciones, probabilidades y puntuaciones mediante /v1/systemone. Crear un modelo GGUF a partir de safetensors ahora requiere convertirlo y cuantizarlo antes con las herramientas de llama.cpp. Notas completas: https://github.com/ollama/ollama/compare/v0.34.0...v0.35.0

Mejoras en el paquete de StartOS.`,
    de_DE: `Ollama wurde auf Version 0.35.0 aktualisiert. Entscheidungsmodelle liefern jetzt Auswahlentscheidungen, Wahrscheinlichkeiten und Bewertungen über /v1/systemone. Um ein GGUF-Modell aus Safetensors zu erstellen, muss es jetzt zuerst mit den llama.cpp-Werkzeugen konvertiert und quantisiert werden. Vollständige Versionshinweise: https://github.com/ollama/ollama/compare/v0.34.0...v0.35.0

Verbesserungen am StartOS-Paket.`,
    pl_PL: `Ollama została zaktualizowana do wersji 0.35.0. Modele decyzyjne zwracają teraz wybory, prawdopodobieństwa i oceny przez /v1/systemone. Utworzenie modelu GGUF z plików safetensors wymaga teraz wcześniejszej konwersji i kwantyzacji narzędziami llama.cpp. Pełne informacje o wydaniu: https://github.com/ollama/ollama/compare/v0.34.0...v0.35.0

Ulepszenia pakietu StartOS.`,
    fr_FR: `Ollama a été mis à jour vers la version 0.35.0. Les modèles de décision renvoient désormais des choix, des probabilités et des scores via /v1/systemone. Créer un modèle GGUF à partir de safetensors nécessite désormais de le convertir et de le quantifier au préalable avec les outils de llama.cpp. Notes de version complètes : https://github.com/ollama/ollama/compare/v0.34.0...v0.35.0

Améliorations du paquet StartOS.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
