import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, FileText, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-premium-gradient text-primary-foreground pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Décor subtil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Cabinet de conseil premium · Libreville
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
              Votre partenaire stratégique en{" "}
              <span className="text-accent italic">comptabilité, audit</span> et conseil.
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg text-primary-foreground/75 leading-relaxed text-pretty">
              Le Cabinet 2R Conseil accompagne PME, grandes entreprises et institutions au Gabon dans
              leur performance financière, leur conformité réglementaire et leur transformation
              durable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-primary rounded-full px-7 h-12 font-bold shadow-lg border-b-2 border-black/10"
              >
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-7 h-12 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-4 w-4 text-brand-green" />
                  Prendre rendez-vous
                </Link>
              </Button>
            </div>

            {/* Mini features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              {[
                { icon: ShieldCheck, label: "Confidentialité absolue" },
                { icon: FileText, label: "Conformité OHADA" },
                { icon: Calendar, label: "Réactivité 24/48h" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary-foreground/15 bg-primary-foreground/5">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm text-primary-foreground/85">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-primary-foreground/10 shadow-2xl">
              <Image
                src="/placeholder.svg?height=900&width=720&query=elegant%20african%20businesswoman%20in%20navy%20blue%20suit%20at%20modern%20corporate%20office%20premium%20editorial%20portrait"
                alt="Équipe du Cabinet 2R Conseil en réunion stratégique"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background text-foreground rounded-xl p-5 shadow-2xl border border-border max-w-[260px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-semibold text-primary leading-none">+15</p>
                  <p className="text-xs text-muted-foreground mt-1">années d&apos;expertise</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                Au service des entreprises gabonaises et de la sous-région.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
