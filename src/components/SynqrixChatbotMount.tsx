export interface SynqrixChatbotMountProps {
  enabled?: boolean;
}

/**
 * Gelecekteki chatbot entegrasyon noktası.
 * Varsayılan olarak kapalıdır; hiçbir script yüklemez, veri toplamaz veya ağ isteği yapmaz.
 */
export function SynqrixChatbotMount({ enabled = false }: SynqrixChatbotMountProps) {
  if (!enabled) return null;
  return null;
}

export default SynqrixChatbotMount;
