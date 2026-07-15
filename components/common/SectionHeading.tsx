import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 id={id} className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="text-muted-foreground mt-4 text-lg leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
