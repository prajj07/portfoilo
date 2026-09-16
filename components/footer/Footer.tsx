import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-14 sm:py-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-end">
          <div>
            <p className="display-font text-2xl font-semibold tracking-[-0.04em]">
              {profile.name}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              {profile.brand}
            </p>
            <p className="display-font mt-6 max-w-sm whitespace-pre-line text-lg leading-snug tracking-[-0.03em] text-muted-foreground">
              {`BUILDING THINGS THAT\nSURVIVE PRODUCTION.`}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-sm"
            >
              GitHub ↗
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link text-sm"
            >
              LinkedIn ↗
            </Link>
            <Link
              href={`mailto:${profile.email}`}
              className="editorial-link text-sm"
            >
              Email ↗
            </Link>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              © {year}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
