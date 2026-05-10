import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { StatsSection } from "@/components/stats-section"

export default function CabinetPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <WhyChooseUs />
      <StatsSection />
    </div>
  )
}
