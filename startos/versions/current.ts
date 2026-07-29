import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.32.5:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.32.5, a small maintenance release covering 0.32.4 and 0.32.5.

- Fixes Qwen3 MoE decoding when experts are quantized differently, and speeds up its gate/up projection.
- Quantizes draft-model output heads at the requested type when creating speculative-decoding drafts.
- The remaining changes target Apple GPUs via the MLX engine and do not affect StartOS.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.32.4 and https://github.com/ollama/ollama/releases/tag/v0.32.5`,
    es_ES: `Actualiza Ollama a 0.32.5, una pequeña versión de mantenimiento que abarca 0.32.4 y 0.32.5.

- Corrige la decodificación de Qwen3 MoE cuando los expertos están cuantizados de forma distinta y acelera su proyección gate/up.
- Cuantiza las cabezas de salida del modelo borrador con el tipo solicitado al crear borradores de decodificación especulativa.
- El resto de los cambios afectan a las GPU de Apple mediante el motor MLX y no repercuten en StartOS.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.32.4 y https://github.com/ollama/ollama/releases/tag/v0.32.5`,
    de_DE: `Aktualisiert Ollama auf 0.32.5, eine kleine Wartungsversion, die 0.32.4 und 0.32.5 umfasst.

- Behebt die Qwen3-MoE-Dekodierung, wenn Experten unterschiedlich quantisiert sind, und beschleunigt deren Gate/Up-Projektion.
- Quantisiert die Ausgabeköpfe des Entwurfsmodells im angeforderten Typ, wenn Entwürfe für spekulatives Dekodieren erstellt werden.
- Die übrigen Änderungen betreffen Apple-GPUs über die MLX-Engine und wirken sich nicht auf StartOS aus.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.32.4 und https://github.com/ollama/ollama/releases/tag/v0.32.5`,
    pl_PL: `Aktualizuje Ollama do 0.32.5 — niewielkie wydanie konserwacyjne obejmujące 0.32.4 i 0.32.5.

- Naprawia dekodowanie Qwen3 MoE, gdy eksperci są kwantyzowani w różny sposób, i przyspiesza jego projekcję gate/up.
- Kwantyzuje głowice wyjściowe modelu roboczego w żądanym typie podczas tworzenia wersji roboczych do dekodowania spekulatywnego.
- Pozostałe zmiany dotyczą układów GPU Apple w silniku MLX i nie mają wpływu na StartOS.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.32.4 oraz https://github.com/ollama/ollama/releases/tag/v0.32.5`,
    fr_FR: `Met à jour Ollama vers 0.32.5, une petite version de maintenance couvrant 0.32.4 et 0.32.5.

- Corrige le décodage Qwen3 MoE lorsque les experts sont quantifiés différemment et accélère sa projection gate/up.
- Quantifie les têtes de sortie du modèle brouillon au type demandé lors de la création de brouillons pour le décodage spéculatif.
- Les autres changements concernent les GPU Apple via le moteur MLX et n'affectent pas StartOS.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.32.4 et https://github.com/ollama/ollama/releases/tag/v0.32.5`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
