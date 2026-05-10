import Image from "next/image"
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    title: "Fiscalité & Droit",
    desc: "Maîtrisez les évolutions législatives et optimisez vos pratiques fiscales.",
    icon: BookOpen
  },
  {
    title: "Comptabilité & Finance",
    desc: "Renforcez vos compétences en analyse financière et normes OHADA.",
    icon: GraduationCap
  },
  {
    title: "Management & RH",
    desc: "Développez votre leadership et optimisez votre gestion du capital humain.",
    icon: Users
  }
]

export default function FormationsPage() {
  return (
    <div className="flex flex-col">
       {/* Page Header */}
       <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.jpg?height=1080&width=1920&query=premium%20classroom%20training%20minimalist"
            alt="Formations"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Pôle Académique</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
              Développez vos <br />
              <span className="italic font-light text-accent">talents stratégiques.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl text-primary mb-8">Un centre de transfert de compétences.</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                Le Cabinet 2R Conseil propose des programmes de formation certifiants et des séminaires de haut niveau pour accompagner la montée en compétences de vos équipes. Notre pédagogie repose sur le partage d&apos;expériences concrètes et la maîtrise des dernières normes internationales.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-accent" />
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Formateurs Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-accent" />
                  <span className="text-sm font-bold uppercase tracking-wider text-primary">Sessions sur Mesure</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div key={cat.title} className="bg-secondary/50 p-8 border border-border group hover:border-accent transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="h-12 w-12 flex items-center justify-center bg-primary text-white shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-serif text-primary mb-1">{cat.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{cat.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Calendrier</p>
            <h2 className="font-serif text-4xl text-primary">Prochains Séminaires & Ateliers</h2>
          </div>

          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background border border-border p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:shadow-xl transition-all">
                <div className="flex items-center gap-8">
                  <div className="text-center shrink-0">
                    <p className="text-accent font-serif text-3xl font-bold">1{i}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Juin 2026</p>
                  </div>
                  <div className="h-12 w-px bg-border hidden md:block" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">Fiscalité</span>
                    <h4 className="text-xl font-serif text-primary mb-2">Réforme de la Loi de Finances : Impacts et Opportunités</h4>
                    <p className="text-sm text-muted-foreground font-light">Animé par nos experts fiscaux certifiés.</p>
                  </div>
                </div>
                <Button asChild className="rounded-none bg-primary text-white h-12 px-8 font-bold uppercase tracking-widest text-[10px]">
                  <Link href="/contact">S&apos;inscrire à la session</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

