"use client"

import { motion } from "framer-motion"

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
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/20 group-hover:bg-accent transition-colors duration-500" />
              <div className="pl-6">
                <p className="font-serif text-5xl lg:text-6xl font-bold text-primary tracking-tighter">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-primary/80">
                  {stat.label}
                </p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

