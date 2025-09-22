# Lazy Creations LLC — Marketing Site

Stack: Next.js (App Router, TS), Tailwind v4, shadcn/ui, Framer Motion, MDX, next-seo, Vercel Analytics. No traditional backend; contact via Formspree with optional Vercel Route Handlers + Resend.

## Setup

- Node 20+
- npm i
- npm run dev

## Content

- Blog MDX: `content/blog/*.mdx`
- Case studies MDX: `content/case-studies/*.mdx`
- Frontmatter: `{ title, date, excerpt, tags, heroImage }`

## Contact form

- Default: Formspree POST to placeholder endpoint in `app/(routes)/contact/page.tsx`
- Honeypot field `website`, debounce and toasts included
- Fallback: `mailto:info@lazycreations.ai`
- Optional: create `app/api/contact/route.ts` with Resend and switch fetch URL

## SEO

- Default SEO + JSON-LD in `components/seo-default.tsx`
- Product JSON-LD for solutions in `components/seo-product.tsx`
- `app/sitemap.xml/route.ts` and `app/robots.txt/route.ts`

## Testing & CI

- Playwright smoke: `npm test`
- Lighthouse CI budgets: `npm run lhci` (after `npm run build && npm start`)
- Husky pre-commit runs Prettier via lint-staged

## Deploy

- Vercel: import repo, set framework to Next.js, default settings
- Analytics: `@vercel/analytics` automatically enabled

## Brand

- Dark neon theme via CSS variables in `styles/tokens.css`
- Fonts: Inter (body), Space Grotesk/Orbitron (display)
