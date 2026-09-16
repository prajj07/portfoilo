import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { nowContent } from "@/data/now";

export function NowSection() {
  return (
    <section id="now" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionLabel number={nowContent.number} title={nowContent.title} />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {nowContent.display}
        </h2>

        <ul className="mt-14 max-w-3xl space-y-0 border-t border-border">
          {nowContent.currently.map((item) => (
            <li
              key={item.label}
              className="grid gap-3 border-b border-border py-8 sm:grid-cols-[8rem_1fr]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
