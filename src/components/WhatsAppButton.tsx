import { MessageCircle } from "lucide-react";

const PHONE = "60104368680";

export function WhatsAppButton() {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent("Hi Webro! I'd like to discuss a project.")}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-glow tap-scale animate-pulse-slow"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <MessageCircle className="h-6 w-6" fill="white" />
    </a>
  );
}
