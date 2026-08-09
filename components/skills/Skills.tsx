import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-surface py-16 sm:py-20"
    >
      <Container>
        <SectionHeading title="Skills" />
        <div className="border-t border-border">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 border-b border-border py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {group.category}
              </h3>
              <p className="text-base text-foreground/90 sm:text-lg">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
