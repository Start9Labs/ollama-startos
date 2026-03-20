import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_18_1_0_b1 = VersionInfo.of({
  version: '0.18.1:0-beta.1',
  releaseNotes: {
    en_US: 'Update Ollama to 0.18.1',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
