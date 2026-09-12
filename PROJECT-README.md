# BuildX — Construction Intelligence Platform

Angular 21 (SSR) implementation of the Construction Intelligence Platform design document
(`../Construction-Intelligence-Platform-Design-Document.md`).

## What's implemented

- **Design tokens**: `src/styles/_tokens.scss` — colors, typography, spacing, radius, elevation, motion (Section 7 of the design doc).
- **Global utilities**: `src/styles.scss` — buttons, cards, containers, data tables, chips.
- **Shared components** (`src/app/shared/components`):
  - `header` — sticky nav with mobile drawer
  - `footer` — mega-footer with sitemap-style link columns
  - `cost-calculator-widget` — the core interactive tool (city, sqft, package tier, live breakdown), reused on Home, Cost Calculator, and City pages
  - `faq-accordion` — renders GEO Q&A blocks (Question / Answer / Data Table / Example / Summary) with schema.org `FAQPage` markup
  - `lead-form` — reactive form with validation, used across pages for lead generation
- **Pages** (`src/app/pages`): home, cost-calculator, city (`/construction-cost-in/:city`), house-designs (library with filters/search/save), house-design-detail, ai-advisor (chat UI), faq, blog, about, contact.
- **SEO/GEO service** (`src/app/core/services/seo.ts`): sets title/meta/canonical/OG tags and injects JSON-LD (`FAQPage`, `LocalBusiness`, `BreadcrumbList`, `Organization`) per page — this is what makes pages both Google-crawlable and AI-quotable.
- **Data layer** (`src/app/core/data`): mock city cost data, house designs, and GEO FAQ templates — swap for a real API/CMS in production.
- **`public/robots.txt`** and **`public/llms.txt`**: crawler directives, including the emerging `llms.txt` standard for AI crawlers.
- **SSR**: Angular Universal (`@angular/ssr`) — city and design-detail routes render on-demand (`RenderMode.Server`), all other routes are prerendered at build time (`RenderMode.Prerender`) for optimal Core Web Vitals (LCP/CLS/INP).

## Run locally

```powershell
npm install
npm start          # ng serve — http://localhost:4200
npm run build      # production build with SSR + prerendering
npm run serve:ssr:buildx-app   # run the compiled SSR server (after build)
```

## Next steps for production

1. Replace `core/data/*.ts` mock datasets with a real API/CMS (e.g., Contentful/Sanity) for city cost data, materials, and designs.
2. Wire `lead-form` submission to a real CRM/lead-capture endpoint (currently simulated).
3. Wire `ai-advisor` to a real LLM/RAG backend (currently uses keyword-matched mock responses).
4. Add real project/design photography (`NgOptimizedImage`) in place of gradient placeholders.
5. Generate `sitemap.xml` / `sitemap-*.xml` dynamically from the city/design datasets (Section 2.2 of the design doc).
6. Add unit/e2e tests for the calculator logic and lead form validation.
