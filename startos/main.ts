import { sdk } from './sdk'
import { port } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   */
  console.info('Starting Ollama!')

  /**
   * ======================== Daemons ========================
   */
  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
      effects,
      { imageId: 'ollama' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/root/.ollama',
        readonly: false,
      }),
      'ollama-sub',
    ),
    exec: {
      command: sdk.useEntrypoint(),
    },
    ready: {
      display: 'Ollama API',
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, port, {
          successMessage: 'Your Ollama API is ready',
          errorMessage: 'Error launching your Ollama API',
        }),
    },
    requires: [],
  })
})
