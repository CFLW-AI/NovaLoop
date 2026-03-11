interface PhaseCardProps {
  phase: string;
  title: string;
  session: "A" | "B";
  color: string;
  children: React.ReactNode;
}

export function PhaseCard({ phase, title, session, color, children }: PhaseCardProps) {
  return (
    <div
      className="rounded-lg border border-border bg-surface-raised p-6 transition-all hover:border-border/80"
      style={{ borderLeftWidth: 3, borderLeftColor: color }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-mono font-bold px-2 py-0.5 rounded"
          style={{ backgroundColor: color + "20", color }}
        >
          {phase}
        </span>
        <span className="text-xs text-muted font-mono">Session {session}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </div>
  );
}
