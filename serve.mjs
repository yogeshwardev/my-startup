import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };
const port = process.env.PORT || 4173;
createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.includes('..')) { res.writeHead(400); return res.end(); }
  let f = join('public', p);
  try { if ((await stat(f)).isDirectory()) f = join(f, 'index.html'); } catch { /* fall through */ }
  try { const d = await readFile(f); res.writeHead(200, { 'Content-Type': types[extname(f)] || 'application/octet-stream' }); res.end(d); }
  catch { const d = await readFile('public/404.html'); res.writeHead(404, { 'Content-Type': types['.html'] }); res.end(d); }
}).listen(port, () => console.log(`Benzo site on http://localhost:${port}`));
