import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const valeurs = [
  { titre: "Confidentialité", description: "Strict respect du secret professionnel sur chaque dossier." },
  { titre: "Rigueur", description: "Méthodologie éprouvée et conformité réglementaire absolue." },
  { titre: "Transparence", description: "Communication claire, honoraires sans surprise." },
  { titre: "Innovation", description: "Outils digitaux modernes au service de votre performance." },
]

const timeline = [
  { annee: "2010", titre: "Fondation", description: "Création du cabinet à Libreville." },
  { annee: "2014", titre: "Expansion", description: "Ouverture du pôle audit et fiscalité." },
  { annee: "2018", titre: "Digitalisation", description: "Lancement de notre plateforme client." },
  { annee: "2024", titre: "Référence", description: "Plus de 200 entreprises accompagnées." },
]

export function AboutSection() {
  return (
    <section id="cabinet" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image + values */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=900&width=720&query=professional%20african%20business%20team%20in%20modern%20glass%20office%20discussing%20financial%20strategy%20premium%20corporate%20photography"
                alt="Équipe du Cabinet 2R Conseil en discussion stratégique"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl max-w-[280px]">
              <p className="font-serif text-3xl font-semibold leading-none">2010</p>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                Création du cabinet à Libreville, Gabon.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              À propos du cabinet
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight tracking-tight text-balance">
              Un cabinet de référence au cœur du Gabon.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed text-pretty">
              Depuis plus de quinze ans, le Cabinet 2R Conseil accompagne les entreprises
              gabonaises dans la maîtrise de leur comptabilité, l&apos;optimisation de leur fiscalité
              et la sécurisation de leurs opérations. Notre vocation : devenir le partenaire
              stratégique de votre croissance.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {valeurs.map((v) => (
                <div key={v.titre} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{v.titre}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Notre histoire
            </p>
            <h3 className="mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary tracking-tight">
              Quinze années au service de l&apos;excellence.
            </h3>
          </div>

          <div className="mt-14 relative">
            <div className="absolute left-0 right-0 top-5 h-px bg-border hidden md:block" />
            <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
              {timeline.map((item) => (
                <div key={item.annee} className="relative md:text-center">
                  <div className="flex md:justify-center">
                    <div className="relative h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-4 ring-background">
                      <span className="h-2 w-2 rounded-full bg-brand-green" />
                    </div>
                  </div>
                  <p className="mt-4 font-serif text-2xl font-semibold text-primary">
                    {item.annee}
                  </p>
                  <p className="mt-1 font-semibold text-sm text-foreground">{item.titre}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
