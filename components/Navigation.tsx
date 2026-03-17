'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const menuItems = [
  { label: 'Mission', href: '/mission' },
  { label: 'Territory', href: '/territory' },
  { label: 'Members', href: '/members' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-amber-700/30 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <div className="cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              src="https://i.imgur.com/9ihlPE2.png"
              alt="Norwegian Imperial Society Logo"
              width={240}
              height={55}
              priority
            />
          </div>
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-400 hover:text-amber-300 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-3 w-48 border border-amber-700/30 bg-black/90 backdrop-blur-sm shadow-lg shadow-black/50 rounded-sm">
              <div className="flex flex-col py-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 text-amber-300 hover:text-amber-400 hover:bg-amber-900/20 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
