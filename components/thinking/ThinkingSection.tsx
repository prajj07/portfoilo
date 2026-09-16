import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { thinkingEntries, thinkingHeadline } from "@/data/thinking";

export function ThinkingSection() {
  return (
    <section id="thinking" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionLabel
          number={thinkingHeadline.number}
          title={thinkingHeadline.title}
        />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {thinkingHeadline.display}
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          {thinkingHeadline.body}
        </p>

        <div className="mt-14 space-y-0 border-t border-border">
          {thinkingEntries.map((entry) => (
            <article
              key={entry.id}
              className="grid gap-6 border-b border-border py-10 lg:grid-cols-[1fr_1.2fr]"
            >
              <h3 className="display-font max-w-md text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                {entry.question}
              </h3>
              <dl className="space-y-5">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    Decision
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.decision}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    Why
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.why}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    Tradeoff
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.tradeoff}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
