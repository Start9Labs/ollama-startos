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
    subcontainer: sdk.SubContainer.of(
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
      // Ollama's cuda_v13 runner is a PTX-only build, so GPUs it alone serves --
      // notably Blackwell sm_121 (DGX Spark GB10), which sits above cuda_v12's
      // SASS ceiling -- must JIT-compile the whole backend at load. Pin CUDA's
      // JIT cache under the data volume so that compile survives restarts instead
      // of recurring (the default ~/.nv is ephemeral in the container). Inert on
      // CPU and on GPUs served by cuda_v12, which ship real SASS and don't JIT.
      env: {
        CUDA_CACHE_PATH: '/root/.ollama/.nv/ComputeCache',
        CUDA_CACHE_MAXSIZE: '4294967296',
      },
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
