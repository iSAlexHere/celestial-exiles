import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RatesSection } from "@/components/rates-section"
import { ModsSection } from "@/components/mods-section"
import { ConnectSection } from "@/components/connect-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RatesSection />
      <ModsSection />
      <ConnectSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
