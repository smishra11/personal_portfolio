import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-14 pt-14 md:pt-20 lg:pt-24", className)}
      {...props}
    />
  );
}
