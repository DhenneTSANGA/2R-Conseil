import { QuoteSection } from "@/components/quote-section"
import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function DevisPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/4.webp"
            alt="Devis"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll animation="reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Demande de devis</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight">
              Donnons vie à vos <br />
              <span className="italic font-light text-accent">ambitions de croissance.</span>
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <QuoteSection />

      {/* Why request a quote? */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
           <RevealOnScroll animation="reveal-up">
            <h2 className="font-serif text-3xl text-primary mb-12">Pourquoi demander un devis au Cabinet 2R Conseil ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Transparence Totale", desc: "Une décomposition claire des honoraires et des missions pour une visibilité parfaite." },
                    { title: "Sur-Mesure", desc: "Chaque proposition est adaptée à la taille et aux enjeux spécifiques de votre structure." },
                    { title: "Réactivité", desc: "Nous nous engageons à vous fournir une proposition commerciale sous 48 heures ouvrables." }
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-background border border-border">
                        <h3 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">{item.title}</h3>
                        <p className="text-muted-foreground font-light">{item.desc}</p>
                    </div>
                ))}
            </div>
           </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
