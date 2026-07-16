<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Goal

This project is a personal portfolio for Subhasish Mishra, a Frontend Engineer.

The goal is to create a production-quality portfolio that demonstrates engineering excellence, modern UI design, accessibility, performance, and clean architecture.

Every implementation should prioritize maintainability over unnecessary complexity.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Base Nova)
- next-themes
- Lucide React
- Framer Motion (planned)
- React Hook Form (planned)
- Zod (planned)
- Formspree (planned)

## Architecture

- Keep the project modular.
- Avoid creating unnecessary folders.
- Components should remain feature-focused.
- Prefer composition over abstraction.
- Create reusable components only after a second real use case exists.

## Folder Structure

components/
common/
layout/
providers/
sections/
ui/
data/
lib/

## Components

- Use functional components.
- Export named components.
- Keep one component per file.
- Keep helper components private unless reused.
- Prefer semantic HTML.

## Styling

- Use Tailwind utilities.
- Do not use inline styles.
- Do not use CSS Modules.
- Prefer utility classes over custom CSS.
- Reuse spacing and typography patterns.

## Icons

- Use Lucide React for UI icons.
- Use local SVG assets for brand icons.
- Never replace brand icons with Lucide alternatives.
- Never recolor official brand SVGs.

## Data

Store static content in the data/ directory.

Avoid hardcoding content inside components.

## Performance

- Prefer Server Components.
- Add "use client" only when necessary.
- Optimize images.
- Keep bundles small.
- Avoid unnecessary dependencies.

## Accessibility

- Use semantic HTML.
- Every form element needs a label.
- Buttons require accessible text.
- Links require descriptive labels.
- Images require alt text.

## Code Style

- TypeScript strict mode.
- No any.
- No console.log in production.
- Avoid duplicated code.
- Prefer early returns.

## AI Guidelines

Before implementing a feature:

1. Think about maintainability.
2. Avoid over-engineering.
3. Reuse existing components whenever possible.
4. Follow the established project architecture.
5. Prefer production-ready solutions.
6. Keep the UI clean and premium.
7. Do not introduce unnecessary dependencies.
8. Explain architectural changes before implementing them.

## Portfolio Principles

Every feature should contribute to one of the following:

- Demonstrate frontend engineering skills.
- Showcase clean architecture.
- Improve user experience.
- Highlight attention to detail.
- Maintain excellent performance.

Avoid adding features that do not support these goals.
