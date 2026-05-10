import { ContactSection } from "@/components/contact-section"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/placeholder.jpg?height=1080&width=1920&query=modern%20business%20communication%20minimalist"
            alt="Contact"
            fill
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Contact</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight">
            Engageons le <br />
            <span className="italic font-light text-accent">dialogue stratégique.</span>
          </h1>
        </div>
      </section>

      <ContactSection />

      {/* Map or Secondary Info */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="bg-secondary/50 p-12 lg:p-20 text-center border border-border">
              <h2 className="font-serif text-3xl text-primary mb-6">Notre Siège Social</h2>
              <p className="text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
                Boulevard du Bord de Mer, Immeuble Premium, <br />
                Libreville, République Gabonaise.
              </p>
              <div className="h-96 w-full bg-border/50 relative overflow-hidden grayscale border border-primary/10">
                <Image
                  src="/placeholder.jpg?height=600&width=1200&query=map%20libreville%20gabon%20minimalist"
                  alt="Localisation"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary p-4 shadow-2xl">
                    <p className="text-white text-xs font-bold uppercase tracking-widest">Cabinet 2R Conseil</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  )
}

