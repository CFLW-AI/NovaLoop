# NovaLoop

An autonomous nightly research synthesis engine that compounds insight quality across iterations through five recursive feedback loops.

Built with Claude Code, Notion MCP, and four text files.

## What It Does

Every night, NovaLoop runs a multi-phase research cycle:

1. **Cold Start** — Rotates the source corpus to prevent convergence
2. **Phase 1** — Frontier-driven wide synthesis across top research questions
3. **Phase 2** — Cross-discipline deep synthesis bridging topic clusters
4. **Phase 3** — Adversarial stress testing of the strongest claims
5. **Phase 4** — Meta-synthesis and frontier question evolution
6. **Phase 4.5** — Self-monitoring, design observations, and framework detection
7. **Phase 5** — Human-facing check-in page with provocations for steering

## Architecture

The entire system is four text files:

- `program.md` — Full system specification (source of truth)
- `reference.md` — Compact runtime reference card
- `state.json` — Persistent cross-iteration memory
- `session_handoff.json` — Inter-session bridge

Scheduled tasks are thin dispatchers that read `program.md` at runtime.

## Documentation Site

The live documentation site is deployed at [nova-loop-cflw.vercel.app](https://nova-loop-cflw.vercel.app) and covers:

- **Architecture** — File structure, session split, nightly timeline, phase details
- **Recursive Properties** — The five feedback loops and how they compound
- **Reproduce** — Step-by-step guide to build your own instance
- **About** — Background on the project and its creator

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

Open architecture. See the [Reproduce](https://nova-loop-cflw.vercel.app/reproduce) page for setup instructions.
