import Image from "next/image"
import { Quote, Star } from "lucide-react"

const temoignages = [
  {
    citation:
      "Le Cabinet 2R nous a permis de réduire nos erreurs comptables de 80% et d'optimiser notre fiscalité. Un partenaire indispensable.",
    auteur: "Marie-Claire Mavoungou",
    poste: "Directrice Financière",
    entreprise: "GabonLogistics SA",
    avatar: "/placeholder.svg?height=120&width=120&query=professional%20african%20businesswoman%20portrait%20smiling%20corporate",
  },
  {
    citation:
      "Une équipe rigoureuse, disponible et profondément experte des réalités gabonaises. Nous leur confions tous nos audits annuels.",
    auteur: "Jean-Pierre Boundou",
    poste: "PDG",
    entreprise: "Boundou Industries",
    avatar: "/placeholder.svg?height=120&width=120&query=professional%20african%20businessman%20portrait%20suit%20corporate",
  },
  {
    citation:
      "Leur accompagnement à la création d'entreprise nous a fait gagner six mois. Un cabinet véritablement stratégique.",
    auteur: "Aïcha Ndong",
    poste: "Fondatrice",
    entreprise: "Ndong & Associés",
    avatar: "/placeholder.svg?height=120&width=120&query=professional%20african%20woman%20entrepreneur%20portrait%20smiling",
  },
]

const partenaires = [
  "GabonOil",
  "BGFI Bank",
  "Sogara",
  "Comilog",
  "Olam Gabon",
  "Setrag",
]

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Ils nous font confiance
          </p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight text-balance">
            La parole à nos clients.
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {temoignages.map((t, idx) => (
            <figure
              key={t.auteur}
              className={`flex flex-col rounded-xl p-7 lg:p-8 ${
                idx === 1
                  ? "bg-primary text-primary-foreground border-b-4 border-brand-green shadow-xl"
                  : "bg-secondary/60 border border-border"
              }`}
            >
              <Quote
                className="h-8 w-8 text-brand-green"
                aria-hidden
              />
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand-green text-brand-green"
                  />
                ))}
              </div>
              <blockquote
                className={`mt-5 font-serif text-lg leading-relaxed text-pretty ${
                  idx === 1 ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                &ldquo;{t.citation}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden bg-secondary">
                  <Image src={t.avatar} alt={t.auteur} fill className="object-cover" />
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      idx === 1 ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {t.auteur}
                  </p>
                  <p
                    className={`text-xs ${
                      idx === 1 ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {t.poste} · {t.entreprise}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Partenaires */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Quelques entreprises qui nous font confiance
          </p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partenaires.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center h-12 text-center font-serif text-lg font-semibold text-muted-foreground/60 hover:text-brand-green transition-colors"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
