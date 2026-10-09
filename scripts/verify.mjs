import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { PAGE_SIZE, normalizePage, paginate, pageCount } from '../src/lib/pagination.mjs';

const root = new URL('../dist/', import.meta.url).pathname;
const pages = ['index.html', 'publications/index.html', 'projects/index.html', 'datasets/index.html', 'about/index.html',
  'zh/index.html', 'zh/publications/index.html', 'zh/projects/index.html', 'zh/datasets/index.html', 'zh/about/index.html'];
const base = process.env.GITHUB_REPOSITORY?.endsWith('/personal-page') ? '/personal-page/' : '/';

for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  assert.match(html, /<main\b/, 'No main landmark: ' + page);
  assert.match(html, /<title>/, 'No title: ' + page);
  assert.ok(html.includes(base), 'Missing deployment base: ' + page);
}
for (const locale of ['', 'zh/']) {
  const home = readFileSync(join(root, locale, 'index.html'), 'utf8');
  const pubs = readFileSync(join(root, locale, 'publications/index.html'), 'utf8');
  const projects = readFileSync(join(root, locale, 'projects/index.html'), 'utf8');
  const datasets = readFileSync(join(root, locale, 'datasets/index.html'), 'utf8');
  for (const name of ['TextSLR', 'GANet', 'HyperSign', 'DGRFormer', 'EvCSLR', 'Event-based Image Deblurring']) {
    assert.ok(home.includes(name) && pubs.includes(name), 'Missing publication: ' + name);
  }
  for (const name of ['EVDB', 'EvCSLR', 'IllumSLR', 'EvSL']) {
    assert.ok(home.includes(name) && datasets.includes(name), 'Missing dataset: ' + name);
  }
  assert.ok(!projects.includes('Color Matcher') && !projects.includes('IISLU'), 'Unwanted non-research project');
  assert.ok(projects.includes('ElysiaRobot') && projects.includes('VLA-Radar'), 'Missing research project');
  assert.ok(pubs.includes('publication-pagination'), 'Missing pagination controls');
}
assert.equal(PAGE_SIZE, 10);
assert.equal(pageCount(0), 1);
assert.equal(pageCount(6), 1);
assert.equal(pageCount(10), 1);
assert.equal(pageCount(11), 2);
assert.equal(pageCount(25), 3);
assert.equal(normalizePage(99, 11), 2);
assert.equal(normalizePage(-1, 25), 1);
assert.equal(normalizePage('abc', 25), 1);
const fixture = Array.from({length:25}, (_, i) => i);
assert.deepEqual(paginate(fixture, 1), fixture.slice(0, 10));
assert.deepEqual(paginate(fixture, 2), fixture.slice(10, 20));
assert.deepEqual(paginate(fixture, 3), fixture.slice(20, 25));
assert.deepEqual(paginate(fixture, 999), fixture.slice(20, 25));
assert.ok(statSync(join(root, 'assets/avatar.jpg')).size > 10000, 'Original avatar missing');
assert.ok(statSync(join(root, 'favicon.svg')).size > 100, 'Favicon missing');
console.log('PASS: 10 bilingual pages, 6 publications, 4 datasets, research-only projects, and 10-per-page pagination (0/6/10/11/25 cases).');
