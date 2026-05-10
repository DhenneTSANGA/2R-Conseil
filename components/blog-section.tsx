import Image from "next/image"
import { ArrowUpRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    categorie: "Fiscalité",
    titre: "Réforme OHADA 2024 : ce que les entreprises gabonaises doivent savoir",
    extrait:
      "Tour d'horizon des principales évolutions du droit comptable OHADA et de leurs impacts sur vos états financiers.",
    image: "/placeholder.svg?height=500&width=800&query=business%20documents%20financial%20charts%20on%20wooden%20desk%20premium%20editorial",
    lecture: "5 min",
    date: "12 mars 2024",
  },
  {
    categorie: "Gestion d'entreprise",
    titre: "Cinq leviers pour optimiser la trésorerie de votre PME",
    extrait:
      "Des stratégies concrètes pour améliorer votre BFR, sécuriser vos liquidités et financer votre croissance.",
    image: "/placeholder.svg?height=500&width=800&query=business%20meeting%20african%20team%20strategy%20modern%20office",
    lecture: "7 min",
    date: "5 mars 2024",
  },
  {
    categorie: "RH & Conformité",
    titre: "Paie au Gabon : les obligations sociales à ne pas négliger",
    extrait:
      "Un guide pratique des cotisations CNSS, CNAMGS et de la fiscalité salariale pour rester en règle.",
    image: "/placeholder.svg?height=500&width=800&query=professional%20business%20handshake%20african%20corporate",
    lecture: "6 min",
    date: "28 février 2024",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Actualités & expertise
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight text-balance">
              Notre blog professionnel.
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="self-start lg:self-auto rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <a href="#">
              Voir tous les articles
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.titre}
              href="#"
              className="group flex flex-col rounded-xl overflow-hidden border border-border bg-background hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={a.image}
                  alt={a.titre}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-brand-green/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {a.categorie}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{a.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {a.lecture}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-primary leading-tight tracking-tight group-hover:text-brand-green transition-colors text-balance">
                  {a.titre}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-pretty">
                  {a.extrait}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-brand-green transition-colors">
                  Lire l&apos;article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
