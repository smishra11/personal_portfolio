import { cache } from "react";
import { codeToHtml } from "shiki";

export type CodeLanguage = "javascript" | "typescript" | "tsx";

const THEMES = {
  light: "github-light",
  dark: "catppuccin-mocha",
} as const;

export const highlightCode = cache(
  async (code: string, language: CodeLanguage) => {
    return codeToHtml(code, {
      lang: language,
      themes: THEMES,
      defaultColor: false,
    });
  }
);
