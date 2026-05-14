"use client"

import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const articles = [
  {
    categorie: "Fiscalité",
    titre: "Réforme OHADA 2024 : ce que les entreprises gabonaises doivent savoir",
    extrait:
      "Tour d'horizon des principales évolutions du droit comptable OHADA et de leurs impacts sur vos états financiers.",
    image: "/placeholder.svg?height=500&width=800&query=business%20documents%20financial%20charts%20on%20wooden%20desk%20premium%20editorial",
    lecture: "5 min",
    date: "12 mars 2024",
  },
  {
    categorie: "Gestion d'entreprise",
    titre: "Cinq leviers pour optimiser la trésorerie de votre PME",
    extrait:
      "Des stratégies concrètes pour améliorer votre BFR, sécuriser vos liquidités et financer votre croissance.",
    image: "/placeholder.svg?height=500&width=800&query=business%20meeting%20african%20team%20strategy%20modern%20office",
    lecture: "7 min",
    date: "5 mars 2024",
  },
  {
    categorie: "RH & Conformité",
    titre: "Paie au Gabon : les obligations sociales à ne pas négliger",
    extrait:
      "Un guide pratique des cotisations CNSS, CNAMGS et de la fiscalité salariale pour rester en règle.",
    image: "/placeholder.svg?height=500&width=800&query=professional%20business%20handshake%20african%20corporate",
    lecture: "6 min",
    date: "28 février 2024",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <RevealOnScroll animation="reveal-up" className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Actualités & expertise
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-primary tracking-tight text-balance leading-tight">
              Notre blog professionnel.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll animation="reveal-up" delay={200}>
            <Button
              asChild
              variant="outline"
              className="self-start lg:self-auto rounded-none border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent px-8 h-12 text-xs font-bold uppercase tracking-widest"
            >
              <a href="#">
                Voir tous les articles
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <RevealOnScroll
              key={a.titre}
              animation="reveal-up"
              delay={i * 100}
            >
              <a
                href="#"
                className="group flex flex-col bg-background border border-border overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <Image
                    src={a.image}
                    alt={a.titre}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
                  <span className="absolute top-4 left-4 bg-accent/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {a.categorie}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-widest font-medium">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {a.lecture}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-primary leading-tight group-hover:text-accent transition-colors">
                    {a.titre}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">
                    {a.extrait}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-all">
                    Lire l&apos;article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
