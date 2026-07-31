"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatApiMessage = Pick<ChatMessage, "role" | "content">;

type ChatErrorResponse = {
  error?: string;
};

const MAX_MESSAGE_LENGTH = 1_000;
const MAX_HISTORY_MESSAGES = 20;

const CHARACTER_DELAY = 10;
const STREAM_WAIT_DELAY = 20;
const REQUEST_TIMEOUT = 30_000;

function createMessage(
  role: ChatMessage["role"],
  content: string
): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role,
    content,
  };
}

function wait(duration: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

function isAbortError(error: unknown): boolean {
  return error instanceof DOMException && error.name === "AbortError";
}

export function useChat() {
  const pathname = usePathname();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesRef = useRef<ChatMessage[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);
  const generationIdRef = useRef(0);
  const isSendingRef = useRef(false);
  const timedOutRef = useRef(false);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    return () => {
      generationIdRef.current += 1;
      abortControllerRef.current?.abort();
    };
  }, []);

  const updateAssistantMessage = useCallback(
    (messageId: string, content: string) => {
      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === messageId
            ? {
                ...message,
                content,
              }
            : message
        )
      );
    },
    []
  );

  const sendMessage = useCallback(
    async (value: string) => {
      const content = value.trim();

      if (!content || isSendingRef.current) {
        return;
      }

      if (content.length > MAX_MESSAGE_LENGTH) {
        setError(
          `Your message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`
        );
        return;
      }

      isSendingRef.current = true;
      timedOutRef.current = false;

      setError(null);
      setIsLoading(true);

      const userMessage = createMessage("user", content);
      const assistantMessage = createMessage("assistant", "");

      const conversationHistory = [...messagesRef.current, userMessage].slice(
        -MAX_HISTORY_MESSAGES
      );

      setMessages([...conversationHistory, assistantMessage]);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      const generationId = generationIdRef.current + 1;
      generationIdRef.current = generationId;

      const timeoutId = window.setTimeout(() => {
        timedOutRef.current = true;
        controller.abort();
      }, REQUEST_TIMEOUT);

      try {
        const apiMessages: ChatApiMessage[] = conversationHistory.map(
          ({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })
        );

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: apiMessages,
            pathname,
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const responseBody = (await response
            .json()
            .catch(() => null)) as ChatErrorResponse | null;

          throw new Error(
            responseBody?.error ??
              "The assistant could not process your message."
          );
        }

        if (!response.body) {
          throw new Error("The assistant returned an empty response.");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let bufferedContent = "";
        let displayedContent = "";
        let streamFinished = false;

        const readStream = async () => {
          try {
            while (true) {
              const { value: chunk, done } = await reader.read();

              if (done) {
                bufferedContent += decoder.decode();
                break;
              }

              bufferedContent += decoder.decode(chunk, {
                stream: true,
              });
            }
          } finally {
            streamFinished = true;
          }
        };

        const streamPromise = readStream();

        while (
          !streamFinished ||
          displayedContent.length < bufferedContent.length
        ) {
          if (
            controller.signal.aborted ||
            generationIdRef.current !== generationId
          ) {
            return;
          }

          if (displayedContent.length < bufferedContent.length) {
            displayedContent += bufferedContent.charAt(displayedContent.length);

            updateAssistantMessage(assistantMessage.id, displayedContent);

            await wait(CHARACTER_DELAY);
          } else {
            await wait(STREAM_WAIT_DELAY);
          }
        }

        await streamPromise;

        if (!displayedContent.trim()) {
          throw new Error("The assistant returned an empty response.");
        }
      } catch (requestError) {
        if (isAbortError(requestError)) {
          if (timedOutRef.current) {
            setError(
              "The assistant took too long to respond. Please try again."
            );
          }

          return;
        }

        const errorMessage =
          requestError instanceof Error
            ? requestError.message
            : "Something went wrong. Please try again.";

        setError(errorMessage);

        setMessages((currentMessages) =>
          currentMessages.filter(
            (currentMessage) =>
              currentMessage.id !== assistantMessage.id ||
              currentMessage.content.trim().length > 0
          )
        );
      } finally {
        window.clearTimeout(timeoutId);

        if (generationIdRef.current === generationId) {
          setIsLoading(false);
        }

        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }

        isSendingRef.current = false;
        timedOutRef.current = false;
      }
    },
    [pathname, updateAssistantMessage]
  );

  const stopGeneration = useCallback(() => {
    generationIdRef.current += 1;
    timedOutRef.current = false;
    isSendingRef.current = false;

    abortControllerRef.current?.abort();
    abortControllerRef.current = null;

    setIsLoading(false);

    setMessages((currentMessages) =>
      currentMessages.filter(
        (message) =>
          message.role !== "assistant" || message.content.trim().length > 0
      )
    );
  }, []);

  const clearMessages = useCallback(() => {
    generationIdRef.current += 1;
    timedOutRef.current = false;
    isSendingRef.current = false;

    abortControllerRef.current?.abort();
    abortControllerRef.current = null;

    setMessages([]);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    stopGeneration,
    clearMessages,
  };
}
