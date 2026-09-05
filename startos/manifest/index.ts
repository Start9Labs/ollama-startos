import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

const variant = process.env.VARIANT || 'generic'

type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> }
const mutable = <T>(value: T): Mutable<T> => value as Mutable<T>

const imageConfigs = {
  generic: {
    source: { dockerTag: 'ollama/ollama:0.33.3' },
    arch: ['aarch64', 'x86_64'],
    nvidiaContainer: true,
  },
  rocm: {
    source: { dockerTag: 'ollama/ollama:0.33.3-rocm' },
    arch: ['x86_64'],
    nvidiaContainer: false,
  },
} as const

// ROCm is unreliable on integrated Radeon (e.g. the 680M in Ryzen APUs), so
// match only discrete AMD GPUs by product name. StartOS's regex engine has no
// lookahead, so this is a positive allowlist rather than an iGPU exclusion.
const AMD_DISCRETE_GPU =
  '(?i)(Navi\\s*\\d+|Radeon\\s*RX\\s*\\d{3}|Radeon\\s*RX\\s*Vega|Radeon\\s*VII|Instinct)'

// hardwareRequirements per accelerator variant. StartOS auto-selects the most
// hardware-specific compatible variant per host; variants without an entry here
// (the default) carry no device requirement and act as the CPU fallback.
const hwDevices = {
  rocm: [
    {
      class: 'display' as const,
      product: AMD_DISCRETE_GPU,
      vendor: null,
      driver: 'amdgpu',
      description:
        'A discrete AMD GPU supported by ROCm (integrated Radeon graphics are not supported)',
    },
  ],
} as const

export const manifest = setupManifest({
  id: 'ollama',
  title: 'Ollama',
  license: 'MIT',
  donationUrl: null,
  packageRepo: 'https://github.com/Start9Labs/ollama-startos',
  upstreamRepo: 'https://github.com/ollama/ollama',
  marketingUrl: 'https://ollama.com/',
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
    device: [...(hwDevices[variant as keyof typeof hwDevices] ?? [])],
  },
  dependencies: {},
})
