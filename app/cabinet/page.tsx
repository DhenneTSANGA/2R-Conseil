import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import Image from "next/image"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function CabinetPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/1.jpg"
            alt="Le Cabinet"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll animation="reveal-up">
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Institution</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight">
              L&apos;excellence à votre <br />
              <span className="italic font-light text-accent">service depuis 2010.</span>
            </h1>
          </RevealOnScroll>
        </div>
      </section>

      <AboutSection />
      <StatsSection />
      <WhyChooseUs />
      <TeamSection />
      
      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <RevealOnScroll animation="reveal-left">
              <div className="bg-background p-12 border border-border h-full">
                <h3 className="font-serif text-3xl font-medium text-primary mb-6">Notre Mission</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-lg">
                  Apporter aux entreprises gabonaises et internationales les outils stratégiques, fiscaux et comptables indispensables à leur pérennité et à leur excellence opérationnelle.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll animation="reveal-right">
              <div className="bg-primary p-12 border border-white/5 text-white h-full">
                <h3 className="font-serif text-3xl font-medium text-accent mb-6">Notre Vision</h3>
                <p className="text-white/70 leading-relaxed font-light text-lg">
                  Devenir le partenaire de référence en Afrique Centrale pour le conseil de haut niveau, reconnu pour notre intégrité, notre expertise technique et notre capacité d&apos;innovation.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}
