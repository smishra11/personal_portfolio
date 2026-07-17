import type { TopicSection } from "@/types/playground";

import { PlaygroundInterviewCard } from "./PlaygroundInterviewCard";

type Props = {
  section: Extract<TopicSection, { type: "interview" }>;
};

export function PlaygroundInterview({ section }: Props) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Interview Questions</h2>

      <div className="space-y-4">
        {section.questions.map((question) => (
          <PlaygroundInterviewCard
            key={question.question}
            question={question.question}
            answer={question.answer}
            difficulty={question.difficulty}
          />
        ))}
      </div>
    </section>
  );
}
