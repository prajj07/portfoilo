import { cn } from "@/lib/utils";

type SectionLabelProps = {
  number: string;
  title: string;
  className?: string;
};

export function SectionLabel({ number, title, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      <span className="text-primary">{number}</span>
      <span className="mx-2 text-border">/</span>
      <span>{title}</span>
    </p>
  );
}
