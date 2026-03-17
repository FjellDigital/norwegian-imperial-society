import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { mission } from '@/data/mission'

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black"></div>
        <div className="absolute inset-0 stars-background"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">Current Mission</h2>

            {/* Mission Card */}
            <div className="border border-amber-700/40 rounded-lg bg-black/60 overflow-hidden shadow-lg shadow-amber-900/20">

              <div className="p-8 space-y-8">

                {/* Title + Location */}
                <div>
                  <p className="text-amber-600 text-xs uppercase tracking-widest mb-1">Active Mission</p>
                  <h3 className="text-2xl font-bold text-amber-300 mb-3">{mission.title}</h3>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">System</p>
                      {mission.location.systemUrl
                        ? <a href={mission.location.systemUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-semibold hover:text-amber-400 transition-colors">{mission.location.system}</a>
                        : <p className="text-gray-300 font-semibold">{mission.location.system}</p>}
                    </div>
                    <div>
                      <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Starport</p>
                      {mission.location.starportUrl
                        ? <a href={mission.location.starportUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-semibold hover:text-amber-400 transition-colors">{mission.location.starport}</a>
                        : <p className="text-gray-300 font-semibold">{mission.location.starport}</p>}
                    </div>
                  </div>
                </div>

                {/* Image + Objectives */}
                <div className="flex gap-6 items-start">
                  <img
                    src={mission.image}
                    alt="Mission"
                    className="w-40 h-40 object-cover rounded-lg border border-amber-700/30 flex-shrink-0"
                  />
                  <div className="flex-1 space-y-4">
                    <div className="p-4 border border-amber-700/30 rounded-lg bg-amber-900/10">
                      <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">Primary Objective</p>
                      <p className="text-gray-300">{mission.primary}</p>
                    </div>
                    <div className="p-4 border border-amber-700/20 rounded-lg bg-black/40">
                      <p className="text-amber-400/70 text-xs uppercase tracking-widest mb-2">Secondary Objective</p>
                      <p className="text-gray-400">{mission.secondary}</p>
                    </div>
                  </div>
                </div>

                {/* Ways to Contribute */}
                <div>
                  <p className="text-amber-400 text-xs uppercase tracking-widest mb-4">Ways to Contribute</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {mission.contributions.map((c) => (
                      <div key={c.label} className="flex items-start gap-3 p-3 border border-amber-700/20 rounded-lg bg-black/30">
                        <span className="text-amber-500 mt-0.5">▸</span>
                        <div>
                          <p className="text-amber-300 font-semibold text-sm">{c.label}</p>
                          <p className="text-gray-500 text-sm">{c.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
