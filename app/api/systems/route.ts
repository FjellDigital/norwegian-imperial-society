import { NextResponse } from 'next/server'

const FACTION_NAME = 'Norwegian Imperial Society'

const SYSTEM_TYPES: Record<string, string> = {
  'Kamchaa': 'Capital',
  'Col 285 Sector TI-T d3-103': 'Headquarters',
}

const MONITORED_SYSTEMS = [
  'Col 285 Sector TI-T d3-103',
  'Shui Wei Sector AQ-X b1-7',
  'ICZ YJ-Z b5',
  'Col 285 Sector MR-M c7-9',
  'Col 285 Sector MR-M c7-26',
  'LHS 1584',
  'Kamchaa',
  'Col 285 Sector YI-Z b14-4',
  'Col 285 Sector XX-A b14-5',
  'Col 285 Sector ZI-Z b14-2',
  'Col 285 Sector MR-M c7-15',
  'Col 285 Sector ZI-Z b14-6',
  'Col 285 Sector VC-B b14-2',
  'Col 285 Sector MR-M c7-10',
  'Col 285 Sector MR-M c7-16',
  'Col 285 Sector MR-M c7-14',
  'Col 285 Sector BE-Z b14-5',
  'HIP 27978',
  'Col 285 Sector BE-Z b14-4',
  'HIP 26553',
  'Col 285 Sector CZ-Y b14-0',
  'Col 285 Sector MR-M c7-17',
  'ICZ SI-B b0',
]

interface EDSMFaction {
  name: string
  influence: number
  influenceHistory?: Record<string, number>
  activeStates: { state: string }[]
}

interface EDSMResponse {
  name: string
  url?: string
  controllingFaction?: { name: string }
  factions?: EDSMFaction[]
}

interface SpanshResult {
  controlling_power?: string
  power_state?: string
}

async function fetchSystem(systemName: string) {
  const encoded = encodeURIComponent(systemName)

  const [edsmRes, spanshRes] = await Promise.all([
    fetch(`https://www.edsm.net/api-system-v1/factions?systemName=${encoded}&showHistory=1`, {
      next: { revalidate: 300 },
    }),
    fetch('https://spansh.co.uk/api/systems/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'NIS-Website/1.0' },
      body: JSON.stringify({
        filters: { name: { value: systemName, comparison: '=' } },
        size: 1,
        page: 0,
      }),
      next: { revalidate: 300 },
    }),
  ])

  if (!edsmRes.ok) return null
  const edsm: EDSMResponse = await edsmRes.json()
  if (!edsm.factions) return null

  const faction = edsm.factions.find(
    (f) => f.name.toLowerCase() === FACTION_NAME.toLowerCase()
  )
  if (!faction) return null

  let power: string | null = null
  let powerState: string | null = null
  if (spanshRes.ok) {
    const spansh = await spanshRes.json()
    const s: SpanshResult = spansh?.results?.[0] ?? {}
    power = s.controlling_power ?? null
    powerState = s.power_state ?? null
  }

  // Calculate influence delta from last two history entries
  let influenceDelta: number | null = null
  if (faction.influenceHistory) {
    const entries = Object.entries(faction.influenceHistory)
      .map(([ts, val]) => ({ ts: parseInt(ts), val }))
      .sort((a, b) => a.ts - b.ts)
    if (entries.length >= 2) {
      influenceDelta = (entries[entries.length - 1].val - entries[entries.length - 2].val) * 100
    }
  }

  return {
    name: edsm.name,
    url: edsm.url ?? null,
    type: SYSTEM_TYPES[edsm.name] ?? 'Outpost',
    influence: `${(faction.influence * 100).toFixed(1)}%`,
    influenceDelta: influenceDelta !== null ? parseFloat(influenceDelta.toFixed(2)) : null,
    state: faction.activeStates?.length > 0
      ? faction.activeStates.map((s) => s.state).join(', ')
      : 'None',
    controlling: edsm.controllingFaction?.name?.toLowerCase() === FACTION_NAME.toLowerCase(),
    power,
    powerState,
  }
}

export async function GET() {
  const results = await Promise.all(MONITORED_SYSTEMS.map(fetchSystem))
  const systems = results.filter(Boolean)
  return NextResponse.json({ systems })
}
