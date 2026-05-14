"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const piliers = [
  "Rigueur OHADA & Internationale",
  "Transparence & Déontologie",
  "Innovation & Digitalisation",
  "Expertise Multi-sectorielle"
]

export function AboutSection() {
  return (
    <section id="cabinet" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll animation="reveal-left" className="relative">
            <div className="relative aspect-square sm:aspect-[4/5] bg-secondary p-8 group">
              <div className="absolute inset-0 border border-primary/10 translate-x-8 translate-y-8 -z-10 group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-500" />
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/placeholder.jpg?height=1000&width=800&query=corporate%20office%20glass%20meeting%20room%20luxury%20minimalist"
                  alt="Cabinet 2R Conseil"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-12 -right-12 bg-primary p-10 shadow-2xl hidden md:block transition-transform hover:-translate-y-2">
                <p className="text-5xl font-serif font-bold text-accent">2010</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mt-2">Année de Fondation</p>
              </div>
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll animation="reveal-up">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">L&apos;institution</p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Une vision au service de <br />
                <span className="italic font-light text-primary/80">votre pérennité.</span>
              </h2>
              <div className="mt-10 space-y-6">
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Basé à Libreville, le Cabinet 2R Conseil s&apos;est imposé comme un acteur majeur de l&apos;accompagnement financier et stratégique au Gabon. Notre approche repose sur une alliance unique entre rigueur technique et compréhension fine des enjeux locaux.
                </p>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Nous accompagnons une clientèle exigeante — des PME en croissance aux grandes institutions — dans la sécurisation de leurs opérations et l&apos;optimisation de leur capital humain.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {piliers.map((pilier, i) => (
                  <div key={pilier} className="flex items-center gap-3 animate-reveal-up" style={{ animationDelay: `${100 * i}ms` }}>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform hover:scale-110">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-primary/80">{pilier}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex items-center gap-8 border-t border-border pt-12">
                <div className="group cursor-default">
                  <p className="text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors">250+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Missions Réussies</p>
                </div>
                <div className="h-12 w-px bg-border" />
                <div className="group cursor-default">
                  <p className="text-3xl font-serif font-bold text-primary group-hover:text-accent transition-colors">15+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Experts</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

