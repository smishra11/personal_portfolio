import {
  AlertTriangle,
  BadgeCheck,
  Lightbulb,
  Rocket,
  Target,
} from "lucide-react";

import type { TopicSection } from "@/types/playground";

type Props = {
  section: Extract<TopicSection, { type: "note" }>;
};

const VARIANT_CONFIG = {
  tip: {
    icon: Lightbulb,
    className: "border-blue-500/30 bg-blue-500/5 text-blue-500",
  },

  warning: {
    icon: AlertTriangle,
    className: "border-amber-500/30 bg-amber-500/5 text-amber-500",
  },

  "best-practice": {
    icon: BadgeCheck,
    className: "border-green-500/30 bg-green-500/5 text-green-500",
  },

  interview: {
    icon: Target,
    className: "border-violet-500/30 bg-violet-500/5 text-violet-500",
  },

  performance: {
    icon: Rocket,
    className: "border-cyan-500/30 bg-cyan-500/5 text-cyan-500",
  },
} as const;

export function PlaygroundNote({ section }: Props) {
  const config = VARIANT_CONFIG[section.variant];
  const Icon = config.icon;

  return (
    <section className={`rounded-2xl border p-6 ${config.className}`}>
      <div className="flex items-center gap-3">
        <Icon className="size-5" />

        <h2 className="font-semibold">{section.title}</h2>
      </div>

      <p className="text-foreground mt-4 leading-8">{section.content}</p>
    </section>
  );
}
