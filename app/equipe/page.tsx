import { TeamSection } from "@/components/team-section"
import Image from "next/image"

export default function EquipePage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.jpg?height=1080&width=1920&query=corporate%20team%20discussion%20minimalist%20navy"
            alt="Notre Équipe"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Capital Humain</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight">
            Les visages de <br />
            <span className="italic font-light text-accent">votre excellence.</span>
          </h1>
        </div>
      </section>

      <TeamSection />

      {/* Values or Culture Section */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-primary mb-8 italic font-light">"Seul on va plus vite, ensemble on va plus loin."</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Notre force réside dans la diversité de nos parcours et la convergence de nos valeurs. Chaque expert du Cabinet 2R Conseil est engagé dans une démarche de formation continue pour vous garantir le meilleur du conseil.
          </p>
        </div>
      </section>
    </div>
  )
}

