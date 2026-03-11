export default function RecursionPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">
        Recursive Properties
      </h1>
      <p className="text-muted mb-12 max-w-2xl animate-fade-in delay-1">
        AutoResearch compounds insight quality across iterations through five
        nested feedback loops. Each loop operates at a different timescale,
        creating a system that genuinely improves over time.
      </p>

      {/* Core idea */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Why Recursion Matters</h2>
        <div className="rounded-lg border border-border bg-surface p-6 max-w-3xl">
          <p className="text-sm text-muted leading-relaxed mb-4">
            Most AI research tools are stateless &mdash; every query starts from
            zero. AutoResearch inverts this by making every output feed back
            into the next iteration&apos;s inputs. The system&apos;s questions
            sharpen, its analytical vocabulary grows, and its source diversity
            expands &mdash; all without manual intervention.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            The key architectural decision: separate the loops by timescale.
            Nightly loops handle tactical improvement. Multi-day loops handle
            strategic redirection. This prevents short-term noise from
            corrupting long-term trajectory.
          </p>
        </div>
      </section>

      {/* Five loops */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">The Five Feedback Loops</h2>
        <div className="space-y-8">
          <LoopCard
            number={1}
            name="Frontier Evolution"
            timescale="Nightly"
            color="#3b82f6"
            mechanism="Phase 4 retires 2-3 frontier questions per cycle (marking them ANSWERED, EXHAUSTED, or BOUNDARY MAPPED) and replaces them with sharper successors derived from the night's findings."
            effect="Research questions compound in specificity. Early iterations ask broad questions; by iteration 20+, questions target precise gaps identified by accumulated evidence."
            stateKey="frontier_questions[] in state.json"
          />

          <LoopCard
            number={2}
            name="Framework Detection"
            timescale="Multi-day"
            color="#10b981"
            mechanism="Phase 4.5 scans insights for recurring patterns across 2+ insights and 2+ iterations. Patterns that meet this threshold are registered as Candidate frameworks in the Framework Registry."
            effect="The system develops its own analytical vocabulary. Frameworks progress through a lifecycle (Candidate, Emerged, Active Lens, Boundary Mapped, Superseded) and, once active, are applied as lenses in future synthesis."
            stateKey="Framework Registry database"
          />

          <LoopCard
            number={3}
            name="Adversarial Pressure"
            timescale="Nightly"
            color="#ef4444"
            mechanism="Phase 3 takes the night's 2 strongest hypotheses and actively searches for contradicting evidence, null results, boundary conditions, and replication failures."
            effect="Claims are stress-tested before they enter the output corpus. Surviving claims are upgraded with confidence qualifiers; falsified claims are downgraded or retired. This prevents the system from accumulating plausible-sounding but unsupported assertions."
            stateKey="Frontier Status Vocabulary tags on each insight"
          />

          <LoopCard
            number={4}
            name="Human-in-the-Loop"
            timescale="Daily"
            color="#f59e0b"
            mechanism="Phase 5 creates a check-in page with 3 provocations (genuine intellectual puzzles, not summaries). The human annotates during the day. Phase 1 of the next cycle reads these annotations before searching."
            effect="Human judgment steers research direction without requiring the human to manage the system. Annotations can redirect frontier questions, flag blind spots, or connect findings to domain knowledge the system lacks."
            stateKey="daily_checkin_pages[] in state.json"
          />

          <LoopCard
            number={5}
            name="Cross-Iteration Memory"
            timescale="Continuous"
            color="#8b5cf6"
            mechanism="state.json persists frontier questions with status history, recent source URLs (preventing re-retrieval), recent insight URLs, and the nightly log. Cold Start corpus rotation ensures source diversity by prioritizing underrepresented topic categories."
            effect="Each iteration builds on everything that came before. The system avoids revisiting exhausted sources, remembers which questions led to dead ends, and maintains a growing evidence base that new insights must be consistent with."
            stateKey="state.json (entire file)"
          />
        </div>
      </section>

      {/* Compounding effects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Compounding Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CompoundCard
            title="Question Sharpening"
            description="Broad questions are replaced by precise ones. 'How does X work?' becomes 'Under what boundary conditions does mechanism Y in X break down when Z is present?'"
            iterations="~5-10 iterations"
          />
          <CompoundCard
            title="Vocabulary Growth"
            description="The Framework Registry accumulates analytical lenses. Once a framework reaches Active Lens status, it becomes part of the system's permanent analytical toolkit."
            iterations="~10-20 iterations"
          />
          <CompoundCard
            title="Source Diversification"
            description="Cold Start rotation + recent_source_urls tracking ensures the corpus expands across all 15 topic categories rather than converging on familiar sources."
            iterations="Continuous"
          />
        </div>
      </section>

      {/* Quality mechanisms */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Quality Mechanisms</h2>
        <p className="text-sm text-muted mb-6 max-w-xl">
          Recursion alone isn&apos;t sufficient &mdash; without quality controls,
          a recursive system can compound errors just as easily as insights.
          These mechanisms prevent degradation.
        </p>
        <div className="space-y-4 max-w-3xl">
          <QualityItem
            name="3D Outcome Matrix"
            description="Every insight is classified along three dimensions: outcome type (causal mechanism, correlation, boundary condition, etc.) x timescale (immediate, medium-term, long-term) x prior knowledge level (novel, confirms, extends, contradicts). This prevents the system from generating only one type of insight."
          />
          <QualityItem
            name="Frontier Status Vocabulary"
            description="Standardized lifecycle for research questions: FRONTIER (active), EXPLORED (searched but inconclusive), PARTIALLY ANSWERED (evidence exists but incomplete), BOUNDARY MAPPED (limits identified), ANSWERED (resolved), EXHAUSTED (no more productive angles). Prevents zombie questions from consuming search budget."
          />
          <QualityItem
            name="Evidence Chain Requirements"
            description="Every claim must link to specific source pages in the Sources database. Claims without evidence links are flagged. This creates an auditable chain from assertion back to original source."
          />
          <QualityItem
            name="Conditioned Claims"
            description="The system is trained to express claims with explicit conditions: 'Under conditions X, Y tends to produce Z (based on sources A, B, C).' Unconditional universals are flagged for adversarial testing."
          />
        </div>
      </section>

      {/* Design observations loop */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Self-Improvement Mechanism</h2>
        <div className="rounded-lg border border-border bg-surface p-6 max-w-3xl">
          <p className="text-sm text-muted leading-relaxed mb-4">
            Phase 4.5 also records <strong className="text-foreground">Design Observations</strong> &mdash;
            proposed improvements to the system&apos;s own methodology. These
            follow a lifecycle: Proposed &rarr; Reviewed &rarr; Accepted &rarr;
            Implemented (or Deferred / Rejected).
          </p>
          <p className="text-sm text-muted leading-relaxed">
            This creates a sixth, meta-level feedback loop: the system doesn&apos;t
            just improve its research &mdash; it proposes improvements to how it
            researches. Human review gates which proposals get implemented,
            preventing runaway self-modification while allowing genuine
            methodological evolution.
          </p>
        </div>
      </section>
    </div>
  );
}

function LoopCard({
  number,
  name,
  timescale,
  color,
  mechanism,
  effect,
  stateKey,
}: {
  number: number;
  name: string;
  timescale: string;
  color: string;
  mechanism: string;
  effect: string;
  stateKey: string;
}) {
  return (
    <div
      className="rounded-lg border border-border bg-surface p-6"
      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {number}
        </span>
        <h3 className="font-bold">{name}</h3>
        <span className="ml-auto text-xs font-mono text-muted bg-surface-raised px-2 py-0.5 rounded">
          {timescale}
        </span>
      </div>
      <div className="space-y-3 text-sm text-muted">
        <div>
          <span className="text-xs font-mono text-accent block mb-1">MECHANISM</span>
          <p>{mechanism}</p>
        </div>
        <div>
          <span className="text-xs font-mono text-accent block mb-1">COMPOUNDING EFFECT</span>
          <p>{effect}</p>
        </div>
        <div className="pt-2 border-t border-border">
          <span className="text-xs font-mono text-muted">
            State: <code className="text-accent">{stateKey}</code>
          </span>
        </div>
      </div>
    </div>
  );
}

function CompoundCard({
  title,
  description,
  iterations,
}: {
  title: string;
  description: string;
  iterations: string;
}) {
  return (
    <div className="rounded border border-border bg-surface p-5">
      <h3 className="font-medium text-sm mb-2">{title}</h3>
      <p className="text-xs text-muted leading-relaxed mb-3">{description}</p>
      <span className="text-xs font-mono text-accent">{iterations}</span>
    </div>
  );
}

function QualityItem({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 pl-4 border-l-2 border-border">
      <div>
        <h4 className="font-medium text-sm mb-1">{name}</h4>
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
