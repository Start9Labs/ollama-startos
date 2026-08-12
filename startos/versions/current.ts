import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.32.9:0',
  releaseNotes: {
    en_US: `Updated Ollama to 0.32.9, covering everything released since 0.32.5.

- New models: Muse Glimmer, Meta's 30B multimodal model built for agent workloads, now runs on CPU and AMD GPUs, and NVIDIA Nemotron 3.5 Lightning is supported through the new Nemotron 3 architecture.
- OpenAI-compatible streaming on \`/v1/chat/completions\` now matches OpenAI's wire format: \`role\` only on the first chunk, \`finish_reason\` on its own chunk, and usage in a separate chunk with \`stream_options.include_usage\`.
- Truncated OpenAI responses now report \`finish_reason: "length"\` instead of \`"tool_calls"\`, and the responses API expands namespaced tool declarations.
- Cloud-only models that publish no default tag now offer their \`:cloud\` tag instead of failing.
- Experimental image generation has been removed for now; stay on 0.32.5 if you rely on it.
- Updated the llama.cpp engine, which powers CPU and AMD GPU inference on StartOS.

Full release notes: https://github.com/ollama/ollama/releases/tag/v0.32.9
All changes since 0.32.5: https://github.com/ollama/ollama/compare/v0.32.5...v0.32.9`,
    es_ES: `Actualiza Ollama a 0.32.9, incluyendo todo lo publicado desde 0.32.5.

- Nuevos modelos: Muse Glimmer, el modelo multimodal de 30B de Meta creado para cargas de trabajo de agentes, ya funciona en CPU y en GPU AMD, y NVIDIA Nemotron 3.5 Lightning se admite mediante la nueva arquitectura Nemotron 3.
- La transmisión compatible con OpenAI en \`/v1/chat/completions\` ahora respeta el formato de OpenAI: \`role\` solo en el primer fragmento, \`finish_reason\` en su propio fragmento y el uso en un fragmento aparte con \`stream_options.include_usage\`.
- Las respuestas de OpenAI truncadas ahora informan \`finish_reason: "length"\` en lugar de \`"tool_calls"\`, y la API de respuestas expande las declaraciones de herramientas con espacio de nombres.
- Los modelos exclusivos de la nube que no publican una etiqueta predeterminada ahora ofrecen su etiqueta \`:cloud\` en vez de fallar.
- Se ha eliminado por ahora la generación experimental de imágenes; permanece en 0.32.5 si dependes de ella.
- Se actualizó el motor llama.cpp, que impulsa la inferencia en CPU y GPU AMD en StartOS.

Notas de la versión completas: https://github.com/ollama/ollama/releases/tag/v0.32.9
Todos los cambios desde 0.32.5: https://github.com/ollama/ollama/compare/v0.32.5...v0.32.9`,
    de_DE: `Aktualisiert Ollama auf 0.32.9 und umfasst alles, was seit 0.32.5 veröffentlicht wurde.

- Neue Modelle: Muse Glimmer, Metas multimodales 30B-Modell für Agenten-Workloads, läuft jetzt auf CPUs und AMD-GPUs, und NVIDIA Nemotron 3.5 Lightning wird über die neue Nemotron-3-Architektur unterstützt.
- Das OpenAI-kompatible Streaming über \`/v1/chat/completions\` entspricht jetzt dem Format von OpenAI: \`role\` nur im ersten Chunk, \`finish_reason\` in einem eigenen Chunk und die Nutzungsdaten in einem separaten Chunk mit \`stream_options.include_usage\`.
- Abgeschnittene OpenAI-Antworten melden nun \`finish_reason: "length"\` statt \`"tool_calls"\`, und die Responses-API erweitert Werkzeugdeklarationen mit Namensraum.
- Reine Cloud-Modelle ohne veröffentlichtes Standard-Tag bieten jetzt ihr \`:cloud\`-Tag an, statt fehlzuschlagen.
- Die experimentelle Bildgenerierung wurde vorerst entfernt; bleibe bei 0.32.5, wenn du sie benötigst.
- Die llama.cpp-Engine wurde aktualisiert; sie treibt unter StartOS die Inferenz auf CPUs und AMD-GPUs an.

Vollständige Versionshinweise: https://github.com/ollama/ollama/releases/tag/v0.32.9
Alle Änderungen seit 0.32.5: https://github.com/ollama/ollama/compare/v0.32.5...v0.32.9`,
    pl_PL: `Aktualizuje Ollama do 0.32.9, obejmując wszystko, co wydano od wersji 0.32.5.

- Nowe modele: Muse Glimmer, multimodalny model 30B firmy Meta stworzony z myślą o agentach, działa teraz na procesorach i układach GPU AMD, a NVIDIA Nemotron 3.5 Lightning jest obsługiwany dzięki nowej architekturze Nemotron 3.
- Zgodne z OpenAI strumieniowanie w \`/v1/chat/completions\` odpowiada teraz formatowi OpenAI: \`role\` tylko w pierwszym fragmencie, \`finish_reason\` we własnym fragmencie, a dane o zużyciu w osobnym fragmencie z \`stream_options.include_usage\`.
- Skrócone odpowiedzi OpenAI zgłaszają teraz \`finish_reason: "length"\` zamiast \`"tool_calls"\`, a interfejs responses rozwija deklaracje narzędzi z przestrzenią nazw.
- Modele wyłącznie chmurowe bez domyślnego tagu proponują teraz swój tag \`:cloud\` zamiast kończyć się błędem.
- Eksperymentalne generowanie obrazów zostało na razie usunięte; pozostań przy 0.32.5, jeśli z niego korzystasz.
- Zaktualizowano silnik llama.cpp, który w StartOS obsługuje wnioskowanie na procesorach i układach GPU AMD.

Pełne informacje o wydaniu: https://github.com/ollama/ollama/releases/tag/v0.32.9
Wszystkie zmiany od wersji 0.32.5: https://github.com/ollama/ollama/compare/v0.32.5...v0.32.9`,
    fr_FR: `Met à jour Ollama vers 0.32.9, en couvrant tout ce qui est sorti depuis 0.32.5.

- Nouveaux modèles : Muse Glimmer, le modèle multimodal 30B de Meta conçu pour les charges de travail d'agents, fonctionne désormais sur processeur et sur GPU AMD, et NVIDIA Nemotron 3.5 Lightning est pris en charge via la nouvelle architecture Nemotron 3.
- Le streaming compatible OpenAI sur \`/v1/chat/completions\` respecte désormais le format d'OpenAI : \`role\` uniquement dans le premier fragment, \`finish_reason\` dans son propre fragment et l'utilisation dans un fragment distinct avec \`stream_options.include_usage\`.
- Les réponses OpenAI tronquées indiquent maintenant \`finish_reason: "length"\` au lieu de \`"tool_calls"\`, et l'API responses développe les déclarations d'outils avec espace de noms.
- Les modèles uniquement cloud sans étiquette par défaut proposent désormais leur étiquette \`:cloud\` au lieu d'échouer.
- La génération d'images expérimentale a été retirée pour le moment ; restez en 0.32.5 si vous en dépendez.
- Le moteur llama.cpp a été mis à jour ; il assure l'inférence sur processeur et sur GPU AMD dans StartOS.

Notes de version complètes : https://github.com/ollama/ollama/releases/tag/v0.32.9
Tous les changements depuis 0.32.5 : https://github.com/ollama/ollama/compare/v0.32.5...v0.32.9`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
