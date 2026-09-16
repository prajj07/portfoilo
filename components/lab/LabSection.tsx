import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { personalProjects } from "@/data/projects";
import { labMeta } from "@/data/work";

export function LabSection() {
  return (
    <section
      id="lab"
      className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionLabel number="05" title="LAB" />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {`THINGS I’M BUILDING\nJUST BECAUSE I CAN.`}
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Smaller experiments — visually quieter than client production work.
        </p>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2">
          {personalProjects.map((project, index) => {
            const meta = labMeta(project, index);
            return (
              <li
                key={project.title}
                className="group border border-border bg-background/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      {meta.code}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {meta.status}
                    </p>
                  </div>
                  <h3 className="display-font mt-4 text-xl font-semibold tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-primary/80">
                    Tech · {project.technologies.join(" · ")}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link text-sm"
                      >
                        Leave ↗
                      </Link>
                    ) : null}
                    {project.githubUrl ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="editorial-link text-sm text-muted-foreground"
                      >
                        Source ↗
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
