export const navItems = [
  { label: "SYSTEM", href: "#system" },
  { label: "WORK", href: "#work" },
  { label: "LAB", href: "#lab" },
  { label: "NOW", href: "#now" },
] as const;

export const talkLink = {
  label: "LET'S TALK ↗",
  href: "#contact",
} as const;

export type NavItem = (typeof navItems)[number];
