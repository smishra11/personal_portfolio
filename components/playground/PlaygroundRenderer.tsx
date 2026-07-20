import { Accordion } from "@/components/ui/accordion";

import { CodeBlock } from "./CodeBlock";
import { PlaygroundInterviewCard } from "./PlaygroundInterviewCard";
import { PlaygroundNote } from "./PlaygroundNote";

import type { TopicSection } from "@/types/playground";

type PlaygroundRendererProps = {
  sections: TopicSection[];
};

export async function PlaygroundRenderer({
  sections,
}: PlaygroundRendererProps) {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => {
        switch (section.type) {
          case "overview":
            return (
              <section key={index} className="space-y-5">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-muted-foreground max-w-none text-[15px] leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            );

          case "code":
            return (
              <section key={index} className="space-y-5">
                <h2 className="text-foreground text-xl font-semibold tracking-tight md:text-2xl">
                  {section.title}
                </h2>

                <CodeBlock
                  code={section.code}
                  language={section.language}
                  filename={section.filename}
                />
              </section>
            );

          case "note":
            return (
              <section key={index} className="space-y-5">
                <PlaygroundNote section={section} />
              </section>
            );

          case "interview":
            return (
              <section key={index} className="space-y-5">
                <h2 className="text-foreground text-xl font-semibold tracking-tight md:text-2xl">
                  Interview Questions
                </h2>

                <Accordion multiple={false} className="space-y-3">
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
