import Image from 'next/image'

export default function EmperorSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">Our Emperor</h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Portrait */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="relative w-64 rounded-lg overflow-hidden border border-amber-700/40 shadow-lg shadow-amber-900/30">
              <Image
                src="https://static.wikia.nocookie.net/elite-dangerous/images/e/e6/Arissa_Lavigny-Duval.png/revision/latest?cb=20170305012610"
                alt="Emperor Arissa Lavigny-Duval"
                width={256}
                height={320}
                className="object-cover w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <p className="text-amber-400 font-bold text-sm">Arissa Lavigny-Duval</p>
                <p className="text-gray-400 text-xs">16th Emperor of the Empire</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-amber-300 mb-1">Arissa Lavigny-Duval</h3>
              <p className="text-amber-600 text-sm uppercase tracking-widest">16th Emperor of the Empire of Achenar</p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Born in 3243, Arissa Lavigny-Duval was raised as the daughter of Prince Aristide de Lavigny. Following
              the Prince's death, DNA evidence revealed her true heritage — she is the illegitimate daughter of
              Emperor Hengist Duval himself. After Hengist Duval's assassination in 3301, Arissa used this revelation
              to secure her rightful place in the Imperial line of succession, ascending to become the 16th Emperor
              of the Empire of Achenar.
            </p>

            <p className="text-gray-300 leading-relaxed">
              A principled and uncompromising ruler, Arissa is a devoted believer in the institutions of the Empire
              and the Imperial way of life. She is intolerant of corruption and holds the rule of law above all else,
              earning both the respect of her subjects and the loyalty of Imperial commanders across the galaxy.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 border border-amber-700/30 rounded-lg bg-black/40">
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Born</p>
                <p className="text-gray-300 font-semibold">3243</p>
              </div>
              <div className="p-4 border border-amber-700/30 rounded-lg bg-black/40">
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Ascended</p>
                <p className="text-gray-300 font-semibold">3301</p>
              </div>
              <div className="p-4 border border-amber-700/30 rounded-lg bg-black/40">
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Allegiance</p>
                <p className="text-gray-300 font-semibold">Empire of Achenar</p>
              </div>
              <div className="p-4 border border-amber-700/30 rounded-lg bg-black/40">
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">Our Pledge</p>
                <p className="text-gray-300 font-semibold">A. Lavigny-Duval</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-amber-600 pl-5 italic text-gray-400">
              "The Empire endures not through force alone, but through the strength of its institutions, the loyalty
              of its subjects, and the integrity of those who lead."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
