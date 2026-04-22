import type { NavItem, Office } from './types'

export const COMPANY_NAME = 'Ganson Building & Civil Engineering Ltd'
export const COMPANY_SHORT = 'Ganson'
export const COMPANY_URL = 'https://ganson.ie'
export const COMPANY_EMAIL = 'info@ganson.ie'
export const COMPANY_FOUNDED = '2003'

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
    name: 'London Office',
    address: 'Estra House, Station Approach, Streatham',
    city: 'London',
    region: 'SW16 6HW',
    country: 'United Kingdom',
    countryCode: 'GB',
    phone: '+44 (0)20 3961 6560',
    email: 'info@ganson.co.uk',
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
  { value: 'residential', label: 'Residential' },
  { value: 'hotel-leisure', label: 'Hotel, Leisure & Student' },
] as const
