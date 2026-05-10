import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/24100000000?text=Bonjour%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20vos%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-primary shadow-xl ring-4 ring-brand-green/15 hover:bg-white hover:scale-110 transition-all"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-green/30 animate-ping" aria-hidden />
    </a>
  )
}
