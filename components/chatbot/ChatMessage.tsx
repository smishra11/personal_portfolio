import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";

import type { ChatMessage as ChatMessageType } from "@/hooks/useChat";
import { cn } from "@/lib/utils";

type ChatMessageProps = {
  message: ChatMessageType;
  isStreaming?: boolean;
};

export function ChatMessage({
  message,
  isStreaming = false,
}: Readonly<ChatMessageProps>) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={cn(
        "flex w-full items-start gap-3",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {isAssistant && (
        <div
          aria-hidden="true"
          className="border-border bg-background text-primary flex size-8 shrink-0 items-center justify-center rounded-full border shadow-sm"
        >
          <Bot className="size-4" />
        </div>
      )}

      <div
        className={cn(
          "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6",
          isAssistant
            ? "border-border bg-muted/50 text-foreground rounded-tl-md border"
            : "bg-primary text-primary-foreground rounded-tr-md"
        )}
      >
        {message.content ? (
          isAssistant ? (
            <ReactMarkdown
              components={{
                p: ({ children }) => (
                  <p className="mb-2 last:mb-0">{children}</p>
                ),

                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),

                em: ({ children }) => (
                  <em className="text-muted-foreground italic">{children}</em>
                ),

                ul: ({ children }) => (
                  <ul className="my-2 list-disc space-y-1 pl-5">{children}</ul>
                ),

                ol: ({ children }) => (
                  <ol className="my-2 list-decimal space-y-1 pl-5">
                    {children}
                  </ol>
                ),

                li: ({ children }) => <li className="pl-0.5">{children}</li>,

                h1: ({ children }) => (
                  <h3 className="mt-3 mb-2 text-sm font-semibold first:mt-0">
                    {children}
                  </h3>
                ),

                h2: ({ children }) => (
                  <h3 className="mt-3 mb-2 text-sm font-semibold first:mt-0">
                    {children}
                  </h3>
                ),

                h3: ({ children }) => (
                  <h3 className="mt-3 mb-2 text-sm font-semibold first:mt-0">
                    {children}
                  </h3>
                ),

                blockquote: ({ children }) => (
                  <blockquote className="border-primary/40 text-muted-foreground my-2 border-l-2 pl-3">
                    {children}
                  </blockquote>
                ),

                code: ({ children }) => (
                  <code className="bg-background rounded px-1.5 py-0.5 font-mono text-xs">
                    {children}
                  </code>
                ),

                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          ) : (
            <p className="wrap-break-word whitespace-pre-wrap">
              {message.content}
            </p>
          )
        ) : isStreaming ? (
          <div
            className="flex h-6 items-center gap-1.5"
            aria-label="Assistant is responding"
            role="status"
          >
            <span className="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full" />

            <span className="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:150ms]" />

            <span className="bg-muted-foreground/60 size-1.5 animate-pulse rounded-full [animation-delay:300ms]" />
          </div>
        ) : null}
      </div>

      {!isAssistant && (
        <div
          aria-hidden="true"
          className="border-border bg-background text-muted-foreground flex size-8 shrink-0 items-center justify-center rounded-full border shadow-sm"
        >
          <User className="size-4" />
        </div>
      )}
    </div>
  );
}
