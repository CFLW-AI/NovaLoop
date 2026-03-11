interface FileProps {
  name: string;
  description: string;
  role: string;
}

const files: FileProps[] = [
  {
    name: "program.md",
    description: "Full system specification — databases, taxonomy, quality criteria, phase definitions, 3D Matrix, frontier vocabulary",
    role: "Source of truth",
  },
  {
    name: "reference.md",
    description: "Compact runtime reference card — DB IDs, formats, linking rules. Loaded by every scheduled task.",
    role: "Runtime reference",
  },
  {
    name: "state.json",
    description: "Persistent state — iteration counter, frontier questions with status, recent source/insight URLs, nightly log, check-in page URLs",
    role: "Cross-iteration memory",
  },
  {
    name: "session_handoff.json",
    description: "Session A writes, Session B reads. Contains all Phase 1+2 insight URLs, key evidence, strongest hypotheses for adversarial testing.",
    role: "Inter-session bridge",
  },
];

export function FileTree() {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-muted font-mono text-xs">~/AutoResearch/</span>
      </div>
      <div className="space-y-3">
        {files.map((file) => (
          <div key={file.name} className="flex items-start gap-3 pl-4 border-l border-border">
            <div className="shrink-0 mt-0.5">
              <span className="font-mono text-sm text-accent">{file.name}</span>
              <span className="ml-2 text-xs text-muted font-mono bg-surface-raised px-1.5 py-0.5 rounded">
                {file.role}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-muted">
          + Scheduled task SKILL.md files (thin dispatchers that read program.md at runtime)
        </p>
      </div>
    </div>
  );
}
