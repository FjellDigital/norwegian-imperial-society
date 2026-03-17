import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { fleet } from '@/data/fleet'

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black"></div>
        <div className="absolute inset-0 stars-background"></div>
      </div>

      <div className="relative z-10 pt-[73px]">
        <Navigation />

        {/* Hero */}
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
          <img
            src="https://inara.cz/data/gallery/306/306337x1489.jpg"
            alt="NIS Fleet"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center pb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-400 drop-shadow-lg">Our Fleet</h1>
          </div>
        </div>

        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fleet.map((ship) => (
                <div key={ship.name} className="border border-amber-700/40 rounded-lg bg-black/60 shadow-lg shadow-amber-900/20 overflow-hidden">

                  {/* Ship Image */}
                  <div className="aspect-square w-full overflow-hidden border-b border-amber-700/30">
                    <img
                      src={ship.image}
                      alt={ship.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Ship Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <p className="text-amber-600 text-xs uppercase tracking-widest mb-1">Vessel</p>
                      {ship.nameUrl
                        ? <a href={ship.nameUrl} target="_blank" rel="noopener noreferrer" className="text-amber-300 font-bold text-lg hover:text-amber-400 transition-colors">{ship.name}</a>
                        : <p className="text-amber-300 font-bold text-lg">{ship.name}</p>}
                    </div>

                    <div>
                      <p className="text-amber-600 text-xs uppercase tracking-widest mb-1">Location</p>
                      {ship.locationUrl
                        ? <a href={ship.locationUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors text-sm">{ship.location}</a>
                        : <p className="text-gray-300 text-sm">{ship.location}</p>}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
