"use client"

import { RevealOnScroll } from "@/components/reveal-on-scroll"

const stats = [
  { value: "15+", label: "Années d'excellence", description: "Une présence historique au Gabon" },
  { value: "250+", label: "Clients Stratégiques", description: "PME, Grandes Entreprises & Institutions" },
  { value: "98%", label: "Fidélité Client", description: "Un engagement sur le long terme" },
  { value: "20+", label: "Experts Dédiés", description: "Audit, Fiscalité, RH & Conseil" },
]

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <RevealOnScroll
              key={stat.label}
              animation="reveal-up"
              delay={i * 100}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent transition-all duration-500 group-hover:w-2" />
              <div className="pl-6 transition-transform duration-500 group-hover:translate-x-2">
                <p className="font-serif text-5xl lg:text-6xl font-bold text-primary tracking-tighter group-hover:text-accent transition-colors">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-primary/80">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

