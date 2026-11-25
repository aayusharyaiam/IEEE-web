# IEEE Student Branch BIT Patna

The website for the **IEEE Student Branch at Birla Institute of Technology, Patna**: the branch, its executive committee, events, the Abhivyakti fest, a photo gallery and contact details.

## Design system

The UI follows a restrained, photography-first design language, specified in a DESIGN.md token file (`apple.design.md`):

- **One interactive colour.** Action Blue `#0066cc` is used for every link, pill CTA and focus ring. On dark tiles links switch to `#2997ff`.
- **Alternating full-bleed tiles.** Pages are stacks of edge-to-edge sections in white `#ffffff`, parchment `#f5f5f7` and near-black (`#272729`, `#2a2a2c`, `#252527`). The colour change is the section divider: there are no borders or decorative gradients between sections.
- **Type.** SF Pro on Apple devices, Inter everywhere else. Headlines are weight 600 with tight tracking, body text is **17px / 1.47**, and the weight ladder is 300 / 400 / 600 / 700 (no 500).
- **Radius grammar.** Pills for actions, 18px for utility cards, 8px for small utility buttons and inline imagery, 0 for tiles.
- **One shadow.** `3px 5px 30px rgba(0,0,0,.22)`, used only on photography that sits on a surface.
- **Chrome.** A 44px translucent black global nav, a frosted sub-nav on Abhivyakti, a parchment footer, and `scale(0.95)` as the press state on every button.

Tokens and component classes (`.tile-*`, `.t-hero`, `.t-body`, `.btn-primary`, `.btn-secondary`, `.card`, `.field`, …) live in `src/index.css`. They are exposed to Tailwind through `@theme`, so utilities such as `bg-parchment`, `text-ink-48`, `text-primary` and `shadow-product` also work.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config in `src/index.css`)
- [GSAP](https://gsap.com/) ScrollTrigger for quiet scroll reveals, and [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [lucide-react](https://lucide.dev/) icons

## Project structure

```
src/
├── data/committee.js        # Executive committee, faculty advisor, past committees
├── hooks/useReveal.js       # Fade-up reveal for [data-reveal] elements (respects reduced motion)
├── components/
│   ├── Navbar.jsx           # 44px global nav + full-screen mobile menu
│   ├── Footer.jsx           # Parchment footer with link columns
│   ├── MemberCard.jsx       # Utility card for committee members (light and dark variants)
│   ├── EventCard.jsx        # Event row used on /events
│   ├── ImageWithSkeleton.jsx
│   └── SEO.jsx, SiteLoader.jsx, ScrollToTop.jsx, SmoothScroll.jsx, scrollManager.js
└── pages/
    ├── Home.jsx             # Hero, vision/mission, about, stats, new committee, events, gallery, counsellor, CTA
    ├── Members.jsx          # Current committee, faculty advisor, alumni by term
    ├── Events.jsx
    ├── Abhivyakti.jsx       # Fest editions with a frosted year switcher
    ├── Gallery.jsx
    └── Contact.jsx
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
