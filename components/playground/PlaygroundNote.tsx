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
    color: string;
  }
> = {
  tip: {
    icon: Lightbulb,
    border: "border-blue-500/30",
    background: "bg-blue-500/5",
    color: "text-blue-500",
  },

  warning: {
    icon: AlertTriangle,
    border: "border-amber-500/30",
    background: "bg-amber-500/5",
    color: "text-amber-500",
  },

  "best-practice": {
    icon: BadgeCheck,
    border: "border-green-500/30",
    background: "bg-green-500/5",
    color: "text-green-500",
  },

  interview: {
    icon: Target,
    border: "border-violet-500/30",
    background: "bg-violet-500/5",
    color: "text-violet-500",
  },

  performance: {
    icon: Rocket,
    border: "border-cyan-500/30",
    background: "bg-cyan-500/5",
    color: "text-cyan-500",
  },
};

export function PlaygroundNote({ section }: Props) {
  const config = VARIANT_CONFIG[section.variant];
  const Icon = config.icon;

  return (
    <section
      className={cn("rounded-2xl border p-6", config.border, config.background)}
    >
      <div className="flex items-center gap-3">
        <Icon className={cn("size-5", config.color)} />

        <h2 className={cn("text-lg font-semibold", config.color)}>
          {section.title}
        </h2>
      </div>

      <p className="text-muted-foreground mt-4 leading-8">{section.content}</p>
    </section>
  );
}
