import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';

const root = new URL('../dist/', import.meta.url).pathname;
const pages = ['index.html', 'publications/index.html', 'projects/index.html', 'about/index.html',
  'zh/index.html', 'zh/publications/index.html', 'zh/projects/index.html', 'zh/about/index.html'];
const base = process.env.GITHUB_REPOSITORY?.endsWith('/personal-page') ? '/personal-page/' : '/';
for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  assert.match(html, /<main\b/);
  assert.match(html, /<title>/);
  assert.ok(html.includes(base), 'Missing base path in ' + page);
}
const img = statSync(join(root, 'assets/avatar.jpg'));
assert.ok(img.size > 10000, 'Original avatar was not copied');
const favicon = statSync(join(root, 'favicon.svg'));
assert.ok(favicon.size > 100);
console.log('PASS: 8 localized pages, base paths, original avatar, and favicon');
