"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, FileText, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-primary pt-32 pb-20 lg:pt-48 lg:pb-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-zoom-in h-full w-full">
          <Image
            src="/images/4.webp"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-8">
            <RevealOnScroll animation="reveal-up">
              <div className="inline-flex items-center gap-3 rounded-none border-l-4 border-accent bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">
                Expertise & Excellence au Gabon
              </div>

              <h1 className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1] tracking-tight text-white">
                Bâtissons votre <br />
                <span className="text-accent italic font-light">réussite stratégique.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg sm:text-xl text-white/70 leading-relaxed font-light">
                Le Cabinet 2R Conseil accompagne les institutions et les entreprises dans leur quête de performance, de conformité et de croissance durable au Gabon et dans la sous-région.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary rounded-none px-10 h-16 text-sm font-bold uppercase tracking-widest shadow-2xl transition-all hover:translate-y-[-4px] group"
                >
                  <Link href="/contact">
                    Nos Expertises
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-none px-10 h-16 border-white/20 bg-transparent text-white hover:bg-white hover:text-primary transition-all uppercase tracking-widest text-xs font-bold group"
                >
                  <Link href="/devis">
                    <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Demander un devis
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: ShieldCheck, label: "Audit & Conformité", desc: "Normes OHADA & Internationales" },
                  { icon: FileText, label: "Fiscalité & Conseil", desc: "Optimisation & Accompagnement" },
                  { icon: Calendar, label: "Expertise RH", desc: "Gestion de Paie & Recrutement" },
                ].map(({ icon: Icon, label, desc }, i) => (
                  <div key={label} className="animate-reveal-up" style={{ animationDelay: `${400 + i * 100}ms` }}>
                    <div className="group flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all group-hover:-translate-y-1">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase tracking-wider">{label}</p>
                        <p className="text-xs text-white/50 mt-1">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right decorative element */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <RevealOnScroll animation="zoom-in" delay={200}>
              <div className="relative aspect-[3/4] border border-white/10 p-4 group">
                <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src="/images/22.jpg"
                    alt="Corporate Excellence"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 bg-accent p-8 shadow-2xl transition-transform hover:-translate-y-2">
                  <p className="text-5xl font-serif font-bold text-primary">15+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mt-2">Années d&apos;expertise</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}

