'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const members = [
  { name: 'CMDR Melsom', rank: 'President' },
  { name: 'CMDR S1rshadez', rank: 'Coordinator' },
  { name: 'CMDR Thehdford', rank: 'Coordinator' },
  { name: 'CMDR Sniperwiper', rank: 'Divisional Leader' },
  { name: 'CMDR Beregor', rank: 'Employee' },
  { name: 'CMDR Cadrir', rank: 'Employee' },
  { name: 'CMDR Desibel', rank: 'Employee' },
  { name: 'CMDR Dragonstalker', rank: 'Employee' },
  { name: 'CMDR Duane Chappman', rank: 'Employee' },
  { name: 'CMDR Finn Terje', rank: 'Employee' },
  { name: 'CMDR Klaix', rank: 'Employee' },
  { name: 'CMDR Mestersatan666', rank: 'Employee' },
  { name: 'CMDR Nikoma', rank: 'Employee' },
  { name: 'CMDR Prohack31', rank: 'Employee' },
  { name: 'CMDR Slyvifox', rank: 'Employee' },
]

type SortKey = 'id' | 'name' | 'rank'
type SortDir = 'asc' | 'desc'

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className={`ml-1 inline-block transition-colors ${active ? 'text-amber-400' : 'text-amber-700'}`}>
      {active && dir === 'desc' ? '↓' : '↑'}
    </span>
  )
}

export default function MembersPage() {
  const [sortKey, setSortKey] = useState<SortKey>('id')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const numbered = members.map((m, i) => ({ ...m, id: i + 1 }))

  const sorted = [...numbered].sort((a, b) => {
    if (sortKey === 'id') return sortDir === 'asc' ? a.id - b.id : b.id - a.id
    const cmp = a[sortKey].localeCompare(b[sortKey])
    return sortDir === 'asc' ? cmp : -cmp
  })

  const th = (label: string, key: SortKey) => (
    <th
      className="px-6 py-4 text-left text-amber-300 font-bold cursor-pointer select-none hover:text-amber-200 transition-colors"
      onClick={() => handleSort(key)}
    >
      {label}
      <SortIcon active={sortKey === key} dir={sortDir} />
    </th>
  )

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-black"></div>
        <div className="absolute inset-0 stars-background"></div>
      </div>

      <div className="relative z-10">
        <Navigation />

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">Member Roster</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-amber-700/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-amber-900/30 border-b border-amber-700/30">
                    {th('#', 'id')}
                    {th('Commander', 'name')}
                    {th('Rank', 'rank')}
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-700/20">
                  {sorted.map((member) => (
                    <tr key={member.name} className="hover:bg-amber-900/10 transition-colors">
                      <td className="px-6 py-4 text-gray-500 text-sm">{member.id}</td>
                      <td className="px-6 py-4 text-gray-300">{member.name}</td>
                      <td className="px-6 py-4 text-amber-400/80">{member.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-gray-600 text-sm mt-6">{members.length} members</p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
