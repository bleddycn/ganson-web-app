import type { JobListing } from '../types'

export const careers: readonly JobListing[] = [
  {
    title: 'Senior Site Engineer',
    slug: 'senior-site-engineer',
    location: 'Dublin',
    type: 'full-time',
    department: 'Site Operations',
    salary: 'Negotiable depending on experience',
    description:
      'Ganson is seeking an experienced Senior Site Engineer to join our site operations team in the Greater Dublin area. The successful candidate will play a key role in the delivery of high-value building and civil engineering projects, ensuring works are carried out to the highest standards of quality, safety, and compliance.',
    responsibilities: [
      'Setting out, levelling, and surveying the site',
      'Ensuring all works are carried out in accordance with drawings, specifications, and building regulations',
      'Coordinating with project managers, subcontractors, and site teams',
      'Monitoring site progress and reporting on programme and quality',
      'Managing QA procedures and site documentation',
      'Ensuring health and safety standards are maintained at all times',
      'Resolving technical issues and liaising with design teams',
    ],
    requirements: [
      'Third-level qualification in Civil Engineering or a related discipline',
      "Minimum 5+ years' experience in a site engineering role with a main contractor",
      'Strong knowledge of construction methods and site practices',
      'Experience with setting out equipment (Total Station, GPS, etc.)',
      'Excellent communication and organisational skills',
      'Ability to work as part of a team and lead site activities',
    ],
    benefits: [
      'Competitive salary',
      'Company vehicle or allowance',
      'Employer pension contribution',
      'Funded professional membership fees',
      'Structured CPD and career development programme',
    ],
    posted: '2026-04-22',
  },
  {
    title: 'Project Manager',
    slug: 'project-manager',
    location: 'Dublin',
    type: 'full-time',
    department: 'Project Management',
    salary: 'Negotiable depending on experience',
    description:
      'Ganson is seeking an experienced Project Manager to join our team in the Greater Dublin area. The successful candidate will lead and manage high-value building and civil engineering projects from inception to completion, ensuring they are delivered on time, within scope, and to the highest standards of quality and safety.',
    responsibilities: [
      'Overall management of building and civil engineering projects from initial planning through to handover',
      'Ensuring projects are delivered on time, within budget, and to the required quality and safety standards',
      'Coordinating and managing project teams, subcontractors, and site activities',
      'Liaising and communicating effectively with clients, design teams, and stakeholders',
      'Monitoring project progress, implementing schedules, and managing resources',
      'Identifying and mitigating project risks and handling contract variations',
    ],
    requirements: [
      'Third-level qualification in Construction Management, Civil Engineering, or a related discipline',
      "Minimum 5+ years' experience in a project management role within building and civil engineering",
      'Proven track record of delivering large-scale, high-value projects',
      'Strong knowledge of construction methods, materials, and regulations',
      'Excellent leadership, communication, and organisational skills',
      'Proficiency in project management software (e.g. MS Project, Primavera)',
      'Good presentation and communication skills essential',
    ],
    benefits: [
      'Competitive salary',
      'Company vehicle or allowance',
      'Employer pension contribution',
      'Funded professional membership fees',
      'Structured CPD and career development programme',
    ],
    posted: '2026-04-22',
  },
  {
    title: 'Quantity Surveyor',
    slug: 'quantity-surveyor',
    location: 'Wicklow',
    type: 'full-time',
    department: 'Commercial',
    salary: 'Negotiable depending on experience',
    description:
      'Ganson Building & Civil Engineering are seeking a Project Quantity Surveyor to join our team due to increased workload. The role will be primarily based on our site in Wicklow, working closely with project and commercial teams to manage the financial aspects of construction projects.',
    responsibilities: [
      'Issuing subcontractor enquiries and then generating comparisons for review by Directors',
      'Preparing progress applications and cost reports',
      'Reporting to management on the financial progression of projects',
      'Responsible for project cost controls',
      'Actively work with Project Managers relating to contract variations',
      'Final Account negotiations etc',
    ],
    requirements: [
      '3rd level Qualification in Quantity Surveying/Construction economics',
      '3+ years experience working with a top 50 Main Building Contractor',
      'Must have a good understanding of the Irish Construction market',
      'Strong operational skills and an attention to detail',
      'Good solid background with an established main contractor',
      'Good presentation and communication skills essential',
    ],
    benefits: [
      'Competitive salary',
      'Company vehicle',
      'Employer pension contribution',
      'Funded professional membership fees',
      'Structured CPD and career development programme',
    ],
    posted: '2026-04-22',
  },
  {
    title: 'Graduate Quantity Surveyor',
    slug: 'graduate-quantity-surveyor',
    location: 'Wicklow',
    type: 'full-time',
    department: 'Commercial',
    salary: 'Graduate Programme — salary outlined at interview stage',
    description:
      'Ganson is offering a graduate position for a recently qualified Quantity Surveyor to join our commercial team. This is an outstanding opportunity to gain hands-on experience across a range of building and civil engineering projects, with structured mentoring, CPD support, and a clear pathway for career progression. You will gain exposure to a variety of projects, sectors, and construction methodologies. Ganson Building & Civil Engineering is committed to developing future talent and will invest in training and mentorship to support graduates in becoming highly skilled professionals within the industry.',
    responsibilities: [
      'Issuing subcontractor enquiries and then generating comparisons for review by Directors',
      'Preparing progress applications and cost reports',
      'Reporting to management on the financial progression of projects',
      'Responsible for project cost controls',
      'Actively work with Project Managers relating to contract variations',
      'Final Account negotiations etc',
    ],
    requirements: [
      '3rd level Qualification in Quantity Surveying/Construction economics',
      'Must understand the Irish Construction market',
      'Strong operational skills and an attention to detail',
      'Good presentation and communication skills essential',
    ],
    benefits: [
      'Competitive salary',
      'Employer pension contribution',
      'Funded professional membership fees',
      'Structured CPD and career development programme',
    ],
    posted: '2026-04-22',
  },
]

export function getCareerBySlug(slug: string): JobListing | undefined {
  return careers.find((career) => career.slug === slug)
}
