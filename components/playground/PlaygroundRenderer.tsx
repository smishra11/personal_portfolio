import { CodeBlock } from "./CodeBlock";

import type { TopicSection } from "@/types/playground";
import { PlaygroundNote } from "./PlaygroundNote";
import { Accordion } from "@/components/ui/accordion";
import { PlaygroundInterviewCard } from "./PlaygroundInterviewCard";

type PlaygroundRendererProps = {
  sections: TopicSection[];
};

export async function PlaygroundRenderer({
  sections,
}: PlaygroundRendererProps) {
  return (
    <div className="space-y-10">
      {sections.map((section, index) => {
        switch (section.type) {
          case "overview":
            return (
              <div key={index} className="space-y-4">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-muted-foreground leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            );

          case "code":
            return (
              <div key={index}>
                <h2 className="mb-4 text-2xl font-semibold">{section.title}</h2>

                <CodeBlock
                  code={section.code}
                  language={section.language}
                  filename={section.filename}
                />
              </div>
            );

          case "note":
            return <PlaygroundNote key={index} section={section} />;

          case "interview":
            return (
              <section key={index}>
                <h2 className="mb-6 text-2xl font-semibold">
                  Interview Questions
                </h2>

                <Accordion multiple={false} className="space-y-4">
                  {section.questions.map((item, itemIndex) => (
                    <PlaygroundInterviewCard
                      key={item.question}
                      value={`question-${itemIndex}`}
                      question={item.question}
                      answer={item.answer}
                      difficulty={item.difficulty}
                    />
                  ))}
                </Accordion>
              </section>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
