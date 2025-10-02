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

- Server-side email via Resend (primary) with optional SendGrid fallback.
- Honeypot field `website`, debounce, and strict success handling.
- Success toast only shown when provider responds 200/201.
- Configure env vars:
  - `RESEND_API_KEY`
  - `EMAIL_FROM` (e.g., no-reply@lazycreations.ai)
  - `EMAIL_TO` (e.g., admin@lazycreations.ai)
  - Optional SendGrid: `SENDGRID_API_KEY`, `SENDGRID_FROM`, `SENDGRID_TO`

### Deliverability

- SPF: `v=spf1 include:_spf.resend.com ~all` (or SendGrid: include:sendgrid.net)
- DKIM: Add CNAMEs provided by the provider
- DMARC: `v=DMARC1; p=none; rua=mailto:dmarc@lazycreations.ai`
- Verify your domain in Resend (and SendGrid if used)
- Use `EMAIL_FROM` on the verified domain only

### Health

- Dev-only health check: `GET /api/health/email` returns whether required envs are present

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
- Environment variables:
  - `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (e.g., https://formspree.io/f/xxxx)
  - Optional: `RESEND_API_KEY`

## Brand

- Dark neon theme via CSS variables in `styles/tokens.css`
- Fonts: Inter (body), Space Grotesk/Orbitron (display)
