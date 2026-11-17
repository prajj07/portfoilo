"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { about } from "@/data/profile";
import { buildingWith, systemHeadline, systemLayers } from "@/data/system";
import { cn } from "@/lib/utils";

export function SystemSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.85;
      const end = view * 0.2;
      const t = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, t)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleCount = Math.max(
    1,
    Math.ceil(progress * systemLayers.length),
  );

  return (
    <section
      id="system"
      ref={ref}
      className="scroll-mt-20 border-y border-border bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionLabel number={systemHeadline.number} title={systemHeadline.title} />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
          {systemHeadline.display}
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {systemHeadline.body}
        </p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
          {systemHeadline.arc}
        </p>

        <ul className="mt-14 grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {systemLayers.map((layer, index) => {
            const on = index < visibleCount;
            return (
              <li
                key={layer.id}
                className={cn(
                  "border-b border-border px-0 py-6 pr-6 transition-opacity duration-500 sm:border-r sm:odd:pr-8 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0",
                  on ? "opacity-100" : "opacity-25",
                )}
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="display-font mt-3 text-xl font-semibold tracking-[-0.03em]">
                  {layer.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {layer.detail}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 max-w-2xl border-t border-border pt-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {about.paragraphs[0]}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {about.paragraphs[1]}
          </p>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {about.model}
          </p>
        </div>

        <div className="mt-16">
          <p className="editorial-label">Building with</p>
          <ul className="mt-6 space-y-4 border-t border-border pt-6">
            {buildingWith.map((group) => (
              <li
                key={group.area}
                className="grid gap-1 border-b border-border pb-4 sm:grid-cols-[7rem_1fr] sm:items-baseline"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-primary">
                  {group.area}
                </span>
                <span className="text-sm text-muted-foreground">
                  {group.items.join(" · ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
