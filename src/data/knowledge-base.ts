import { business } from './business';

export type KnowledgeTopic = 'services' | 'pricing' | 'hours' | 'first-visit' | 'location';

export interface KnowledgeAnswer {
  topic: KnowledgeTopic;
  question: string;
  answer: string;
  requiresRepresentative: boolean;
}

export const knowledgeBase = {
  business: {
    name: business.name,
    phone: business.phone,
    address: business.address,
    services: business.services.map(({ name }) => name),
    hours: business.hours
  },
  unknownFields: ['güncel fiyatlar', 'cihaz modelleri', 'çalışan isimleri', 'sertifikalar', 'tatil saatleri', 'WhatsApp kullanımı', 'online rezervasyon bağlantısı'],
  answers: [
    { topic: 'services', question: 'Hangi uygulamalar var?', answer: 'Kaynaklarda cilt bakımı, lazer epilasyon ve bölgesel incelme görülüyor. Güncel kapsam için merkezi arayın.', requiresRepresentative: true },
    { topic: 'pricing', question: 'Fiyat nedir?', answer: 'Doğrulanmış güncel fiyat bulunmuyor. Hizmet kapsamına göre bilgi almak için merkezi arayın.', requiresRepresentative: true },
    { topic: 'hours', question: 'Hangi günler açık?', answer: 'Kaynaklar her gün 09:00–20:00 listeliyor; ancak bir harita kaydında farklılık var. Gelmeden önce arayın.', requiresRepresentative: true },
    { topic: 'first-visit', question: 'İlk görüşmede ne olur?', answer: 'Beklenti, uygulama kapsamı, plan, hazırlık ve ücret başlıklarını sorabilirsiniz.', requiresRepresentative: false },
    { topic: 'location', question: 'Nerede?', answer: business.address, requiresRepresentative: false }
  ] satisfies KnowledgeAnswer[],
  safetyPolicy: {
    unknownQuestion: `Yanıt doğrulanamıyorsa tahmin yürütme; ${business.phone} numarasından işletme temsilcisine yönlendir.`,
    health: 'Teşhis koyma, tedavi veya sonuç vaadi verme, kişiye özel uygunluk değerlendirmesi yapma; sağlık profesyoneline yönlendir.',
    personalDataCollectionEnabled: false
  }
} as const;

export interface FutureLeadEvent {
  type: 'lead_intent';
  source: 'synqrix_chatbot';
  occurredAt: string;
}

export interface FutureBookingEvent {
  type: 'booking_intent';
  channel: 'phone' | 'verified_booking_url';
  occurredAt: string;
}
