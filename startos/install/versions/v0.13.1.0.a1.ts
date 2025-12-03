import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_13_1_0_a1 = VersionInfo.of({
  version: '0.13.1:0-alpha.1',
  releaseNotes: 'initial release for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
