# Qi Chu · Personal Academic Homepage

A bilingual academic website and research portfolio for **Qi Chu (初琦)**.

**Official homepage:** https://invoidstar.github.io/

This repository is the official GitHub Pages user-site repository after the completed migration from `personal-page`.

## Site structure

- **Home:** complete published papers list, featured research projects, dataset collection, academic news and contact.
- **Publications:** all confirmed published papers; client-side topic filters and 10 papers per page. When the collection has more than 10 papers, pagination automatically appears. Filters, page number, and browser back/forward are URL-aware.
- **Projects:** research only (ElysiaRobot and VLA-Radar); no side projects or dataset cards.
- **Datasets:** EVDB, EvCSLR, IllumSLR and EvSL, based on the previous ElysiaAILab website. Links to papers are labeled as such; missing public dataset URLs are not fabricated.
- **About:** academic background, research experience, awards and service.

The whole website is available in English at `/` and Chinese at `/zh/`.

## Implementation

- Astro, TypeScript and responsive CSS (no runtime UI framework)
- Content data: `src/data/content.ts`
- Reusable cards: `src/components/`
- Pagination utility (10/page): `src/lib/pagination.mjs`
- Original avatar: `public/assets/avatar.jpg`, copied verbatim from the former homepage
- GitHub Pages: one build/deploy workflow in `.github/workflows/deploy.yml`

## Local workflow

Node 22 is recommended:

```bash
npm install
npm run dev
npm run build
npm run verify
```

The `GITHUB_REPOSITORY` environment variable controls Astro's base path:
- `invoidstar/personal-page`: `/personal-page/`
- `invoidstar/invoidstar.github.io`: `/`

GitHub Pages is configured to build from GitHub Actions; pushing to `main` triggers the workflow. The official repository name `invoidstar.github.io` uses `/` as the base path.

## Maintenance

Update research records in `src/data/content.ts`. Check bilingual copy, publications, dataset metadata, and outgoing links after changes. A CV PDF may be added later when available.

The original `personal-page` repository has been renamed to `invoidstar.github.io`, and GitHub Pages is published from the root URL.
