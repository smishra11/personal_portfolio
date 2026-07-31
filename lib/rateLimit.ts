import "server-only";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

type ChatRateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!redisUrl || !redisToken) {
  throw new Error(
    "Missing Upstash Redis credentials. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to your environment variables."
  );
}

const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});

const minuteRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  prefix: "portfolio-chat:minute",
  analytics: false,
  timeout: 5_000,
});

const dailyRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(50, "1 d"),
  prefix: "portfolio-chat:daily",
  analytics: false,
  timeout: 5_000,
});

function getMostRestrictiveResult(
  minuteResult: RateLimitResult,
  dailyResult: RateLimitResult
): ChatRateLimitResult {
  if (!minuteResult.success) {
    return minuteResult;
  }

  if (!dailyResult.success) {
    return dailyResult;
  }

  const minuteRatio = minuteResult.remaining / minuteResult.limit;

  const dailyRatio = dailyResult.remaining / dailyResult.limit;

  return minuteRatio <= dailyRatio ? minuteResult : dailyResult;
}

export function getClientIdentifier(request: Request): string {
  const cloudflareIp = request.headers.get("cf-connecting-ip");

  if (cloudflareIp) {
    return cloudflareIp.trim();
  }

  const realIp = request.headers.get("x-real-ip");

  if (realIp) {
    return realIp.trim();
  }

  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();

    if (firstIp) {
      return firstIp;
    }
  }

  const userAgent = request.headers.get("user-agent") ?? "unknown-agent";

  return `fallback:${userAgent}`;
}

export async function checkChatRateLimit(
  identifier: string
): Promise<ChatRateLimitResult> {
  const [minuteResult, dailyResult] = await Promise.all([
    minuteRateLimit.limit(identifier),
    dailyRateLimit.limit(identifier),
  ]);

  return getMostRestrictiveResult(minuteResult, dailyResult);
}
