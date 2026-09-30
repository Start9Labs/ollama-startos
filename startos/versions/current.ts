import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.35.0:0',
  releaseNotes: {
    en_US:
      'Updated Ollama to 0.35.0. Decision models now return choices, probabilities, and scores through /v1/systemone. Requests with the deprecated typical_p option are accepted with a warning. Full notes: https://github.com/ollama/ollama/releases/tag/v0.35.0',
    es_ES:
      'Ollama se actualizó a la versión 0.35.0. Los modelos de decisión ahora devuelven elecciones, probabilidades y puntuaciones mediante /v1/systemone. Las solicitudes con la opción obsoleta typical_p se aceptan con una advertencia. Notas completas: https://github.com/ollama/ollama/releases/tag/v0.35.0',
    de_DE:
      'Ollama wurde auf Version 0.35.0 aktualisiert. Entscheidungsmodelle liefern jetzt Auswahlentscheidungen, Wahrscheinlichkeiten und Bewertungen über /v1/systemone. Anfragen mit der veralteten Option typical_p werden mit einer Warnung akzeptiert. Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.35.0',
    pl_PL:
      'Ollama została zaktualizowana do wersji 0.35.0. Modele decyzyjne zwracają teraz wybory, prawdopodobieństwa i oceny przez /v1/systemone. Żądania z przestarzałą opcją typical_p są akceptowane z ostrzeżeniem. Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.35.0',
    fr_FR:
      'Ollama a été mis à jour vers la version 0.35.0. Les modèles de décision renvoient désormais des choix, des probabilités et des scores via /v1/systemone. Les requêtes utilisant l’option obsolète typical_p sont acceptées avec un avertissement. Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.35.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
