"use client";

export type ChatAnalyticsEvent =
  | "chat_opened"
  | "chat_question_sent"
  | "chat_response_completed"
  | "chat_response_stopped"
  | "chat_cleared"
  | "chat_error";

export type ChatErrorCategory =
  | "timeout"
  | "rate_limit"
  | "quota"
  | "network"
  | "configuration"
  | "provider_unavailable"
  | "empty_response"
  | "unknown";

type TrackChatEventOptions = {
  event: ChatAnalyticsEvent;
  pathname: string;
  category?: ChatErrorCategory;
  durationMs?: number;
};

const ANALYTICS_ENDPOINT = "/api/chat/analytics";

export function getChatErrorCategory(error: unknown): ChatErrorCategory {
  const message =
    error instanceof Error
      ? error.message.toLowerCase()
      : String(error).toLowerCase();

  if (
    message.includes("too long") ||
    message.includes("timeout") ||
    message.includes("timed out")
  ) {
    return "timeout";
  }

  if (message.includes("rate limit") || message.includes("too many requests")) {
    return "rate_limit";
  }

  if (message.includes("quota") || message.includes("resource exhausted")) {
    return "quota";
  }

  if (
    message.includes("api key") ||
    message.includes("configuration") ||
    message.includes("authentication") ||
    message.includes("unauthorized")
  ) {
    return "configuration";
  }

  if (
    message.includes("unavailable") ||
    message.includes("service unavailable") ||
    message.includes("model")
  ) {
    return "provider_unavailable";
  }

  if (message.includes("empty response")) {
    return "empty_response";
  }

  if (
    message.includes("fetch") ||
    message.includes("network") ||
    message.includes("connection")
  ) {
    return "network";
  }

  return "unknown";
}

export function trackChatEvent({
  event,
  pathname,
  category,
  durationMs,
}: TrackChatEventOptions): void {
  if (typeof window === "undefined") {
    return;
  }

  const payload = JSON.stringify({
    event,
    pathname,
    category,
    durationMs:
      typeof durationMs === "number"
        ? Math.max(0, Math.round(durationMs))
        : undefined,
  });

  try {
    if ("sendBeacon" in navigator) {
      const body = new Blob([payload], {
        type: "application/json",
      });

      const wasQueued = navigator.sendBeacon(ANALYTICS_ENDPOINT, body);

      if (wasQueued) {
        return;
      }
    }

    void fetch(ANALYTICS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
      keepalive: true,
    }).catch(() => {
      // Analytics must never interrupt the chatbot experience.
    });
  } catch {
    // Analytics must never interrupt the chatbot experience.
  }
}
