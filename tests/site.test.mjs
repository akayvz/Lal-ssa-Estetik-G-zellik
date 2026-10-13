import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../styles.css', import.meta.url), 'utf8');

test('baskın CTA telefon kanalına gider', () => assert.match(html, /Ön Görüşme İste[\s\S]{0,400}tel:\+902242490000|href="tel:\+902242490000"[\s\S]{0,100}Ön Görüşme İste/));
test('WhatsApp ve sahte rezervasyon bağlantısı yoktur', () => assert.doesNotMatch(html, /wa\.me|booking-calendar/i));
test('mobil ve reduced-motion stilleri vardır', () => { assert.match(css, /@media\(max-width:640px\)/); assert.match(css, /prefers-reduced-motion:reduce/); });
test('demo açıklaması görünürdür', () => assert.match(html, /Resmî web sitesi değildir/));
test('modern tipografi yerel ve font-display swap ile yüklenir', () => {
  assert.match(css, /Instrument Sans/);
  assert.match(css, /font-display:swap/);
  assert.match(css, /instrument-sans-latin\.woff2/);
});
