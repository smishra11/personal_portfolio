"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

type PlaygroundCodeBlockProps = {
  code: string;
  language: string;
  filename?: string;
};

export function PlaygroundCodeBlock({
  code,
  language,
  filename,
}: PlaygroundCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="bg-card overflow-hidden rounded-2xl border">
      <div className="bg-muted/40 flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="bg-background rounded-md px-2 py-1 text-xs font-medium">
            {language}
          </span>

          {filename && (
            <span className="text-muted-foreground text-sm">{filename}</span>
          )}
        </div>

        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? (
            <>
              <Check className="mr-2 size-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 size-4" />
              Copy
            </>
          )}
        </Button>
      </div>

      <pre className="overflow-x-auto p-6 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
