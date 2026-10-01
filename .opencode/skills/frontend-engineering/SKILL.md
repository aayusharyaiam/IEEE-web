---
name: frontend-engineering
description: Build and review production frontend interfaces with strong responsive design, accessibility, performance, SEO, and motion practices. Use for React, Vite, Tailwind, and other user-facing web work.
---

# Frontend engineering

Use this skill for user-facing frontend changes. Treat the repository's existing stack and design language as the source of truth; do not replace the stack or add a library unless the requested outcome needs it.

## Before editing

1. Identify the app entry point, route map, shared layout, styling system, data boundaries, and real checks.
2. Read repository instructions and `git status`; preserve unrelated work.
3. Define the observable user outcome, including loading, empty, error, keyboard, touch, and reduced-motion states.
4. Prefer existing primitives and utilities. Keep new behavior localized and composable.

## UI and accessibility

- Use semantic HTML, one clear page heading, descriptive labels, meaningful alt text, visible focus states, and keyboard-operable controls.
- Keep color contrast readable in every theme. Never use color alone to communicate state.
- Design mobile-first with fluid containers, safe text wrapping, touch-sized controls, and no horizontal overflow at narrow widths.
- Keep interaction feedback close to the action: hover, focus, pressed, disabled, success, and failure states should be distinct.
- Respect `prefers-reduced-motion`; motion must not be required to understand or complete a task.

## Performance and resilience

- Avoid request waterfalls and unnecessary rerenders. Lazy-load below-the-fold media and code where it helps the real route.
- Give every asynchronous boundary a useful skeleton or progress state and an actionable error state.
- Reserve media space to avoid layout shift, use stable keys, and provide image fallbacks.
- Animate `transform` and `opacity` before layout-affecting properties. Clean up observers, timelines, listeners, and animation instances.
- Review third-party scripts, remote assets, and bundle impact before adding them.

## SEO and verification

- Give each route a distinct title, description, canonical URL, social metadata where appropriate, and crawlable semantic content.
- Check internal links, 404 behavior, mobile layout, keyboard navigation, console errors, and image failures.
- Run the project's lint, typecheck, test, and build commands that exist. Report warnings separately from failures.
- For a visual change, verify the real page at narrow and wide viewport sizes rather than trusting class names alone.

## Motion checklist

- Use short, purposeful transitions (usually 150–350ms) and stagger only small groups.
- Prefer CSS for simple micro-interactions; use a timeline library for coordinated or scroll-linked sequences.
- Avoid animating every element. Keep the first contentful view fast and ensure content remains usable if animation is disabled.

Source studied: https://github.com/finfin/awesome-frontend-skills (curated frontend skill catalog; individual entries remain third-party guidance and should be evaluated before adoption).
