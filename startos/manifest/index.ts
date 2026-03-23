import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'ollama',
  title: 'Ollama',
  license: 'MIT',
  donationUrl: null,
  packageRepo: 'https://github.com/Start9Labs/ollama-startos/tree/update/040',
  upstreamRepo: 'https://github.com/ollama/ollama',
  marketingUrl: 'https://ollama.com/',
  docsUrls: ['https://docs.ollama.com/'],
  description: { short, long },
  volumes: ['main'],
  images: {
    ollama: {
      source: {
        dockerTag: 'ollama/ollama:0.18.2',
      },
      arch: ['aarch64', 'x86_64'],
    },
  },
  dependencies: {},
})
