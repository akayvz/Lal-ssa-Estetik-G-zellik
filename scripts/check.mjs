import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const required = ['<html lang="tr">', '<main id="main">', '<nav', 'tel:+902242490000', 'application/ld+json', 'Resmî web sitesi değildir'];
for (const token of required) if (!html.includes(token)) throw new Error(`Eksik zorunlu içerik: ${token}`);
if (/href=["']#["']/.test(html)) throw new Error('Boş bağlantı hedefi bulundu.');
if (/wa\.me|whatsapp/i.test(html)) throw new Error('Doğrulanmamış WhatsApp bağlantısı bulundu.');
for (const file of ['styles.css', 'script.js', 'assets/images/facial.jpg', 'assets/images/treatment.jpg', 'assets/images/skin-detail.jpg', 'assets/fonts/instrument-sans-latin.woff2', 'assets/fonts/instrument-sans-latin-ext.woff2', 'assets/fonts/OFL-Instrument-Sans.txt']) await access(resolve(root, file));
const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
JSON.parse(jsonLd);
console.log('İçerik, bağlantı ve temel erişilebilirlik kontrolleri geçti.');
