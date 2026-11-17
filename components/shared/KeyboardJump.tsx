"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { sectionIndex } from "@/data/navigation";
import { cn } from "@/lib/utils";

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(
    target.closest("input, textarea, select, [contenteditable='true']"),
  );
}

function jumpTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function KeyboardJump() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;

      if (event.key === "Escape") {
        if (open) {
          event.preventDefault();
          setOpen(false);
        }
        return;
      }

      if (event.key === "/" && !event.shiftKey) {
        event.preventDefault();
        setOpen((value) => !value);
        return;
      }

      const lastKey = String(sectionIndex.length - 1);
      if (event.key >= "0" && event.key <= lastKey) {
        const section = sectionIndex[Number(event.key)];
        if (!section) return;
        event.preventDefault();
        setOpen(false);
        jumpTo(section.href);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const first = panelRef.current?.querySelector<HTMLElement>("a[href]");
    first?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-background/70 px-4 pt-[18vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Jump to section"
        className="w-full max-w-md border border-border bg-background p-5 shadow-none"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
          {`Jump · 0–${sectionIndex.length - 1} or /`}
        </p>
        <ul className="mt-4 border-t border-border">
          {sectionIndex.map((section, index) => (
            <li key={section.href}>
              <Link
                href={section.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-baseline justify-between gap-4 border-b border-border py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground",
                )}
              >
                <span>
                  <span className="text-primary">{section.number}</span>
                  <span className="mx-2 text-border">/</span>
                  {section.title}
                </span>
                <span className="text-border">{index}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
