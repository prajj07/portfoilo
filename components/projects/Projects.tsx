import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { clientProjects, personalProjects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title="Selected work"
          description="Professional client engagements with engineering depth. Client identities remain private."
        />

        <div className="space-y-16 border-t border-border pt-10">
          {clientProjects.map((project, index) => (
            <article
              key={project.title}
              id={`project-${index + 1}`}
              className="grid gap-6 border-b border-border pb-14 lg:grid-cols-[10rem_1fr]"
            >
              <div>
                <p className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 editorial-label">{project.label}</p>
              </div>

              <div>
                <h3 className="display-font max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm font-medium">Problem</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Role</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Highlights</h4>
                      <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                        {project.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm font-medium">Contributions</h4>
                      <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                        {project.contributions.map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              className="mt-2 size-1 shrink-0 bg-primary"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-primary">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <p className="editorial-label">Experiments</p>
          <h3 className="display-font mt-2 text-2xl font-semibold tracking-[-0.04em]">
            Personal projects
          </h3>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Smaller public demos. Secondary to professional client work.
          </p>

          <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
            {personalProjects.map((project) => (
              <article key={project.title} className="grid gap-4 sm:grid-cols-[9rem_1fr]">
                <div className="relative h-24 overflow-hidden bg-muted sm:h-auto sm:min-h-28">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 144px"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">{project.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl ? (
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="size-3.5" />
                          Live
                        </Link>
                      </Button>
                    ) : null}
                    {project.githubUrl ? (
                      <Button size="sm" variant="outline" asChild>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="size-3.5" />
                          Code
                        </Link>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
