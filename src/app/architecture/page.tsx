import { NightlyTimeline } from "../../components/NightlyTimeline";
import { PhaseCard } from "../../components/PhaseCard";
import { FileTree } from "../../components/FileTree";

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">Architecture</h1>
      <p className="text-muted mb-12 max-w-2xl animate-fade-in delay-1">
        The system runs as two scheduled sessions per night, connected by a JSON
        handoff file. Four text files constitute the entire program.
      </p>

      {/* File architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">File Architecture</h2>
        <p className="text-sm text-muted mb-6 max-w-xl">
          The entire system is four files. Scheduled tasks are thin dispatchers
          that read <code className="text-accent">program.md</code> at runtime
          — the program spec is the single source of truth.
        </p>
        <FileTree />
      </section>

      {/* Session split */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Session A / B Split</h2>
        <p className="text-sm text-muted mb-6 max-w-xl">
          The nightly cycle is split into two sessions to preserve context
          windows. Session A does search-heavy work. Session B gets a fresh
          context for the quality-critical adversarial and synthesis phases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-mono text-sm text-accent mb-3">SESSION A — 9:30 PM</h3>
            <ul className="text-sm text-muted space-y-2">
              <li>Cold Start corpus rotation</li>
              <li>Phase 1: Frontier-driven wide synthesis</li>
              <li>Phase 2: Cross-discipline deep synthesis</li>
              <li className="text-muted/60">Writes session_handoff.json</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-mono text-sm text-accent mb-3">SESSION B — 11:00 PM</h3>
            <ul className="text-sm text-muted space-y-2">
              <li>Phase 3: Adversarial stress test</li>
              <li>Phase 4: Meta-synthesis + frontier update</li>
              <li>Phase 4.5: Design observations + framework detection</li>
              <li>Phase 5: Check-in page creation</li>
            </ul>
          </div>
        </div>

        <div className="rounded border border-border bg-surface p-4 text-xs font-mono text-muted">
          <p>Session A writes &rarr; session_handoff.json &rarr; Session B reads</p>
          <p className="mt-1">Contains: insight URLs, key evidence objects, strongest hypotheses, source URLs</p>
        </div>
      </section>

      {/* Nightly timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Nightly Timeline</h2>
        <NightlyTimeline />
      </section>

      {/* Phase details */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Phase Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PhaseCard phase="Cold Start" title="Corpus Rotation" session="A" color="#737373">
            <p>
              Before any frontier search, surface 3-5 sources not in
              recent_source_urls. Search underrepresented topic categories.
              These prevent the frontier from converging too narrowly and
              introduce serendipitous connections.
            </p>
          </PhaseCard>

          <PhaseCard phase="Phase 1" title="Frontier-Driven Wide Synthesis" session="A" color="#3b82f6">
            <p>
              Read previous day&apos;s check-in page for human annotations. Search
              top 3-5 FRONTIER questions (3 angles each, 10-15 sources per
              cluster). Apply the 3D Outcome Matrix. Output: 3-5 grounded
              insights with full source linking.
            </p>
          </PhaseCard>

          <PhaseCard phase="Phase 2" title="Deep Cross-Textual Synthesis" session="A" color="#8b5cf6">
            <p>
              Search 3 topic cluster combinations not covered in Phase 1.
              Bridge disciplines (e.g., Neuroscience + Labor Economics). The
              goal is connections the frontier searches would never find.
              Output: 3-5 higher-order insights.
            </p>
          </PhaseCard>

          <PhaseCard phase="Phase 3" title="Adversarial Stress Test" session="B" color="#ef4444">
            <p>
              Take the 2 strongest hypotheses. Search for contradicting
              evidence, null results, boundary conditions, replication
              failures. Classify each using the Frontier Status Vocabulary.
              Claims that survive are upgraded; those that don&apos;t are qualified.
            </p>
          </PhaseCard>

          <PhaseCard phase="Phase 4" title="Meta-Synthesis + Frontier Update" session="B" color="#f59e0b">
            <p>
              Generate 2-3 meta-level insights spanning the night&apos;s full
              output. Update the research frontier: retire 2-3 questions
              (ANSWERED / EXHAUSTED / BOUNDARY MAPPED), replace with sharper
              versions.
            </p>
          </PhaseCard>

          <PhaseCard phase="Phase 4.5" title="Design Observations + Framework Detection" session="B" color="#10b981">
            <p>
              Self-monitoring step. Record methodology observations (proposed
              improvements to search strategy, quality pipeline, frontier
              management). Detect emergent frameworks — recurring patterns
              across 2+ insights and 2+ iterations — and register them as
              Candidates.
            </p>
          </PhaseCard>

          <PhaseCard phase="Phase 5" title="Nightly Check-In Page" session="B" color="#06b6d4">
            <p>
              Create a fully self-contained check-in page: 3 provocations
              (questions before answers), full insight summaries with source
              links, updated frontier, and callout annotation blocks. This
              page IS the human-in-the-loop mechanism.
            </p>
          </PhaseCard>
        </div>
      </section>

      {/* Databases */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Database Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DbCard name="Sources" icon="📚" count="1,600+" purpose="Research corpus — papers, articles, reports across 15 topic categories" />
          <DbCard name="Output" icon="💭" count="Growing" purpose="All generated insights with type taxonomy, source relations, and full evidence" />
          <DbCard name="Inbox" icon="📬" count="Nightly" purpose="Check-in pages and weekly syntheses — the human interface" />
          <DbCard name="Framework Registry" icon="🧩" count="10+" purpose="Emergent analytical frameworks with lifecycle: Candidate → Emerged → Active Lens" />
          <DbCard name="Design Observations" icon="🔧" count="Per-run" purpose="System self-observations: Proposed → Reviewed → Accepted → Implemented" />
          <DbCard name="Questions Log" icon="📋" count="1 page" purpose="Full history of every frontier question explored, with status transitions" />
        </div>
      </section>
    </div>
  );
}

function DbCard({
  name,
  icon,
  count,
  purpose,
}: {
  name: string;
  icon: string;
  count: string;
  purpose: string;
}) {
  return (
    <div className="rounded border border-border bg-surface p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{icon}</span>
        <span className="font-medium text-sm">{name}</span>
        <span className="ml-auto text-xs text-muted font-mono">{count}</span>
      </div>
      <p className="text-xs text-muted leading-relaxed">{purpose}</p>
    </div>
  );
}
