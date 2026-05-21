import type { NewsArticle } from '../types'

export const news: readonly NewsArticle[] = [
  {
    slug: 'meet-the-new-directors',
    title: 'Meet the Directors Leading Our Next Chapter',
    date: '2026-04-25',
    excerpt:
      'Ganson announces a series of key leadership appointments — promoted from within — that strengthen our foundation and position the business for significant growth in the years ahead.',
    content:
      "We are thrilled to announce a series of key leadership appointments that reflect our commitment to excellence and our ambitious vision for the future of Ganson. These appointments will strengthen our foundation and position us for significant growth in the years ahead.\n\nWith continued support from our founders David Rogers and Paul McQuaid, Luke Howard is appointed Managing Director, Paul Campbell as Commercial Director, Brian Duffy as Finance Director, with Noel Hueston and Niall McKenna as Construction Directors across the business.\n\nEach appointment is a promotion from within — a continuation of the philosophy that has shaped Ganson since 2004 and the key to ensuring we consistently deliver the highest standards of safety, quality, and project excellence, now and into the future.\n\nThis announcement is a major milestone for Ganson, and we are confident that this leadership structure will drive our continued growth and evolution within the industry.\n\nWishing the team and the business the very best of luck and ongoing success.",
    image: '/assets/news/director-appointments.webp',
    author: 'Ganson Communications',
    category: 'Company News',
  },
  {
    slug: 'ganson-main-sponsor-ciob-student-challenge-2026',
    title: 'Ganson Announced as Main Sponsor of CIOB Ireland Student Challenge 2026',
    date: '2026-04-22',
    excerpt:
      'Ganson is proud to continue its collaboration with the Chartered Institute of Building (CIOB) as the Main Sponsor of the CIOB Ireland Student Challenge 2026, taking place at SETU Waterford.',
    content:
      "Ganson is proud to continue its collaboration with the Chartered Institute of Building (CIOB) as the Main Sponsor of the CIOB Ireland Student Challenge 2026.\n\nThe annual CIOB Student Challenge is a highly regarded competition that brings together students from colleges across Ireland, providing them with an opportunity to develop their skills, think innovatively, and gain valuable insight into real-world construction scenarios. The initiative plays an important role in supporting the next generation of construction professionals as they begin their careers in the industry.\n\nThe 2026 event is set to take place at South East Technological University (SETU), Waterford, and promises to be another exciting and engaging competition. With less than two months to go, anticipation is building for what is always a standout event in the academic and construction calendar.\n\nGanson is committed to supporting education and industry development, and is delighted to play a key role in fostering emerging talent within the sector.",
    image: '/assets/news/ciob-student-challenge.webp',
    author: 'Ganson Communications',
    category: 'Sponsorship',
  },
  {
    slug: 'dunshaughlin-schools-construction-commences',
    title: 'Construction Commences on New Primary and Post-Primary Schools in Dunshaughlin',
    date: '2026-04-15',
    excerpt:
      'Construction works have commenced on new primary and post-primary school developments in Dunshaughlin, Co. Meath — a major investment in educational infrastructure to support the continued growth of the local community.',
    content:
      "Ganson Building & Civil Engineering is pleased to announce the commencement of construction works on new primary and post-primary school developments in Dunshaughlin, Co. Meath. This significant project represents a major investment in educational infrastructure to support the continued growth of the local community.\n\nThe development is located on a 4.18-hectare site accessed from the R147, south of Dunshaughlin, and will provide high-quality educational facilities with a combined capacity for approximately 1,343 pupils and staff.\n\nThe post-primary school, situated on a 2.40-hectare site, will accommodate 1,000 pupils and 75 staff. The facility will include 37 classrooms, a range of specialist teaching rooms including home economics, science, art, and technology, a PE hall, and a four-classroom Special Educational Needs (SEN) unit. External works will comprise six ball courts and extensive landscaping.\n\nThe primary school, located on a 1.78-hectare site, will provide accommodation for 248 pupils and 20 staff. The two-storey building will include eight classrooms, a two-class SEN base, a general purpose hall, support teaching spaces, and a range of external amenities including junior play areas, secure SEN play areas, a sensory garden, and an outdoor classroom.\n\nBoth developments will include associated infrastructure such as car and bicycle parking, drop-off areas, pedestrian and cycle links, ESB substations, and all related site development works.\n\nGanson Building & Civil Engineering is proud to have been appointed as Main Contractor and looks forward to delivering modern, high-quality educational facilities that will serve the Dunshaughlin community for years to come.",
    image: '/assets/news/dunshaughlin-schools.webp',
    author: 'Ganson Communications',
    category: 'Project Update',
  },
  {
    slug: 'women-in-construction-louth-stadium-visit',
    title: 'Women in Construction Site Visit at Louth Stadium',
    date: '2026-04-04',
    excerpt:
      'Ganson welcomed members of Women in Construction Ireland to our Louth Stadium project for a site visit and seminar — the first cross-border collaboration between Women in Construction Ireland and the Women in Construction Network.',
    content:
      "Ganson was delighted to welcome members of Women in Construction Ireland to our Louth Stadium project last week for a site visit and seminar. The event marked a significant milestone as the first cross-border collaboration between Women in Construction Ireland and the Women in Construction Network.\n\nThe visit provided attendees with a valuable opportunity to experience the project first-hand, with a guided tour of the site showcasing the progress to date and offering insight into the construction works underway. The strong engagement and enthusiasm from participants highlighted the importance of initiatives such as this in encouraging greater female participation across the industry.\n\nThe day also featured an informative seminar session, delivering valuable perspectives and fostering discussion around careers and opportunities in construction. Ganson would like to extend sincere thanks to Lyndsey Thompson for coordinating the event, to our Site Manager Frank and the wider project team for facilitating the visit, and to Jodie Duffy for delivering an excellent seminar. It was also a pleasure to welcome David Rogers on the day.\n\nGanson is proud to support initiatives that promote inclusion and help inspire the next generation of talent within the construction sector.",
    image: '/assets/news/women-in-construction-site-visit.webp',
    author: 'Ganson Communications',
    category: 'Community',
  },
]

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return news.find((article) => article.slug === slug)
}
