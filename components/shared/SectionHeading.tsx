import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl space-y-3", className)}>
      <h2 className="display-font text-balance text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
