"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Zap, Globe, Users, BarChart3, Fingerprint } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    titre: "Éthique & Indépendance",
    description: "Une intégrité absolue garantissant des conseils objectifs et impartiaux.",
  },
  {
    icon: Globe,
    titre: "Expertise OHADA",
    description: "Une parfaite maîtrise des normes juridiques et fiscales régionales.",
  },
  {
    icon: BarChart3,
    titre: "Création de Valeur",
    description: "Nos interventions visent l'optimisation concrète de vos performances.",
  },
  {
    icon: Users,
    titre: "Proximité Stratégique",
    description: "Des experts dédiés qui s'immergent dans vos enjeux métiers.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-primary py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Engagement & Valeurs</p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-white leading-tight">
                L&apos;excellence comme <span className="italic font-light">standard absolu.</span>
              </h2>
              <p className="mt-8 text-lg text-white/70 font-light leading-relaxed max-w-xl">
                Au Cabinet 2R Conseil, nous ne nous contentons pas de traiter des chiffres. Nous bâtissons des relations de confiance durables basées sur la rigueur et l&apos;innovation.
              </p>
            </motion.div>

            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              {reasons.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.titre}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center bg-white/5 border border-white/10 text-accent mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white">{item.titre}</h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed font-light">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] relative border border-white/10 p-4">
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-accent/30" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-accent/30" />
              <div className="relative h-full w-full overflow-hidden bg-white/5 backdrop-blur-3xl flex items-center justify-center">
                <div className="text-center p-12">
                  <Fingerprint className="h-20 w-20 text-accent mx-auto mb-8 opacity-50" />
                  <p className="font-serif text-2xl text-white italic">"Votre confiance est notre actif le plus précieux."</p>
                  <p className="mt-6 text-xs font-bold uppercase tracking-widest text-accent">Direction Générale</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

