export default function GameplaySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">Gameplay Focus</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 border border-amber-700/30 rounded-lg bg-black/40">
            <h3 className="text-xl font-bold text-amber-300 mb-4">Our Operations</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>Maintain and grow influence in Kamchaa and our colonised systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>Engage in trade, logistics, and influence-building missions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>Establish and defend diplomatic alliances with neighboring factions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>Expand responsibly, prioritizing long-term control and system stability</span>
              </li>
            </ul>
          </div>

          <div className="p-8 border border-amber-700/30 rounded-lg bg-black/40">
            <h3 className="text-xl font-bold text-amber-300 mb-4">Rules of Engagement</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>We are a diplomatic group. Combat is permitted, but we do not engage in open hostility without provocation</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>No piracy, griefing, or toxic behavior</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>Coordinate system expansions and BGS efforts with leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3">▸</span>
                <span>Represent the Empire with pride and integrity</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
