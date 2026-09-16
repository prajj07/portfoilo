"use client";

import { useEffect, useRef, useState } from "react";
import { heroChips, heroChipsMobile, type HeroChip } from "@/data/hero";
import { cn } from "@/lib/utils";

const VARIANT: Record<
  HeroChip["variant"],
  { bg: string; text: string; border: string }
> = {
  teal: {
    bg: "oklch(0.68 0.09 178 / 0.14)",
    text: "oklch(0.78 0.08 178)",
    border: "oklch(0.68 0.09 178 / 0.35)",
  },
  mint: {
    bg: "oklch(0.55 0.06 178 / 0.12)",
    text: "oklch(0.72 0.06 178)",
    border: "oklch(0.55 0.06 178 / 0.3)",
  },
  slate: {
    bg: "oklch(0.22 0.01 80 / 0.55)",
    text: "oklch(0.75 0.012 88)",
    border: "oklch(0.9 0.012 88 / 0.12)",
  },
  ivory: {
    bg: "oklch(0.94 0.012 88 / 0.06)",
    text: "oklch(0.88 0.012 88)",
    border: "oklch(0.94 0.012 88 / 0.15)",
  },
  graphite: {
    bg: "oklch(0.17 0.008 80 / 0.7)",
    text: "oklch(0.66 0.014 88)",
    border: "oklch(0.9 0.012 88 / 0.1)",
  },
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function HeroField() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });
  const smooth = useRef({ x: 0, y: 0, scroll: 0 });
  const chipRefs = useRef<Map<string, HTMLSpanElement>>(new Map());
  const raf = useRef(0);
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);

  const chips = mobile ? heroChipsMobile : heroChips;

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      setReduced(mqMotion.matches);
      setMobile(mqMobile.matches);
    };
    sync();
    mqMotion.addEventListener("change", sync);
    mqMobile.addEventListener("change", sync);
    return () => {
      mqMotion.removeEventListener("change", sync);
      mqMobile.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    const el = fieldRef.current;
    if (!el || reduced) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) {
        pointer.current.active = false;
        return;
      }
      pointer.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.current.active = true;
    };

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)),
      );
      smooth.current.scroll = progress;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const tick = () => {
      smooth.current.x = lerp(
        smooth.current.x,
        pointer.current.active ? pointer.current.x : 0,
        0.06,
      );
      smooth.current.y = lerp(
        smooth.current.y,
        pointer.current.active ? pointer.current.y : 0,
        0.06,
      );

      const px = smooth.current.x;
      const py = smooth.current.y;
      const scroll = smooth.current.scroll;

      chipRefs.current.forEach((chipEl, id) => {
        const chip = chips.find((c) => c.id === id);
        if (!chip) return;
        const dx = px * chip.depth * 120;
        const dy = py * chip.depth * 90;
        const sy = (scroll - 0.5) * chip.depth * 40;
        const sx = (scroll - 0.5) * chip.depth * -25;
        chipEl.style.transform = `translate3d(${dx + sx}px, ${dy + sy}px, 0)`;

        if (!mobile && pointer.current.active) {
          const dist = Math.hypot(
            px * 50 - (chip.x - 50),
            py * 50 - (chip.y - 50),
          );
          const near = Math.max(0, 1 - dist / 55);
          chipEl.style.opacity = String(0.55 + near * 0.45);
        } else {
          chipEl.style.opacity = mobile ? "0.45" : "0.65";
        }
      });

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced, mobile, chips]);

  return (
    <div
      ref={fieldRef}
      className="hero-field pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      {/* Subtle sketch marks */}
      <svg
        className="hero-field__sketch absolute left-[8%] top-[22%] h-8 w-8 opacity-[0.12]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M8 6c4 0 8 2 8 6s-4 6-8 6" />
      </svg>
      <svg
        className="hero-field__sketch absolute right-[14%] top-[18%] h-6 w-6 opacity-[0.1]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M4 12h16M12 4v16" />
      </svg>
      <svg
        className="hero-field__sketch absolute bottom-[30%] left-[18%] h-5 w-5 opacity-[0.08]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <polygon points="12,2 22,20 2,20" />
      </svg>

      {chips.map((chip) => {
        const v = VARIANT[chip.variant];
        return (
          <span
            key={chip.id}
            ref={(node) => {
              if (node) chipRefs.current.set(chip.id, node);
              else chipRefs.current.delete(chip.id);
            }}
            className={cn(
              "hero-field__chip absolute select-none font-mono text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]",
              reduced && "hero-field__chip--static",
            )}
            style={{
              left: `${chip.x}%`,
              top: `${chip.y}%`,
              backgroundColor: v.bg,
              color: v.text,
              borderColor: v.border,
              opacity: mobile ? 0.45 : 0.65,
            }}
          >
            {chip.label}
          </span>
        );
      })}
    </div>
  );
}
