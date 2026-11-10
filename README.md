# NyasaBuy Landing Page

The public landing page for NyasaBuy, an online marketplace for Malawi. It
introduces the platform, explains how buying and selling works, and funnels
visitors toward downloading the app or opening a shop.

## What is on the page

| Section | Purpose |
| --- | --- |
| Header | Brand mark, primary navigation, contact and "Get started for free" actions, animated mobile menu |
| Hero | Headline, one "Download the app" call to action, note that the stores are coming soon |
| Showcase | Auto-rotating panel (2.5s loop) with four tabs: Shopping, Payments, Delivery, Sellers, each with a mock app screen |
| How it works | Three steps: browse, pay your way, receive your order |
| Categories | Eight category tiles for quick entry points |
| Featured products | Empty state ("Listings coming soon") until real inventory exists |
| Sell with us | Navy panel pitching sellers: free sign-up, MWK payouts, terms and conditions apply |
| FAQ | Four questions using the native details/summary accordion |
| Final CTA | Closing call to action and footnote |
| Footer | Brand recap, link columns, legal row |

## Tech stack

- [Astro](https://astro.build) 7 (static output, zero framework islands)
- Plain HTML and scoped CSS in `.astro` components, one global stylesheet
- A single small inline script for the mobile menu, showcase tabs with
  auto-rotation, and scroll reveals
- Fonts: Plus Jakarta Sans (headings) and Inter (body) via Google Fonts

## Project structure

```
src/
  layouts/Layout.astro      HTML shell, head, fonts, js-motion flag
  pages/index.astro         Page assembly + the one inline script
  components/               One file per page section
  styles/global.css         Tokens, reset, buttons, reveal system
public/                     Favicon
dist/                       Build output (generated)
```

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server
npm run build      # static build into dist/
npm run preview    # preview the built site
```

## Design system

- **Colors:** page background `#F6F7FA`, navy `#0D1B33`, body text `#5B6785`,
  accent blue `#2563EB` / `#1A4FBF`, chip `#EAF1FB`, white surfaces
- **Radii:** page frame 32px, showcase panel 40px, cards 16px, buttons 12px
- **Type:** Plus Jakarta Sans 700 for headings (tight tracking), Inter for body
- **Buttons:** `.btn-solid` (navy), `.btn-outline` (light), `.btn-light` and
  `.btn-ghost` (on the navy panel)

## Motion

Apple-style, deliberately lightweight. Only `opacity` and `transform` animate;
no animation libraries are used.

- Buttons and the menu button press in on `:active`
- Blocks tagged `.reveal` fade and rise once as they scroll into view
  (IntersectionObserver, one-shot, staggered via `--reveal-delay`)
- The mobile menu opens by growing a grid row (`0fr` to `1fr`)
- Showcase panes dissolve in sequence: the outgoing screen clears, then the
  incoming one rises into place (no double-exposure)
- FAQ chevrons flip with an eased rotate; answers settle in with a short fade

All movement is gated behind `prefers-reduced-motion: reduce` and an inline
`js-motion` class set in `<head>`, so reduced-motion users and visitors
without JavaScript always get fully visible, instant-responding content.

## Accessibility

- Landmarks and labelled sections (`aria-labelledby`), skip link, focus
  outlines
- Showcase uses the ARIA tabs pattern with roving tabindex and arrow-key
  navigation; auto-rotation pauses on hover and focus
- Text contrast verified against WCAG AA (worst pair used: 5.26:1)
- No visible text relies on color alone

## Placeholders to replace before launch

- All `href="#"` links: store download, Log in / Get started, Deals, category
  tiles, Learn more, seller CTAs
- Featured products: still the "Listings coming soon" empty state
- FAQ copy should be checked against the real business model
- The showcase mock screens are illustrative app UI, not live data
