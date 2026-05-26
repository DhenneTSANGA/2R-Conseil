"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const equipe = [
  {
    nom: "Roland Mavoungou",
    poste: "Associé Fondateur",
    specialite: "Audit & Expertise Comptable",
    photo: "/images/6.webp",
  },
  {
    nom: "Régine Ondo",
    poste: "Associée",
    specialite: "Directrice Audit & Fiscalité",
    photo: "/images/10.webp",
  },
  {
    nom: "Patrick Nzigou",
    poste: "Senior Manager",
    specialite: "Conseil Stratégique",
    photo: "/images/2.webp",
  },
  {
    nom: "Fatou Diallo",
    poste: "Manager",
    specialite: "Capital Humain & Formation",
    photo: "/images/3.webp",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <RevealOnScroll animation="reveal-up">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Nos Experts</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Une équipe au service de <br />
                <span className="italic font-light text-primary/80">votre ambition.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll animation="reveal-up" delay={200}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed lg:max-w-md">
              Le Cabinet 2R Conseil réunit des experts multidisciplinaires formés dans les meilleures écoles internationales.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipe.map((m, i) => (
            <RevealOnScroll
              key={m.nom}
              animation="reveal-up"
              delay={i * 100}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                <Image
                  src={m.photo}
                  alt={m.nom}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a href="#" className="h-10 w-10 flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-white transition-all hover:scale-110 hover:-rotate-12 shadow-lg">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:contact@cabinet2r-conseil.ga" className="h-10 w-10 flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-white transition-all hover:scale-110 hover:rotate-12 shadow-lg">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-serif text-xl font-medium text-primary mb-1">
                  {m.nom}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">
                  {m.poste}
                </p>
                <p className="text-xs text-muted-foreground font-light italic">
                  {m.specialite}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

