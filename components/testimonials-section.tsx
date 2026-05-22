"use client"

import Image from "next/image"
import { Quote } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const temoignages = [
  {
    citation: "Le Cabinet 2R Conseil a transformé notre approche de la conformité fiscale. Leur rigueur et leur vision stratégique sont des atouts majeurs pour notre groupe.",
    auteur: "Marie-Claire Mavoungou",
    poste: "Directrice Financière",
    entreprise: "GabonLogistics SA",
    photo: "/images/11.jpg",
  },
  {
    citation: "Un accompagnement d'exception. L'équipe fait preuve d'une maîtrise parfaite des enjeux OHADA, ce qui sécurise l'ensemble de nos opérations régionales.",
    auteur: "Jean-Pierre Boundou",
    poste: "PDG",
    entreprise: "Boundou Industries",
    photo: "/images/8.jpg",
  },
]

const partenaires = ["GabonOil", "BGFI Bank", "Sogara", "Comilog", "Olam Gabon", "Setrag"]

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <RevealOnScroll animation="reveal-left">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Confiance & Partenariats</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Ils bâtissent leur <br />
                <span className="italic font-light text-primary/80">succès avec nous.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                La satisfaction de nos clients est le seul indicateur de notre réussite. Nous sommes fiers d&apos;accompagner les fleurons de l&apos;économie gabonaise.
              </p>
            </RevealOnScroll>

            {/* Partenaires Grid */}
            <div className="mt-16 pt-12 border-t border-border">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-8">Partenaires Stratégiques</p>
              <div className="grid grid-cols-2 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                {partenaires.map((p) => (
                  <div key={p} className="text-sm font-serif font-bold text-primary tracking-widest hover:text-accent transition-colors cursor-default">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {temoignages.map((t, i) => (
              <RevealOnScroll
                key={i}
                animation="reveal-up"
                delay={i * 200}
                className="bg-background p-10 lg:p-14 border border-border relative group transition-all duration-500 hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2"
              >
                <Quote className="absolute top-10 right-10 h-12 w-12 text-accent opacity-10 group-hover:opacity-20 transition-all group-hover:rotate-12" />
                <blockquote className="font-serif text-2xl lg:text-3xl text-primary italic font-light leading-snug mb-10 group-hover:text-accent transition-colors">
                  "{t.citation}"
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 relative bg-secondary overflow-hidden">
                    <Image src={t.photo} alt={t.auteur} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.auteur}</p>
                    <p className="text-xs text-accent font-medium mt-1 uppercase tracking-wider">{t.poste} — {t.entreprise}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

