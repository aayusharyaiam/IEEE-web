# IEEE Student Branch BIT Patna

The website for the **IEEE Student Branch at Birla Institute of Technology, Patna**: the branch, its executive committee, events, the Abhivyakti fest, a photo gallery and contact details.

## Design system

An "engineering notebook" look, informed by the BIT Mesra conference sites (impact.bitmesra.ac.in, ivdc.bitmesra.ac.in) but with its own palette and type:

- **Palette.** Warm paper `#f4f1ea` with card `#fbfaf7` and hairline rules `#d8d1c2`; ink `#15171c`. IEEE blue `#00629b` is the action colour, copper `#c0652a` is the emphasis colour (accent words, indices, progress line), and night `#0c1b2a` is used for the closing CTA and footer.
- **Type.** Fraunces (display, with an italic copper accent word per headline), Geist (UI and body), Geist Mono (`[01] — LABEL` annotations).
- **Motifs.** Mono section indices on a hairline that draws in, corner "registration" ticks on framed photos, a faint engineering grid behind the hero and 404, a live-updates ticker.
- **Micro-interactions.** Buttons fill from below and their arrow turns; nav labels roll; cards lift and their photos zoom; member cards reveal contact links on hover (always visible on touch); links draw an underline; alumni terms expand with an animated plus.
- **Scroll motion** (`src/hooks/useReveal.js`, GSAP ScrollTrigger + Lenis): headlines rise word by word (`<SplitText>`), images unmask (`data-reveal="clip"`), rules draw (`data-rule`), groups stagger (`data-stagger`), the hero photo drifts (`data-parallax`) and stats count up (`data-count`). Everything is skipped for `prefers-reduced-motion`, and content is visible without JavaScript animation.

Tokens and component classes (`.display-*`, `.lede`, `.label`, `.btn-*`, `.card`, `.tag`, `.field`, `.ticker`, …) live in `src/index.css` and are exposed to Tailwind through `@theme` (`bg-paper`, `text-copper`, `font-display`, …).

## SEO

- Titles and descriptions for every route live in `src/data/seo.js`. `<SEO path="/members" />` keeps the head in sync on client-side navigation.
- `npm run build` runs `scripts/prerender.mjs` after Vite. It writes `members.html`, `events.html`, … with each route's own title, description, canonical, Open Graph and Twitter tags (served at `/members` etc. via `cleanUrls` in `vercel.json`), a `404.html` marked `noindex` (Vercel serves it with a real 404 status), `sitemap.xml` and `robots.txt`.
- `index.html` carries Organization JSON-LD (injected from `src/data/seo.js` by a small Vite plugin) and a `<noscript>` fallback.
- When you add a page, add it to `routes` in `src/data/seo.js` so it gets a title, a prerendered shell and a sitemap entry.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config in `src/index.css`)
- [GSAP](https://gsap.com/) ScrollTrigger for quiet scroll reveals, and [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [lucide-react](https://lucide.dev/) icons

## Project structure

```
src/
├── data/committee.js        # Executive committee, faculty advisor, past committees (newest first)
├── data/seo.js              # Per-route titles/descriptions, site URL, Organization JSON-LD
├── hooks/useReveal.js       # Scroll-triggered motion (reveal, split words, clip, rule, stagger, parallax, count)
├── components/
│   ├── Reveal.jsx           # SplitText, SectionHead, Ticker, BtnArrow
│   ├── Navbar.jsx           # Nav with rolling labels, copper scroll-progress line, mobile menu
│   ├── Footer.jsx           # Night footer with oversized wordmark
│   ├── MemberCard.jsx       # Portrait card with hover-revealed contact links (compact variant for alumni)
│   ├── EventCard.jsx        # Ledger-style event row used on /events
│   ├── PageSkeleton.jsx     # Loading skeleton shown while a page chunk loads
│   ├── ImageWithSkeleton.jsx
│   └── SEO.jsx, SiteLoader.jsx, ScrollToTop.jsx, SmoothScroll.jsx, scrollManager.js
├── pages/                   # Lazy-loaded route chunks
│   ├── Home.jsx, Members.jsx (collapsible alumni, latest term open), Events.jsx
│   ├── Abhivyakti.jsx, Gallery.jsx, Contact.jsx
│   └── NotFound.jsx         # 404 page (noindex)
scripts/prerender.mjs        # Post-build: per-route HTML, 404.html, sitemap.xml, robots.txt
```

## Updating the executive committee

Edit `src/data/committee.js`. Both the Committee page and the "Meet the new team" section on the home page read from it.

1. Move the outgoing committee into `pastCommittees` under its term (for example `'2026–2027'`).
2. Replace `committee` with the new post holders and update `currentTerm`.
3. Add portraits to `public/members/` and set `image: '/members/<name>.jpeg'`. Members without a photo show their initials.
4. Publish only names, positions and public links. **Do not** add phone numbers, roll numbers or IEEE membership IDs from office orders.
5. Update the members section of `content.md` to match.

The current committee (2026–2027) comes from office order IEEE/13/10/26, dated 13 Oct 2026:

| Position   | Name               |
|------------|--------------------|
| Chair      | Sahil Gurg         |
| Vice-Chair | Rishika Chatterjee |
| Secretary  | Aayush Arya        |
| Treasurer  | Sunny Singh        |
| Webmaster  | Krish Agarwal      |

Faculty Advisor / Branch Counsellor: Dr. Mayank Singh.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run lint     # ESLint
npm run build    # production build in dist/
npm run preview  # serve the production build
```

The site deploys on Vercel. `vercel.json` rewrites every route to `index.html` so client-side routing works.

## Content

Page copy follows `content.md`. Change the wording there first, then in the components.
