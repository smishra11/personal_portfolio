import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { NoteVariant, TopicSection } from "@/types/playground";

type Props = {
  section: Extract<TopicSection, { type: "note" }>;
};

const VARIANT_CONFIG: Record<
  NoteVariant,
  {
    icon: LucideIcon;
    border: string;
    background: string;
    iconBackground: string;
    color: string;
    label: string;
  }
> = {
  tip: {
    icon: Lightbulb,
    border: "border-blue-500/20",
    background: "bg-blue-500/[0.03]",
    iconBackground: "bg-blue-500/10",
    color: "text-blue-600 dark:text-blue-400",
    label: "Tip",
  },

  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/20",
    background: "bg-amber-500/[0.03]",
    iconBackground: "bg-amber-500/10",
    color: "text-amber-600 dark:text-amber-400",
    label: "Warning",
  },

  "best-practice": {
    icon: BadgeCheck,
    border: "border-emerald-500/20",
    background: "bg-emerald-500/[0.03]",
    iconBackground: "bg-emerald-500/10",
    color: "text-emerald-600 dark:text-emerald-400",
    label: "Best Practice",
  },

  interview: {
    icon: Target,
    border: "border-violet-500/20",
    background: "bg-violet-500/[0.03]",
    iconBackground: "bg-violet-500/10",
    color: "text-violet-600 dark:text-violet-400",
    label: "Interview Tip",
  },

  performance: {
    icon: Rocket,
    border: "border-cyan-500/20",
    background: "bg-cyan-500/[0.03]",
    iconBackground: "bg-cyan-500/10",
    color: "text-cyan-600 dark:text-cyan-400",
    label: "Performance",
  },
};

export function PlaygroundNote({ section }: Props) {
  const config = VARIANT_CONFIG[section.variant];
  const Icon = config.icon;

  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.35)]",
        config.border,
        config.background
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
            config.iconBackground
          )}
        >
          <Icon className={cn("size-5", config.color)} />
        </div>

        <div className="min-w-0 flex-1">
          <span
            className={cn(
              "text-[11px] font-semibold tracking-[0.14em] uppercase",
              config.color
            )}
          >
            {config.label}
          </span>

          <h3 className="mt-1 text-base font-semibold tracking-tight">
            {section.title}
          </h3>

          <p className="text-muted-foreground mt-3 text-[15px] leading-6">
            {section.content}
          </p>
        </div>
      </div>
    </section>
  );
}
