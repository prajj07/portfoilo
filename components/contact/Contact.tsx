"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { profile } from "@/data/profile";

type Status = "idle" | "loading" | "success" | "error";

const inputClassName =
  "w-full border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring";

export function Contact() {
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
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Let’s build something worth shipping."
          description="Email or LinkedIn is usually fastest. The form works too."
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-1 border-t border-border">
            <Link
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 border-b border-border py-4 transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-primary" aria-hidden />
              <span>{profile.email}</span>
            </Link>
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-b border-border py-4 transition-colors hover:text-primary"
            >
              <Github className="size-4 text-primary" aria-hidden />
              <span>github.com/prajj07</span>
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-b border-border py-4 transition-colors hover:text-primary"
            >
              <Linkedin className="size-4 text-primary" aria-hidden />
              <span>linkedin.com/in/prajwalm07</span>
            </Link>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 border-t border-border pt-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={120}
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClassName}
                  onChange={() => status !== "idle" && setStatus("idle")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  autoComplete="email"
                  placeholder="Your email"
                  className={inputClassName}
                  onChange={() => status !== "idle" && setStatus("idle")}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                maxLength={200}
                placeholder="Subject"
                className={inputClassName}
                onChange={() => status !== "idle" && setStatus("idle")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength={4000}
                rows={5}
                placeholder="Your message"
                className={`${inputClassName} resize-y`}
                onChange={() => status !== "idle" && setStatus("idle")}
              />
            </div>

            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            <div aria-live="polite" className="min-h-5 text-sm">
              {status === "success" ? (
                <p className="text-primary">Message sent. I’ll get back to you soon.</p>
              ) : null}
              {status === "error" ? (
                <p className="text-destructive">
                  Something went wrong. Try again or email me directly.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
