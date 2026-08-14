import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.32.13:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.32.13, covering everything released since 0.32.9.

- Adds Qwen 3.8 27B (\`ollama run qwen3.8:27b\`), with support for developer instructions.
- Models that set no \`repeat_penalty\` now default to 1.0 (off) rather than 1.1, matching other engines and speeding up speculative decoding. If an older model starts repeating itself, set the parameter per model.
- The OpenAI-compatible responses API gained web search, and \`ollama launch\` now supports DeepSeek Harness and Meta's Muse Code agentic coding CLI.
- Fixed blob verification being skipped when an OCI manifest's config and layer share a digest.
- Faster prefill on NVFP4 MLX models, and template updates for Muse Glimmer.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.32.13
All changes since 0.32.9: https://github.com/ollama/ollama/compare/v0.32.9...v0.32.13`,
    es_ES: `Actualiza Ollama a 0.32.13, incluyendo todo lo publicado desde 0.32.9.

- Añade Qwen 3.8 27B (\`ollama run qwen3.8:27b\`), con soporte para instrucciones de desarrollador.
- Los modelos que no definen \`repeat_penalty\` ahora usan 1.0 (desactivado) en lugar de 1.1, igual que otros motores, lo que acelera la decodificación especulativa. Si un modelo antiguo empieza a repetirse, ajusta el parámetro para ese modelo.
- La API de respuestas compatible con OpenAI incorpora búsqueda web, y \`ollama launch\` ya admite DeepSeek Harness y Muse Code, la CLI de programación con agentes de Meta.
- Se corrigió la omisión de la verificación de blobs cuando la configuración y la capa de un manifiesto OCI comparten el mismo digest.
- Prellenado más rápido en modelos NVFP4 MLX y actualizaciones de plantillas para Muse Glimmer.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.32.13
Todos los cambios desde 0.32.9: https://github.com/ollama/ollama/compare/v0.32.9...v0.32.13`,
    de_DE: `Aktualisiert Ollama auf 0.32.13 und umfasst alles, was seit 0.32.9 veröffentlicht wurde.

- Ergänzt Qwen 3.8 27B (\`ollama run qwen3.8:27b\`) samt Unterstützung für Entwickleranweisungen.
- Modelle ohne gesetztes \`repeat_penalty\` verwenden jetzt standardmäßig 1.0 (aus) statt 1.1, wie andere Engines auch, was die spekulative Dekodierung beschleunigt. Wiederholt sich ein älteres Modell, setze den Parameter für dieses Modell.
- Die OpenAI-kompatible Responses-API unterstützt nun Websuche, und \`ollama launch\` kommt mit DeepSeek Harness sowie Muse Code zurecht, Metas CLI für agentisches Programmieren.
- Behoben: Die Blob-Prüfung wurde übersprungen, wenn Konfiguration und Layer eines OCI-Manifests denselben Digest haben.
- Schnelleres Prefill bei NVFP4-MLX-Modellen und Template-Aktualisierungen für Muse Glimmer.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.32.13
Alle Änderungen seit 0.32.9: https://github.com/ollama/ollama/compare/v0.32.9...v0.32.13`,
    pl_PL: `Aktualizuje Ollama do 0.32.13, obejmując wszystko, co wydano od wersji 0.32.9.

- Dodaje Qwen 3.8 27B (\`ollama run qwen3.8:27b\`) wraz z obsługą instrukcji deweloperskich.
- Modele bez ustawionego \`repeat_penalty\` domyślnie używają teraz 1.0 (wyłączone) zamiast 1.1, tak jak inne silniki, co przyspiesza dekodowanie spekulacyjne. Jeśli starszy model zacznie się powtarzać, ustaw ten parametr dla niego.
- Zgodny z OpenAI interfejs responses obsługuje teraz wyszukiwanie w sieci, a \`ollama launch\` współpracuje z DeepSeek Harness oraz Muse Code, agentowym CLI do programowania od Meta.
- Naprawiono pomijanie weryfikacji blobów, gdy konfiguracja i warstwa manifestu OCI mają ten sam digest.
- Szybsze wypełnianie wstępne w modelach NVFP4 MLX oraz aktualizacje szablonów Muse Glimmer.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.32.13
Wszystkie zmiany od wersji 0.32.9: https://github.com/ollama/ollama/compare/v0.32.9...v0.32.13`,
    fr_FR: `Met à jour Ollama vers 0.32.13, en couvrant tout ce qui est sorti depuis 0.32.9.

- Ajoute Qwen 3.8 27B (\`ollama run qwen3.8:27b\`), avec la prise en charge des instructions développeur.
- Les modèles sans \`repeat_penalty\` défini utilisent désormais 1.0 (désactivé) au lieu de 1.1, comme les autres moteurs, ce qui accélère le décodage spéculatif. Si un ancien modèle se met à se répéter, définissez le paramètre pour ce modèle.
- L'API responses compatible OpenAI prend en charge la recherche web, et \`ollama launch\` fonctionne maintenant avec DeepSeek Harness et Muse Code, la CLI de programmation agentique de Meta.
- Correction de la vérification des blobs ignorée lorsque la configuration et la couche d'un manifeste OCI partagent le même digest.
- Préremplissage plus rapide sur les modèles NVFP4 MLX et mises à jour des modèles de prompt pour Muse Glimmer.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.32.13
Tous les changements depuis 0.32.9 : https://github.com/ollama/ollama/compare/v0.32.9...v0.32.13`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
