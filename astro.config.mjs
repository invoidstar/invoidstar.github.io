import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/').pop();
const base = repo === 'invoidstar.github.io' ? '/' : repo === 'personal-page' ? '/personal-page/' : '/';

export default defineConfig({
  site: 'https://invoidstar.github.io',
  base,
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
});
