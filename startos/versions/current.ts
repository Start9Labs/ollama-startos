import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.40.18:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.40.18.

- Tool definitions sent through the API keep JSON schema keywords Ollama doesn't model instead of dropping them.
- Disabling thinking now uses the model's lowest supported reasoning level instead of being ignored.
- Changing the context shift setting no longer reloads the model.
- Models on integrated GPUs using Vulkan no longer fail to load with \`Failed to allocate pinned memory\`.

Full upstream changes: https://github.com/ollama/ollama/compare/v0.40.16...v0.40.18`,
    es_ES: `Ollama se actualizó a la versión 0.40.18.

- Las definiciones de herramientas enviadas a través de la API conservan las palabras clave de JSON Schema que Ollama no modela en lugar de descartarlas.
- Desactivar el razonamiento ahora usa el nivel de razonamiento más bajo que admite el modelo en lugar de ignorarse.
- Cambiar el ajuste de desplazamiento de contexto ya no recarga el modelo.
- Los modelos en GPU integradas que usan Vulkan ya no fallan al cargar con \`Failed to allocate pinned memory\`.

Todos los cambios del proyecto original: https://github.com/ollama/ollama/compare/v0.40.16...v0.40.18`,
    de_DE: `Ollama wurde auf Version 0.40.18 aktualisiert.

- Über die API gesendete Tool-Definitionen behalten JSON-Schema-Schlüsselwörter, die Ollama nicht modelliert, statt sie zu verwerfen.
- Das Deaktivieren des Denkmodus verwendet jetzt die niedrigste vom Modell unterstützte Denkstufe, statt ignoriert zu werden.
- Eine Änderung der Kontextverschiebungs-Einstellung lädt das Modell nicht mehr neu.
- Modelle auf integrierten GPUs mit Vulkan scheitern beim Laden nicht mehr mit \`Failed to allocate pinned memory\`.

Alle Upstream-Änderungen: https://github.com/ollama/ollama/compare/v0.40.16...v0.40.18`,
    pl_PL: `Ollama została zaktualizowana do wersji 0.40.18.

- Definicje narzędzi wysyłane przez API zachowują słowa kluczowe JSON Schema, których Ollama nie modeluje, zamiast je pomijać.
- Wyłączenie myślenia używa teraz najniższego poziomu rozumowania obsługiwanego przez model, zamiast być ignorowane.
- Zmiana ustawienia przesuwania kontekstu nie powoduje już ponownego ładowania modelu.
- Modele na zintegrowanych GPU korzystających z Vulkan nie kończą już ładowania błędem \`Failed to allocate pinned memory\`.

Wszystkie zmiany projektu źródłowego: https://github.com/ollama/ollama/compare/v0.40.16...v0.40.18`,
    fr_FR: `Ollama a été mis à jour vers la version 0.40.18.

- Les définitions d'outils envoyées via l'API conservent les mots-clés JSON Schema qu'Ollama ne modélise pas au lieu de les supprimer.
- La désactivation de la réflexion utilise désormais le niveau de raisonnement le plus bas pris en charge par le modèle au lieu d'être ignorée.
- Modifier le paramètre de décalage du contexte ne recharge plus le modèle.
- Les modèles sur GPU intégrés utilisant Vulkan n'échouent plus au chargement avec \`Failed to allocate pinned memory\`.

Tous les changements en amont : https://github.com/ollama/ollama/compare/v0.40.16...v0.40.18`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
