import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RatesSection } from "@/components/rates-section"
import { ModsSection } from "@/components/mods-section"
import { RulesSection } from "@/components/rules-section"
import { ConnectSection } from "@/components/connect-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { AmbientBackground } from "@/components/ambient-background"

export default function Home() {
  return (
    <main className="relative">
      <AmbientBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RatesSection />
      <ModsSection />
      <RulesSection />
      <ConnectSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
