export const navItems = [
  { label: "SYSTEM", href: "#system" },
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "NOW", href: "#now" },
] as const;

export const talkLink = {
  label: "LET'S TALK ↗",
  href: "#contact",
} as const;

export const sectionIndex = [
  { number: "00", title: "INDEX", href: "#index" },
  { number: "01", title: "SYSTEM", href: "#system" },
  { number: "02", title: "WORK", href: "#work" },
  { number: "03", title: "EXPERIENCE", href: "#experience" },
  { number: "04", title: "THINKING", href: "#thinking" },
  { number: "05", title: "NOW", href: "#now" },
  { number: "06", title: "CONTACT", href: "#contact" },
] as const;

export type NavItem = (typeof navItems)[number];
