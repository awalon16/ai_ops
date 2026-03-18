# AI Ops Hackathon Prototype

This repository contains an interactive static prototype for the **NovaOps AI Command Center**, built from the concept in [`docs/ai-ops-platform-plan.md`](docs/ai-ops-platform-plan.md).

## Included prototype
- `index.html` — a richer single-pane-of-glass dashboard with tenant switching, scene-based demo storytelling, AI assistant tabs, and executive briefing sections.
- `styles.css` — an aurora-glass visual system with responsive layouts, severity states, dependency graph styling, and mission-control presentation.
- `script.js` — a data-driven demo engine that renders tenant-specific scenes, AI evidence, automation actions, and timeline states.
- `docs/ai-ops-platform-plan.md` — the original product, architecture, automation, and demo blueprint.

## Demo capabilities implemented
- Multi-tenant presentation with Helios Financial Group and Northstar Telecom scenarios.
- Step-based hackathon storytelling: calm posture, live incident, and recovery/executive briefing.
- AI assistant tabs for Ask, Explain, Act, and Briefing views.
- Business-aware service tiles, regional status cards, dependency graph, and executive headlines.
- Demo-story autoplay and scene progression through the primary action CTA.

## Run locally
```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
