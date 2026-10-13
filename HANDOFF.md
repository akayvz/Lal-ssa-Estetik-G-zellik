# Handoff

## Tasarım sistemi

- Bone: `#F7F5F0`
- Taupe: `#B5A79A`
- Cocoa: `#493B34`
- Başlık ve gövde: yerel barındırılan variable **Instrument Sans**. Başlıklar daraltılmış eksende, gövde metni normal genişlikte kullanılır. Font dosyaları `assets/fonts/` altında ve SIL Open Font License kaydı aynı klasördedir.

## Revizyon noktaları

- İletişim, saat ve hizmet verilerini yalnızca `src/data/business.ts` üzerinden güncelleyin; statik arayüz kopyasını da yayın öncesi aynı kayıtla eşitleyin.
- Görselleri `assets/manifest.json` içindeki slotlara göre değiştirin; aynı dosya adlarını korumak yerleşimi bozmadan değişim sağlar.
- Birincil CTA telefon görüşmesidir. WhatsApp ancak işletmenin yazılı doğrulamasıyla etkinleştirilmelidir.
- Online rezervasyon bağlantısı ancak gerçek ve doğrulanmış kanal teslim edildiğinde eklenmelidir.
- JSON-LD çalışma saatlerini bilerek içermez; saat çelişkisi çözüldüğünde eklenebilir.

## Chatbot entegrasyonu

`src/components/SynqrixChatbotMount.tsx` varsayılan olarak kapalıdır. Bilgi tabanı `src/data/knowledge-base.ts` içindedir. Entegrasyonda:

- Bilinmeyen sorular telefona yönlendirilmeli.
- Teşhis, tedavi, sonuç garantisi ve kişiye özel uygunluk yanıtı verilmemeli.
- Kişisel veri toplama açık onay, aydınlatma metni ve backend süreci olmadan açılmamalı.
- `FutureLeadEvent` ve `FutureBookingEvent` yalnızca arayüzdür; şu an veri aktarımı yoktur.

## Yayın kontrolü

Bu demo işletme onayı olmadan resmî site olarak yayınlanmamalıdır. Yayın öncesi marka kullanımı, adres, saat, hizmet, fotoğraflar, KVKK metni ve iletişim kanalları müşteri tarafından onaylanmalıdır.
