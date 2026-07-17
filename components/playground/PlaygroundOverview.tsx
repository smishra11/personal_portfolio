import { CheckCircle2, Clock3 } from "lucide-react";

import type { TopicSection } from "@/types/playground";

type Props = {
  section: Extract<TopicSection, { type: "overview" }>;
};

const upcomingTopics = [
  "Detailed explanation",
  "Real-world examples",
  "Common interview questions",
  "Best practices",
];

export function PlaygroundOverview({ section }: Props) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Overview</h2>

        <div className="mt-6 space-y-4">
          {section.content.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground leading-8">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl border p-6">
        <div className="flex items-center gap-2">
          <Clock3 className="text-primary size-5" />

          <h3 className="font-semibold">What will be covered</h3>
        </div>

        <ul className="mt-5 space-y-3">
          {upcomingTopics.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <CheckCircle2 className="text-primary size-4" />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
