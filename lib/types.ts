export type Sector =
  | 'healthcare'
  | 'education'
  | 'commercial'
  | 'residential'
  | 'hotel-leisure'

export type ProjectStatus = 'completed' | 'current'

export interface Project {
  slug: string
  title: string
  client: string
  sector: Sector
  status: ProjectStatus
  location: string
  year: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  featured: boolean
  hidden?: boolean
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  qualifications?: string[]
  linkedin?: string
  imageClassName?: string
}

export interface NewsArticle {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image: string
  author: string
  category: string
  video?: string
  videoPoster?: string
}

export interface Policy {
  title: string
  slug: string
  summary: string
  content: string
}

export interface JobListing {
  title: string
  slug: string
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  department: string
  description: string
  responsibilities?: string[]
  requirements: string[]
  benefits: string[]
  posted: string
  salary?: string
}

export interface ClientLogo {
  name: string
  slug: string
  logo: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Office {
  name: string
  address: string
  city: string
  region: string
  country: string
  countryCode: string
  phone: string
  email: string
}
