import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CoreValuesSection from '@/components/CoreValuesSection'
import GameplaySection from '@/components/GameplaySection'
import EmperorSection from '@/components/EmperorSection'
import MemberExpectationsSection from '@/components/MemberExpectationsSection'
import VisionSection from '@/components/VisionSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black"></div>
        <div className="absolute inset-0 stars-background"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-[73px]">
        <Navigation />
        <HeroSection />
        <CoreValuesSection />
        <GameplaySection />
        <EmperorSection />
        <MemberExpectationsSection />
        <VisionSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
