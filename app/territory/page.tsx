import Navigation from '@/components/Navigation'
import SystemsSection from '@/components/SystemsSection'
import Footer from '@/components/Footer'

export default function TerritoryPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black"></div>
        <div className="absolute inset-0 stars-background"></div>
      </div>

      <div className="relative z-10 pt-[73px]">
        <Navigation />
        <SystemsSection />
        <Footer />
      </div>
    </div>
  )
}
