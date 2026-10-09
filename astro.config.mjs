import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://invoidstar.github.io',
  base: '/',
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory' },
});
