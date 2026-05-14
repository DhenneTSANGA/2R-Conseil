"use client"

import { Calculator, ClipboardCheck, Lightbulb, GraduationCap, Users, Scale, ArrowRight } from "lucide-react"
import Link from "next/link"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const expertises = [
  {
    icon: ClipboardCheck,
    titre: "Audit & Commissariat aux Comptes",
    description: "Certification de vos comptes, audit interne et gestion des risques pour une transparence totale.",
    points: ["Audit légal et contractuel", "Revue des procédures", "Audit d'acquisition", "Contrôle interne"],
  },
  {
    icon: Scale,
    titre: "Conseil Fiscal & Juridique",
    description: "Optimisation de votre fiscalité et sécurisation de votre cadre juridique en zone OHADA.",
    points: ["Planification fiscale", "Assistance contrôle fiscal", "Droit des affaires", "Veille réglementaire"],
  },
  {
    icon: Calculator,
    titre: "Expertise Comptable & Sociale",
    description: "Tenue comptable rigoureuse et externalisation de la gestion sociale pour votre sérénité.",
    points: ["Tenue & Révision", "Reporting & Dashboards", "Gestion de la paie", "Déclarations sociales"],
  },
  {
    icon: Users,
    titre: "Capital Humain & Recrutement",
    description: "Accompagnement dans la gestion de vos talents et renforcement de votre capital humain.",
    points: ["Recrutement spécialisé", "Gestion des carrières", "Audits sociaux", "Politiques RH"],
  },
  {
    icon: Lightbulb,
    titre: "Conseil Stratégique & Financier",
    description: "Accompagnement des dirigeants dans leurs décisions stratégiques et financières.",
    points: ["Business Planning", "Restructuration", "Évaluation d'entreprise", "Stratégie de croissance"],
  },
  {
    icon: GraduationCap,
    titre: "Formation & Capacité",
    description: "Programmes de formation sur mesure pour vos collaborateurs et dirigeants.",
    points: ["Séminaires fiscaux", "Ateliers comptables", "Formations RH", "Coaching leadership"],
  },
]

export function ServicesSection() {
  return (
    <section id="expertises" className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <RevealOnScroll animation="reveal-up">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Pôles d&apos;Excellence</p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-primary leading-[1.1]">
                Des expertises transversales pour une <span className="italic">vision globale.</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll animation="reveal-up" delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed lg:max-w-md font-light">
              Le Cabinet 2R Conseil déploie un accompagnement à 360° pour sécuriser et propulser vos activités.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertises.map((item, i) => {
            const Icon = item.icon
            return (
              <RevealOnScroll
                key={item.titre}
                animation="reveal-up"
                delay={100 * (i % 3)}
                className="group relative bg-background border border-border p-10 transition-all duration-500 hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-8 font-serif text-2xl font-medium text-primary group-hover:text-accent transition-colors duration-500">
                  {item.titre}
                </h3>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-xs font-medium text-primary/70 uppercase tracking-widest transition-transform group-hover:translate-x-1">
                      <span className="h-px w-3 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/services" 
                  className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-all"
                >
                  Détails de l&apos;expertise
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </Link>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

