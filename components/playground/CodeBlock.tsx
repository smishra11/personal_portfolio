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
    <div className="bg-card border-border overflow-hidden rounded-2xl border shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(15,23,42,0.06)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.02),0_8px_24px_rgba(0,0,0,0.35)]">
      {/* Header */}
      <div className="bg-muted/50 border-border flex items-center justify-between border-b px-5 py-3">
        <div className="flex items-center gap-3">
          <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase">
            {LANGUAGE_LABELS[language]}
          </span>

          {filename && (
            <span className="text-muted-foreground text-sm">{filename}</span>
          )}
        </div>

        <CopyButton value={code} />
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <div
          className="[&_code]:text-[14px] [&_pre]:m-0! [&_pre]:overflow-x-auto [&_pre]:bg-transparent! [&_pre]:px-5 [&_pre]:py-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
