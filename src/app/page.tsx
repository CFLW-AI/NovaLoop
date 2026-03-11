import Link from "next/link";
import { LoopDiagram } from "../components/LoopDiagram";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20 animate-fade-in">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Nova<span className="text-accent">Loop</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-4">
          An autonomous nightly research synthesis engine that compounds
          insight quality across iterations through five recursive feedback
          loops.
        </p>
        <p className="text-sm text-muted max-w-xl mx-auto mb-8">
          Built with Claude Code, Notion MCP, and four text files.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/architecture"
            className="px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/reproduce"
            className="px-6 py-3 rounded-lg border border-border text-sm font-medium hover:bg-surface-raised transition-colors"
          >
            Reproduce It
          </Link>
        </div>
      </section>

      {/* What it does */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">What It Does</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Nightly Synthesis"
            description="Every night, the system searches a 1,600+ source corpus across 15 topic categories, generating 6-10 cross-textual insights grounded in named sources with full evidence chains."
          />
          <Card
            title="Adversarial Testing"
            description="The two strongest claims from each night are stress-tested against contradicting evidence, null results, and boundary conditions. Claims that survive are upgraded; those that don't are qualified."
          />
          <Card
            title="Compounding Quality"
            description="Each iteration sharpens the research frontier, accumulates analytical frameworks, rotates the corpus, and reads human annotations — so night 50 is categorically better than night 1."
          />
        </div>
      </section>

      {/* Recursive loops */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-4 text-center">Five Recursive Feedback Loops</h2>
        <p className="text-muted text-center text-sm mb-8 max-w-xl mx-auto">
          The system is not a pipeline that runs the same way each time. It is a
          recursive engine where each iteration&apos;s output modifies the next
          iteration&apos;s input.
        </p>
        <LoopDiagram />
      </section>

      {/* Key properties */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Key Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Property
            label="Conditioned Claims"
            value="Every insight is evaluated against a 3D matrix: outcome type, timescale, and prior knowledge level. Flat claims are rejected."
          />
          <Property
            label="Evidence Chains"
            value="Every insight page links to named sources in the corpus. Source linking is non-negotiable — it makes the evidence trail auditable."
          />
          <Property
            label="Frontier Management"
            value="Research questions carry explicit statuses (FRONTIER, EXPLORED, PARTIALLY ANSWERED, BOUNDARY MAPPED, ANSWERED, EXHAUSTED) and evolve each night."
          />
          <Property
            label="Self-Monitoring"
            value="Phase 4.5 records design observations and detects emergent frameworks. The system proposes improvements to its own methodology."
          />
          <Property
            label="Human Steering"
            value="Check-in pages present provocations before answers. Callout annotations anywhere in the page steer the next night's research."
          />
          <Property
            label="Context Preservation"
            value="Session A/B split ensures adversarial testing and meta-synthesis run with a full context window, not a depleted one."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 border-t border-border">
        <h2 className="text-xl font-bold mb-4">Explore the Architecture</h2>
        <div className="flex gap-4 justify-center text-sm">
          <Link href="/architecture" className="text-accent hover:underline">
            Nightly Cycle &rarr;
          </Link>
          <Link href="/recursion" className="text-accent hover:underline">
            Recursive Properties &rarr;
          </Link>
          <Link href="/reproduce" className="text-accent hover:underline">
            Build Your Own &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface-raised p-6 hover:border-accent/30 transition-colors">
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function Property({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 p-4 rounded border border-border bg-surface">
      <div>
        <p className="text-sm font-medium mb-1">{label}</p>
        <p className="text-xs text-muted leading-relaxed">{value}</p>
      </div>
    </div>
  );
}
