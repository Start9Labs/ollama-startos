import { VersionInfo } from '@start9labs/start-sdk'

export const v_0_18_2_0_b2 = VersionInfo.of({
  version: '0.18.2:0-beta.2',
  releaseNotes: {
    en_US: 'Update Ollama to 0.18.2',
    es_ES: 'Actualización de Ollama a 0.18.2',
    de_DE: 'Aktualisierung von Ollama auf 0.18.2',
    pl_PL: 'Aktualizacja Ollama do 0.18.2',
    fr_FR: 'Mise à jour de Ollama vers 0.18.2',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
