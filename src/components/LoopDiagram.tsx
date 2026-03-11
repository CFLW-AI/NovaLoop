"use client";

const loops = [
  {
    name: "Frontier Recursion",
    description: "Questions sharpen each night based on what was answered, exhausted, or boundary-mapped",
    color: "#3b82f6",
    radius: 180,
  },
  {
    name: "Framework Recursion",
    description: "Emergent analytical lenses compound — each new framework filters all future insights",
    color: "#8b5cf6",
    radius: 150,
  },
  {
    name: "Adversarial Recursion",
    description: "Phase 3 stress-tests the strongest claims — preventing confirmation bias from compounding",
    color: "#ef4444",
    radius: 120,
  },
  {
    name: "Human-in-the-Loop",
    description: "Callout annotations steer the next night's research toward what matters most",
    color: "#f59e0b",
    radius: 90,
  },
  {
    name: "Cross-Iteration Memory",
    description: "state.json preserves frontier evolution, source rotation, and insight accumulation",
    color: "#10b981",
    radius: 60,
  },
];

export function LoopDiagram() {
  return (
    <div className="relative flex flex-col items-center py-12">
      <svg viewBox="0 0 400 400" className="w-full max-w-md" aria-label="Five nested recursive feedback loops">
        {loops.map((loop, i) => (
          <g key={loop.name}>
            <circle
              cx="200"
              cy="200"
              r={loop.radius}
              fill="none"
              stroke={loop.color}
              strokeWidth="2"
              strokeDasharray="6 4"
              opacity="0.6"
              className="animate-flow"
              style={{ animationDuration: `${3 + i}s` }}
            />
            <circle
              cx={200 + loop.radius}
              cy="200"
              r="4"
              fill={loop.color}
            />
          </g>
        ))}
        <text x="200" y="195" textAnchor="middle" fill="#ededed" fontSize="11" fontFamily="monospace" fontWeight="bold">
          INSIGHT
        </text>
        <text x="200" y="210" textAnchor="middle" fill="#737373" fontSize="9" fontFamily="monospace">
          QUALITY
        </text>
      </svg>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full max-w-5xl">
        {loops.map((loop) => (
          <div
            key={loop.name}
            className="rounded border border-border bg-surface-raised p-3 text-center"
            style={{ borderTopWidth: 2, borderTopColor: loop.color }}
          >
            <p className="text-xs font-mono font-bold mb-1" style={{ color: loop.color }}>
              {loop.name}
            </p>
            <p className="text-xs text-muted leading-tight">{loop.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
