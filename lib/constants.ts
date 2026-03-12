import type { NavItem, Office } from './types'

export const COMPANY_NAME = 'Ganson Building & Civil Engineering Ltd'
export const COMPANY_SHORT = 'Ganson'
export const COMPANY_URL = 'https://ganson.ie'
export const COMPANY_EMAIL = 'info@ganson.ie'
export const COMPANY_FOUNDED = '2004'

export const offices: Office[] = [
  {
    name: 'Dublin Office',
    address: 'Unit 19, Balbriggan Business Park',
    city: 'Balbriggan',
    region: 'Co. Dublin',
    country: 'Ireland',
    countryCode: 'IE',
    phone: '+353 (0)1 690 5716',
    email: 'info@ganson.ie',
  },
  {
    name: 'Northern Ireland Office',
    address: 'Clarmont Avenue',
    city: 'Castlewellan',
    region: 'Co. Down, BT31 9BX',
    country: 'United Kingdom',
    countryCode: 'GB',
    phone: '+44 (0)28437 71022',
    email: 'info@gansonuk.co.uk',
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
