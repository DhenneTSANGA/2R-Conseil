import Image from "next/image"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const articles = [
  {
    title: "Loi de Finances 2026 : Ce qu&apos;il faut retenir pour les PME au Gabon",
    desc: "Analyse détaillée des nouvelles dispositions fiscales et de leur impact sur la trésorerie des entreprises.",
    date: "15 Mai 2026",
    cat: "Fiscalité",
    img: "/images/finances.avif"
  },
  {
    title: "Optimisation de la Paie : Les meilleures pratiques en zone OHADA",
    desc: "Comment sécuriser vos processus de paie tout en optimisant vos charges sociales.",
    date: "02 Mai 2026",
    cat: "Ressources Humaines",
    img: "/images/ohada.avif"
  },
  {
    title: "Digitalisation de la Comptabilité : Un levier de performance",
    desc: "Pourquoi et comment passer à une comptabilité 100% digitale pour gagner en réactivité.",
    date: "20 Avril 2026",
    cat: "Innovation",
    img: "/images/7.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/8.jpg"
            alt="Actualités"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll animation="reveal-up">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Analyses & Perspectives</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                Décrypter l&apos;actualité <br />
                <span className="italic font-light text-accent">économique & fiscale.</span>
              </h1>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filter / Search */}
      <section className="py-12 border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll animation="reveal-up">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-wrap gap-4">
                {["Tous", "Fiscalité", "Audit", "RH", "Innovation"].map((cat) => (
                  <button key={cat} className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest border border-border bg-background hover:border-accent hover:text-accent transition-all">
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-80">
                <Input placeholder="Rechercher une analyse..." className="rounded-none border-border bg-background pl-10" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40" />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((art, i) => (
              <RevealOnScroll
                key={art.title}
                animation="reveal-up"
                delay={i * 100}
              >
                <article className="group flex flex-col h-full">
                  <div className="relative aspect-video mb-8 overflow-hidden bg-secondary">
                    <Image
                      src={art.img}
                      alt={art.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-accent px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                      {art.cat}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-primary/40 mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {art.date}</span>
                    <span className="flex items-center gap-1.5"><User className="h-3 w-3" /> Par la Rédaction</span>
                  </div>
                  <h3 className="font-serif text-2xl text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                    {art.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                    {art.desc}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all">
                    Lire l&apos;article
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll animation="reveal-up" className="mt-20 text-center">
             <Button variant="outline" className="rounded-none border-primary text-primary px-12 h-14 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">
               Charger plus d&apos;articles
             </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
