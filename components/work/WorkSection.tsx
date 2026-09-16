"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { clientProjects } from "@/data/projects";
import {
  projectArchitecture,
  projectSurfaces,
  type ArchNode,
} from "@/data/work";
import { cn } from "@/lib/utils";

function ArchitectureMap({
  nodes,
  edges,
}: {
  nodes: ArchNode[];
  edges: { from: string; to: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);
  const byId = useMemo(
    () => Object.fromEntries(nodes.map((n) => [n.id, n])),
    [nodes],
  );
  const activeNode = active ? byId[active] : null;

  return (
    <div className="mt-8 border border-border bg-background/40 p-4 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          System · Inspect →
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
          {activeNode ? activeNode.label : "HOVER A NODE"}
        </p>
      </div>

      <div className="relative mt-4 aspect-[16/10] w-full">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          {edges.map((edge) => {
            const a = byId[edge.from];
            const b = byId[edge.to];
            if (!a || !b) return null;
            const lit =
              active !== null && (edge.from === active || edge.to === active);
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={lit ? "oklch(0.68 0.09 178)" : "oklch(0.9 0.012 88 / 18%)"}
                strokeWidth={lit ? 0.45 : 0.25}
              />
            );
          })}
        </svg>

        {nodes.map((node) => {
          const on = active === node.id;
          const dim = active !== null && !on;
          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(node.id)}
              onBlur={() => setActive(null)}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                on
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary hover:text-primary",
                dim && "opacity-40",
              )}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {node.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 min-h-[1.25rem] text-sm text-muted-foreground">
        {activeNode?.detail ?? "Highlight connections to read the system shape."}
      </p>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionLabel number="02" title="WORK" />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {`THINGS I’VE\nSHIPPED.`}
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Client work is anonymized. Details below are limited to what can be
          shared publicly.
        </p>

        <div className="mt-16 space-y-20">
          {clientProjects.map((project, index) => {
            const surfaces = projectSurfaces(project);
            const arch = projectArchitecture(project);
            const code = `CASE FILE / ${String(index + 1).padStart(3, "0")}`;

            return (
              <article
                key={project.title}
                className="border-t border-border pt-10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                    {code}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    Status · Production
                  </p>
                </div>

                <h3 className="display-font mt-5 max-w-3xl text-[clamp(1.6rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                  {project.title}
                </h3>

                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Confidential client
                </p>

                <dl className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Role
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                      Surface
                    </dt>
                    <dd className="mt-2 font-mono text-xs tracking-[0.08em] text-foreground">
                      {surfaces.join(" / ")}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.05fr]">
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                        The problem
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                        What I built
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {project.contributions.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span
                              className="mt-2 size-1 shrink-0 bg-primary"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                        Stack
                      </h4>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {project.technologies.join(" · ")}
                      </p>
                    </div>
                  </div>

                  <ArchitectureMap nodes={arch.nodes} edges={arch.edges} />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
