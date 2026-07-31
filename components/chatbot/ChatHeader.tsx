"use client";

import { RotateCcw, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type ChatHeaderProps = {
  hasMessages: boolean;
  isLoading: boolean;
  onClear: () => void;
  onClose: () => void;
};

export function ChatHeader({
  hasMessages,
  isLoading,
  onClear,
  onClose,
}: Readonly<ChatHeaderProps>) {
  return (
    <div className="border-border flex items-center justify-between border-b px-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <div
          aria-hidden="true"
          className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full"
        >
          <span className="text-sm font-semibold">SM</span>
        </div>

        <div className="min-w-0">
          <h2 className="text-foreground truncate text-sm font-semibold">
            Portfolio Assistant
          </h2>

          <div className="mt-0.5 flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-emerald-500"
            />

            <p className="text-muted-foreground truncate text-xs">
              Ask about Subhasish&apos;s work and experience
            </p>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {hasMessages && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={isLoading}
            onClick={onClear}
            aria-label="Clear conversation"
            className="text-muted-foreground hover:text-foreground size-8 rounded-lg"
          >
            <RotateCcw className="size-4" />
          </Button>
        )}

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close chatbot"
          className="text-muted-foreground hover:text-foreground size-8 rounded-lg"
        >
          <X className="size-4" />
        </Button>
      </div>
    </div>
  );
}
