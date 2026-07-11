import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

const variant = process.env.VARIANT || 'generic'

type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> }
const mutable = <T>(value: T): Mutable<T> => value as Mutable<T>

const imageConfigs = {
  generic: {
    source: { dockerTag: 'ollama/ollama:0.31.1' },
    arch: ['aarch64', 'x86_64'],
    nvidiaContainer: true,
  },
  rocm: {
    source: { dockerTag: 'ollama/ollama:0.31.1-rocm' },
    arch: ['x86_64'],
    nvidiaContainer: false,
  },
} as const

export const manifest = setupManifest({
  id: 'ollama',
  title: 'Ollama',
  license: 'MIT',
  donationUrl: null,
  packageRepo: 'https://github.com/Start9Labs/ollama-startos',
  upstreamRepo: 'https://github.com/ollama/ollama',
  marketingUrl: 'https://ollama.com/',
  docsUrls: ['https://docs.ollama.com/'],
  description: { short, long },
  volumes: ['main'],
  images: {
    ollama: mutable(
      imageConfigs[variant as keyof typeof imageConfigs] ??
        imageConfigs.generic,
    ),
  },
  hardwareAcceleration: true,
  hardwareRequirements: {
    device:
      variant === 'rocm'
        ? [
            {
              class: 'display' as const,
              // Discrete-AMD allowlist: ROCm crashes on integrated Radeon (e.g. 680M); iGPUs lack these product names and fall back to the generic variant.
              product:
                '(?i)(Navi\\s*\\d+|Radeon\\s*RX\\s*\\d{3}|Radeon\\s*RX\\s*Vega|Radeon\\s*VII|Instinct)',
              vendor: null,
              driver: 'amdgpu',
              description:
                'A discrete AMD GPU supported by ROCm (integrated Radeon graphics are not supported)',
            },
          ]
        : [],
  },
  dependencies: {},
})
