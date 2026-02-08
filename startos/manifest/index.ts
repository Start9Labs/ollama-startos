import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

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
  description: { short, long },
  volumes: ['main'],
  images: {
    ollama: {
      source: {
        dockerTag: 'ollama/ollama:0.15.5',
      },
    },
  },
  dependencies: {},
})
