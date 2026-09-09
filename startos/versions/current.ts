import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.33.3:1',
  releaseNotes: {
    en_US: `Backups no longer include downloaded models.

The model store is the bulk of any backup of this service, and every model in it can be pulled again from upstream, so it is now excluded and backups are far smaller. After a restore, the instance lists no models until your client pulls them again; everything else, including Ollama's keypair, is restored as before.`,
    es_ES: `Las copias de seguridad ya no incluyen los modelos descargados.

El almacén de modelos es la mayor parte de cualquier copia de seguridad de este servicio, y todos los modelos que contiene pueden volver a descargarse desde el origen, así que ahora queda excluido y las copias de seguridad son mucho más pequeñas. Tras una restauración, la instancia no muestra ningún modelo hasta que su cliente vuelva a descargarlos; todo lo demás, incluido el par de claves de Ollama, se restaura como antes.`,
    de_DE: `Backups enthalten keine heruntergeladenen Modelle mehr.

Der Modellspeicher macht den Großteil jedes Backups dieses Dienstes aus, und jedes Modell darin lässt sich erneut von upstream laden. Er wird daher jetzt ausgeschlossen, und Backups sind deutlich kleiner. Nach einer Wiederherstellung zeigt die Instanz keine Modelle an, bis Ihr Client sie erneut lädt; alles andere, einschließlich des Schlüsselpaars von Ollama, wird wie bisher wiederhergestellt.`,
    pl_PL: `Kopie zapasowe nie zawierają już pobranych modeli.

Magazyn modeli stanowi większość każdej kopii zapasowej tej usługi, a każdy model można pobrać ponownie ze źródła, więc jest teraz wykluczony, a kopie zapasowe są znacznie mniejsze. Po przywróceniu instancja nie pokazuje żadnych modeli, dopóki klient nie pobierze ich ponownie; wszystko inne, w tym para kluczy Ollama, jest przywracane jak dotychczas.`,
    fr_FR: `Les sauvegardes n’incluent plus les modèles téléchargés.

Le magasin de modèles constitue l’essentiel de toute sauvegarde de ce service, et chaque modèle qu’il contient peut être téléchargé de nouveau depuis l’amont ; il en est donc désormais exclu et les sauvegardes sont beaucoup plus petites. Après une restauration, l’instance n’affiche aucun modèle tant que votre client ne les a pas téléchargés de nouveau ; tout le reste, y compris la paire de clés d’Ollama, est restauré comme avant.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
