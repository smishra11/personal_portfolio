import { CopyButton } from "@/components/common";
import { highlightCode } from "@/lib/shiki";

type CodeBlockProps = {
  code: string;
  language: "javascript" | "typescript" | "tsx";
  filename?: string;
};

const LANGUAGE_LABELS = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  tsx: "TSX",
} as const;

export async function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const html = await highlightCode(code, language);

  return (
    <div className="border-border overflow-hidden rounded-2xl border">
      <div className="bg-muted border-border flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="bg-background rounded-md px-2 py-1 text-xs font-medium">
            {LANGUAGE_LABELS[language]}
          </span>

          {filename && (
            <span className="text-muted-foreground text-sm">{filename}</span>
          )}
        </div>

        <CopyButton value={code} />
      </div>

      <div className="bg-card overflow-x-auto">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
