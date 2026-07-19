import { codeToHtml } from "shiki";

export async function highlightCode(
  code: string,
  language: "javascript" | "typescript" | "tsx"
) {
  return codeToHtml(code, {
    lang: language,
    themes: {
      light: "github-light",
      dark: "catppuccin-mocha",
    },
    defaultColor: false,
  });
}
