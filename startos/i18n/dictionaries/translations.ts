import type { LangDict } from './default'

const translations = {
  es_ES: {
    0: '¡Iniciando Ollama!',
    1: 'API de Ollama',
    2: 'Tu API de Ollama está lista',
    3: 'Error al iniciar tu API de Ollama',
    4: 'Tu API de Ollama',
  },
  de_DE: {
    0: 'Ollama wird gestartet!',
    1: 'Ollama-API',
    2: 'Ihre Ollama-API ist bereit',
    3: 'Fehler beim Starten Ihrer Ollama-API',
    4: 'Ihre Ollama-API',
  },
  pl_PL: {
    0: 'Uruchamianie Ollama!',
    1: 'API Ollama',
    2: 'Twoje API Ollama jest gotowe',
    3: 'Błąd podczas uruchamiania API Ollama',
    4: 'Twoje API Ollama',
  },
  fr_FR: {
    0: 'Démarrage d\'Ollama !',
    1: 'API Ollama',
    2: 'Votre API Ollama est prête',
    3: 'Erreur lors du lancement de votre API Ollama',
    4: 'Votre API Ollama',
  },
} satisfies Record<string, LangDict>

export default translations
