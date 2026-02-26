import type { JobListing } from '../types'

export const careers: readonly JobListing[] = [
  {
    title: 'Senior Site Engineer',
    slug: 'senior-site-engineer',
    location: 'Balbriggan, Co. Dublin',
    type: 'full-time',
    department: 'Site Operations',
    description:
      'We are seeking an experienced Senior Site Engineer to join our team on a high-profile retail development in Balbriggan. The successful candidate will be responsible for setting out, quality assurance, and coordinating subcontractor works on a busy live site. This is an excellent opportunity for a motivated engineer looking to take the next step in their career with a progressive, growing contractor.',
    requirements: [
      'Degree in Civil Engineering, Construction Management, or related discipline',
      "Minimum 5 years' post-graduate experience in a site engineering role on building projects",
      'Strong knowledge of setting-out procedures using total station and GPS equipment',
      'Experience with reinforced-concrete frame construction and formwork systems',
      'Proficient in AutoCAD and Microsoft Office suite',
      'Excellent understanding of health and safety legislation and CDM responsibilities',
      'Full clean driving licence',
    ],
    benefits: [
      'Competitive salary commensurate with experience',
      'Company vehicle or car allowance',
      'Pension scheme with employer contribution',
      'Income protection and death-in-service benefit',
      'Continuous professional development support and funded training',
      '25 days annual leave plus public holidays',
    ],
    posted: '2024-05-10',
  },
  {
    title: 'Quantity Surveyor',
    slug: 'quantity-surveyor',
    location: 'Castlewellan, Co. Down',
    type: 'full-time',
    department: 'Commercial',
    description:
      'Ganson is recruiting a Quantity Surveyor to join our commercial team, based primarily on our education projects in Northern Ireland. You will work closely with the Contracts Manager and Commercial Director to manage all financial aspects of assigned projects, from procurement and cost reporting through to final account negotiation. This role offers excellent exposure to public-sector frameworks and complex building projects.',
    requirements: [
      'Degree in Quantity Surveying or equivalent qualification',
      "Minimum 3 years' post-graduate experience in a contractor QS role",
      'Experience with NEC3/NEC4 and JCT forms of contract',
      'Strong skills in measurement, valuation, and cost reporting',
      'Experience preparing and assessing subcontractor packages',
      'Proficiency in CATO, Cubit, or similar measurement software',
      'Membership of RICS or SCSI (or working towards)',
    ],
    benefits: [
      'Competitive salary with annual review',
      'Company vehicle or car allowance',
      'Employer pension contribution',
      'Funded professional membership fees (RICS/SCSI)',
      'Structured CPD and career development programme',
    ],
    posted: '2024-04-22',
  },
  {
    title: 'Project Manager',
    slug: 'project-manager',
    location: 'Dublin',
    type: 'full-time',
    department: 'Project Management',
    description:
      'We are looking for an accomplished Project Manager to lead the delivery of a major commercial fit-out project in Dublin. The role requires strong leadership, client-facing communication skills, and a proven track record of managing projects valued at \u20ac10m or above to successful completion. You will have full responsibility for programme, quality, cost, and safety performance on your assigned project.',
    requirements: [
      'Degree in Civil Engineering, Construction Management, or related discipline',
      "Minimum 8 years' experience in construction, with at least 3 years in a project management role",
      'Demonstrated experience delivering projects valued at \u20ac10m+ in commercial, healthcare, or education sectors',
      'Strong knowledge of contract administration under public works contracts or NEC forms',
      'Excellent leadership and team management skills',
      'Experience managing client and design team relationships',
      'Chartered status (CEng, MCIOB, or equivalent) preferred',
    ],
    benefits: [
      'Highly competitive salary and performance-related bonus',
      'Company vehicle',
      'Pension scheme with generous employer contribution',
      'Private health insurance',
      'Income protection and death-in-service benefit',
      '25 days annual leave plus public holidays',
    ],
    posted: '2024-06-03',
  },
  {
    title: 'Health & Safety Officer',
    slug: 'health-and-safety-officer',
    location: 'Various Locations',
    type: 'full-time',
    department: 'Health & Safety',
    description:
      "Ganson is expanding its health and safety team and is seeking a qualified Health & Safety Officer to support our growing project portfolio. Reporting to the Health & Safety Director, you will be responsible for implementing and monitoring safety management systems across multiple sites, conducting audits and inspections, and providing practical safety advice to project teams. Travel to sites across Ireland and Northern Ireland is a core part of this role.",
    requirements: [
      'NEBOSH General Certificate or equivalent health and safety qualification',
      "Minimum 3 years' experience as a Health & Safety Officer in the construction industry",
      'Working knowledge of the Safety, Health and Welfare at Work Act 2005 and CDM Regulations (NI)',
      'Experience in conducting site safety audits, inspections, and accident investigations',
      'Certified PSCS or working towards certification',
      'Strong communication and report-writing skills',
      'Full clean driving licence and willingness to travel across Ireland and Northern Ireland',
    ],
    benefits: [
      'Competitive salary',
      'Company vehicle',
      'Employer pension contribution',
      'Funded professional development and qualifications (e.g., NEBOSH Diploma)',
      'Graduate membership of IOSH supported',
    ],
    posted: '2024-05-28',
  },
  {
    title: 'Graduate Civil Engineer',
    slug: 'graduate-civil-engineer',
    location: 'Balbriggan, Co. Dublin',
    type: 'full-time',
    department: 'Site Operations',
    description:
      "Ganson is offering a graduate position for a recently qualified civil engineer to join our site operations team. This is an outstanding opportunity to gain hands-on experience across a range of building and civil engineering projects, with structured mentoring, CPD support, and a clear pathway to chartership. You will rotate across projects in the greater Dublin area, gaining exposure to different sectors and construction methodologies.",
    requirements: [
      'Honours degree (Level 8) in Civil Engineering or Structural Engineering',
      'Strong academic record with a particular interest in construction and project delivery',
      'Familiarity with AutoCAD, Revit, or similar design software',
      'Good understanding of construction materials, methods, and health & safety principles',
      'Excellent communication and teamwork skills',
      'Full clean driving licence',
    ],
    benefits: [
      'Competitive graduate salary with structured annual progression',
      'Structured graduate development programme with mentoring',
      'Support towards Chartered Engineer status (Engineers Ireland)',
      'Funded professional subscriptions and training courses',
      'Pension scheme from commencement',
      '24 days annual leave plus public holidays',
    ],
    posted: '2024-06-15',
  },
]

export function getCareerBySlug(slug: string): JobListing | undefined {
  return careers.find((career) => career.slug === slug)
}
