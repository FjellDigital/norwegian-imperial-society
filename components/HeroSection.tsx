import Image from 'next/image'

export default function HeroSection() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white tracking-wider">
          Norwegian Imperial Society
        </h1>
        <p className="text-2xl text-amber-300 mb-8 font-light italic">
          Preserving Legacy. Expanding Influence. United in Empire.
        </p>

        {/* Guild Banner */}
        <div className="mb-12 flex justify-center">
          <Image
            src="https://i.imgur.com/SXj2mcq.png"
            alt="Norwegian Imperial Society Guild Banner"
            width={400}
            height={300}
            priority
            className="rounded-lg border border-amber-700/50"
          />
        </div>

        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A corporate entity founded by descendants of Norway's ancient Earth heritage. We are devoted to preserving our cultural legacy while actively contributing to the strength and stability of the Empire.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}
