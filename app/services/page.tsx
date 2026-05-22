import { ServicesSection } from "@/components/services-section"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const poles = [
  {
    id: "audit",
    title: "Audit & Commissariat aux Comptes",
    desc: "Nous certifions la sincérité et la régularité de vos états financiers tout en identifiant les opportunités d'amélioration de votre contrôle interne.",
    items: ["Commissariat aux comptes (Audit légal)", "Audit contractuel & financier", "Audit d'acquisition (Due Diligence)", "Audit des systèmes d'information"],
    image: "/images/audit.avif"
  },
  {
    id: "fiscalite",
    title: "Conseil Fiscal & Juridique",
    desc: "Sécurisez vos opérations et optimisez votre charge fiscale dans le strict respect de la réglementation en vigueur.",
    items: ["Conseil fiscal permanent", "Optimisation de la fiscalité locale & internationale", "Assistance lors des contrôles fiscaux", "Secrétariat juridique & Droit des sociétés"],
    image: "/images/fiscal.avif"
  },
  {
    id: "rh",
    title: "Capital Humain & Gestion de Paie",
    desc: "Libérez-vous des contraintes administratives et sociales pour vous concentrer sur le développement de vos talents.",
    items: ["Externalisation complète de la paie", "Audit social & Conformité", "Recrutement de profils cadres", "Conseil en politiques de rémunération"],
    image: "/images/paie.avif"
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/10.jpg"
            alt="Expertises"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll animation="reveal-up">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Expertises</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                Un accompagnement <br />
                <span className="italic font-light text-accent">sur mesure.</span>
              </h1>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <ServicesSection />

      {/* Detailed Sections */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {poles.map((pole, i) => (
              <div key={pole.id} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <RevealOnScroll 
                  animation={i % 2 === 1 ? "reveal-right" : "reveal-left"}
                  className={i % 2 === 1 ? 'lg:order-last' : ''}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Pôle {i + 1}</p>
                  <h3 className="font-serif text-3xl sm:text-4xl font-medium text-primary mb-8">{pole.title}</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                    {pole.desc}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                    {pole.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 text-accent shrink-0 mt-1">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm font-medium text-primary/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-colors">
                    Demander une expertise
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </RevealOnScroll>
                <RevealOnScroll 
                  animation={i % 2 === 1 ? "reveal-left" : "reveal-right"}
                  className="relative aspect-video lg:aspect-square bg-secondary overflow-hidden"
                >
                   <Image
                    src={pole.image}
                    alt={pole.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-10">Un besoin spécifique ? Nos experts vous répondent.</h2>
          <Link 
            href="/contact" 
            className="inline-block bg-accent text-primary px-12 py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-2xl"
          >
            Parlons de votre projet
          </Link>
        </div>
      </section>
    </div>
  )
}
