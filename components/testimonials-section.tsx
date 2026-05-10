"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const temoignages = [
  {
    citation: "Le Cabinet 2R Conseil a transformé notre approche de la conformité fiscale. Leur rigueur et leur vision stratégique sont des atouts majeurs pour notre groupe.",
    auteur: "Marie-Claire Mavoungou",
    poste: "Directrice Financière",
    entreprise: "GabonLogistics SA",
    photo: "/placeholder.jpg?height=400&width=400&query=professional%20african%20businesswoman%20portrait%20smiling%20corporate",
  },
  {
    citation: "Un accompagnement d'exception. L'équipe fait preuve d'une maîtrise parfaite des enjeux OHADA, ce qui sécurise l'ensemble de nos opérations régionales.",
    auteur: "Jean-Pierre Boundou",
    poste: "PDG",
    entreprise: "Boundou Industries",
    photo: "/placeholder.jpg?height=400&width=400&query=professional%20african%20businessman%20portrait%20suit%20corporate",
  },
]

const partenaires = ["GabonOil", "BGFI Bank", "Sogara", "Comilog", "Olam Gabon", "Setrag"]

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Confiance & Partenariats</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Ils bâtissent leur <br />
                <span className="italic font-light text-primary/80">succès avec nous.</span>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed">
                La satisfaction de nos clients est le seul indicateur de notre réussite. Nous sommes fiers d&apos;accompagner les fleurons de l&apos;économie gabonaise.
              </p>
            </motion.div>

            {/* Partenaires Grid */}
            <div className="mt-16 pt-12 border-t border-border">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-8">Partenaires Stratégiques</p>
              <div className="grid grid-cols-2 gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                {partenaires.map((p) => (
                  <div key={p} className="text-sm font-serif font-bold text-primary tracking-widest">
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {temoignages.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-background p-10 lg:p-14 border border-border relative group"
              >
                <Quote className="absolute top-10 right-10 h-12 w-12 text-accent opacity-10 group-hover:opacity-20 transition-opacity" />
                <blockquote className="font-serif text-2xl lg:text-3xl text-primary italic font-light leading-snug mb-10">
                  "{t.citation}"
                </blockquote>
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 relative bg-secondary">
                    <Image src={t.photo} alt={t.auteur} fill className="object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.auteur}</p>
                    <p className="text-xs text-accent font-medium mt-1 uppercase tracking-wider">{t.poste} — {t.entreprise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

