export default function CoreValuesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-400 mb-16 text-center">Core Values</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-amber-700/50 rounded-lg bg-black/40 backdrop-blur-sm hover:border-amber-600/80 transition-colors">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">Loyalty</h3>
            <p className="text-gray-300">To the Empire and to each other. We stand united in service of our faction and our members.</p>
          </div>

          <div className="p-8 border border-amber-700/50 rounded-lg bg-black/40 backdrop-blur-sm hover:border-amber-600/80 transition-colors">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">Honor</h3>
            <p className="text-gray-300">Represent our culture and faction with respect, integrity, and diplomacy in all our endeavors.</p>
          </div>

          <div className="p-8 border border-amber-700/50 rounded-lg bg-black/40 backdrop-blur-sm hover:border-amber-600/80 transition-colors">
            <h3 className="text-2xl font-bold text-amber-300 mb-4">Unity</h3>
            <p className="text-gray-300">We are stronger together, and we grow through coordination and mutual support.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
