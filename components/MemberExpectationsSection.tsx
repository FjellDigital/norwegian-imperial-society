export default function MemberExpectationsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">What We Expect</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-amber-700/30 rounded-lg bg-black/40">
            <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="text-amber-400 mr-3 text-2xl">✦</span>
              Participation
            </h3>
            <p className="text-gray-300 leading-relaxed">Be active in the game and/or community. We support both new and veteran players alike. All major updates and operations are coordinated through Discord.</p>
          </div>

          <div className="p-8 border border-amber-700/30 rounded-lg bg-black/40">
            <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
              <span className="text-amber-400 mr-3 text-2xl">✦</span>
              Respect
            </h3>
            <p className="text-gray-300 leading-relaxed">Respect fellow members and allies. Participate in BGS efforts when possible — even small contributions matter. Fly with pride as you represent the Empire.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
