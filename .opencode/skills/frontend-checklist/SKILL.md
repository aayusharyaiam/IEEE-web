---
name: frontend-checklist
description: Audit frontend projects against practical HTML, CSS, JavaScript, performance, accessibility, SEO, security, image, testing, privacy, and internationalization quality rules. Use before delivery, during review, or when the user requests a frontend quality audit.
---

# Front-End Checklist audit

Use this as a review workflow for frontend quality. It is a decision aid, not permission to blindly apply every rule. Select rules that fit the project and report evidence, impact, and remediation.

## Audit workflow

1. **Scope** the app, routes, components, assets, deployment target, browsers, and user journeys. Read repository instructions and preserve unrelated changes.
2. **Inspect** source, configuration, build output, and real runtime behavior. Prefer the highest-confidence evidence from code and browser checks.
3. **Prioritize** findings:
   - **Critical** — security, compliance, site-breaking, or severe accessibility failures.
   - **High** — major user experience, discoverability, performance, or accessibility impact.
   - **Medium** — strong normal-practice improvements.
   - **Low** — useful, situational refinements.
4. **Report** each finding with category, priority, evidence path or URL, user impact, concrete fix, and verification command.
5. **Remediate** only after confirming the scope, then rerun the smallest meaningful checks and re-audit the changed behavior.

## Categories

- **HTML** — doctype, charset, language, viewport, semantic landmarks, unique IDs, forms, headings, 404, favicon, manifest, and noscript fallback.
- **CSS** — responsive units, no horizontal overflow, readable mobile text, focus styles, low specificity, design tokens, dark mode, print, and animation performance.
- **JavaScript** — module usage, safe parsing and storage, error handling, throttled high-frequency work, cleanup, no unsafe dynamic code, and bundle splitting.
- **Performance** — Core Web Vitals, critical request chains, compression, caching, font/image loading, code splitting, third-party impact, DOM size, and loading indicators.
- **Accessibility** — keyboard access, labels, names, focus management, landmarks, heading order, contrast, touch targets, reduced motion, zoom/reflow, screen readers, and accessible dialogs/tabs.
- **SEO** — unique titles/descriptions, canonical URLs, robots and sitemap, crawlable links, one descriptive H1, structured data, Open Graph, freshness/trust signals, and broken-link checks.
- **Security** — HTTPS, mixed content, external link safety, headers, CSP, dependency review, secret exposure, safe forms, and secure token handling.
- **Images** — alt text, dimensions, reserved space, compression, responsive sources, modern formats, lazy loading below the fold, and graceful failures.
- **Testing** — unit/integration/E2E coverage for critical journeys, accessibility checks, visual regression, real mobile/browser checks, performance budgets, and monitoring.
- **Privacy** — data minimization, consent, third-party cookies, deletion, and visible privacy policy.
- **Internationalization** — language metadata, text expansion, RTL-ready layout, pluralization, locale formatting, and culturally appropriate imagery.

## React and SPA guidance

- Check every route, not only the default route. Verify client-side navigation, direct URL loads, back/forward behavior, page titles, canonical metadata, and 404 handling.
- Treat static content and async content differently: async boundaries need loading, empty, error, retry, and accessible announcement states.
- Avoid scroll hijacking. Any smooth scrolling must respect reduced motion, preserve keyboard/anchor navigation, and not break nested scroll containers.
- Inspect effects for listener, observer, timer, animation, and subscription cleanup, especially under React Strict Mode.
- Check that remote assets, maps, fonts, embeds, and analytics have a justified performance and privacy cost.

## Evidence rules

- Never claim a Lighthouse, browser, screen-reader, security, or cross-browser result unless it was actually run.
- Separate confirmed findings from hypotheses and missing evidence.
- Prefer one actionable fix over a long generic checklist dump.
- Do not copy private data, credentials, raw API responses, or generated audit artifacts into the repository.

Source studied: Front-End Checklist README supplied by the user, based on https://github.com/thedaviddias/Front-End-Checklist and the companion references at https://frontendchecklist.io/.
