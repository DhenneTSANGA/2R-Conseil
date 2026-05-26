import Image from "next/image"
import { Briefcase, Target, Zap, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const valeurs = [
  {
    title: "Culture de l'Excellence",
    desc: "Nous visons la perfection dans chaque mission pour dépasser les attentes de nos clients.",
    icon: Target
  },
  {
    title: "Esprit d'Innovation",
    desc: "Nous encourageons la créativité et l'adoption de nouvelles technologies.",
    icon: Zap
  },
  {
    title: "Épanouissement",
    desc: "Nous offrons un cadre de travail stimulant favorisant le développement personnel.",
    icon: Users
  }
]

export default function CarrieresPage() {
  return (
    <div className="flex flex-col">
       {/* Page Header */}
       <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/9.webp"
            alt="Carrières"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll animation="reveal-up">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Talents</p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                Rejoignez le <br />
                <span className="italic font-light text-accent">cercle de l&apos;excellence.</span>
              </h1>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-square bg-secondary">
               <Image
                src="/images/carriere.avif"
                alt="Travailler chez 2R Conseil"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 bg-accent p-12 shadow-2xl hidden md:block">
                <p className="font-serif text-2xl text-primary leading-tight italic">"Une carrière à la hauteur de vos ambitions."</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl text-primary mb-8">Pourquoi nous rejoindre ?</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                Travailler au Cabinet 2R Conseil, c&apos;est intégrer une équipe de passionnés qui transforment les défis complexes en opportunités stratégiques. Nous recherchons des talents audacieux, rigoureux et désireux d&apos;avoir un impact réel sur l&apos;économie gabonaise.
              </p>
              <div className="space-y-8">
                {valeurs.map((v) => {
                  const Icon = v.icon
                  return (
                    <div key={v.title} className="flex gap-6">
                      <div className="h-10 w-10 shrink-0 flex items-center justify-center bg-primary text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{v.title}</h4>
                        <p className="text-sm text-muted-foreground font-light">{v.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Opportunités</p>
              <h2 className="font-serif text-4xl text-primary">Postes Ouverts</h2>
            </div>
            <p className="text-muted-foreground font-light text-lg lg:max-w-xs italic">
              Nous sommes toujours à la recherche de profils exceptionnels.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              { title: "Auditeur Senior", type: "CDI", dep: "Audit & Finance" },
              { title: "Consultant Fiscaliste", type: "CDI", dep: "Juridique & Fiscalité" },
              { title: "Gestionnaire de Paie Junior", type: "CDI", dep: "Ressources Humaines" }
            ].map((job, i) => (
              <RevealOnScroll
                key={job.title}
                animation="reveal-up"
                delay={i * 100}
              >
                <div className="bg-background border border-border p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-accent transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-accent/10 text-accent px-3 py-1">{job.type}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">{job.dep}</span>
                    </div>
                    <h4 className="text-xl font-serif text-primary">{job.title}</h4>
                  </div>
                  <Button asChild className="rounded-none bg-primary text-white h-12 px-8 font-bold uppercase tracking-widest text-[10px]">
                    <Link href="/contact">Postuler maintenant</Link>
                  </Button>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-light mb-8">Aucun poste ne correspond à votre profil ?</p>
            <Link href="/contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-accent transition-all">
              Candidature Spontanée
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
