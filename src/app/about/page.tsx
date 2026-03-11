import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 animate-fade-in">About</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-1">
          <Image
            src="/Michael Hanegan.jpg"
            alt="Michael Hanegan"
            width={400}
            height={500}
            className="rounded-lg w-full"
            priority
          />
        </div>

        <div className="md:col-span-2 space-y-5 animate-fade-in delay-1">
          <h2 className="text-2xl font-bold">Michael Hanegan</h2>
          <p className="text-sm text-muted leading-relaxed">
            Michael Hanegan is the Founder of the Center for the Future of
            Learning and Work. He is an adjunct professor at Rose State College
            where he teaches on the theory, ethics, and social impact of
            Generative AI on learning and work.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            He is the co-author of{" "}
            <em className="text-foreground">
              Generative AI and Libraries: Claiming Our Place in the Center of a
              Shared Future
            </em>{" "}
            published by the American Library Association.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Michael serves as an advisor to the Oklahoma Education Commission
            and numerous other institutions and industry partners on the human
            factors of AI experimentation, adoption, and integration.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            His work focuses on the renegotiation of the relationship of
            learning and work, how generative AI complicates, accelerates, and
            enhances that future, and the ways in which we can collectively
            build a world that is good for the whole human family.
          </p>
        </div>
      </div>

      {/* About NovaLoop */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold mb-6">About NovaLoop</h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-sm text-muted leading-relaxed">
            NovaLoop is an autonomous nightly research synthesis system
            built with Claude Code and Notion. It compounds insight quality
            across iterations through five recursive feedback loops, producing
            adversarially tested, evidence-linked research insights every night.
          </p>
          <p className="text-sm text-muted leading-relaxed">
            The system is fully open &mdash; four text files, six databases, and
            a set of scheduled tasks. This site documents the architecture and
            mechanisms so others can reproduce and adapt it for their own
            research domains.
          </p>
        </div>
      </section>
    </div>
  );
}
