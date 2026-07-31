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

const MAX_USER_MESSAGE_LENGTH = 1_000;
const MAX_ASSISTANT_MESSAGE_LENGTH = 10_000;
const MAX_HISTORY_MESSAGES = 20;

const CHARACTER_DELAY = 10;
const STREAM_WAIT_DELAY = 20;
const REQUEST_START_TIMEOUT = 30_000;

const CHAT_STORAGE_KEY = "portfolio-chat-messages";

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

function isStoredChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as Record<string, unknown>;

  if (
    typeof message.id !== "string" ||
    message.id.length === 0 ||
    (message.role !== "user" && message.role !== "assistant") ||
    typeof message.content !== "string" ||
    message.content.trim().length === 0
  ) {
    return false;
  }

  const maximumLength =
    message.role === "user"
      ? MAX_USER_MESSAGE_LENGTH
      : MAX_ASSISTANT_MESSAGE_LENGTH;

  return message.content.length <= maximumLength;
}

function getStoredMessages(): ChatMessage[] {
  try {
    const storedValue = window.sessionStorage.getItem(CHAT_STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    const parsedValue: unknown = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
      return [];
    }

    const validMessages = parsedValue
      .filter(isStoredChatMessage)
      .slice(-MAX_HISTORY_MESSAGES);

    if (validMessages.length !== parsedValue.length) {
      window.sessionStorage.setItem(
        CHAT_STORAGE_KEY,
        JSON.stringify(validMessages)
      );
    }

    return validMessages;
  } catch {
    try {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
    } catch {
      // Browser storage may be disabled.
    }

    return [];
  }
}

function saveMessages(messages: readonly ChatMessage[]) {
  try {
    const persistableMessages = messages
      .filter((message) => message.content.trim().length > 0)
      .slice(-MAX_HISTORY_MESSAGES);

    if (persistableMessages.length === 0) {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
      return;
    }

    window.sessionStorage.setItem(
      CHAT_STORAGE_KEY,
      JSON.stringify(persistableMessages)
    );
  } catch {
    // Continue without persistence when browser storage is unavailable.
  }
}

function getCharactersPerTick(remainingCharacters: number): number {
  if (remainingCharacters > 500) {
    return 8;
  }

  if (remainingCharacters > 250) {
    return 5;
  }

  if (remainingCharacters > 100) {
    return 3;
  }

  return 1;
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
  const hasRestoredMessagesRef = useRef(false);

  /*
   * Restore session history after hydration so the server and initial
   * client render both begin with an empty conversation.
   */
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const storedMessages = getStoredMessages();

      messagesRef.current = storedMessages;
      hasRestoredMessagesRef.current = true;

      setMessages(storedMessages);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  /*
   * Keep the latest messages available to async callbacks.
   */
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  /*
   * Save only completed or stopped conversations.
   * This prevents a sessionStorage write after every streamed character.
   */
  useEffect(() => {
    if (!hasRestoredMessagesRef.current || isLoading) {
      return;
    }

    saveMessages(messages);
  }, [messages, isLoading]);

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

      if (content.length > MAX_USER_MESSAGE_LENGTH) {
        setError(
          `Your message must be ${MAX_USER_MESSAGE_LENGTH} characters or fewer.`
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

      messagesRef.current = [...conversationHistory, assistantMessage];

      setMessages(messagesRef.current);

      const controller = new AbortController();
      abortControllerRef.current = controller;

      const generationId = generationIdRef.current + 1;
      generationIdRef.current = generationId;

      const timeoutId = window.setTimeout(() => {
        timedOutRef.current = true;
        controller.abort();
      }, REQUEST_START_TIMEOUT);

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

        /*
         * The server has started responding. Do not let the initial timeout
         * interrupt the response stream or the typing animation.
         */
        window.clearTimeout(timeoutId);
        timedOutRef.current = false;

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
        let streamError: unknown = null;

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
          } catch (readError) {
            streamError = readError;
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

          const remainingCharacters =
            bufferedContent.length - displayedContent.length;

          if (remainingCharacters > 0) {
            const charactersPerTick = getCharactersPerTick(remainingCharacters);

            displayedContent = bufferedContent.slice(
              0,
              displayedContent.length + charactersPerTick
            );

            updateAssistantMessage(assistantMessage.id, displayedContent);

            await wait(CHARACTER_DELAY);
          } else {
            await wait(STREAM_WAIT_DELAY);
          }
        }

        await streamPromise;

        if (streamError) {
          throw streamError;
        }

        /*
         * Guarantee that the final rendered message exactly matches the
         * complete response received from the API.
         */
        if (displayedContent !== bufferedContent) {
          displayedContent = bufferedContent;

          updateAssistantMessage(assistantMessage.id, displayedContent);
        }

        if (!displayedContent.trim()) {
          throw new Error("The assistant returned an empty response.");
        }
      } catch (requestError) {
        if (isAbortError(requestError)) {
          if (timedOutRef.current) {
            setError(
              "The assistant took too long to begin responding. Please try again."
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

    messagesRef.current = [];

    setMessages([]);
    setError(null);
    setIsLoading(false);

    try {
      window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
    } catch {
      // Browser storage may be unavailable.
    }
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
