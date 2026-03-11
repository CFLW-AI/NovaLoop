"use client";

const phases = [
  {
    order: "1",
    session: "A",
    label: "Cold Start",
    color: "#737373",
    description: "Surface underused sources from the corpus to prevent frontier convergence.",
  },
  {
    order: "2",
    session: "A",
    label: "Phase 1",
    color: "#3b82f6",
    description: "Search top frontier questions from multiple angles. Apply the 3D Outcome Matrix. Output: grounded insights with full source linking.",
  },
  {
    order: "3",
    session: "A",
    label: "Phase 2",
    color: "#8b5cf6",
    description: "Bridge discipline combinations not covered in Phase 1. Output: cross-domain insights.",
  },
  {
    order: "4",
    session: "A",
    label: "Handoff",
    color: "#737373",
    description: "Write session_handoff.json with all insight URLs, key evidence, and strongest hypotheses for stress testing.",
  },
  {
    order: "5",
    session: "B",
    label: "Phase 3",
    color: "#ef4444",
    description: "Adversarial stress test: search for contradicting evidence, null results, and boundary conditions on the strongest claims.",
  },
  {
    order: "6",
    session: "B",
    label: "Phase 4",
    color: "#f59e0b",
    description: "Meta-synthesis across all of the night's insights. Update frontier: retire questions, replace with sharper versions.",
  },
  {
    order: "7",
    session: "B",
    label: "Phase 4.5",
    color: "#10b981",
    description: "Self-monitoring: record design observations and detect emergent frameworks for the registry.",
  },
  {
    order: "8",
    session: "B",
    label: "Phase 5",
    color: "#06b6d4",
    description: "Create check-in page: provocations, full insight summaries, updated frontier, and annotation callouts for human steering.",
  },
];

export function NightlyTimeline() {
  return (
    <div className="relative py-8">
      {/* Vertical line */}
      <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border" />

      <div className="space-y-6">
        {phases.map((phase, i) => (
          <div key={i} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}>
            <div className="w-[72px] text-right shrink-0">
              <span className="text-xs font-mono text-muted">Step {phase.order}</span>
            </div>

            {/* Dot */}
            <div className="relative shrink-0 mt-1.5">
              <div
                className="w-3 h-3 rounded-full border-2"
                style={{ borderColor: phase.color, backgroundColor: phase.color + "40" }}
              />
            </div>

            <div className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: phase.color + "20", color: phase.color }}
                >
                  {phase.label}
                </span>
                <span className="text-xs text-muted font-mono">Session {phase.session}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
