import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import {
  education,
  experiences,
  leadership,
  selectedClientWork,
} from "@/data/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionLabel number="03" title="EXPERIENCE" />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {`CODE → SYSTEMS\n→ CUSTOMERS.`}
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Role evolution at Dataequinox — from shipping features to embedding
          with clients as a Forward Deployed Engineer.
        </p>

        <ol className="relative mt-16 max-w-3xl border-l border-border pl-8 sm:pl-10">
          {experiences
            .slice()
            .reverse()
            .map((job, index, arr) => (
              <li key={job.role} className="relative pb-14 last:pb-0">
                <span
                  className="absolute -left-[2.05rem] top-1 size-2.5 bg-primary sm:-left-[2.55rem]"
                  aria-hidden
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                  {job.period}
                </p>
                <h3 className="display-font mt-3 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-primary">{job.company}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {job.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {job.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-primary/80">
                  {job.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {index < arr.length - 1 ? (
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    ↓
                  </p>
                ) : (
                  <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                    Now
                  </p>
                )}
              </li>
            ))}
        </ol>

        <div className="mt-16 max-w-3xl border-t border-border pt-8">
          <p className="editorial-label">Selected client work</p>
          <ul className="mt-4 space-y-4">
            {selectedClientWork.map((project) => (
              <li
                key={project.title}
                className="grid gap-1 border-b border-border pb-4 sm:grid-cols-[1.1fr_1fr] sm:gap-6"
              >
                <p className="font-medium">{project.title}</p>
                <p className="text-sm text-muted-foreground">{project.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 border-t border-border pt-6 text-sm sm:grid-cols-2">
          <div>
            <p className="editorial-label">Education</p>
            <p className="mt-2 font-medium">{education.degree}</p>
            <p className="text-muted-foreground">{education.school}</p>
          </div>
          <div>
            <p className="editorial-label">Leadership</p>
            <p className="mt-2 font-medium">{leadership.org}</p>
            <p className="text-muted-foreground">
              {leadership.roles.join(" · ")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
