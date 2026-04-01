const dict = {
  // main.ts
  'Starting Ollama!': 0,
  'Ollama API': 1,
  'Your Ollama API is ready': 2,
  'Error launching your Ollama API': 3,
  // interfaces.ts
  'Your Ollama API': 4,
} as const

export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>

export const DEFAULT_LANG = 'en_US'

export default dict
