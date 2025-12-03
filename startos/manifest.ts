import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

export const manifest = setupManifest({
  id: 'ollama',
  title: 'Ollama',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/ollama-startos',
  upstreamRepo: 'https://github.com/ollama/ollama',
  supportSite: 'https://docs.ollama.com/',
  marketingSite: 'https://ollama.com/',
  donationUrl: null,
  docsUrl: 'https://docs.ollama.com/',
  description: {
    short: 'Chat & build with open models',
    long: 'Get up and running with self-hosted, open source large language models (LLMs)',
  },
  volumes: ['main'],
  images: {
    ollama: {
      source: {
        dockerTag: 'ollama/ollama:0.13.1',
      },
      arch: architectures,
    } as SDKImageInputSpec,
  },
  // @TODO
  hardwareRequirements: { arch: architectures },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
