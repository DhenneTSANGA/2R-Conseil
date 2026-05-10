import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const equipe = [
  {
    nom: "Roland Mavoungou",
    poste: "Associé fondateur — Expert-comptable",
    bio: "Expert-comptable diplômé, 20 ans d'expérience dans l'audit et le conseil aux PME et grandes entreprises.",
    photo: "/placeholder.svg?height=600&width=480&query=professional%20african%20male%20accountant%20mature%20navy%20suit%20studio%20portrait%20premium",
  },
  {
    nom: "Régine Ondo",
    poste: "Associée — Directrice Audit & Fiscalité",
    bio: "Auditrice certifiée IFAC, spécialiste de la conformité OHADA et de la fiscalité internationale.",
    photo: "/placeholder.svg?height=600&width=480&query=professional%20african%20female%20auditor%20business%20suit%20studio%20portrait%20premium",
  },
  {
    nom: "Patrick Nzigou",
    poste: "Manager — Conseil stratégique",
    bio: "MBA HEC, accompagne les entrepreneurs dans la création, le développement et la transformation.",
    photo: "/placeholder.svg?height=600&width=480&query=professional%20african%20business%20consultant%20young%20suit%20studio%20portrait%20premium",
  },
  {
    nom: "Fatou Diallo",
    poste: "Responsable — Formation & RH",
    bio: "Experte en gestion des talents et formations professionnelles certifiantes pour entreprises.",
    photo: "/placeholder.svg?height=600&width=480&query=professional%20african%20female%20hr%20manager%20smiling%20studio%20portrait%20premium",
  },
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Nos experts
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight text-balance">
              Une équipe qui place l&apos;humain au cœur du conseil.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed lg:max-w-sm">
            Diplômés des meilleures écoles, certifiés et profondément ancrés dans la réalité
            économique gabonaise.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipe.map((m) => (
            <article
              key={m.nom}
              className="group relative rounded-xl overflow-hidden bg-background border border-border hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={m.photo}
                  alt={`${m.nom} — ${m.poste}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-2">
                  <a
                    href="#"
                    aria-label={`LinkedIn de ${m.nom}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary hover:bg-brand-green hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`Contacter ${m.nom}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary hover:bg-brand-green hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-primary tracking-tight">
                  {m.nom}
                </h3>
                <p className="mt-1 text-xs font-medium text-brand-green uppercase tracking-wider">
                  {m.poste}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
