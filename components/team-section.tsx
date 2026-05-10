"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

const equipe = [
  {
    nom: "Roland Mavoungou",
    poste: "Associé Fondateur",
    specialite: "Audit & Expertise Comptable",
    photo: "/placeholder.jpg?height=800&width=600&query=professional%20african%20male%20accountant%20mature%20navy%20suit%20studio%20portrait%20premium",
  },
  {
    nom: "Régine Ondo",
    poste: "Associée",
    specialite: "Directrice Audit & Fiscalité",
    photo: "/placeholder.jpg?height=800&width=600&query=professional%20african%20female%20auditor%20business%20suit%20studio%20portrait%20premium",
  },
  {
    nom: "Patrick Nzigou",
    poste: "Senior Manager",
    specialite: "Conseil Stratégique",
    photo: "/placeholder.jpg?height=800&width=600&query=professional%20african%20business%20consultant%20young%20suit%20studio%20portrait%20premium",
  },
  {
    nom: "Fatou Diallo",
    poste: "Manager",
    specialite: "Capital Humain & Formation",
    photo: "/placeholder.jpg?height=800&width=600&query=professional%20african%20female%20hr%20manager%20smiling%20studio%20portrait%20premium",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Nos Experts</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Une équipe au service de <br />
                <span className="italic font-light text-primary/80">votre ambition.</span>
              </h2>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed lg:max-w-md"
          >
            Le Cabinet 2R Conseil réunit des experts multidisciplinaires formés dans les meilleures écoles internationales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipe.map((m, i) => (
            <motion.article
              key={m.nom}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-6">
                <Image
                  src={m.photo}
                  alt={m.nom}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="h-10 w-10 flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-white transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:contact@cabinet2r-conseil.ga" className="h-10 w-10 flex items-center justify-center bg-white text-primary hover:bg-accent hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="text-center">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

