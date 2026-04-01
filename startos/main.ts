import { i18n } from './i18n'
import { sdk } from './sdk'
import { port } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  /**
   * ======================== Setup (optional) ========================
   */
  console.info(i18n('Starting Ollama!'))

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
      display: i18n('Ollama API'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, port, {
          successMessage: i18n('Your Ollama API is ready'),
          errorMessage: i18n('Error launching your Ollama API'),
        }),
    },
    requires: [],
  })
})
