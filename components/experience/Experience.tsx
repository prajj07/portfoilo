import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { education, experience, leadership } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-surface py-16 sm:py-20"
    >
      <Container>
        <SectionHeading title="Experience" />

        <article className="max-w-4xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="display-font text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-primary">{experience.company}</p>
            </div>
            <p className="font-mono text-xs text-muted-foreground">
              {experience.period}
            </p>
          </div>

          <p className="mt-6 text-muted-foreground">{experience.summary}</p>

          <ul className="mt-6 space-y-3 text-sm leading-relaxed sm:text-base">
            {experience.responsibilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-primary">
            {experience.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="editorial-label">Selected client work</p>
            <ul className="mt-4 space-y-4">
              {experience.selectedClientWork.map((project) => (
                <li
                  key={project.title}
                  className="grid gap-1 border-b border-border pb-4 sm:grid-cols-[1.1fr_1fr] sm:gap-6"
                >
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-muted-foreground">{project.summary}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              More detail in Projects.
            </p>
          </div>
        </article>

        <div className="mt-10 grid gap-6 border-t border-border pt-6 text-sm sm:grid-cols-2">
          <div>
            <p className="editorial-label">Education</p>
            <p className="mt-2 font-medium">{education.degree}</p>
            <p className="text-muted-foreground">{education.school}</p>
          </div>
          <div>
            <p className="editorial-label">Leadership</p>
            <p className="mt-2 font-medium">{leadership.org}</p>
            <p className="text-muted-foreground">{leadership.roles.join(" · ")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
