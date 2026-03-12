import type { Project, Sector } from '../types'

export const projects: readonly Project[] = [
  {
    slug: 'st-vincents-hospital-new-wing',
    title: "St. Vincent's University Hospital — New Wing Extension",
    client: 'HSE',
    sector: 'healthcare',
    status: 'completed',
    value: '€14.5m',
    location: 'Dublin',
    year: '2023',
    description:
      "A major acute care wing extension at St. Vincent's University Hospital, delivering state-of-the-art patient facilities across four floors. The project was completed on an occupied, fully operational hospital campus with zero disruption to critical services.",
    longDescription:
      "Ganson was appointed by the HSE to deliver a critical new wing extension at St. Vincent's University Hospital in south Dublin. The four-storey structure encompasses 4,200 square metres of new clinical space, including a 32-bed acute medical assessment unit, expanded outpatient consultation suites, and a dedicated ambulatory care centre. The design incorporates the latest standards in infection prevention, with HEPA-filtered ventilation throughout and antimicrobial surface finishes.\n\nWorking on an occupied hospital campus presented significant logistical challenges. Our team coordinated closely with hospital management to maintain uninterrupted access to the emergency department and adjacent wards at all times. Phased construction sequencing, noise-restricted working hours, and dedicated logistics corridors ensured that patient care was never compromised.\n\nThe project was handed over two weeks ahead of the contractual completion date and received commendation from the HSE's estates division for exemplary standards of safety and stakeholder communication throughout the 18-month build programme.",
    image: '/assets/projects/project-1.svg',
    gallery: [
      '/assets/projects/project-1.svg',
      '/assets/projects/project-2.svg',
      '/assets/projects/project-3.svg',
    ],
    featured: true,
    completionDate: '2023-11-15',
  },
  {
    slug: 'castlewellan-community-college',
    title: 'Castlewellan Community College',
    client: 'Education Authority NI',
    sector: 'education',
    status: 'current',
    value: '€8.5m',
    location: 'Castlewellan, Co. Down',
    year: '2024',
    description:
      'A new-build post-primary school designed for 600 pupils, featuring specialist STEM laboratories, a sports hall, and landscaped outdoor learning areas. Delivered to Passivhaus energy performance standards.',
    longDescription:
      "Ganson delivered this flagship post-primary school on behalf of the Education Authority Northern Ireland as part of the Schools Enhancement Programme. The 5,500 square metre facility accommodates 600 pupils and includes 24 general-purpose classrooms, four specialist STEM laboratories, a technology suite, a full-size sports hall with spectator seating, and a performing arts studio.\n\nThe building was designed and constructed to Passivhaus energy performance standards, making it one of the most energy-efficient schools in Northern Ireland. The highly insulated building envelope, triple-glazed windows, and mechanical ventilation with heat recovery achieve annual energy savings of over 70% compared to conventional school buildings. Externally, the project included an all-weather sports pitch, landscaped courtyards, and dedicated cycle storage to encourage sustainable travel.\n\nCompleted in March 2024, the school opened its doors for the start of the new academic year. The project was recognised at the Royal Society of Ulster Architects Awards for its contribution to community infrastructure in the Mournes area.",
    image: '/assets/projects/project-2.svg',
    gallery: [
      '/assets/projects/project-2.svg',
      '/assets/projects/project-3.svg',
      '/assets/projects/project-4.svg',
    ],
    featured: true,
    completionDate: '2024-03-22',
  },
  {
    slug: 'balbriggan-town-centre-retail',
    title: 'Balbriggan Town Centre Retail Development',
    client: 'Cairn Homes',
    sector: 'retail',
    status: 'completed',
    value: '€16m',
    location: 'Balbriggan, Co. Dublin',
    year: '2023',
    description:
      'A mixed-use retail and residential development anchoring the regeneration of Balbriggan town centre. The scheme comprises 8,000 sqm of retail space and 42 residential apartments above.',
    longDescription:
      "This landmark mixed-use development sits at the heart of Balbriggan's ongoing urban regeneration programme. Ganson was selected by Cairn Homes to deliver the main construction works, which encompass 8,000 square metres of ground-floor retail space configured for a flagship supermarket, six retail units, and a family restaurant. Above the retail podium, 42 one- and two-bedroom apartments are arranged across three upper floors, each with private balcony space and access to a shared landscaped courtyard.\n\nThe site's town-centre location demanded meticulous traffic management and pedestrian safety planning. Ganson established a dedicated community liaison role to keep local businesses and residents informed throughout the two-year build. The reinforced-concrete frame was constructed using a rapid-cycle formwork system that allowed one floor to be cast per fortnight, keeping the programme on track despite challenging winter conditions.\n\nThe development was completed in September 2023 and has since become a catalyst for further investment in Balbriggan, with several adjacent sites now progressing through planning. The project achieved a BER A2 energy rating for the residential units and BREEAM Excellent certification for the retail component.",
    image: '/assets/projects/project-3.svg',
    gallery: [
      '/assets/projects/project-3.svg',
      '/assets/projects/project-4.svg',
      '/assets/projects/project-5.svg',
      '/assets/projects/project-6.svg',
    ],
    featured: true,
    completionDate: '2023-09-10',
  },
  {
    slug: 'dublin-airport-terminal-2-fit-out',
    title: 'Dublin Airport Terminal 2 — Commercial Fit-Out',
    client: 'DAA',
    sector: 'commercial',
    status: 'completed',
    value: '€22m',
    location: 'Dublin',
    year: '2023',
    description:
      'An extensive commercial fit-out programme across Dublin Airport Terminal 2, delivering 15 new retail and food & beverage units within the airside departures area while the terminal remained fully operational.',
    longDescription:
      "Ganson was engaged by daa (formerly Dublin Airport Authority) to deliver a comprehensive commercial fit-out programme within the airside departures lounge of Terminal 2. The works encompassed the strip-out and reconfiguration of 3,200 square metres of existing retail and food & beverage space, creating 15 new premium units designed to significantly enhance the passenger experience.\n\nThe project was executed in a live, security-controlled airport environment operating 18 hours per day. All construction materials were screened through airport security and transported via approved airside routes during tightly controlled night-time windows. Ganson deployed a rolling phased programme that kept at least 80% of existing retail units trading at all times, minimising revenue disruption for daa and its commercial tenants.\n\nMechanical and electrical works included new chilled-water distribution to food units, upgraded fire suppression systems, and a fully integrated digital signage network. The final phase was completed in December 2023, in time for the peak Christmas travel period. Passenger satisfaction surveys conducted in the months following completion showed a 22% uplift in retail experience ratings.",
    image: '/assets/projects/project-4.svg',
    gallery: [
      '/assets/projects/project-4.svg',
      '/assets/projects/project-5.svg',
      '/assets/projects/project-6.svg',
    ],
    featured: true,
    completionDate: '2023-12-01',
  },
  {
    slug: 'carlingford-lough-greenway-visitor-centre',
    title: 'Carlingford Lough Greenway & Visitor Centre',
    client: 'Louth County Council',
    sector: 'tourism',
    status: 'completed',
    value: '€6.5m',
    location: 'Carlingford, Co. Louth',
    year: '2024',
    description:
      'A 12-kilometre shared-use greenway along the southern shore of Carlingford Lough, complemented by a new timber-frame visitor centre featuring exhibition space and a café with panoramic lough views.',
    longDescription:
      "This cross-community tourism infrastructure project connects the medieval heritage town of Carlingford with the village of Omeath along the southern shore of Carlingford Lough. Ganson delivered all civil engineering works for the 12-kilometre greenway, including path construction, bridge crossings, drainage, lighting, and extensive landscaping. The route was designed to accommodate both cyclists and pedestrians, with segregated sections where the corridor width permitted.\n\nAt the Carlingford terminus, Ganson constructed a 450 square metre timber-frame visitor centre housing an interactive exhibition on the natural and cultural heritage of the Cooley Peninsula, a 60-seat café with floor-to-ceiling glazing overlooking the lough, and public amenity facilities. The building was designed to achieve an A1 BER rating, with a ground-source heat pump, photovoltaic panels, and a sedum green roof.\n\nThe greenway has proven transformative for the local tourism economy. Within six months of opening in June 2024, over 120,000 visitors were recorded on the route's automated counters. The project received funding under the Rural Regeneration and Development Fund and was delivered on budget by the Ganson team.",
    image: '/assets/projects/project-5.svg',
    gallery: [
      '/assets/projects/project-5.svg',
      '/assets/projects/project-6.svg',
      '/assets/projects/project-7.svg',
    ],
    featured: false,
    completionDate: '2024-06-14',
  },
  {
    slug: 'intel-leixlip-data-centre',
    title: 'Intel Leixlip Campus — Data Centre Facility',
    client: 'Intel Ireland',
    sector: 'high-tech',
    status: 'current',
    value: '€28m',
    location: 'Leixlip, Co. Kildare',
    year: '2024',
    description:
      'A high-specification data centre facility on Intel Ireland\'s Leixlip campus, comprising 2,400 sqm of white space with Tier III resilience, advanced cooling infrastructure, and dedicated power distribution.',
    longDescription:
      "Ganson was appointed as principal contractor for the construction of a new data centre facility on Intel Ireland's campus in Leixlip, Co. Kildare. The 4,800 square metre building provides 2,400 square metres of white space across two data halls, designed to Tier III resilience standards with concurrent maintainability of all critical systems. The reinforced-concrete structure features a column-free span in each data hall, 600mm raised access flooring, and a loading capacity of 15 kN/sqm to accommodate high-density server rack deployments.\n\nThe cooling solution combines rear-door heat exchangers with an external free-cooling plant that harnesses Ireland's temperate climate to reduce mechanical refrigeration demand by up to 65% annually. Dedicated 110kV power infrastructure, including dual-redundant UPS systems and diesel rotary generators, provides uninterrupted power to the facility. Ganson's team managed the complex interface between the base-build structure and specialist mechanical, electrical, and fire suppression fit-out contractors.\n\nDelivered in January 2024, the facility achieved a PUE (Power Usage Effectiveness) design target of 1.2, placing it among the most energy-efficient data centres in Ireland. The project was completed with over 480,000 person-hours worked and a zero lost-time injury record, reflecting Ganson's uncompromising commitment to safety on high-tech construction sites.",
    image: '/assets/projects/project-6.svg',
    gallery: [
      '/assets/projects/project-6.svg',
      '/assets/projects/project-7.svg',
      '/assets/projects/project-8.svg',
      '/assets/projects/project-9.svg',
    ],
    featured: false,
    completionDate: '2024-01-20',
  },
  {
    slug: 'aviva-stadium-hospitality-refurbishment',
    title: 'Aviva Stadium — Hospitality Suite Refurbishment',
    client: 'IRFU/FAI',
    sector: 'refurbishment',
    status: 'completed',
    value: '€9.2m',
    location: 'Dublin',
    year: '2023',
    description:
      'A comprehensive refurbishment of the premium hospitality suites at the Aviva Stadium, upgrading 24 private boxes and the main President\'s Suite to contemporary standards within a compressed off-season programme.',
    longDescription:
      "Ganson undertook a complete interior refurbishment of the hospitality and premium areas within the Aviva Stadium on behalf of the IRFU and FAI joint venture. The scope encompassed 24 private corporate boxes on levels 3 and 4 of the west stand, the 350-seat President's Suite, two executive lounges, and all associated back-of-house catering and servery areas. Each space received new mechanical ventilation, LED lighting, bespoke joinery, acoustic wall panels, and AV infrastructure.\n\nThe critical constraint on this project was the programme. All works had to be completed within a 14-week window between the end of the rugby season in April and the first pre-season football international in late July. Ganson mobilised a peak workforce of 180 operatives working extended shifts six days per week to meet this deadline. Careful sequencing allowed fit-out of completed boxes to proceed in parallel with strip-out of adjacent units, maximising the use of the limited time available.\n\nThe refurbished suites were unveiled for a sold-out international fixture in August 2023 and received overwhelmingly positive feedback from corporate clients. Hospitality revenue for the following autumn international series increased by 18%, directly attributable to the enhanced facilities. The project was delivered within budget and achieved an exemplary safety record throughout the intensive build period.",
    image: '/assets/projects/project-7.svg',
    gallery: [
      '/assets/projects/project-7.svg',
      '/assets/projects/project-8.svg',
      '/assets/projects/project-9.svg',
    ],
    featured: false,
    completionDate: '2023-07-28',
  },
  {
    slug: 'dkit-science-building',
    title: 'Dundalk Institute of Technology — Science Building',
    client: 'DkIT',
    sector: 'education',
    status: 'completed',
    value: '€11m',
    location: 'Dundalk, Co. Louth',
    year: '2023',
    description:
      'A purpose-built science and research building at DkIT, housing advanced laboratories for biological sciences, chemistry, and environmental science, along with a 200-seat lecture theatre.',
    longDescription:
      "Ganson delivered a new four-storey science and research building on the Dundalk Institute of Technology campus. The 6,200 square metre facility houses 12 teaching laboratories, four postgraduate research laboratories, staff offices, a 200-seat tiered lecture theatre, and informal student learning spaces. The building was designed to support DkIT's expanding STEM programmes and its designation as a Technological University campus.\n\nThe laboratory fit-out demanded exacting standards of environmental control. Ganson coordinated the installation of specialist fume cupboard extract systems, compressed gas distribution, de-ionised water supplies, and emergency safety showers across all laboratory floors. The building's mechanical systems are controlled by a sophisticated BMS (Building Management System) that monitors air change rates, temperature, and humidity in real time to maintain optimal conditions for sensitive research equipment.\n\nConstructed on a constrained campus site adjacent to occupied teaching buildings, the project required careful management of construction traffic, noise, and vibration. Ganson maintained a green-flag safety rating throughout the 20-month build programme and handed over the building in August 2023, enabling the institute to commission laboratories in advance of the new academic year.",
    image: '/assets/projects/project-8.svg',
    gallery: [
      '/assets/projects/project-8.svg',
      '/assets/projects/project-9.svg',
      '/assets/projects/project-10.svg',
    ],
    featured: false,
    completionDate: '2023-08-18',
  },
  {
    slug: 'm1-junction-4-upgrade',
    title: 'M1 Motorway Junction 4 Upgrade',
    client: 'Transport Infrastructure Ireland',
    sector: 'civil-engineering',
    status: 'current',
    value: '€18m',
    location: 'Donabate, Co. Dublin',
    year: '2024',
    description:
      'A major upgrade of Junction 4 on the M1 motorway, providing a new grade-separated interchange with increased capacity to serve the expanding Donabate–Portrane area and relieve congestion on the R132.',
    longDescription:
      "Transport Infrastructure Ireland appointed Ganson as the main contractor for the upgrade of Junction 4 on the M1 motorway, serving the Donabate and Portrane communities in north County Dublin. The existing at-grade roundabout was replaced with a new grade-separated interchange featuring a two-span composite bridge over the M1 mainline, dedicated slip roads, and a signalised interface with the R132 regional road.\n\nThe civil engineering works included 45,000 cubic metres of earthworks, extensive rock-breaking through the underlying limestone, installation of 1,200 linear metres of new stormwater attenuation systems, and construction of 2.4 kilometres of new carriageway. Working adjacent to a live motorway carrying over 70,000 vehicles per day required rigorous traffic management under TII's standards, with all lane closures and diversions limited to overnight periods.\n\nThe project also delivered significant sustainable transport infrastructure, including 3.2 kilometres of new segregated cycle track connecting Donabate village to the rail station, pedestrian crossings, and bus priority measures. Completed in September 2024, the upgraded junction has already delivered measurable improvements in peak-hour journey times and road safety metrics for the area.",
    image: '/assets/projects/project-9.svg',
    gallery: [
      '/assets/projects/project-9.svg',
      '/assets/projects/project-10.svg',
      '/assets/projects/project-1.svg',
    ],
    featured: false,
    completionDate: '2024-09-05',
  },
  {
    slug: 'abp-processing-facility-expansion',
    title: 'ABP Food Group — Processing Facility Expansion',
    client: 'ABP Food Group',
    sector: 'commercial',
    status: 'completed',
    value: '€24m',
    location: 'Navan, Co. Meath',
    year: '2024',
    description:
      'A major expansion of ABP Food Group\'s processing facility in Navan, adding 6,000 sqm of temperature-controlled production space, a new effluent treatment plant, and upgraded cold-storage infrastructure.',
    longDescription:
      "Ganson was engaged by ABP Food Group to deliver a significant expansion of their beef and lamb processing facility outside Navan, Co. Meath. The project scope encompassed 6,000 square metres of new temperature-controlled production halls operating at temperatures between -2\u00b0C and +4\u00b0C, a 2,000 square metre automated cold-store at -25\u00b0C, an upgraded effluent treatment plant with a capacity of 1,500 cubic metres per day, and new staff welfare and office accommodation.\n\nThe construction of food-grade processing environments demanded exceptional attention to hygiene and material specification. All internal surfaces utilise continuous resin flooring with integral coved skirting, insulated metal panel wall systems rated for daily high-pressure washdown, and stainless steel drainage channels throughout. Ganson coordinated the installation of extensive ammonia-based refrigeration plant, process piping, and automated conveyor systems in close collaboration with ABP's specialist equipment suppliers.\n\nA critical requirement was maintaining uninterrupted production in the existing facility throughout the works. Ganson implemented strict biosecurity protocols and segregated construction zones with dedicated access routes to prevent any cross-contamination risk. The expansion was completed in phases between January and July 2024, enabling ABP to progressively commission new lines and increase throughput. The project has added approximately 120 permanent jobs to the local economy.",
    image: '/assets/projects/project-10.svg',
    gallery: [
      '/assets/projects/project-10.svg',
      '/assets/projects/project-1.svg',
      '/assets/projects/project-2.svg',
      '/assets/projects/project-3.svg',
    ],
    featured: false,
    completionDate: '2024-07-12',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsBySector(sector: Sector): Project[] {
  return projects.filter((project) => project.sector === sector)
}
