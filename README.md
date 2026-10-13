# Lalıssa Estetik & Güzellik — Synqrix Demo

Tek sayfalık, mobil öncelikli HTML/CSS/JS satış demosu. Bu çalışma işletmenin onaylı resmî sitesi değildir ve müşteri onayı olmadan canlıya alınmamalıdır.

## Çalıştırma

```bash
npm run dev
```

Ardından `http://127.0.0.1:4173` adresini açın.

## Kontroller

```bash
npm run lint
npm test
npm run build
```

`npm run build`, dağıtıma hazır statik dosyaları `dist/` klasörüne kopyalar. Haricî runtime bağımlılığı yoktur.

## Yapı

- `index.html`: semantik sayfa, SEO ve doğrulanmış alanlarla JSON-LD
- `styles.css`: responsive tasarım ve erişilebilirlik stilleri
- `script.js`: mobil menü, hizmet detayları ve hafif görünürlük animasyonları
- `src/data/business.ts`: merkezî işletme verisi ve kaynak güven statüleri
- `src/data/knowledge-base.ts`: typed FAQ/chatbot bilgi tabanı ve güvenlik politikası
- `src/components/SynqrixChatbotMount.tsx`: varsayılan kapalı entegrasyon noktası
- `assets/manifest.json`: görsel kaynakları ve değiştirme yuvaları
- `assets/fonts/`: yerel Instrument Sans variable fontu ve SIL Open Font License kaydı

Site telefonla ön görüşmeyi tek baskın dönüşüm hedefi olarak kullanır. WhatsApp, canlı takvim veya veri toplayan form eklenmemiştir.
