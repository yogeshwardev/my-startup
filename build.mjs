import { mkdirSync, writeFileSync, cpSync, rmSync, existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { pages } from './src/pages.mjs';
import { site, placeholders } from './src/config.mjs';

const OUT = 'public';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('assets', join(OUT, 'assets'), { recursive: true });

const write = (rel, data) => { const f = join(OUT, rel); mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, data); };

const problems = [];
const known = new Set(pages.map((p) => p.path));
const titles = new Map();

for (const p of pages) {
  const file = p.path.endsWith('/') ? p.path + 'index.html' : p.path;
  write(file, p.html);

  const t = (p.html.match(/<title>(.*?)<\/title>/) || [])[1] || '';
  const d = (p.html.match(/<meta name="description" content="(.*?)">/) || [])[1] || '';
  if (t.length > 65) problems.push(`title ${t.length} chars: ${p.path}`);
  if (d.length > 170 || d.length < 70) problems.push(`description ${d.length} chars: ${p.path}`);
  if (titles.has(t)) problems.push(`duplicate title: ${p.path} / ${titles.get(t)}`);
  titles.set(t, p.path);
  if ((p.html.match(/<h1[\s>]/g) || []).length !== 1) problems.push(`h1 count != 1: ${p.path}`);

  for (const m of p.html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const h = m[1];
    if (h.startsWith('/assets/') || h === '/site.webmanifest') continue;
    if (!known.has(h)) problems.push(`broken link ${h} on ${p.path}`);
  }
}

const indexable = pages.filter((p) => !p.path.includes('404'));
const prio = (path) => path === '/' ? '1.0' : path.split('/').filter(Boolean).length === 1 ? '0.8' : '0.6';
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable.map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${site.lastUpdated}</lastmod><priority>${prio(p.path)}</priority></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /404.html\n\nSitemap: ${site.url}/sitemap.xml\n`);
write('site.webmanifest', JSON.stringify({ name: 'Benzo', short_name: 'Benzo', start_url: '/', display: 'browser', background_color: '#050608', theme_color: '#050608', icons: [{ src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' }] }, null, 2));

console.log(`Built ${pages.length} pages into ./${OUT}`);
if (problems.length) { console.log('\nContent checks:'); problems.forEach((x) => console.log('  - ' + x)); }
const ph = placeholders();
if (ph.length) { console.log('\nReplace before launch (src/config.mjs):'); ph.forEach((x) => console.log('  - ' + x)); }
