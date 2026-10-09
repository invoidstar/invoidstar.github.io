import { readFileSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
import { PAGE_SIZE, normalizePage, paginate, pageCount } from '../src/lib/pagination.mjs';

const root = new URL('../dist/', import.meta.url).pathname;
const pages = ['index.html', 'publications/index.html', 'projects/index.html', 'datasets/index.html', 'about/index.html',
  'zh/index.html', 'zh/publications/index.html', 'zh/projects/index.html', 'zh/datasets/index.html', 'zh/about/index.html'];
const base = 'https://invoidstar.github.io/';
const read = (page) => readFileSync(join(root, page), 'utf8');

for (const page of pages) {
  const html = read(page);
  assert.match(html, /<main\b/, 'No main landmark: ' + page);
  assert.match(html, /<title>Invoidstar<\/title>/, 'Title not updated: ' + page);
  assert.ok(html.includes(base), 'Wrong canonical host: ' + page);
  assert.ok(!html.includes('/personal-page/'), 'Outdated project deployment path: ' + page);
  assert.ok(html.includes('data-theme-toggle'), 'Missing theme control: ' + page);
  assert.ok(html.includes('invoidstar.theme'), 'Missing persisted theme initialization: ' + page);
}
for (const locale of ['', 'zh/']) {
  const home = read(join(locale, 'index.html'));
  const pubs = read(join(locale, 'publications/index.html'));
  const projects = read(join(locale, 'projects/index.html'));
  const datasets = read(join(locale, 'datasets/index.html'));
  const about = read(join(locale, 'about/index.html'));
  for (const name of ['TextSLR', 'GANet', 'HyperSign', 'DGRFormer', 'EvCSLR', 'Event-based Image Deblurring']) {
    assert.ok(home.includes(name) && pubs.includes(name), 'Missing publication: ' + name);
  }
  for (const name of ['EVDB', 'EvCSLR', 'IllumSLR', 'EvSL']) {
    assert.ok(home.includes(name) && datasets.includes(name), 'Missing dataset: ' + name);
  }
  assert.ok(!projects.includes('Color Matcher') && !projects.includes('IISLU'), 'Unwanted non-research project');
  assert.ok(projects.includes('ElysiaRobot') && projects.includes('VLA-Radar'), 'Missing research project');
  assert.ok(pubs.includes('publication-pagination'), 'Missing pagination controls');

  const sections = ['01 / RESEARCH','02 / UPDATES','03 / PUBLICATIONS','04 / PROJECTS','05 / DATASETS','06 / PROFILE'];
  let last = -1;
  for (const section of sections) {
    const pos = home.indexOf(section);
    assert.ok(pos > last, 'Homepage sections not ordered: ' + section);
    last = pos;
  }
  assert.ok(!home.includes('hero-eyebrow') && !home.includes('hero-bottom'), 'Redundant hero details remain');
  assert.ok(about.includes(' / 04'), 'About page index was not updated');
  assert.ok(home.includes('ZIONEER'), 'Missing academic profile');
  if (locale === 'zh/') {
    assert.ok(home.includes('具身智能') && home.includes('多模态表征学习') && home.includes('可复用'), 'Chinese research description missing');
    assert.ok(about.includes('2026.06 — 至今') && home.includes('2026.06 — 至今'), 'Chinese ZIONEER period missing');
    assert.ok(home.includes('切换为夜间模式') && home.includes('切换为日间模式'), 'Chinese theme labels missing');
  } else {
    assert.ok(home.includes('action-conditioned modeling') && home.includes('Multimodal representation'), 'English research description missing');
    assert.ok(about.includes('Jun 2026 — Present') && home.includes('Jun 2026 — Present'), 'English ZIONEER period missing');
    assert.ok(home.includes('Switch to dark mode') && home.includes('Switch to light mode'), 'English theme labels missing');
  }
}
const styleFiles = readdirSync(join(root, '_astro')).filter(name => name.endsWith('.css'));
assert.ok(styleFiles.length > 0, 'Missing built CSS files');
const styles = styleFiles.map(name => readFileSync(join(root, '_astro', name), 'utf8')).join('\n');
assert.ok(styles.includes('data-theme=dark') || styles.includes('data-theme="dark"'), 'Compiled dark-mode styles missing');
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
assert.deepEqual(paginate(fixture, 1), fixture.slice(0,10));
assert.deepEqual(paginate(fixture, 2), fixture.slice(10,20));
assert.deepEqual(paginate(fixture, 3), fixture.slice(20,25));
assert.deepEqual(paginate(fixture, 999), fixture.slice(20,25));
assert.ok(statSync(join(root, 'assets/avatar.jpg')).size > 10000, 'Original avatar missing');
assert.ok(statSync(join(root, 'favicon.svg')).size > 100, 'Favicon missing');

const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');
assert.ok(readme.includes('[https://invoidstar.github.io/](https://invoidstar.github.io/)'), 'Official README link not updated');
assert.ok(!readme.includes('/personal-page/'), 'Old preview URL remains in README');
assert.ok(readme.includes('GitHub Pages only'), 'README does not specify GitHub Pages-only deployment');

console.log('PASS: 10 localized pages; site title and root URLs; themes; 6 reordered sections; longer research summaries; About/ZIONEER bilingual dates; 10/page pagination; research projects and 4 datasets.');
