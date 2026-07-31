"use client";

import { forwardRef, type FormEvent, useState } from "react";
import { Send, Square } from "lucide-react";

import { Button } from "@/components/ui/button";

type ChatInputProps = {
  isLoading: boolean;
  onSend: (message: string) => void;
  onStop: () => void;
};

const MAX_MESSAGE_LENGTH = 1_000;

export const ChatInput = forwardRef<
  HTMLTextAreaElement,
  Readonly<ChatInputProps>
>(function ChatInput({ isLoading, onSend, onStop }, ref) {
  const [value, setValue] = useState("");

  const trimmedValue = value.trim();

  const canSend = trimmedValue.length > 0 && !isLoading;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSend) return;

    onSend(trimmedValue);
    setValue("");
  }

  return (
    <div className="border-border bg-background border-t p-3">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="border-border bg-background focus-within:border-primary/60 focus-within:ring-primary/10 flex items-end gap-2 rounded-xl border p-2 transition-all focus-within:ring-4">
          <textarea
            ref={ref}
            value={value}
            onChange={(event) => {
              setValue(event.target.value.slice(0, MAX_MESSAGE_LENGTH));
            }}
            onKeyDown={(event) => {
              if (
                event.key === "Enter" &&
                !event.shiftKey &&
                !event.nativeEvent.isComposing
              ) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder="Ask about experience, projects, or skills..."
            aria-label="Chat message"
            rows={1}
            disabled={isLoading}
            className="text-foreground placeholder:text-muted-foreground max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm leading-5 outline-none disabled:cursor-not-allowed disabled:opacity-60"
          />

          {isLoading ? (
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={onStop}
              aria-label="Stop generating response"
              className="size-9 shrink-0 rounded-lg"
            >
              <Square className="size-4 fill-current" />
            </Button>
          ) : (
            <Button
              type="submit"
              size="icon"
              disabled={!canSend}
              aria-label="Send message"
              className="size-9 shrink-0 rounded-lg"
            >
              <Send className="size-4" />
            </Button>
          )}
        </div>

        <div className="text-muted-foreground flex items-center justify-between gap-3 px-1 text-[11px]">
          <span className="truncate">
            Enter to send · Shift + Enter for new line
          </span>

          <span
            className={
              value.length >= MAX_MESSAGE_LENGTH
                ? "text-destructive shrink-0"
                : "shrink-0"
            }
          >
            {value.length}/{MAX_MESSAGE_LENGTH}
          </span>
        </div>
      </form>
    </div>
  );
});
