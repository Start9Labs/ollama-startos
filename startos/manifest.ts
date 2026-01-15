import { setupManifest } from '@start9labs/start-sdk'

const ROCM = process.env.ROCM

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
        dockerTag: ROCM ? 'ollama/ollama:0.14.1-rocm' : 'ollama/ollama:0.14.1',
      },
      nvidiaContainer: !ROCM, // TODO: set nvidia container even for ROCM?
    },
  },
  hardwareAcceleration: true,
  dependencies: {},
  hardwareRequirements: {
    device: ROCM
      ? [
          {
            class: 'display',
            product: null,
            vendor: null,
            driver: 'amdgpu',
            description: 'An AMD GPU',
          },
        ]
      : [],
  },
})
