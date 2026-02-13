"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34631068828";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-chrome-light" aria-hidden />
    </a>
  );
}
