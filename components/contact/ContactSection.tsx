"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { profile } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Request failed");
      const data = (await response.json()) as { success?: boolean };
      if (!data.success) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-surface py-20 sm:py-28"
    >
      <Container>
        <SectionLabel number="07" title="CONTACT" />
        <h2 className="display-font mt-6 max-w-3xl whitespace-pre-line text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
          {`LET’S BUILD\nSOMETHING.`}
        </h2>
        <p className="mt-6 max-w-lg text-muted-foreground">
          Email or LinkedIn is usually fastest. The form works too.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-0 border-t border-border">
            <Link
              href={`mailto:${profile.email}`}
              className="group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:text-primary"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground group-hover:text-primary">
                Contact →
              </span>
              <span>{profile.email}</span>
            </Link>
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:text-primary"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground group-hover:text-primary">
                Leave →
              </span>
              <span>GitHub ↗</span>
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-4 border-b border-border py-5 transition-colors hover:text-primary"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground group-hover:text-primary">
                Leave →
              </span>
              <span>LinkedIn ↗</span>
            </Link>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 border-t border-border pt-6"
            onChange={() => {
              if (status === "success" || status === "error") setStatus("idle");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-2 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Name
                </span>
                <input
                  name="name"
                  required
                  maxLength={120}
                  autoComplete="name"
                  className={inputClassName}
                />
              </label>
              <label className="block space-y-2 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  autoComplete="email"
                  className={inputClassName}
                />
              </label>
            </div>
            <label className="block space-y-2 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Subject
              </span>
              <input
                name="subject"
                maxLength={200}
                className={inputClassName}
              />
            </label>
            <label className="block space-y-2 text-sm">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                required
                maxLength={4000}
                rows={5}
                className={inputClassName}
              />
            </label>
            <Button type="submit" disabled={status === "loading"} className="min-w-36">
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  Sending
                </>
              ) : (
                "Send message"
              )}
            </Button>
            <p className="min-h-5 text-sm" aria-live="polite">
              {status === "success" ? (
                <span className="text-primary">Message sent.</span>
              ) : null}
              {status === "error" ? (
                <span className="text-destructive">
                  Something went wrong. Try email instead.
                </span>
              ) : null}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
