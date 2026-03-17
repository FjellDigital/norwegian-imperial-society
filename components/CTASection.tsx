export default function CTASection() {
  const discordLink = process.env.NEXT_PUBLIC_DISCORD_LINK || 'https://discord.gg/placeholder'

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-400 mb-6">Ready to Join?</h2>
        <p className="text-lg text-gray-300 mb-12">
          Are you ready to serve the Empire? Join our Discord to learn more about membership and get started today.
        </p>

        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-600/50"
        >
          Join Our Discord
        </a>
      </div>
    </section>
  )
}
