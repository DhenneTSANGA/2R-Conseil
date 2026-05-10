import Image from "next/image"
import { Award, Zap, Shield, TrendingUp, Lock, Sparkles, FileCheck, Headphones } from "lucide-react"

const raisons = [
  {
    icon: Award,
    titre: "Expertise certifiée",
    description: "Une équipe de professionnels diplômés et certifiés OHADA, OEC et IFAC.",
  },
  {
    icon: Sparkles,
    titre: "Accompagnement personnalisé",
    description: "Un interlocuteur dédié qui comprend les enjeux spécifiques de votre métier.",
  },
  {
    icon: Zap,
    titre: "Réactivité",
    description: "Réponse sous 24 à 48 heures, suivi proactif et disponibilité constante.",
  },
  {
    icon: TrendingUp,
    titre: "Outils numériques modernes",
    description: "Plateforme client sécurisée, dashboards, signature électronique et plus.",
  },
  {
    icon: Lock,
    titre: "Confidentialité totale",
    description: "Strict respect du secret professionnel et chiffrement de vos données.",
  },
  {
    icon: Shield,
    titre: "Optimisation financière",
    description: "Réduction d'erreurs, économies fiscales et meilleure visibilité sur vos comptes.",
  },
  {
    icon: FileCheck,
    titre: "Conformité réglementaire",
    description: "Veille juridique permanente et adaptation continue aux normes OHADA.",
  },
  {
    icon: Headphones,
    titre: "Support continu",
    description: "Une équipe à votre écoute, du conseil ponctuel à l'externalisation complète.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-premium-gradient text-primary-foreground">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/placeholder.svg?height=1080&width=1920&query=abstract%20dark%20navy%20blue%20geometric%20corporate%20pattern%20texture%20luxury"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Pourquoi nous choisir
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-balance">
            Huit raisons de nous confier vos enjeux financiers.
          </h2>
          <p className="mt-6 text-base text-primary-foreground/75 leading-relaxed text-pretty">
            Une approche qui combine expertise, proximité et outils modernes pour faire du Cabinet 2R Conseil le partenaire durable de votre croissance.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-xl overflow-hidden border border-primary-foreground/10">
          {raisons.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.titre}
                className="bg-primary p-6 lg:p-8 transition-colors hover:bg-primary/80"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-primary-foreground tracking-tight">
                  {r.titre}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">
                  {r.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
