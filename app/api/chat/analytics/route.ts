import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";

const redis = Redis.fromEnv();

const analyticsRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(120, "1 m"),
  prefix: "portfolio:chat-analytics:rate-limit",
  analytics: false,
});

const ALLOWED_EVENTS = new Set([
  "chat_opened",
  "chat_question_sent",
  "chat_response_completed",
  "chat_response_stopped",
  "chat_cleared",
  "chat_error",
]);

const ALLOWED_ERROR_CATEGORIES = new Set([
  "timeout",
  "rate_limit",
  "quota",
  "network",
  "configuration",
  "provider_unavailable",
  "empty_response",
  "unknown",
]);

const MAX_PATHNAME_LENGTH = 150;
const MAX_DURATION_MS = 300_000;
const ANALYTICS_RETENTION_SECONDS = 60 * 60 * 24 * 90;

type AnalyticsRequestBody = {
  event?: unknown;
  pathname?: unknown;
  category?: unknown;
  durationMs?: unknown;
};

function getClientIdentifier(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

function sanitizePathname(value: unknown): string {
  if (
    typeof value !== "string" ||
    !value.startsWith("/") ||
    value.length > MAX_PATHNAME_LENGTH
  ) {
    return "unknown";
  }

  return value.replaceAll("|", "-").replaceAll("\n", "").replaceAll("\r", "");
}

function sanitizeDuration(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return null;
  }

  return Math.min(Math.round(value), MAX_DURATION_MS);
}

export async function POST(request: Request) {
  try {
    const identifier = getClientIdentifier(request);

    const rateLimitResult = await analyticsRateLimit.limit(identifier);

    if (!rateLimitResult.success) {
      return new Response(null, {
        status: 204,
      });
    }

    const body = (await request.json()) as AnalyticsRequestBody;

    if (typeof body.event !== "string" || !ALLOWED_EVENTS.has(body.event)) {
      return Response.json(
        {
          error: "Invalid analytics event.",
        },
        {
          status: 400,
        }
      );
    }

    const pathname = sanitizePathname(body.pathname);

    const category =
      body.event === "chat_error" &&
      typeof body.category === "string" &&
      ALLOWED_ERROR_CATEGORIES.has(body.category)
        ? body.category
        : "none";

    const durationMs = sanitizeDuration(body.durationMs);

    const date = new Date().toISOString().slice(0, 10);

    const analyticsKey = `portfolio:chat-analytics:${date}`;

    const eventField = `${body.event}|${pathname}|${category}`;

    const pipeline = redis.pipeline();

    pipeline.hincrby(analyticsKey, `${eventField}|count`, 1);

    pipeline.hincrby(analyticsKey, `${body.event}|all|count`, 1);

    if (body.event === "chat_response_completed" && durationMs !== null) {
      pipeline.hincrby(
        analyticsKey,
        `${eventField}|duration_ms_total`,
        durationMs
      );
    }

    pipeline.expire(analyticsKey, ANALYTICS_RETENTION_SECONDS);

    await pipeline.exec();

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    console.error("Chat analytics error:", error);

    // Analytics failures should not affect the chatbot.
    return new Response(null, {
      status: 204,
    });
  }
}
