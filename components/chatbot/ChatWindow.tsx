"use client";

import { useEffect, useRef } from "react";
import { AlertCircle } from "lucide-react";

import { ChatHeader } from "@/components/chatbot/ChatHeader";
import { ChatInput } from "@/components/chatbot/ChatInput";
import { ChatMessage } from "@/components/chatbot/ChatMessage";
import { SuggestedQuestions } from "@/components/chatbot/SuggestedQuestions";

import type { ChatMessage as ChatMessageType } from "@/hooks/useChat";

type ChatWindowProps = {
  messages: readonly ChatMessageType[];
  isLoading: boolean;
  error: string | null;
  onSend: (message: string) => void;
  onStop: () => void;
  onClear: () => void;
  onClose: () => void;
};

export function ChatWindow({
  messages,
  isLoading,
  error,
  onSend,
  onStop,
  onClear,
  onClose,
}: Readonly<ChatWindowProps>) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const hasMessages = messages.length > 0;

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, error]);

  return (
    <section
      aria-label="Portfolio chatbot"
      className="border-border bg-background flex h-[min(680px,calc(100dvh-7rem))] w-[calc(100vw-2rem)] max-w-97.5 flex-col overflow-hidden rounded-2xl border shadow-2xl"
    >
      <ChatHeader
        hasMessages={hasMessages}
        isLoading={isLoading}
        onClear={onClear}
        onClose={onClose}
      />

      <div
        ref={messagesContainerRef}
        className="min-h-0 flex-1 overflow-y-auto"
      >
        {!hasMessages ? (
          <div className="flex h-full flex-col justify-between gap-6 p-4">
            <div className="space-y-3">
              <div className="bg-primary/10 text-primary flex size-11 items-center justify-center rounded-full">
                <span className="text-sm font-semibold">SM</span>
              </div>

              <div>
                <h3 className="text-foreground text-base font-semibold">
                  Hi, I&apos;m Subhasish&apos;s portfolio assistant.
                </h3>

                <p className="text-muted-foreground mt-1 text-sm leading-6">
                  Ask me about his experience, client projects, frontend
                  expertise, or contact details.
                </p>
              </div>
            </div>

            <SuggestedQuestions isLoading={isLoading} onSelect={onSend} />
          </div>
        ) : (
          <div
            aria-live="polite"
            aria-relevant="additions text"
            className="space-y-4 p-4"
          >
            {messages.map((message, index) => {
              const isLastMessage = index === messages.length - 1;
              const isStreaming =
                isLoading && isLastMessage && message.role === "assistant";

              return (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isStreaming={isStreaming}
                />
              );
            })}

            {error && (
              <div
                role="alert"
                className="border-destructive/30 bg-destructive/10 text-destructive flex items-start gap-2 rounded-xl border px-3 py-2.5 text-xs leading-5"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0" />

                <p>{error}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <ChatInput isLoading={isLoading} onSend={onSend} onStop={onStop} />
    </section>
  );
}
