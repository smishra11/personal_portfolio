import "server-only";

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    "Missing GEMINI_API_KEY. Please add it to your .env.local file."
  );
}

export const gemini = new GoogleGenAI({
  apiKey,
});

export const GEMINI_MODEL = "gemini-3.6-flash";
