import { Accordion } from "@/components/ui/accordion";

import { CodeBlock } from "./CodeBlock";
import { PlaygroundInterviewCard } from "./PlaygroundInterviewCard";
import { PlaygroundNote } from "./PlaygroundNote";

import type { TopicSection } from "@/types/playground";

type PlaygroundRendererProps = {
  sections: readonly TopicSection[];
};

const INTERVIEW_TITLE = "Interview Questions";

export async function PlaygroundRenderer({
  sections,
}: PlaygroundRendererProps) {
  return (
    <div className="space-y-12">
      {sections.map((section) => {
        switch (section.type) {
          case "overview":
            return (
              <section
                key={`overview-${section.content[0]}`}
                className="space-y-5"
              >
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
              <section key={`code-${section.title}`} className="space-y-5">
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
              <section key={`note-${section.title}`} className="space-y-5">
                <PlaygroundNote section={section} />
              </section>
            );

          case "interview":
            return (
              <section key="interview" className="space-y-5">
                <h2 className="text-foreground text-xl font-semibold tracking-tight md:text-2xl">
                  {INTERVIEW_TITLE}
                </h2>

                <Accordion multiple={false} className="space-y-3">
                  {section.questions.map((item) => (
                    <PlaygroundInterviewCard
                      key={item.question}
                      value={item.question}
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
