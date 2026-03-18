# AI Ops Hackathon Prototype

This repository now contains a lightweight static prototype for the **NovaOps AI Command Center**, built directly from the concept in [`docs/ai-ops-platform-plan.md`](docs/ai-ops-platform-plan.md).

## Included prototype
- `index.html` — executive-grade “single pane of glass” dashboard with global posture, incident story, AI assistant, and remediation workflow.
- `styles.css` — aurora-glass visual system inspired by the plan’s mission-control / executive-cockpit design language.
- `script.js` — lightweight simulated state rotation for live AI summaries, health scores, and automation CTAs.
- `docs/ai-ops-platform-plan.md` — the original product and demo blueprint.

## Run locally
```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
