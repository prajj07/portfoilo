import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="display-font text-xl font-semibold tracking-[-0.04em]">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.brand}</p>
          <p className="mt-3 text-xs text-muted-foreground">© {year}</p>
        </div>
        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Github className="size-4" aria-hidden />
            GitHub
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Linkedin className="size-4" aria-hidden />
            LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <Mail className="size-4" aria-hidden />
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
