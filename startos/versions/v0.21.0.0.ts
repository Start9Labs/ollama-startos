import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_21_0_0 = VersionInfo.of({
  version: '0.21.0:0',
  releaseNotes: {
    en_US: 'Update Ollama to 0.21.0',
    es_ES: 'Actualización de Ollama a 0.21.0',
    de_DE: 'Aktualisierung von Ollama auf 0.21.0',
    pl_PL: 'Aktualizacja Ollama do 0.21.0',
    fr_FR: 'Mise à jour de Ollama vers 0.21.0',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
