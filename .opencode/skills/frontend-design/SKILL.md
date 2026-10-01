---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces from requirements, screenshots, videos, or existing projects. Use for visual redesigns, immersive interfaces, prototypes, and polished web UI while avoiding generic AI aesthetics.
---

# Frontend design

Create real, working interfaces with a deliberate visual point of view. Before coding, choose a clear direction rather than assembling familiar defaults.

## Workflow selection

- **Existing project**: audit the current layout, typography, colors, motion, responsive behavior, accessibility, and asset quality before redesigning.
- **Screenshot or video**: analyze hierarchy, spacing, typography, colors, motion, states, and assets; reproduce the visual language without blindly copying implementation details.
- **3D or WebGL**: confirm that immersive rendering is necessary, then protect loading performance and provide a non-3D fallback.
- **Quick task**: preserve the existing system and make the smallest polished change.
- **Complex or award-quality work**: define the concept, design dials, content hierarchy, component architecture, motion system, and verification plan first.

## Design thinking

Write down:

1. **Purpose** — what problem the interface solves and who uses it.
2. **Tone** — commit to one direction such as editorial, industrial, refined, playful, retro-futuristic, organic, brutalist, or art deco.
3. **Constraints** — existing framework, performance budget, accessibility, content, and device targets.
4. **Signature** — one memorable visual or interaction detail that makes the experience specific to its context.

## Aesthetic rules

- Use a distinctive display face paired with a readable body face; do not default to Inter, Roboto, Arial, or system fonts when the project allows a stronger choice.
- Use CSS variables for a coherent palette. Prefer a considered dominant base with one or two accents over timid rainbow palettes or generic purple gradients.
- Use asymmetric composition, split layouts, editorial rhythm, overlap, or intentional negative space when appropriate. Avoid default centered hero sections and identical three-column card rows.
- Build atmosphere with restrained texture, layered transparency, inner shadows, borders, and context-specific decoration. Avoid gratuitous neon glows, pure-black surfaces, and decorative effects that compete with content.
- Use realistic, specific content. Avoid placeholder names, vague marketing clichés, and meaningless round-number claims.
- Customize components to the product context. Do not ship default unstyled component-library output.

## Motion system

Set two design dials before complex work:

- `DESIGN_VARIANCE` 1–10: symmetry and predictability → asymmetry and spatial experimentation.
- `MOTION_INTENSITY` 1–10: simple state transitions → coordinated scroll reveals, spring motion, and ambient detail.
- `VISUAL_DENSITY` 1–10: gallery-like whitespace → tightly packed information surfaces.

Use motion where it improves hierarchy: one strong page-load sequence, purposeful scroll reveals, responsive hover/focus states, and small feedback animations. Prefer `transform` and `opacity`, keep transitions around 150–350ms for micro-interactions, and respect `prefers-reduced-motion`.

## Production checklist

- Keep fields at least 16px on mobile to avoid browser zoom.
- Use mobile-first fluid layouts, `min-height: 100dvh` when full viewport height is needed, and test narrow widths for overflow.
- Provide semantic structure, visible focus, keyboard access, readable contrast, descriptive alt text, and non-motion alternatives.
- Reserve image space, optimize assets, lazy-load below-the-fold media, and provide loading/error states.
- Keep animation and blur within the real performance budget; remove unused effects.
- Verify the real page at mobile and desktop widths, including loading, empty, error, hover, focus, and reduced-motion states.
- Before delivery, check for generic typography, predictable layout, excess cards, excessive gradients/glows, unclear hierarchy, and animation that delays usable content.

Source studied: https://github.com/binjuhor/shadcn-lar/blob/main/.claude/skills/frontend-design/SKILL.md
