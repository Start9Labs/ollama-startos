import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.40.3:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.40.3.

- Adds Clef and Clef Flash decision models with image input through /v1/systemone, and explicit CAPABILITY declarations in Modelfiles.
- Fixes OpenAI-compatible tool results containing multiple content parts and images, and updates the llama.cpp engine.
- Pauses background upgrades of older local models to avoid slowing down embeddings and other requests.
- Updates start-sdk to 3.0.6, including a fix for duplicate daemons after restarting during startup.

Full upstream changes: https://github.com/ollama/ollama/compare/v0.35.0...v0.40.3`,
    es_ES: `Ollama se actualizó a la versión 0.40.3.

- Añade los modelos de decisión Clef y Clef Flash con entrada de imágenes mediante /v1/systemone y declaraciones CAPABILITY explícitas en Modelfiles.
- Corrige los resultados de herramientas compatibles con OpenAI que contienen varias partes de contenido e imágenes y actualiza el motor llama.cpp.
- Pausa las actualizaciones en segundo plano de los modelos locales antiguos para evitar ralentizar los embeddings y otras solicitudes.
- Actualiza start-sdk a 3.0.6, incluida una corrección de los demonios duplicados tras reiniciar durante el arranque.

Todos los cambios del proyecto original: https://github.com/ollama/ollama/compare/v0.35.0...v0.40.3`,
    de_DE: `Ollama wurde auf Version 0.40.3 aktualisiert.

- Ergänzt die Entscheidungsmodelle Clef und Clef Flash mit Bildeingabe über /v1/systemone sowie explizite CAPABILITY-Deklarationen in Modelfiles.
- Behebt OpenAI-kompatible Werkzeugergebnisse mit mehreren Inhaltsteilen und Bildern und aktualisiert die llama.cpp-Engine.
- Pausiert Hintergrund-Upgrades älterer lokaler Modelle, um Embeddings und andere Anfragen nicht zu verlangsamen.
- Aktualisiert start-sdk auf 3.0.6, einschließlich einer Korrektur für doppelte Daemons nach einem Neustart während des Starts.

Alle Upstream-Änderungen: https://github.com/ollama/ollama/compare/v0.35.0...v0.40.3`,
    pl_PL: `Ollama została zaktualizowana do wersji 0.40.3.

- Dodaje modele decyzyjne Clef i Clef Flash z obsługą obrazów przez /v1/systemone oraz jawne deklaracje CAPABILITY w plikach Modelfile.
- Naprawia zgodne z OpenAI wyniki narzędzi zawierające wiele części treści i obrazy oraz aktualizuje silnik llama.cpp.
- Wstrzymuje aktualizacje starszych modeli lokalnych w tle, aby nie spowalniać osadzeń i innych żądań.
- Aktualizuje start-sdk do 3.0.6, w tym naprawia duplikowanie demonów po ponownym uruchomieniu podczas rozruchu.

Wszystkie zmiany projektu źródłowego: https://github.com/ollama/ollama/compare/v0.35.0...v0.40.3`,
    fr_FR: `Ollama a été mis à jour vers la version 0.40.3.

- Ajoute les modèles de décision Clef et Clef Flash avec entrée d'images via /v1/systemone et les déclarations CAPABILITY explicites dans les Modelfiles.
- Corrige les résultats d'outils compatibles OpenAI contenant plusieurs parties de contenu et des images, et met à jour le moteur llama.cpp.
- Suspend les mises à niveau en arrière-plan des anciens modèles locaux pour éviter de ralentir les embeddings et les autres requêtes.
- Met à jour start-sdk vers 3.0.6, avec un correctif pour les démons dupliqués après un redémarrage pendant le démarrage.

Tous les changements en amont : https://github.com/ollama/ollama/compare/v0.35.0...v0.40.3`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
