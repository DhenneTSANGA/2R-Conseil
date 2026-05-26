"use client"

import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const articles = [
  {
    title: "Loi de Finances 2026 : Impacts pour les PME",
    date: "15 Mai 2026",
    cat: "Fiscalité",
    img: "/images/finances.avif"
  },
  {
    title: "Optimisation de la Paie en zone OHADA",
    date: "02 Mai 2026",
    cat: "RH",
    img: "/images/ohada.avif"
  },
  {
    title: "Digitalisation Comptable : Guide Complet",
    date: "20 Avril 2026",
    cat: "Innovation",
    img: "/images/7.webp"
  }
]

export function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <RevealOnScroll animation="reveal-up">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">Actualités & Analyses</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-primary">Le regard de nos <span className="italic font-light text-primary/80">experts.</span></h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll animation="reveal-up" delay={200}>
            <Link href="/blog" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-all group">
              Toute l&apos;actualité
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art, i) => (
            <RevealOnScroll
              key={art.title}
              animation="reveal-up"
              delay={i * 100}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video mb-6 overflow-hidden bg-secondary">
                <Image
                  src={art.img}
                  alt={art.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-3 group-hover:translate-x-1 transition-transform">
                <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-accent" /> {art.date}</span>
                <span className="text-accent">{art.cat}</span>
              </div>
              <h3 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">
                {art.title}
              </h3>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
