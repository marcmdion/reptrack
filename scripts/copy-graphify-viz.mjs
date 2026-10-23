import { cpSync, existsSync, mkdirSync } from 'node:fs';

const src = 'graphify-out/graph.html';
const destDir = 'public/graphify';
const dest = `${destDir}/graph.html`;

if (existsSync(src)) {
  mkdirSync(destDir, { recursive: true });
  cpSync(src, dest);
  cpSync(src, `${destDir}/index.html`);
  console.log('Copied Graphify viz to public/graphify/graph.html (+ index.html)');
} else if (!existsSync(dest)) {
  console.warn('Skip Graphify viz: run `npm run graphify:viz` locally or build on CI.');
}
