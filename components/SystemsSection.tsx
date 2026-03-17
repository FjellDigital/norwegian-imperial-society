'use client'

import { useEffect, useState } from 'react'

interface System {
  name: string
  url: string | null
  type: string
  influence: string | null
  state: string
  controlling: boolean
  power: string | null
  powerState: string | null
}

type SortKey = keyof System
type SortDir = 'asc' | 'desc'

function SortIcon({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className={`ml-1 inline-block transition-colors ${active ? 'text-amber-400' : 'text-amber-700'}`}>
      {active && dir === 'desc' ? '↓' : '↑'}
    </span>
  )
}

function sortSystems(systems: System[], key: SortKey, dir: SortDir): System[] {
  return [...systems].sort((a, b) => {
    let av = a[key] ?? ''
    let bv = b[key] ?? ''

    // Sort influence numerically
    if (key === 'influence') {
      const an = parseFloat(String(av)) || 0
      const bn = parseFloat(String(bv)) || 0
      return dir === 'asc' ? an - bn : bn - an
    }

    // Sort booleans
    if (typeof av === 'boolean') {
      return dir === 'asc' ? (av ? -1 : 1) : (av ? 1 : -1)
    }

    const cmp = String(av).localeCompare(String(bv))
    return dir === 'asc' ? cmp : -cmp
  })
}

export default function SystemsSection() {
  const [systems, setSystems] = useState<System[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sortKey, setSortKey] = useState<SortKey>('type')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  useEffect(() => {
    fetch('/api/systems')
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error)
        else setSystems(data.systems)
      })
      .catch(() => setError('Failed to load systems'))
      .finally(() => setLoading(false))
  }, [])

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  const sorted = sortSystems(systems, sortKey, sortDir)

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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">Our Territory</h2>

        {loading && (
          <p className="text-center text-amber-400/60 animate-pulse">Loading live data from EDSM...</p>
        )}

        {error && (
          <p className="text-center text-red-400">Failed to load systems: {error}</p>
        )}

        {!loading && !error && systems.length === 0 && (
          <p className="text-center text-gray-400">No systems found.</p>
        )}

        {!loading && !error && systems.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border border-amber-700/30 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-amber-900/30 border-b border-amber-700/30">
                  {th('System', 'name')}
                  {th('Type', 'type')}
                  {th('Control', 'controlling')}
                  {th('State', 'state')}
                  {th('Influence', 'influence')}
                  {th('Power', 'power')}
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-700/20">
                {sorted.map((system) => (
                  <tr key={system.name} className="hover:bg-amber-900/10 transition-colors">
                    <td className="px-6 py-4">
                      {system.url
                        ? <a href={system.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">{system.name}</a>
                        : <span className="text-gray-300">{system.name}</span>}
                    </td>
                    <td className="px-6 py-4 text-amber-400/80">{system.type}</td>
                    <td className="px-6 py-4">
                      {system.controlling
                        ? <span className="text-amber-400 font-semibold">Controlling</span>
                        : <span className="text-gray-500">Present</span>}
                    </td>
                    <td className="px-6 py-4 text-gray-300">{system.state}</td>
                    <td className="px-6 py-4 text-gray-400">{system.influence ?? '—'}</td>
                    <td className="px-6 py-4">
                      {system.power
                        ? <span className="text-gray-300">{system.power} <span className="text-gray-500 text-sm">({system.powerState})</span></span>
                        : <span className="text-gray-500">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
