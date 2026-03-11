export default function ReproducePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">
        Reproduce This System
      </h1>
      <p className="text-muted mb-12 max-w-2xl animate-fade-in delay-1">
        NovaLoop is fully reproducible. The entire system is four text
        files, a Notion workspace, and Claude Code scheduled tasks. Here&apos;s
        how to set it up from scratch.
      </p>

      {/* Prerequisites */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Prerequisites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PrereqCard
            name="Claude Code"
            description="CLI agent with scheduled tasks support. This is the execution engine — scheduled tasks run the nightly cycle automatically."
            link="https://docs.anthropic.com/en/docs/claude-code"
          />
          <PrereqCard
            name="Notion + MCP Server"
            description="Notion workspace for databases (Sources, Output, Inbox, Framework Registry, Design Observations, Questions Log). The Notion MCP server lets Claude read and write pages."
            link="https://www.notion.so"
          />
          <PrereqCard
            name="Web Search MCP"
            description="Any MCP server that provides web search capabilities. Used for all research phases (frontier search, adversarial testing, cold start corpus rotation)."
          />
          <PrereqCard
            name="bioRxiv / PubMed MCP (optional)"
            description="For scientific research domains. These provide structured access to preprint and published paper databases."
          />
        </div>
      </section>

      {/* Step by step */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Setup Steps</h2>
        <div className="space-y-6 max-w-3xl">
          <Step number={1} title="Create the Notion databases">
            <p className="mb-3">
              Create six databases in your Notion workspace. Each database
              needs specific properties &mdash; the program spec defines all
              required schemas.
            </p>
            <div className="space-y-2">
              <DbRow name="Sources" purpose="Research corpus with 15 topic categories, source type taxonomy, and URL tracking" />
              <DbRow name="Output" purpose="Generated insights with type taxonomy (Mechanism, Tension, Pattern, Bridge, etc.), source relations, and evidence fields" />
              <DbRow name="Inbox" purpose="Check-in pages and weekly syntheses — the human-facing interface" />
              <DbRow name="Framework Registry" purpose="Emergent frameworks with lifecycle: Candidate, Emerged, Active Lens, Boundary Mapped, Superseded" />
              <DbRow name="Design Observations" purpose="System self-observations with pipeline: Proposed, Reviewed, Accepted, Implemented / Deferred / Rejected" />
              <DbRow name="Questions Log" purpose="Single page tracking every frontier question with status transitions" />
            </div>
          </Step>

          <Step number={2} title="Create the four core files">
            <p className="mb-3">
              These live in a project directory (e.g.,{" "}
              <code className="text-accent">~/NovaLoop/</code>). All four
              are plain text &mdash; no build step, no dependencies.
            </p>
            <div className="space-y-2">
              <FileRow
                name="program.md"
                description="Full system specification. Defines databases, taxonomy, quality criteria, phase definitions, 3D Outcome Matrix, Frontier Status Vocabulary, and all rules. This is the single source of truth."
              />
              <FileRow
                name="reference.md"
                description="Compact runtime reference card. Contains database IDs, page formats, linking rules, and phase summaries. Loaded by every scheduled task for quick access."
              />
              <FileRow
                name="state.json"
                description="Persistent cross-iteration state. Contains iteration counter, frontier questions with status history, recent source/insight URLs, nightly log, and check-in page URLs."
              />
              <FileRow
                name="session_handoff.json"
                description="Inter-session bridge. Session A writes Phase 1+2 results; Session B reads them for adversarial testing. Prevents context window overflow."
              />
            </div>
          </Step>

          <Step number={3} title="Initialize state.json">
            <CodeBlock>{`{
  "iteration": 0,
  "frontier_questions": [
    {
      "id": "q1",
      "text": "Your first research question here",
      "status": "FRONTIER",
      "added_iteration": 0,
      "status_history": []
    }
  ],
  "recent_source_urls": [],
  "recent_insight_urls": [],
  "daily_checkin_pages": [],
  "nightly_log": []
}`}</CodeBlock>
            <p className="mt-3">
              Start with 5-8 frontier questions that define your research
              domain. These will evolve automatically as the system runs.
            </p>
          </Step>

          <Step number={4} title="Create scheduled tasks">
            <p className="mb-3">
              Create four Claude Code scheduled tasks. Each is a thin
              dispatcher that reads <code className="text-accent">program.md</code>{" "}
              at runtime &mdash; they don&apos;t contain the full instructions
              themselves.
            </p>
            <div className="space-y-2">
              <TaskRow
                name="Session A"
                schedule="9:30 PM nightly"
                phases="Cold Start + Phase 1 + Phase 2"
                description="Reads program.md, reference.md, and state.json. Executes search-heavy phases. Writes session_handoff.json."
              />
              <TaskRow
                name="Session B"
                schedule="11:00 PM nightly"
                phases="Phase 3 + Phase 4 + Phase 4.5 + Phase 5"
                description="Reads program.md, reference.md, state.json, and session_handoff.json. Fresh context for quality-critical adversarial and synthesis work."
              />
              <TaskRow
                name="Daily Check-In"
                schedule="8:00 AM daily"
                phases="Check-in page creation"
                description="Creates a Notion page with 3 provocations from last night's insights. This is the human-in-the-loop mechanism."
              />
              <TaskRow
                name="Weekly Synthesis"
                schedule="Sunday 10:00 AM"
                phases="Weekly meta-synthesis"
                description="Creates a cross-week synthesis page covering the past 7 iterations. Identifies trajectory-level patterns."
              />
            </div>
          </Step>

          <Step number={5} title="Configure the SKILL.md files">
            <p className="mb-3">
              Each scheduled task needs a SKILL.md file. The key pattern: every
              SKILL.md starts by reading the program spec, then follows it.
            </p>
            <CodeBlock>{`---
name: your-task-name
description: Brief description
---

## Load Program Spec

Read these files in order:
1. /path/to/program.md
2. /path/to/reference.md
3. /path/to/state.json

The program spec is the single source
of truth for all rules and formats.

## Execute

Follow the program spec instructions
for [Phase X / Check-In / Weekly].`}</CodeBlock>
            <p className="mt-3">
              This thin dispatcher pattern means you only edit{" "}
              <code className="text-accent">program.md</code> to change system
              behavior &mdash; the scheduled tasks never need updating.
            </p>
          </Step>

          <Step number={6} title="Run the first iteration">
            <p className="mb-3">
              Trigger Session A manually for the first run to verify everything
              works. Check that:
            </p>
            <ul className="text-sm text-muted space-y-1 list-disc list-inside">
              <li>Sources are being created in the Sources database</li>
              <li>Insights are being created in the Output database</li>
              <li>session_handoff.json is written correctly</li>
              <li>state.json is updated with new URLs and frontier status</li>
            </ul>
            <p className="mt-3">
              Then trigger Session B manually. Verify adversarial testing,
              meta-synthesis, and check-in page creation.
            </p>
          </Step>
        </div>
      </section>

      {/* Session split rationale */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Why Two Sessions?</h2>
        <div className="rounded-lg border border-border bg-surface p-6 max-w-3xl">
          <p className="text-sm text-muted leading-relaxed mb-4">
            The A/B session split is the most important architectural decision
            for token efficiency. Session A performs search-heavy work (15+
            web searches, 30+ source reads) that fills the context window.
            Session B gets a fresh context for the quality-critical phases
            &mdash; adversarial testing and meta-synthesis need maximum
            available context to reason carefully about evidence.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            The bridge between sessions is{" "}
            <code className="text-accent">session_handoff.json</code>, which
            contains structured data: insight URLs, key evidence objects
            (claim + evidence + source URL + confidence), strongest hypotheses
            for adversarial testing, and all source URLs from the session.
          </p>
        </div>
      </section>

      {/* Customization */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Customization Guide</h2>
        <div className="space-y-4 max-w-3xl">
          <CustomItem
            title="Change the research domain"
            description="Edit the frontier_questions in state.json and the topic_categories in program.md. The system will adapt its search strategy to whatever domain you define."
          />
          <CustomItem
            title="Adjust iteration frequency"
            description="Change the cron schedules on the scheduled tasks. The system works at any cadence — nightly, weekly, or on-demand. Adjust the Session B delay to give Session A enough time to complete."
          />
          <CustomItem
            title="Modify quality thresholds"
            description="The 3D Outcome Matrix dimensions, Frontier Status Vocabulary, and adversarial testing criteria are all defined in program.md. Tune these to match your domain's epistemic standards."
          />
          <CustomItem
            title="Add MCP data sources"
            description="The system uses whatever MCP servers are available. Add bioRxiv, PubMed, Consensus, or domain-specific APIs by connecting them to Claude Code. The SKILL.md files automatically use available tools."
          />
          <CustomItem
            title="Scale the Framework Registry"
            description="The detection threshold (2+ insights, 2+ iterations) can be tuned in program.md. Lower it for faster framework detection in data-rich domains; raise it for higher confidence in sparse domains."
          />
        </div>
      </section>

      {/* Architecture principles */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PrincipleCard
            title="Program Spec as Source of Truth"
            description="All behavior is defined in program.md. Scheduled tasks are thin dispatchers. This means the system can be fully understood by reading one file."
          />
          <PrincipleCard
            title="Text Files Over Code"
            description="The entire system is markdown and JSON — no custom code, no build step, no dependencies. This maximizes portability and minimizes maintenance."
          />
          <PrincipleCard
            title="Explicit State"
            description="All cross-iteration state lives in state.json. There's no hidden state, no database queries to reconstruct history. The JSON file IS the system's memory."
          />
          <PrincipleCard
            title="Human Gates"
            description="The system proposes; the human disposes. Check-in annotations steer research. Design observations require human review before implementation. Framework detection is automatic; framework promotion is manual."
          />
        </div>
      </section>
    </div>
  );
}

function PrereqCard({
  name,
  description,
  link,
}: {
  name: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="rounded border border-border bg-surface p-5">
      <h3 className="font-medium text-sm mb-2">{name}</h3>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
      {link && (
        <a
          href={link}
          className="text-xs text-accent hover:underline mt-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more &rarr;
        </a>
      )}
    </div>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
          {number}
        </span>
      </div>
      <div className="flex-1 pt-0.5">
        <h3 className="font-bold mb-3">{title}</h3>
        <div className="text-sm text-muted">{children}</div>
      </div>
    </div>
  );
}

function DbRow({ name, purpose }: { name: string; purpose: string }) {
  return (
    <div className="flex items-start gap-2 text-xs">
      <span className="font-mono text-accent shrink-0">{name}</span>
      <span className="text-muted">&mdash; {purpose}</span>
    </div>
  );
}

function FileRow({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="rounded border border-border bg-surface-raised p-3">
      <span className="font-mono text-sm text-accent">{name}</span>
      <p className="text-xs text-muted mt-1">{description}</p>
    </div>
  );
}

function TaskRow({
  name,
  schedule,
  phases,
  description,
}: {
  name: string;
  schedule: string;
  phases: string;
  description: string;
}) {
  return (
    <div className="rounded border border-border bg-surface-raised p-3">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-medium text-sm">{name}</span>
        <span className="ml-auto text-xs font-mono text-muted">{schedule}</span>
      </div>
      <p className="text-xs text-accent font-mono mb-1">{phases}</p>
      <p className="text-xs text-muted">{description}</p>
    </div>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="rounded border border-border bg-surface-raised p-4 text-xs font-mono text-muted overflow-x-auto">
      {children}
    </pre>
  );
}

function CustomItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 pl-4 border-l-2 border-accent">
      <div>
        <h4 className="font-medium text-sm mb-1">{title}</h4>
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function PrincipleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded border border-border bg-surface p-5">
      <h3 className="font-medium text-sm mb-2">{title}</h3>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </div>
  );
}
