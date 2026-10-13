import { cp, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
if (!dist.startsWith(root)) throw new Error('Geçersiz çıktı dizini');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js']) await cp(resolve(root, file), resolve(dist, file));
await cp(resolve(root, 'assets'), resolve(dist, 'assets'), { recursive: true });
console.log('Statik site dist/ dizinine hazırlandı.');
