import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <div id="temoignages">
        <TestimonialsSection />
      </div>
    </>
  )
}
