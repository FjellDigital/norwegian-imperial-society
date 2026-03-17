import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Norwegian Imperial Society - Elite Dangerous',
  description: 'A corporate entity devoted to preserving cultural legacy while actively contributing to the strength and stability of the Empire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
