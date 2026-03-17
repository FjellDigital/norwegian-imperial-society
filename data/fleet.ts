export interface Ship {
  image: string
  name: string
  nameUrl: string
  location: string
  locationUrl: string
}

export const fleet: Ship[] = [
  {
    image: 'https://inara.cz/data/stations/612/612549x2828.jpg',
    name: '	INV Oseberg (JBN-TQF)',
    nameUrl: 'https://inara.cz/elite/station/612549/',
    location: '	Col 285 Sector TI-T d3-103 - Telemark Starport',
    locationUrl: 'https://www.edsm.net/en/system/id/1791120/name/Col+285+Sector+TI-T+d3-103',
  },
]
