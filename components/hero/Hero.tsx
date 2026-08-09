import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-20 pt-24 sm:pt-28">
      <Container className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-20 lg:pt-10">
        <div className="order-1 flex flex-col justify-center">
          <p className="editorial-label animate-fade-up">{profile.brand}</p>

          <h1 className="display-font mt-5 text-balance text-[clamp(3.25rem,7.5vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] animate-fade-up animate-delay-1">
            {profile.name}
          </h1>

          <p className="display-font mt-7 max-w-xl text-balance text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-snug tracking-[-0.03em] text-foreground/90 animate-fade-up animate-delay-2">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground animate-fade-up animate-delay-3">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 animate-fade-up animate-delay-3">
            <Link href="#projects" className="editorial-link text-primary">
              Selected work
            </Link>
            <Link href="#contact" className="editorial-link">
              Contact
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

        <div className="order-2 mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[24rem] overflow-hidden lg:ml-auto lg:max-w-[28rem]">
            <Image
              src="/profile.png"
              alt={`${profile.name}, Software Engineer`}
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 28rem"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
