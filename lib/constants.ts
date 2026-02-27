import type { NavItem, Office } from './types'

export const COMPANY_NAME = 'Ganson Building & Civil Engineering Ltd'
export const COMPANY_SHORT = 'Ganson'
export const COMPANY_URL = 'https://ganson.ie'
export const COMPANY_EMAIL = 'info@ganson.ie'
export const COMPANY_FOUNDED = '2004'

export const offices: Office[] = [
  {
    name: 'Dublin Office',
    address: 'Unit 5, Balbriggan Business Park',
    city: 'Balbriggan',
    region: 'Co. Dublin',
    country: 'Ireland',
    countryCode: 'IE',
    phone: '+353 1 841 2622',
    email: 'dublin@ganson.ie',
  },
  {
    name: 'Northern Ireland Office',
    address: '14 Castlewellan Road',
    city: 'Castlewellan',
    region: 'Co. Down',
    country: 'United Kingdom',
    countryCode: 'GB',
    phone: '+44 28 4377 1022',
    email: 'ni@ganson.ie',
  },
]

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
]

export const sectors = [
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'retail', label: 'Retail' },
  { value: 'tourism', label: 'Tourism' },
  { value: 'high-tech', label: 'High-Tech' },
  { value: 'refurbishment', label: 'Refurbishment' },
  { value: 'civil-engineering', label: 'Civil Engineering' },
] as const
