import { Calculator, ClipboardCheck, Lightbulb, GraduationCap, Users, Scale, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Calculator,
    titre: "Comptabilité",
    description:
      "Tenue comptable, états financiers, gestion de paie et déclarations fiscales pour une gestion rigoureuse.",
    items: ["Tenue comptable", "États financiers", "Gestion de paie", "Déclarations fiscales"],
    featured: true,
  },
  {
    icon: ClipboardCheck,
    titre: "Audit",
    description:
      "Audit légal, audit interne, contrôle financier et gestion des risques pour sécuriser vos opérations.",
    items: ["Audit légal", "Audit interne", "Contrôle financier", "Gestion des risques"],
  },
  {
    icon: Lightbulb,
    titre: "Conseil stratégique",
    description:
      "Stratégie financière, création d'entreprise, optimisation fiscale et accompagnement PME sur mesure.",
    items: ["Stratégie financière", "Création d'entreprise", "Optimisation fiscale", "Accompagnement PME"],
  },
  {
    icon: Scale,
    titre: "Fiscalité",
    description:
      "Conseil fiscal, planification, contentieux et conformité OHADA pour maîtriser votre cadre réglementaire.",
    items: ["Conseil fiscal", "Planification fiscale", "Contentieux", "Conformité OHADA"],
  },
  {
    icon: Users,
    titre: "Ressources humaines",
    description:
      "Gestion RH, paie, conformité sociale et accompagnement managérial pour valoriser votre capital humain.",
    items: ["Gestion RH", "Paie & social", "Conformité sociale", "Accompagnement managérial"],
  },
  {
    icon: GraduationCap,
    titre: "Formation",
    description:
      "Formations professionnelles, certifications, séminaires et coaching pour monter en compétences.",
    items: ["Formations pro", "Certifications", "Séminaires", "Coaching entreprise"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Nos expertises
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight text-balance">
              Six domaines d&apos;expertise pour votre performance.
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed lg:max-w-md text-pretty">
            Une approche intégrée qui combine maîtrise technique, vision stratégique et accompagnement
            personnalisé pour chaque entreprise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.titre}
                className={`group relative flex flex-col rounded-xl p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? "bg-primary text-primary-foreground border-t-4 border-brand-green shadow-xl"
                    : "bg-background border border-border hover:border-brand-green/50 hover:shadow-lg"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                    service.featured ? "bg-brand-green/20 text-brand-green" : "bg-secondary text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3
                  className={`mt-6 font-serif text-2xl font-semibold tracking-tight ${
                    service.featured ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {service.titre}
                </h3>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    service.featured ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-sm ${
                        service.featured ? "text-primary-foreground/85" : "text-foreground/85"
                      }`}
                    >
                      <span
                        className={`h-1 w-1 rounded-full ${
                          service.featured ? "bg-brand-green" : "bg-accent"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    service.featured
                      ? "text-brand-green hover:text-brand-green/80"
                      : "text-primary hover:text-brand-green"
                  }`}
                >
                  En savoir plus
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Besoin d&apos;un accompagnement sur mesure ?
          </p>
          <Button asChild className="rounded-full bg-brand-green hover:bg-brand-green/90 text-primary h-11 px-8 font-bold shadow-lg border-b-2 border-black/10">
            <a href="#contact">Discuter de votre projet</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
