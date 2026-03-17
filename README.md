# Norwegian Imperial Society - Official Homepage

A Next.js powered homepage for the Norwegian Imperial Society guild in Elite: Dangerous.

## Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your environment variables (copy from `.env.example`):
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Discord invite link:
```
NEXT_PUBLIC_DISCORD_LINK=https://discord.gg/your-invite-code
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── HeroSection.tsx     # Hero section with guild info
│   ├── CoreValuesSection.tsx
│   ├── GameplaySection.tsx
│   ├── MemberExpectationsSection.tsx
│   ├── SystemsSection.tsx  # Territory table
│   ├── VisionSection.tsx
│   ├── CTASection.tsx      # Call-to-action with Discord button
│   └── Footer.tsx
├── public/                 # Static assets (images, etc.)
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Adding New Pages

To add a new page (e.g., `/about`):

1. Create a new file: `app/about/page.tsx`
2. Use the same layout structure as `page.tsx`
3. Import and use components as needed

Example:
```tsx
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black"></div>
        <div className="absolute inset-0 stars-background"></div>
      </div>
      <div className="relative z-10">
        <Navigation />
        {/* Your content here */}
        <Footer />
      </div>
    </div>
  )
}
```

## Deployment

This project is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Set environment variables in Vercel dashboard (copy from `.env.example`)
5. Deploy!

For more details: https://vercel.com/docs/frameworks/nextjs

## Updating Content

- **Hero section**: Edit `components/HeroSection.tsx`
- **Core Values**: Edit `components/CoreValuesSection.tsx`
- **Gameplay info**: Edit `components/GameplaySection.tsx`
- **Systems table**: Edit `components/SystemsSection.tsx`
- **Discord link**: Update `NEXT_PUBLIC_DISCORD_LINK` in `.env.local`

## Customization

### Colors
The site uses amber/gold colors for the Imperial aesthetic. To change the color scheme, update the Tailwind classes in the components. Tailwind color palette: https://tailwindcss.com/docs/customizing-colors

### Images
Replace placeholder divs with actual images:
- Hero banner in `HeroSection.tsx`
- Gameplay screenshot in `GameplaySection.tsx`

### Fonts
By default, uses system fonts. To add custom fonts, modify `tailwind.config.ts` and import in `globals.css`

## License

[Add your license here]
