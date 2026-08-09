import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { about } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-16 sm:py-20">
      <Container>
        <SectionHeading title="About" />
        <div className="max-w-3xl space-y-6">
          <p className="display-font text-pretty text-2xl leading-snug tracking-[-0.035em] sm:text-3xl">
            {about.statement}
          </p>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
          <p className="border-l border-primary pl-4 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {about.model}
          </p>
        </div>
      </Container>
    </section>
  );
}
