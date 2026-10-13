export type Confidence = 'confirmed' | 'third-party' | 'conflicting' | 'unknown';

export interface SourceRecord {
  url: string;
  checkedAt: string;
  dataTypes: string[];
  confidence: Confidence;
  note: string;
}

export interface BusinessProfile {
  name: string;
  address: string;
  phone: string;
  timezone: 'Europe/Istanbul';
  hours: { day: string; listed: string; confidence: Confidence }[];
  services: { name: string; confidence: Confidence; evidence: string }[];
  instagram: { url: string; confidence: Confidence };
  whatsapp: { enabled: false; reason: string };
  booking: { channel: 'phone'; onlineVerified: false };
  prices: { status: 'unknown' };
  sources: SourceRecord[];
}

export const business: BusinessProfile = {
  name: 'Lalıssa Estetik & Güzellik',
  address: 'Atatürk Cd., Buluş İş Hanı No:13 D:1, 16010 Osmangazi/Bursa',
  phone: '+90 224 249 00 00',
  timezone: 'Europe/Istanbul',
  hours: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map((day) => ({ day, listed: '09:00–20:00', confidence: 'conflicting' })),
  services: [
    { name: 'Cilt bakımı', confidence: 'third-party', evidence: 'Estebul dizin metni ve aktarılan kullanıcı yorumları' },
    { name: 'Lazer epilasyon', confidence: 'third-party', evidence: 'Estebul kategori kaydı ve GüzellikFiyat dizini' },
    { name: 'Bölgesel incelme', confidence: 'third-party', evidence: 'Estebul üzerinde aktarılan kullanıcı yorumu' }
  ],
  instagram: { url: 'https://www.instagram.com/lalissaestetikveguzellik/', confidence: 'third-party' },
  whatsapp: { enabled: false, reason: 'Numaranın WhatsApp kullanımı yetkili bir kaynaktan doğrulanmadı.' },
  booking: { channel: 'phone', onlineVerified: false },
  prices: { status: 'unknown' },
  sources: [
    {
      url: 'https://estebul.com/zayiflama-merkezleri/osmangazi/lalissa-estetik-guzellik/',
      checkedAt: '2026-10-13',
      dataTypes: ['name', 'address', 'phone', 'hours', 'services', 'rating snapshot', 'Instagram link'],
      confidence: 'third-party',
      note: 'İşletmenin resmî kaynağı değil; Google verilerini aktardığını belirtiyor.'
    },
    {
      url: 'https://guzellikfiyatlari.com/bursa/osmangazi/lalissa-estetik-guzellik/',
      checkedAt: '2026-10-13',
      dataTypes: ['address', 'phone', 'hours', 'services', 'rating snapshot'],
      confidence: 'third-party',
      note: 'Site kendi verilerinin açık kaynaklardan derlendiğini ve fiyatların ortalama olduğunu belirtiyor; fiyatlar kullanılmadı.'
    },
    {
      url: 'https://yandex.com.tr/maps/org/lalissa_estetik_ve_guzellik/124163934600/',
      checkedAt: '2026-10-13',
      dataTypes: ['phone', 'address', 'closing time'],
      confidence: 'conflicting',
      note: 'Telefon eşleşiyor; adres numarası ve 19:00 kapanış bilgisi diğer kaynaklarla çelişiyor.'
    },
    {
      url: 'https://www.instagram.com/lalissaestetikveguzellik/',
      checkedAt: '2026-10-13',
      dataTypes: ['account availability'],
      confidence: 'unknown',
      note: 'Doğrudan sayfa erişimi araçta başarısız oldu; bağlantı iki dizin kaydında işletme hesabı olarak geçiyor.'
    }
  ]
};
