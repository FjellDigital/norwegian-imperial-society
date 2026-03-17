export default function Footer() {
  const discordLink = process.env.NEXT_PUBLIC_DISCORD_LINK || 'https://discord.gg/placeholder'

  return (
    <footer className="border-t border-amber-700/30 bg-black/50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
        <p className="mb-4">Norwegian Imperial Society - Elite: Dangerous Player Guild</p>
        <p className="mb-4">Founded: 3304</p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://inara.cz/elite/squadron/15434/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400/70 hover:text-amber-400 transition-colors"
          >
            Inara
          </a>
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400/70 hover:text-amber-400 transition-colors"
          >
            Discord
          </a>
        </div>
        <p className="text-xs text-gray-500">
          Elite: Dangerous is a trademark of Frontier Developments PLC.
        </p>
      </div>
    </footer>
  )
}
