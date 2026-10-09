# Qi Chu · Personal Academic Homepage

A lightweight bilingual academic website and research portfolio for **Qi Chu (初琦)**.

**Preview:** https://invoidstar.github.io/personal-page/ (after GitHub Pages has been enabled)

This is a new independent site built for the `personal-page` repository. The legacy `invoidstar.github.io` and `ElysiaAILab` repositories are not modified.

## Stack

- [Astro](https://astro.build/) static site generation and TypeScript
- Lightweight, dependency-free responsive CSS
- Content stored centrally in `src/data/content.ts`
- English at `/`, Chinese at `/zh/`
- Automated GitHub Pages deployment via one Actions workflow

## Development

Requires Node.js 20.11+ (Node 22 recommended).

```bash
npm install
npm run dev
npm run build
npm run verify
```

The build base path is detected from `GITHUB_REPOSITORY`:

- `invoidstar/personal-page` → `/personal-page/`
- `invoidstar/invoidstar.github.io` → `/`
- local builds → `/`

## Publishing

In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** once. Every subsequent push to `main` builds and deploys the static website using `.github/workflows/deploy.yml`.

## Content and assets

- Research, papers, projects, awards and news: `src/data/content.ts`
- Colors, typography and responsive layout: `src/styles/global.css`
- Avatar: `public/assets/avatar.jpg`, copied from the existing personal homepage's `static/assets/img/photo.png` (the original file contents are JPEG)
- Icons and social preview: `public/favicon.svg`, `public/og-cover.svg`

Projects without public repositories have no broken external links. CV download is intentionally not shown until a confirmed public PDF is provided.

## Pre-launch checklist

- Verify information and outgoing publication links
- Check desktop and mobile layouts
- Review Chinese and English wording
- Add a CV PDF if needed
- Test and enable GitHub Pages
- Only after acceptance: archive the old user-site repository, rename this repository to `invoidstar.github.io`, and verify the new root site
