"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { HeroField } from "@/components/hero/HeroField";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="index"
      className="relative isolate min-h-[100svh] scroll-mt-20 overflow-hidden pt-24 sm:pt-28"
    >
      <div className="hero-scene-veil" aria-hidden />
      <HeroField />

      <Container className="relative z-10 grid min-h-[calc(100svh-5.5rem)] items-end gap-10 pb-14 pt-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8 lg:pb-20">
        <div className="max-w-2xl">
          <SectionLabel number="00" title="INDEX" className="animate-fade-up" />

          <p className="editorial-label mt-6 animate-fade-up animate-delay-1">
            {profile.brand}
          </p>

          <h1 className="display-font mt-3 text-balance text-[clamp(3rem,8vw,6.25rem)] font-semibold leading-[0.88] tracking-[-0.07em] animate-fade-up animate-delay-1">
            {profile.name}
          </h1>

          <p className="display-font mt-8 max-w-xl whitespace-pre-line text-[clamp(1.35rem,3vw,2.35rem)] font-medium leading-[1.05] tracking-[-0.04em] text-foreground/92 animate-fade-up animate-delay-2">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground animate-fade-up animate-delay-3">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 animate-fade-up animate-delay-3">
            <Link href="#work" className="editorial-link text-primary">
              Open work <span aria-hidden>→</span>
            </Link>
            <Link href="#contact" className="editorial-link">
              Let&apos;s talk <span aria-hidden>↗</span>
            </Link>
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="size-4" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[15rem] justify-self-end sm:max-w-[17rem] lg:max-w-[18rem]">
          <div className="relative aspect-[3/4] w-full overflow-hidden opacity-90 animate-fade-up animate-delay-2">
            <Image
              src="/profile.png"
              alt={`${profile.name}, Software Engineer`}
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 15rem, 18rem"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
