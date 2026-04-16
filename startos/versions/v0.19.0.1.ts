import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_19_0_1 = VersionInfo.of({
  version: '0.19.0:1',
  releaseNotes: {
    en_US: 'Update Ollama to 0.19.0',
    es_ES: 'Actualización de Ollama a 0.19.0',
    de_DE: 'Aktualisierung von Ollama auf 0.19.0',
    pl_PL: 'Aktualizacja Ollama do 0.19.0',
    fr_FR: 'Mise à jour de Ollama vers 0.18.2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
