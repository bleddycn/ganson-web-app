import type { Project, Sector } from '../types'

export const projects: readonly Project[] = [
  {
    slug: 'poolbeg',
    title: 'Poolbeg',
    client: 'National Oil Reserves Agency',
    sector: 'commercial',
    status: 'completed',
    location: 'Dublin',
    year: '2020',
    description:
      'This complex project involved extensive civil, mechanical, electrical, and firefighting works to redevelop and upgrade the existing ESB Poolbeg facility into a strategic bulk fuel storage terminal.',
    longDescription:
      'This complex project involved extensive civil, mechanical, electrical, and firefighting works to redevelop and upgrade the existing ESB Poolbeg facility into a strategic bulk fuel storage terminal.\n\nKey works included new utility connections, construction of pump and spill containment infrastructure, a new steel gantry structure, refurbishment of seven existing tanks, and installation of a modern firefighting system. A new truck loading facility and significant reinforced concrete works to bund areas and drainage systems were also completed.\n\nThe project was delivered to a high standard, with strong collaboration between the client and design team, despite the challenges posed during the COVID-19 period.',
    image: '/assets/projects/poolbeg/01.webp',
    gallery: ['/assets/projects/poolbeg/01.webp', '/assets/projects/poolbeg/02.webp', '/assets/projects/poolbeg/03.webp', '/assets/projects/poolbeg/04.webp', '/assets/projects/poolbeg/05.webp'],
    featured: false,
  },
  {
    slug: 'ardee-ambulance-centre',
    title: 'Ardee Ambulance Centre',
    client: 'Moloney O\'Beirne Architects. Oyster Point',
    sector: 'healthcare',
    status: 'completed',
    location: 'Ardee',
    year: '2022',
    description:
      'Ganson Building & Civil Engineering Ltd. delivered the construction works for St. Joseph’s Hospital, a protected live operational facility, acting as both Main Contractor and PSCS.',
    longDescription:
      'Ganson Building & Civil Engineering Ltd. delivered the construction works for St. Joseph’s Hospital, a protected live operational facility, acting as both Main Contractor and PSCS.\n\nThe project included offices, hi-tech communications rooms, kitchen, canteen, training and meeting rooms, tower, ambulance garages, and vehicle wash areas. Key works comprised site entrance, earthworks, foundations, steel frame, precast floors, brickwork, cladding, roof, and full M&E installation. Internal fit-outs included partitions, glazed screens, fire-stopping, balustrades, tiling, joinery, and painting. External works featured roads, car parking, street lighting, stone walls, automatic barriers, kerbs, slabs, and paving.\n\nThe project was completed on time, within budget, and to a very high standard of finish, sustainability, and safety, earning the 2023 RIAI Wellbeing and Health Award.',
    image: '/assets/projects/ardee-ambulance-centre/01.webp',
    gallery: ['/assets/projects/ardee-ambulance-centre/01.webp', '/assets/projects/ardee-ambulance-centre/02.webp', '/assets/projects/ardee-ambulance-centre/03.webp', '/assets/projects/ardee-ambulance-centre/04.webp', '/assets/projects/ardee-ambulance-centre/05.webp', '/assets/projects/ardee-ambulance-centre/06.webp'],
    featured: false,
  },
  {
    slug: 'home-bargins-lisburn',
    title: 'Home Bargins Lisburn',
    client: 'Faithful and Gould',
    sector: 'commercial',
    status: 'completed',
    location: 'Lisburn',
    year: '2020',
    description:
      'Design and construction of a 3,500m² flagship retail store, including associated roadworks, drainage, utilities, and a 180-space car park with a dedicated loading dock.',
    longDescription:
      'Design and construction of a 3,500m² flagship retail store, including associated roadworks, drainage, utilities, and a 180-space car park with a dedicated loading dock. The project also involved live road and services realignment along Ballinderry Road and upgrades to existing boundary treatments.\n\nThe retail unit features a steel portal frame with insulated cladding, complemented by brickwork, large glazed facades, and fire-rated shutters. Extensive coordination ensured efficient delivery of the superstructure.\n\nExternal works included full site infrastructure such as drainage systems, attenuation and interceptor tanks, permeable paving, lighting, and signage. The loading dock required specialist groundworks due to challenging soil conditions.\n\nMechanical and electrical installations comprised air source heat pumps, air handling systems, CCTV, advanced fire safety systems, and a fully automated building management system (BMS).\n\nThe project was delivered efficiently, on time, and within budget to a high standard.',
    image: '/assets/projects/home-bargins-lisburn/01.webp',
    gallery: ['/assets/projects/home-bargins-lisburn/01.webp', '/assets/projects/home-bargins-lisburn/02.webp', '/assets/projects/home-bargins-lisburn/03.webp', '/assets/projects/home-bargins-lisburn/04.webp', '/assets/projects/home-bargins-lisburn/05.webp'],
    featured: false,
  },
  {
    slug: 'st-lawrence-o-tooles-dublin',
    title: 'St Lawrence O Toole\'s, Dublin',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'completed',
    location: 'Dublin',
    year: '2021',
    description:
      'Successfully delivered in a high-traffic Dublin City location, acting as both Main Contractor and Project Supervisor Construction Stage (PSCS).',
    longDescription:
      'Successfully delivered in a high-traffic Dublin City location, acting as both Main Contractor and Project Supervisor Construction Stage (PSCS).\n\nA proactive HSEQ approach was embedded from tender stage, with thorough planning, risk assessments, and full regulatory compliance, including registration with the HSA and EPA. All site personnel were fully inducted, supported by a dedicated on-site Health & Safety Officer and ongoing supervision.\n\nRobust site management included weekly HSEQ audits, daily toolbox talks, and regular coordination meetings, ensuring all activities were carried out safely and efficiently. Strong collaboration with subcontractors and timely close-out of any non-conformances contributed to a well-managed, compliant project delivered to a high standard.',
    image: '/assets/projects/st-lawrence-o-tooles-dublin/01.webp',
    gallery: ['/assets/projects/st-lawrence-o-tooles-dublin/01.webp', '/assets/projects/st-lawrence-o-tooles-dublin/02.webp', '/assets/projects/st-lawrence-o-tooles-dublin/03.webp', '/assets/projects/st-lawrence-o-tooles-dublin/04.webp', '/assets/projects/st-lawrence-o-tooles-dublin/05.webp', '/assets/projects/st-lawrence-o-tooles-dublin/06.webp'],
    featured: true,
  },
  {
    slug: 'colaiste-chuchulainn-dundalk',
    title: 'Colaiste Chuchulainn Dundalk',
    client: 'Department of Education & Skills',
    sector: 'education',
    status: 'completed',
    location: 'Dundalk',
    year: '2018',
    description:
      'Construction of a new two-storey and part single-storey post-primary school for 1,000 students, complete with a public park, hard play areas, and a full-size GAA football pitch. The development also included access roads, 80 car parking spaces, and covered cycle parking.',
    longDescription:
      'Construction of a new two-storey and part single-storey post-primary school for 1,000 students, complete with a public park, hard play areas, and a full-size GAA football pitch. The development also included access roads, 80 car parking spaces, and covered cycle parking.\n\nThe building structure combined structural steel framing with precast concrete walls, floors, and stairs. External finishes featured a blend of facing brick, coloured render, and extensive glazing designed to complement the surrounding environment while maximising natural light.\n\nExternal works incorporated both hard and soft landscaping across play and sports areas. A full mechanical and electrical installation was delivered, tested throughout the build, and fully commissioned upon completion.\n\nComprehensive HSEQ management, including weekly audits and daily toolbox talks, ensured safe and efficient delivery. The project was completed on time, within budget, and to an exceptionally high standard.',
    image: '/assets/projects/colaiste-chuchulainn-dundalk/01.webp',
    gallery: ['/assets/projects/colaiste-chuchulainn-dundalk/01.webp', '/assets/projects/colaiste-chuchulainn-dundalk/02.webp', '/assets/projects/colaiste-chuchulainn-dundalk/03.webp', '/assets/projects/colaiste-chuchulainn-dundalk/04.webp', '/assets/projects/colaiste-chuchulainn-dundalk/05.webp', '/assets/projects/colaiste-chuchulainn-dundalk/06.webp'],
    featured: false,
  },
  {
    slug: 'grangegorman-ns',
    title: 'Grangegorman NS',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'completed',
    location: 'Grangegorman',
    year: '2023',
    description:
      'Construction of a five-storey, 24-classroom national school with an SNU, delivered to NZEB standards on the live Grangegorman Campus. The project included a modern sports gymnasium with CLT roof structure and a fully enclosed rooftop ball court.',
    longDescription:
      'Construction of a five-storey, 24-classroom national school with an SNU, delivered to NZEB standards on the live Grangegorman Campus. The project included a modern sports gymnasium with CLT roof structure and a fully enclosed rooftop ball court.\n\nThe design maximised natural light and ventilation through extensive glazing, with classrooms incorporating integrated toilet facilities. Sustainable features included connection to the district heating network and roof-mounted photovoltaic panels.\n\nExternal finishes of brick and render were carefully selected to complement the surrounding campus, while bright internal finishes enhanced the learning environment.\n\nDelivered with strong HSEQ management, including weekly audits and daily toolbox talks, the project was completed to a high standard. Despite Covid-19 impacts and authorised variations, the scheme was successfully delivered within the revised programme and budget.',
    image: '/assets/projects/grangegorman-ns/01.webp',
    gallery: ['/assets/projects/grangegorman-ns/01.webp', '/assets/projects/grangegorman-ns/02.webp', '/assets/projects/grangegorman-ns/03.webp', '/assets/projects/grangegorman-ns/04.webp', '/assets/projects/grangegorman-ns/05.webp', '/assets/projects/grangegorman-ns/06.webp'],
    featured: false,
  },
  {
    slug: 'lusk-ns',
    title: 'Lusk NS',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'completed',
    location: 'Lusk',
    year: '2018',
    description:
      'Demolition of an existing school and construction of new junior and senior primary school buildings, along with a GP hall and all associated site works, in a busy urban location.',
    longDescription:
      'Demolition of an existing school and construction of new junior and senior primary school buildings, along with a GP hall and all associated site works, in a busy urban location.\n\nThe project included full site setup, asbestos removal, demolition, and construction using precast framing with brick and block finishes. Internal works comprised joinery, kitchen and office fit-outs, and high-quality finishes throughout.\n\nExternal works delivered extensive hard and soft landscaping, including roads, car parking, and green areas. Sustainable features such as water harvesting and attenuation systems were incorporated, alongside a modern building management system (BMS) for efficient M&E control.\n\nStrong HSEQ management, including weekly audits and daily toolbox talks, ensured safe delivery, with all systems fully tested and commissioned on completion.',
    image: '/assets/projects/lusk-ns/01.webp',
    gallery: ['/assets/projects/lusk-ns/01.webp', '/assets/projects/lusk-ns/02.webp', '/assets/projects/lusk-ns/03.webp', '/assets/projects/lusk-ns/04.webp', '/assets/projects/lusk-ns/05.webp', '/assets/projects/lusk-ns/06.webp'],
    featured: false,
  },
  {
    slug: 'dun-na-ri-kingscourt-cavan',
    title: 'Dun na Ri Kingscourt Cavan',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'completed',
    location: 'Cavan',
    year: '2018',
    description:
      'Design and construction of a split-level post-primary school comprising 32 classrooms across 2–4 storeys, with a connected sports hall and extensive associated facilities.',
    longDescription:
      'Design and construction of a split-level post-primary school comprising 32 classrooms across 2–4 storeys, with a connected sports hall and extensive associated facilities. The development included a new entrance road on a steeply sloping site, car parking, retaining walls, culverts, and full site infrastructure.\n\nThe structure combined structural steel with precast concrete elements, finished externally with facing brick, coloured render, and high-performance glazing. Internal accommodation included classrooms, administration offices, library, special needs unit, canteen, and ancillary spaces.\n\nSignificant civil engineering works were undertaken, including river diversion via a new culvert, stormwater drainage systems with attenuation and water harvesting, and the construction of high retaining walls along a live roadway.\n\nExternal works featured ball courts, circulation areas, security installations, and both hard and soft landscaping. Full mechanical and electrical systems were installed, tested, and commissioned.\n\nThe project was delivered to a high standard, managing complex ground conditions and challenging site constraints.',
    image: '/assets/projects/dun-na-ri-kingscourt-cavan/01.webp',
    gallery: ['/assets/projects/dun-na-ri-kingscourt-cavan/01.webp', '/assets/projects/dun-na-ri-kingscourt-cavan/02.webp', '/assets/projects/dun-na-ri-kingscourt-cavan/03.webp', '/assets/projects/dun-na-ri-kingscourt-cavan/04.webp', '/assets/projects/dun-na-ri-kingscourt-cavan/05.webp', '/assets/projects/dun-na-ri-kingscourt-cavan/06.webp'],
    featured: false,
  },
  {
    slug: 'naas-community-college',
    title: 'Naas Community College',
    client: 'Coady Architects',
    sector: 'education',
    status: 'completed',
    location: 'Kildare',
    year: '2022',
    description:
      'Construction of a 10,405m² two- and three-storey post-primary school for 1,000 विद्यार्थents, incorporating teaching spaces, administration areas, a special needs unit, and a sports hall with CLT roof structure.',
    longDescription:
      'Construction of a 10,405m² two- and three-storey post-primary school for 1,000 विद्यार्थents, incorporating teaching spaces, administration areas, a special needs unit, and a sports hall with CLT roof structure. The development also included extensive external facilities such as car and cycle parking, play areas, an all-weather pitch, and landscaped grounds.\n\nThe project involved significant enabling and civil works, including new road infrastructure, bus set-down areas, culverting, flood mitigation measures, and boundary treatments, both within and beyond the site boundary.\n\nBuilt with a focus on sustainability, the school features energy-efficient MEICA systems, natural ventilation strategies, and a green roof. Works included piled and reinforced concrete foundations, full M&E installations, and comprehensive testing and commissioning in line with BC(A)R requirements.\n\nDelivered in a busy urban environment, the project maintained high standards of traffic and stakeholder management, alongside rigorous HSEQ controls. Construction progressed safely throughout the Covid-19 pandemic under approved protocols, with the project completed to a high standard and full client satisfaction.',
    image: '/assets/projects/naas-community-college/01.webp',
    gallery: ['/assets/projects/naas-community-college/01.webp', '/assets/projects/naas-community-college/02.webp', '/assets/projects/naas-community-college/03.webp', '/assets/projects/naas-community-college/04.webp', '/assets/projects/naas-community-college/05.webp', '/assets/projects/naas-community-college/06.webp'],
    featured: false,
  },
  {
    slug: 'ocarolan-college-nobber',
    title: 'O\'Carolan College Nobber',
    client: 'Opperman Associates',
    sector: 'education',
    status: 'completed',
    location: 'Nobber',
    year: '2025',
    description:
      'Demolition of the existing school buildings, including prefabricated units and ancillary structures, followed by the construction of a new three-storey educational facility.',
    longDescription:
      'Demolition of the existing school buildings, including prefabricated units and ancillary structures, followed by the construction of a new three-storey educational facility.\n\nThe new school comprises 20 classrooms, specialist teaching spaces including science labs, arts and construction rooms, a home economics room, library, GP and multipurpose halls, special needs units, and administrative areas.\n\nExternal works included car parking, set-down areas, ball courts, a football pitch, landscaping, and full site boundary treatments. The project also involved the reconfiguration of the adjacent R162 Navan to Kingscourt Road.\n\nDelivered to a high standard, the project provides a modern, fully equipped learning environment with comprehensive site infrastructure.',
    image: '/assets/projects/ocarolan-college-nobber/01.webp',
    gallery: ['/assets/projects/ocarolan-college-nobber/01.webp', '/assets/projects/ocarolan-college-nobber/02.webp', '/assets/projects/ocarolan-college-nobber/03.webp', '/assets/projects/ocarolan-college-nobber/04.webp', '/assets/projects/ocarolan-college-nobber/05.webp'],
    featured: false,
  },
  {
    slug: 'st-oliver-plunkett-school-malahide',
    title: 'St Oliver Plunkett School Malahide',
    client: 'Board of Managment. St. Oliver Plunketts School',
    sector: 'education',
    status: 'completed',
    location: 'Malahide',
    year: '2020',
    description:
      'Phased construction of new two- and three-storey school buildings comprising 35 classrooms, delivered on a live and fully operational school campus in a busy urban setting.',
    longDescription:
      'Phased construction of new two- and three-storey school buildings comprising 35 classrooms, delivered on a live and fully operational school campus in a busy urban setting.\n\nThe project involved temporary accommodation installation, careful demolition of existing structures, and construction of a new precast concrete school building with high-quality internal and external finishes. Extensive coordination ensured safe separation between construction works and ongoing school activities.\n\nWorks included new drainage and utilities, car parking, set-down areas, ball courts, and significant hard and soft landscaping. A full mechanical and electrical installation was delivered, including a modern automated building management system (BMS), with all systems fully tested, commissioned, and handed over with user training.\n\nAchieving an A2 BER rating, the project emphasised energy performance and quality. Strong HSEQ management and careful planning ensured safe delivery, with the project completed on time, within budget, and to the full satisfaction of the client.',
    image: '/assets/projects/st-oliver-plunkett-school-malahide/01.webp',
    gallery: ['/assets/projects/st-oliver-plunkett-school-malahide/01.webp', '/assets/projects/st-oliver-plunkett-school-malahide/02.webp', '/assets/projects/st-oliver-plunkett-school-malahide/03.webp', '/assets/projects/st-oliver-plunkett-school-malahide/04.webp', '/assets/projects/st-oliver-plunkett-school-malahide/05.webp', '/assets/projects/st-oliver-plunkett-school-malahide/06.webp'],
    featured: false,
  },
  {
    slug: 'stewarts-school-lucan',
    title: 'Stewarts School Lucan',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'completed',
    location: 'Dublin',
    year: '2019',
    description:
      'Demolition and site clearance were followed by the construction of a new 32-classroom school for pupils with special needs, including administration spaces, gymnasium, ball courts, play areas, and a single-storey green roof.',
    longDescription:
      'Demolition and site clearance were followed by the construction of a new 32-classroom school for pupils with special needs, including administration spaces, gymnasium, ball courts, play areas, and a single-storey green roof.\n\nThe project included new site access from a busy roundabout, parking and circulation areas, drainage, utilities, and a new ESB substation with switch room. The building was constructed using a precast modular system with brick, blockwork, coloured render, and energy-efficient glazing.\n\nA full mechanical and electrical package with modern BMS, intelligent lighting, water harvesting, and solar-responsive elements was installed, alongside high-quality internal finishes. All works were safely delivered in a live operational environment, with O&M and safety documentation handed over upon completion.',
    image: '/assets/projects/stewarts-school-lucan/01.webp',
    gallery: ['/assets/projects/stewarts-school-lucan/01.webp', '/assets/projects/stewarts-school-lucan/02.webp', '/assets/projects/stewarts-school-lucan/03.webp', '/assets/projects/stewarts-school-lucan/04.webp', '/assets/projects/stewarts-school-lucan/05.webp', '/assets/projects/stewarts-school-lucan/06.webp'],
    featured: false,
  },
  {
    slug: 'stephenstown-schools-balbriggan',
    title: 'Stephenstown Schools, Balbriggan',
    client: 'Planning & Development Unit',
    sector: 'education',
    status: 'completed',
    location: 'Ballbrigan',
    year: '2018',
    description:
      'Construction of a new three-storey post-primary school for 1,000 pupils and a two-storey primary school for 750 pupils with a Special Needs Unit, GP hall, and ancillary facilities including offices, kitchen, canteen, physio, and conference spaces.',
    longDescription:
      'Construction of a new three-storey post-primary school for 1,000 pupils and a two-storey primary school for 750 pupils with a Special Needs Unit, GP hall, and ancillary facilities including offices, kitchen, canteen, physio, and conference spaces.\n\nThe development included new access roads, parking, drop-off areas, combined foot and cycle paths, drainage and utilities, and comprehensive landscaping with sports pitches, play areas, and secure boundary treatments.\n\nBuildings feature structural steel and precast concrete frames, with exteriors of facing brick, coloured render, and extensive solar-responsive glazing. Sustainable features include heat recovery ventilation and energy-efficient systems, fully tested and commissioned prior to handover.\n\nDelivered in a busy urban setting with minimal disruption to surrounding schools and residential areas, the project achieved high standards of quality, safety, and environmental performance, supported by weekly HSEQ audits and daily toolbox talks.',
    image: '/assets/projects/stephenstown-schools-balbriggan/01.webp',
    gallery: ['/assets/projects/stephenstown-schools-balbriggan/01.webp', '/assets/projects/stephenstown-schools-balbriggan/02.webp', '/assets/projects/stephenstown-schools-balbriggan/03.webp', '/assets/projects/stephenstown-schools-balbriggan/04.webp', '/assets/projects/stephenstown-schools-balbriggan/05.webp', '/assets/projects/stephenstown-schools-balbriggan/06.webp'],
    featured: false,
  },
  {
    slug: 'scoil-phadraig-clane',
    title: 'Scoil Phadraig Clane',
    client: 'Board of Management Scoil Phadraig',
    sector: 'education',
    status: 'completed',
    location: 'Kildare',
    year: '2022',
    description:
      'Construction of a new two-storey school with a steel portal frame gym hall, football pitch, three ball courts, roads, and a 64-space car park on a live school site in Clane, delivered over two phases.',
    longDescription:
      'Construction of a new two-storey school with a steel portal frame gym hall, football pitch, three ball courts, roads, and a 64-space car park on a live school site in Clane, delivered over two phases.\n\nPhase 1 included a temporary modular 22-classroom school with full amenities, constructed offsite and installed to permanent building standards. Extensive M&E systems—including heat pumps, air handling units, PV panels, fire safety systems, CCTV, and communications—were installed, tested, and commissioned before occupation.\n\nPhase 2 involved demolition of the existing school and construction of the permanent 24-classroom building, gym hall, ball courts, roads, car park, and site services, alongside precast concrete and steel portal frame structures.\n\nThe project required careful stakeholder liaison, traffic management, and coordination with the live school, and was delivered on time, on budget, and to a high standard, maintaining strong collaboration with the client, design team, and subcontractors.',
    image: '/assets/projects/scoil-phadraig-clane/placeholder.webp',
    gallery: ['/assets/projects/scoil-phadraig-clane/placeholder.webp'],
    featured: false,
    hidden: true,
  },
  {
    slug: 'carechoice-nursing-home-trim',
    title: 'Carechoice Nursing Home, Trim',
    client: 'Carechoice Trim Ltd, Knightsbridge Village, Trim, Co. Meath',
    sector: 'healthcare',
    status: 'completed',
    location: 'Meath',
    year: '2021',
    description:
      'Ganson Building & Civil Engineering Ltd. delivered a €9.5 million, three-storey extension to a live, operational, and protected nursing home, acting as both Main Contractor and PSCS.',
    longDescription:
      'Ganson Building & Civil Engineering Ltd. delivered a €9.5 million, three-storey extension to a live, operational, and protected nursing home, acting as both Main Contractor and PSCS.\n\nThe 2,850m² development included pre-cast construction, full M&E installation, and sustainable energy-efficient features such as heat recovery ventilation, rainwater harvesting, PV panels, solar-neutral glazing, and smart building controls, achieving an A2 energy rating.\n\nWorks were carefully phased to maintain full operation of the existing facility, which was also refurbished with upgraded M&E, structural improvements, fire safety measures, and new bathrooms and kitchens. All works complied with HSEQ and BC(A)R standards, with user-friendly O&M and safety files handed over on completion, delivered on time and within budget.',
    image: '/assets/projects/carechoice-nursing-home-trim/01.webp',
    gallery: ['/assets/projects/carechoice-nursing-home-trim/01.webp', '/assets/projects/carechoice-nursing-home-trim/02.webp', '/assets/projects/carechoice-nursing-home-trim/03.webp'],
    featured: false,
  },
  {
    slug: 'carechoice-nursing-home-marley',
    title: 'Carechoice Nursing Home, Marley',
    client: 'CareChoice Designated Activity Company',
    sector: 'healthcare',
    status: 'completed',
    location: 'Dublin',
    year: '2022',
    description:
      'Ganson Building & Civil Engineering Ltd. delivered a new three-storey extension and the refurbishment, restoration, and modernisation of the existing wing at the live, operational, and protected Marlay Nursing Home.',
    longDescription:
      'Ganson Building & Civil Engineering Ltd. delivered a new three-storey extension and the refurbishment, restoration, and modernisation of the existing wing at the live, operational, and protected Marlay Nursing Home.\n\nThe project upgraded energy efficiency to an A2 BER rating, improved fire safety, and restored original joinery, ornamental features, and plasterwork. Key works included demolition, asbestos removal, new partitions, floors, ceilings, tiling, carpets, painting, decoration, and full M&E installation, tested and commissioned throughout.\n\nAll works were carried out to high standards of safety, quality, and sustainability, with weekly HSEQ audits and timely resolution of non-conformances. The project was completed on time, within budget, and to a very high standard of finish.',
    image: '/assets/projects/carechoice-nursing-home-marley/01.webp',
    gallery: ['/assets/projects/carechoice-nursing-home-marley/01.webp', '/assets/projects/carechoice-nursing-home-marley/02.webp', '/assets/projects/carechoice-nursing-home-marley/03.webp', '/assets/projects/carechoice-nursing-home-marley/04.webp', '/assets/projects/carechoice-nursing-home-marley/05.webp', '/assets/projects/carechoice-nursing-home-marley/06.webp'],
    featured: false,
  },
  {
    slug: 'carechoice-nursing-home-parnell-road',
    title: 'Carechoice Nursing Home, Parnell Road',
    client: 'Carechoice Ltd, Parnell Road,-Dublin City',
    sector: 'healthcare',
    status: 'completed',
    location: 'Dublin',
    year: '2023',
    description:
      'Ganson Building & Civil Engineering Ltd. delivered the design and construction of a modern, four-storey, 143-bed energy-efficient nursing home in Dublin City, completed for €20 million.',
    longDescription:
      'Ganson Building & Civil Engineering Ltd. delivered the design and construction of a modern, four-storey, 143-bed energy-efficient nursing home in Dublin City, completed for €20 million.\n\nThe facility features ensuite bedrooms with natural light and ventilation, heat-recovery systems for bathrooms and utilities, and communal areas including dining, sitting, TV, reflection, and meditation rooms. A reinforced basement car park, surface parking, bicycle racks, and landscaped grounds were also provided.\n\nConstruction used modern methods including precast frames, POD bathrooms, and offsite-manufactured kitchens to accelerate the programme. The building achieved an A2 BER rating, with high-performance insulation, fire safety systems, and sustainable orientation to maximise natural light and heat.\n\nAll M&E systems were tested and commissioned, with comprehensive user training and Soft Landings provided. Graphic-rich O&M and Safety Manuals were handed over, and the project was completed on time, within budget, and to the client’s full satisfaction in June 2023.',
    image: '/assets/projects/carechoice-nursing-home-parnell-road/01.webp',
    gallery: ['/assets/projects/carechoice-nursing-home-parnell-road/01.webp', '/assets/projects/carechoice-nursing-home-parnell-road/02.webp', '/assets/projects/carechoice-nursing-home-parnell-road/03.webp', '/assets/projects/carechoice-nursing-home-parnell-road/04.webp', '/assets/projects/carechoice-nursing-home-parnell-road/05.webp', '/assets/projects/carechoice-nursing-home-parnell-road/06.webp'],
    featured: true,
  },
  {
    slug: 'carechoice-nursing-home-swords',
    title: 'Carechoice Nursing Home, Swords',
    client: 'Reddy Architecture and Urbanisation',
    sector: 'healthcare',
    status: 'completed',
    location: 'Swords',
    year: '2020',
    description:
      'Ganson Building & Civil Engineering Ltd. delivered a five-storey, 161-bed nursing home with a reinforced basement car park and a fifth-floor café, acting as Design & Build Main Contractor and PSCS in a live operational environment.',
    longDescription:
      'Ganson Building & Civil Engineering Ltd. delivered a five-storey, 161-bed nursing home with a reinforced basement car park and a fifth-floor café, acting as Design & Build Main Contractor and PSCS in a live operational environment.\n\nThe project included reinforced concrete construction with retaining walls, columns, beams, precast floors and stairs, road realignment, new utility connections, foul and stormwater networks, footpaths, car park, and botanical-style landscaping. Enabling works included site setup, bulk excavation, sensitive demolition, and asbestos removal.\n\nAll M&E systems were fully tested, commissioned, and handed over alongside graphic-rich O&M and Safety Manuals. The building achieved a high A2 BER energy-efficient rating and was completed to a very high standard of quality, safety, and sustainability.',
    image: '/assets/projects/carechoice-nursing-home-swords/01.webp',
    gallery: ['/assets/projects/carechoice-nursing-home-swords/01.webp', '/assets/projects/carechoice-nursing-home-swords/02.webp', '/assets/projects/carechoice-nursing-home-swords/03.webp', '/assets/projects/carechoice-nursing-home-swords/04.webp', '/assets/projects/carechoice-nursing-home-swords/05.webp'],
    featured: false,
  },
  {
    slug: 'dunshaughlin-nursing-home',
    title: 'Dunshaughlin Nursing Home',
    client: 'Altere Development Managers',
    sector: 'healthcare',
    status: 'completed',
    location: 'Dunshaughlin',
    year: '2023',
    description:
      'Dunshaughlin Nursing Home – Dublin Road, Dunshaughlin',
    longDescription:
      'Dunshaughlin Nursing Home – Dublin Road, Dunshaughlin\n\nGanson Building & Civil Engineering Ltd. delivered the design and build of a 96-bedroom nursing home, acting as both Main Contractor and PSCS. The project included full site works, utility connections, and high standards of health, safety, environment, and quality (HSEQ).\n\nAll works were carefully planned in advance, including risk assessments, method statements, site inductions, and weekly integrated HSEQ audits. A full-time H&S officer monitored the project, and non-conformances were promptly addressed. Daily toolbox talks, weekly progress meetings, and close coordination with subcontractors ensured safe, efficient delivery of the project to schedule..',
    image: '/assets/projects/dunshaughlin-nursing-home/placeholder.webp',
    gallery: ['/assets/projects/dunshaughlin-nursing-home/placeholder.webp'],
    featured: false,
    hidden: true,
  },
  {
    slug: 'moorehall-nursing-home',
    title: 'Moorehall Nursing Home',
    client: 'Reddy Architecture + Urbanisation',
    sector: 'healthcare',
    status: 'completed',
    location: 'Ardee',
    year: '2022',
    description:
      'Moorehall Nursing Home – Ardee, Co. Louth',
    longDescription:
      'Moorehall Nursing Home – Ardee, Co. Louth\n\nGanson Building & Civil Engineering Ltd. delivered the construction of a new energy-efficient two-storey, 44-bed western extension to the live, protected Moorehall Nursing Home, while also refurbishing and modernising the existing facility to A2 BER standards.\n\nThe project used traditional construction methods including blockwork, reinforced concrete frames, precast floors and stairs, and a prefabricated insulated truss roof. Works included careful restoration of joinery, plaster, and decorative features, soft and hard landscaping, fire safety upgrades, and full M&E installation, all connected to the live infrastructure.\n\nAll systems, including fire safety, mechanical, and electrical installations, were tested and commissioned. The project was completed on time, within budget, and to a high standard of energy efficiency, sustainability, and finish.',
    image: '/assets/projects/moorehall-nursing-home/01.webp',
    gallery: ['/assets/projects/moorehall-nursing-home/01.webp', '/assets/projects/moorehall-nursing-home/02.webp', '/assets/projects/moorehall-nursing-home/03.webp', '/assets/projects/moorehall-nursing-home/04.webp', '/assets/projects/moorehall-nursing-home/05.webp', '/assets/projects/moorehall-nursing-home/06.webp'],
    featured: false,
  },
  {
    slug: 'kilbarrack-health-centre',
    title: 'Kilbarrack Health Centre',
    client: 'HSE',
    sector: 'healthcare',
    status: 'completed',
    location: 'Kilbarrack',
    year: '2024',
    description:
      'Ganson Building & Civil Engineering Ltd. delivered a part single-storey, part two-storey extension with roof terrace and new external doors, providing a range of community health services including dental care, physiotherapy, occupational and children’s therapy, and a public nurs...',
    longDescription:
      'Ganson Building & Civil Engineering Ltd. delivered a part single-storey, part two-storey extension with roof terrace and new external doors, providing a range of community health services including dental care, physiotherapy, occupational and children’s therapy, and a public nursing unit.\n\nActing as both Main Contractor and PSCS, Ganson implemented comprehensive HSEQ management, including risk assessments, method statements, site inductions, and weekly integrated audits. A full-time H&S officer monitored works, non-conformances were promptly addressed, and daily toolbox talks and weekly coordination meetings ensured safe and efficient delivery.',
    image: '/assets/projects/kilbarrack-health-centre/01.webp',
    gallery: ['/assets/projects/kilbarrack-health-centre/01.webp', '/assets/projects/kilbarrack-health-centre/02.webp', '/assets/projects/kilbarrack-health-centre/03.webp', '/assets/projects/kilbarrack-health-centre/04.webp', '/assets/projects/kilbarrack-health-centre/05.webp', '/assets/projects/kilbarrack-health-centre/06.webp'],
    featured: false,
  },
  {
    slug: 'lucan-health-centre',
    title: 'Lucan Health Centre',
    client: 'Viterbi Ltd',
    sector: 'healthcare',
    status: 'completed',
    location: 'Lucan',
    year: '2019',
    description:
      'This project involved the partial demolition of an existing structure and the construction of a new two-storey health centre on Main Street, Lucan.',
    longDescription:
      'This project involved the partial demolition of an existing structure and the construction of a new two-storey health centre on Main Street, Lucan.\n\nThe development included a full change of use from commercial premises to a modern healthcare facility, incorporating new building works, upgraded façades, and associated site improvements. Delivered in a prominent town centre location, the project provides a high-quality, purpose-built medical environment.',
    image: '/assets/projects/lucan-health-centre/01.webp',
    gallery: ['/assets/projects/lucan-health-centre/01.webp', '/assets/projects/lucan-health-centre/02.webp', '/assets/projects/lucan-health-centre/03.webp', '/assets/projects/lucan-health-centre/04.webp', '/assets/projects/lucan-health-centre/05.webp', '/assets/projects/lucan-health-centre/06.webp'],
    featured: false,
  },
  {
    slug: 'irish-nursing-centre-ballivor',
    title: 'Irish Nursing Centre, Ballivor',
    client: 'Narconon Trust',
    sector: 'healthcare',
    status: 'completed',
    location: 'Ballivor',
    year: '2019',
    description:
      'This project involved the refurbishment and extension of an existing building to deliver a modern nursing home facility in Ballivor, Co. Meath.',
    longDescription:
      'This project involved the refurbishment and extension of an existing building to deliver a modern nursing home facility in Ballivor, Co. Meath. The works included full building upgrades, new construction, mechanical and electrical installations, and associated site development and landscaping.\n\nDelivered on a town centre site, the scheme provides a high-quality, purpose-built healthcare environment.',
    image: '/assets/projects/irish-nursing-centre-ballivor/01.webp',
    gallery: ['/assets/projects/irish-nursing-centre-ballivor/01.webp'],
    featured: false,
  },
  {
    slug: 'donabate',
    title: 'Donabate',
    client: 'AGC Capital Donabate Ltd',
    sector: 'residential',
    status: 'current',
    location: 'Donabate',
    year: '2026',
    description:
      'Construction of a large-scale residential development comprising 163 apartments across three six-storey blocks, with a mix of one, two, and three-bedroom units.',
    longDescription:
      'Construction of a large-scale residential development comprising 163 apartments across three six-storey blocks, with a mix of one, two, and three-bedroom units.\n\nThe scheme is built over a podium slab with basement car parking for 88 vehicles and extensive bicycle storage. Landscaped podium and external areas include communal open spaces and dedicated children’s play areas, delivering a high-quality living environment.',
    image: '/assets/projects/donabate/01.webp',
    gallery: ['/assets/projects/donabate/01.webp', '/assets/projects/donabate/02.webp', '/assets/projects/donabate/03.webp'],
    featured: false,
  },
  {
    slug: 'circle-housing-inchicore',
    title: 'Circle Housing, Inchicore',
    client: 'Circle Housing',
    sector: 'residential',
    status: 'completed',
    location: 'Dublin',
    year: '2025',
    description:
      'This project involves the construction of a 52-unit “Housing with Supports” development, providing high-quality, accessible residential accommodation with associated site works and infrastructure.',
    longDescription:
      'This project involves the construction of a 52-unit “Housing with Supports” development, providing high-quality, accessible residential accommodation with associated site works and infrastructure.\n\nDelivered under a Public Works Contract, the scheme is designed to meet modern standards for quality, safety, and performance, with a structured approach to construction and project delivery.\n\nOverall, the project represents a significant investment in supported housing, combining modern construction standards with a strong contractual framework to ensure efficient and high-quality delivery.',
    image: '/assets/projects/circle-housing-inchicore/01.webp',
    gallery: ['/assets/projects/circle-housing-inchicore/01.webp', '/assets/projects/circle-housing-inchicore/02.webp', '/assets/projects/circle-housing-inchicore/03.webp', '/assets/projects/circle-housing-inchicore/04.webp', '/assets/projects/circle-housing-inchicore/05.webp', '/assets/projects/circle-housing-inchicore/06.webp'],
    featured: true,
  },
  {
    slug: 'st-marys-mansions-dublin-1',
    title: 'St. Mary\'s Mansions, Dublin 1',
    client: 'Cluid Housing Association',
    sector: 'residential',
    status: 'completed',
    location: 'Dublin 1',
    year: '2019',
    description:
      'This project involved the refurbishment, restoration, and retrofit of an existing social housing complex, including the addition of two new floors to create a six-storey building with 80 apartments.',
    longDescription:
      'This project involved the refurbishment, restoration, and retrofit of an existing social housing complex, including the addition of two new floors to create a six-storey building with 80 apartments. The scheme also introduced external balconies and internal walkway balconies with modern glass balustrading.\n\nSignificant upgrades were made to improve energy performance to A2 rating, including the installation of rooftop PV panels to support NZEB standards. External works included new car parking and a fully equipped play area.\n\nDelivered within a constrained city centre site, the project provides a modernised, energy-efficient residential environment completed to a high standard.',
    image: '/assets/projects/st-marys-mansions-dublin-1/01.webp',
    gallery: ['/assets/projects/st-marys-mansions-dublin-1/01.webp', '/assets/projects/st-marys-mansions-dublin-1/02.webp', '/assets/projects/st-marys-mansions-dublin-1/03.webp', '/assets/projects/st-marys-mansions-dublin-1/04.webp', '/assets/projects/st-marys-mansions-dublin-1/05.webp', '/assets/projects/st-marys-mansions-dublin-1/06.webp'],
    featured: false,
  },
  {
    slug: 'scarlet-street-drogheda',
    title: 'Tooting Meadow, Scarlet Street, Drogheda',
    client: 'North & East Housing Association',
    sector: 'residential',
    status: 'completed',
    location: 'Drogheda',
    year: '2020',
    description:
      'This project involved the construction of ten sustainable apartments and five townhouses within a busy, built-up area of Drogheda town centre.',
    longDescription:
      'This project involved the construction of ten sustainable apartments and five townhouses within a busy, built-up area of Drogheda town centre.\n\nThe works included demolition, asbestos removal, site enabling works, and full construction using reinforced concrete, brick, and precast elements, alongside green roof systems and SUDS infrastructure. Extensive coordination was required for traffic and pedestrian management throughout the build.\n\nDelivered on time and within budget, the project achieved a high standard of sustainability and was recognised with the RIAI Public Choice Award in 2020.',
    image: '/assets/projects/scarlet-street-drogheda/01.webp',
    gallery: ['/assets/projects/scarlet-street-drogheda/01.webp', '/assets/projects/scarlet-street-drogheda/02.webp', '/assets/projects/scarlet-street-drogheda/03.webp', '/assets/projects/scarlet-street-drogheda/04.webp', '/assets/projects/scarlet-street-drogheda/05.webp', '/assets/projects/scarlet-street-drogheda/06.webp'],
    featured: false,
  },
  {
    slug: 'arden-road-mixed-use-development-tullamore',
    title: 'Arden Road, Mixed Use Development, Tullamore',
    client: 'Cayenne Holdings/Kane & Carberry',
    sector: 'residential',
    status: 'completed',
    location: 'Tullamore',
    year: '2020',
    description:
      'This project comprised a mixed-use development including two retail units and 21 residential apartments, supported by a reinforced concrete basement car park extending across the full site.',
    longDescription:
      'This project comprised a mixed-use development including two retail units and 21 residential apartments, supported by a reinforced concrete basement car park extending across the full site.\n\nThe apartments were fully fitted with modern kitchens and bedroom furniture, while the building achieved a high A2 BER energy rating. External areas were completed in line with landscape design proposals, incorporating raised planter beds, water features, street furniture, and roof gardens.\n\nDelivered on time and within budget, the scheme provides a high-quality residential and retail environment finished to a strong standard.',
    image: '/assets/projects/arden-road-mixed-use-development-tullamore/01.webp',
    gallery: ['/assets/projects/arden-road-mixed-use-development-tullamore/01.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/02.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/03.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/04.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/05.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/06.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/07.webp', '/assets/projects/arden-road-mixed-use-development-tullamore/08.webp'],
    featured: false,
  },
  {
    slug: 'the-galleries-donabate',
    title: 'The Galleries, Donabate',
    client: 'Wynn Clons Development Ltd',
    sector: 'residential',
    status: 'completed',
    location: 'Donabate',
    year: '2020',
    description:
      'This project comprises The Galleries Residential Development in Donabate, Co. Dublin, delivering 48 apartments across two blocks on a brownfield site. The scheme includes a reinforced concrete frame structure with a basement car park, alongside full site development works.',
    longDescription:
      'This project comprises The Galleries Residential Development in Donabate, Co. Dublin, delivering 48 apartments across two blocks on a brownfield site. The scheme includes a reinforced concrete frame structure with a basement car park, alongside full site development works.\n\nWorks involved demolition, piling, concrete construction, brick and blockwork, green roofs, and full M&E installation, as well as extensive hard and soft landscaping. Located adjacent to the Dublin–Belfast railway line, the project required careful coordination within a busy urban setting.\n\nCompleted to a high standard, the development provides a modern residential environment supported by quality finishes, infrastructure, and landscaped surroundings.',
    image: '/assets/projects/the-galleries-donabate/01.webp',
    gallery: ['/assets/projects/the-galleries-donabate/01.webp', '/assets/projects/the-galleries-donabate/02.webp', '/assets/projects/the-galleries-donabate/03.webp'],
    featured: false,
  },
  {
    slug: 'arbour-hill-apartments',
    title: 'Arbour Hill Apartments',
    client: 'Dublin Simon Community',
    sector: 'residential',
    status: 'completed',
    location: 'Dublin',
    year: '2025',
    description:
      'The construction of 14 social housing units at Arbour Hill, Dublin 7, delivers a high-quality residential development within a constrained inner-city site. The project comprises new-build housing along with associated site works, services, and infrastructure.',
    longDescription:
      'The construction of 14 social housing units at Arbour Hill, Dublin 7, delivers a high-quality residential development within a constrained inner-city site. The project comprises new-build housing along with associated site works, services, and infrastructure.\n\nCareful planning and stakeholder engagement were central to delivery, ensuring minimal disruption to neighbouring residents and local traffic. The scheme provides much-needed social housing in a well-connected urban location, built to modern standards and fully coordinated across all structural and MEP elements.',
    image: '/assets/projects/arbour-hill-apartments/01.webp',
    gallery: ['/assets/projects/arbour-hill-apartments/01.webp', '/assets/projects/arbour-hill-apartments/02.webp', '/assets/projects/arbour-hill-apartments/03.webp', '/assets/projects/arbour-hill-apartments/04.webp', '/assets/projects/arbour-hill-apartments/05.webp', '/assets/projects/arbour-hill-apartments/06.webp'],
    featured: false,
  },
  {
    slug: 'room2-hotel-belfast',
    title: 'Room2 Hotel, Belfast',
    client: 'Lamington Group',
    sector: 'hotel-leisure',
    status: 'completed',
    location: 'Belfast',
    year: '2025',
    description:
      'This project involves the development of a new hotel in Belfast, delivered for the room2 brand, providing 175 bedrooms along with bar, restaurant, lounge, and meeting spaces.',
    longDescription:
      'This project involves the development of a new hotel in Belfast, delivered for the room2 brand, providing 175 bedrooms along with bar, restaurant, lounge, and meeting spaces.\n\nConstructed on the site of a former office building, the scheme features a reinforced concrete frame with a mix of composite cladding and brickwork. The design includes a variety of internal spaces and amenities arranged over nine floors, with high-quality finishes throughout.\n\nSustainability is central to the project, with energy-efficient systems, solar power, and reused materials incorporated to support a low-carbon, modern hospitality environment.',
    image: '/assets/projects/room2-hotel-belfast/01.webp',
    gallery: ['/assets/projects/room2-hotel-belfast/01.webp', '/assets/projects/room2-hotel-belfast/02.webp', '/assets/projects/room2-hotel-belfast/03.webp', '/assets/projects/room2-hotel-belfast/04.webp', '/assets/projects/room2-hotel-belfast/05.webp'],
    featured: false,
  },
  {
    slug: 'hamilton-dock-hotel-belfast',
    title: 'Hamilton Dock Hotel, Belfast',
    client: 'JMK',
    sector: 'hotel-leisure',
    status: 'current',
    location: 'Belfast',
    year: '2026',
    description:
      'Construction of a landmark dual-branded Marriott hotel development in Belfast’s Titanic Quarter, comprising a total of 228 bedrooms, including 135 Aloft hotel rooms and 93 Residence Inn aparthotel suites designed for extended stays.',
    longDescription:
      'Construction of a landmark dual-branded Marriott hotel development in Belfast’s Titanic Quarter, comprising a total of 228 bedrooms, including 135 Aloft hotel rooms and 93 Residence Inn aparthotel suites designed for extended stays.\n\nLocated within the heart of the city’s waterfront regeneration area, adjacent to Titanic Belfast and the SSE Arena, the development forms part of the wider transformation of the historic docklands into a major mixed-use destination.\n\nThe project includes a shared ground-floor arrival experience with reception, lobby, and bar/café facilities serving both brands, alongside a fully equipped gym, back-of-house facilities, and integrated car parking. The Residence Inn element provides studio and one-bedroom suites with kitchen and living spaces, while the Aloft hotel delivers a contemporary, technology-driven hospitality offering.\n\nExternally, the scheme incorporates high-quality public realm and landscaped areas, enhancing connectivity within the Titanic Quarter and contributing to the wider urban regeneration strategy. The development is designed to achieve high sustainability standards, targeting BREEAM Excellent and LEED Gold accreditation in line with Marriott’s environmental objectives.',
    image: '/assets/projects/hamilton-dock-hotel-belfast/01.webp',
    gallery: ['/assets/projects/hamilton-dock-hotel-belfast/01.webp'],
    featured: false,
  },
  {
    slug: 'earls-hotel-pembroke-st-dublin',
    title: 'Earls Hotel, Pembroke St, Dublin',
    client: 'Purebuild Ltd',
    sector: 'hotel-leisure',
    status: 'current',
    location: 'Dublin',
    year: '2026',
    description:
      'This project delivers a new 4+ star hotel on Pembroke Street, opposite Fitzwilliam Square, with 112 rooms across eight floors. The design responds to its tight urban context through stepped massing and internal courtyards that maximise daylight and create private terraces.',
    longDescription:
      'This project delivers a new 4+ star hotel on Pembroke Street, opposite Fitzwilliam Square, with 112 rooms across eight floors. The design responds to its tight urban context through stepped massing and internal courtyards that maximise daylight and create private terraces.\n\nPublic spaces include a double-height entrance foyer, bar, and breakfast area, while the façade uses red brick, sandstone, and terracotta to complement neighbouring buildings. Construction is currently underway following site clearance and groundworks.',
    image: '/assets/projects/earls-hotel-pembroke-st-dublin/01.webp',
    gallery: ['/assets/projects/earls-hotel-pembroke-st-dublin/01.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/02.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/03.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/04.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/05.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/06.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/07.webp', '/assets/projects/earls-hotel-pembroke-st-dublin/08.webp'],
    featured: false,
  },
  {
    slug: 'crumlin-nursing-home',
    title: 'Crumlin Nursing Home',
    client: 'Altere Development Managers',
    sector: 'healthcare',
    status: 'current',
    location: 'Dublin',
    year: '2026',
    description:
      'Construction of a 151-bedroom nursing home across four floors, providing modern, purpose-built residential care facilities.',
    longDescription:
      'Construction of a 151-bedroom nursing home across four floors, providing modern, purpose-built residential care facilities.\n\nThe development includes full clinical and support accommodation such as commercial kitchens, laundry facilities, day rooms, and nursing stations. External works feature a landscaped courtyard garden to the rear, with car parking and bicycle storage provided to the front.',
    image: '/assets/projects/crumlin-nursing-home/01.webp',
    gallery: ['/assets/projects/crumlin-nursing-home/01.webp'],
    featured: false,
  },
  {
    slug: 'louth-gaa-stadium',
    title: 'Louth GAA Stadium',
    client: 'Louth GAA',
    sector: 'hotel-leisure',
    status: 'current',
    location: 'Dundalk',
    year: '2026',
    description:
      'Construction of a new state-of-the-art GAA stadium in Dundalk, providing a permanent home for Louth county teams and a key sporting and community facility for the region.',
    longDescription:
      'Construction of a new state-of-the-art GAA stadium in Dundalk, providing a permanent home for Louth county teams and a key sporting and community facility for the region.\n\nThe development is being delivered in phases and will ultimately provide a 14,000-capacity stadium, including a covered seated stand, standing terraces, full-size playing pitch, modern floodlighting, and supporting facilities such as dressing rooms, ancillary accommodation, and car parking.\n\nPhase one delivers the core stadium infrastructure, including a 4,000+ seat stand, pitch, and essential facilities, with further phases enhancing capacity and amenities through additional terraces and training facilities.\n\nLocated in Dundalk, the project forms a major investment in sports infrastructure and is designed to support both elite county-level competition and wider community use, contributing to the long-term development of Gaelic Games in the region.',
    image: '/assets/projects/louth-gaa-stadium/01.webp',
    gallery: ['/assets/projects/louth-gaa-stadium/01.webp'],
    featured: false,
  },
  {
    slug: 'kilbride-education-campus',
    title: 'Kilbride Education Campus',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'current',
    location: 'Arklow',
    year: '2026',
    description:
      'Construction of a new educational campus at Kilbride, Arklow, comprising a three-storey post-primary school for approximately 350 pupils and a two-storey 16-classroom primary school, together with associated external works on a greenfield site.',
    longDescription:
      'Construction of a new educational campus at Kilbride, Arklow, comprising a three-storey post-primary school for approximately 350 pupils and a two-storey 16-classroom primary school, together with associated external works on a greenfield site.\n\nThe development includes full site clearance and preparation, installation of construction compounds and access routes, and the delivery of all civil and building works including earthworks, reinforced concrete foundations, structural frame, precast elements, blockwork, and full mechanical and electrical installations.\n\nExternal works form a significant element of the project and include new car parking areas, hard and soft play areas, drainage infrastructure, a foul pumping station, and the construction of new internal and external road networks with dedicated access and egress arrangements.',
    image: '/assets/projects/kilbride-education-campus/01.webp',
    gallery: ['/assets/projects/kilbride-education-campus/01.webp', '/assets/projects/kilbride-education-campus/02.webp', '/assets/projects/kilbride-education-campus/03.webp', '/assets/projects/kilbride-education-campus/04.webp', '/assets/projects/kilbride-education-campus/05.webp', '/assets/projects/kilbride-education-campus/06.webp', '/assets/projects/kilbride-education-campus/07.webp', '/assets/projects/kilbride-education-campus/08.webp', '/assets/projects/kilbride-education-campus/09.webp'],
    featured: false,
  },
  {
    slug: 'bakers-corner-student-residential',
    title: 'Bakers Corner, Student Residential',
    client: 'Baker forge properties limited',
    sector: 'hotel-leisure',
    status: 'current',
    location: 'Dublin',
    year: '2026',
    description:
      'Construction of a 274-bedroom purpose-built student accommodation development comprising two six-storey blocks arranged around a landscaped courtyard.',
    longDescription:
      'Construction of a 274-bedroom purpose-built student accommodation development comprising two six-storey blocks arranged around a landscaped courtyard.\n\nThe scheme includes a mix of cluster apartments and self-contained studios, all with en-suite facilities, alongside ground-floor retail units. Communal amenities include a gym, study areas, meeting rooms, reception, and a screening space, with landscaped roof terraces enhancing the overall offering.',
    image: '/assets/projects/bakers-corner-student-residential/01.webp',
    gallery: ['/assets/projects/bakers-corner-student-residential/01.webp'],
    featured: false,
  },
  {
    slug: 'james-mcsweeney-house-apartments',
    title: 'James McSweeney House, Apartments',
    client: 'Cabhru Housing Association Services',
    sector: 'residential',
    status: 'current',
    location: 'Dublin',
    year: '2026',
    description:
      'This project involves the construction of James McSweeney House, a new four-storey residential development on a brownfield site at Berkley Street, Dublin 7. The scheme provides 35 one-bedroom apartments along with community rooms and essential building services.',
    longDescription:
      'This project involves the construction of James McSweeney House, a new four-storey residential development on a brownfield site at Berkley Street, Dublin 7. The scheme provides 35 one-bedroom apartments along with community rooms and essential building services.\n\nThe development also includes an ESB substation, plant rooms, external bin stores, and new boundary treatments, alongside landscaping and associated site works to create a well-integrated urban residential environment.',
    image: '/assets/projects/james-mcsweeney-house-apartments/01.webp',
    gallery: ['/assets/projects/james-mcsweeney-house-apartments/01.webp'],
    featured: false,
  },
  {
    slug: 'kolbe-special-school',
    title: 'Kolbe Special School',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'completed',
    location: 'Portlaoise',
    year: '2025',
    description:
      'Construction of a new purpose-built special school at Block Road, Portlaoise, comprising 8 classrooms, a general purpose hall and ancillary accommodation, along with all associated site works.',
    longDescription:
      'Construction of a new purpose-built special school at Block Road, Portlaoise, comprising 8 classrooms, a general purpose hall and ancillary accommodation, along with all associated site works.\n\nDelivered under a Public Works Contract, the project provides modern, high-quality educational facilities tailored to the needs of its users.',
    image: '/assets/projects/kolbe-special-school/01.webp',
    gallery: ['/assets/projects/kolbe-special-school/01.webp', '/assets/projects/kolbe-special-school/02.webp', '/assets/projects/kolbe-special-school/03.webp', '/assets/projects/kolbe-special-school/04.webp', '/assets/projects/kolbe-special-school/05.webp', '/assets/projects/kolbe-special-school/06.webp'],
    featured: false,
  },
  {
    slug: 'edenderry-ambulance-station',
    title: 'Edenderry Ambulance Station',
    client: 'HSE',
    sector: 'healthcare',
    status: 'completed',
    location: 'Edenderry',
    year: '2019',
    description:
      'Construction of a new purpose-built Ambulance Station for the HSE at Edenderry, Co. Offaly. The project comprises a single-storey emergency response facility designed to support frontline ambulance services, including operational accommodation, staff welfare areas and associated ...',
    longDescription:
      'Construction of a new purpose-built Ambulance Station for the HSE at Edenderry, Co. Offaly. The project comprises a single-storey emergency response facility designed to support frontline ambulance services, including operational accommodation, staff welfare areas and associated support spaces. External works include ambulance bays, staff parking, access roads, and all associated site development and infrastructure.\n\nDelivered under a Public Works Contract for Minor Building and Civil Engineering Works, the project was procured by the HSE Mid-Leinster region to enhance emergency response capacity and service delivery within the area.',
    image: '/assets/projects/edenderry-ambulance-station/01.webp',
    gallery: ['/assets/projects/edenderry-ambulance-station/01.webp', '/assets/projects/edenderry-ambulance-station/02.webp', '/assets/projects/edenderry-ambulance-station/03.webp', '/assets/projects/edenderry-ambulance-station/04.webp', '/assets/projects/edenderry-ambulance-station/05.webp'],
    featured: false,
  },
  {
    slug: 'crematorium',
    title: 'Crematorium',
    client: 'Antrim & Newtownabbey Borough Council',
    sector: 'commercial',
    status: 'completed',
    location: 'Newtownabbey',
    year: '2023',
    description:
      'This project is the second crematorium built in Northern Ireland since Roselawn in 1961, providing a much-needed, state-of-the-art facility for families and mourners. It includes a chapel, memorial garden, and columbarium for the interment of ashes.',
    longDescription:
      'This project is the second crematorium built in Northern Ireland since Roselawn in 1961, providing a much-needed, state-of-the-art facility for families and mourners. It includes a chapel, memorial garden, and columbarium for the interment of ashes.\n\nSet within a parkland landscape, the single-storey building is approached by a tree-lined avenue overlooking a central lake. Walking paths, wildflower meadows, and seating areas create a peaceful setting for reflection.\n\nThe scheme also includes car parking, improved access from Doagh Road, and a carefully designed landscape centred around a feature water element. As the planting matures, the site will develop into a serene and dignified space for remembrance.',
    image: '/assets/projects/crematorium/01.webp',
    gallery: ['/assets/projects/crematorium/01.webp', '/assets/projects/crematorium/02.webp', '/assets/projects/crematorium/03.webp', '/assets/projects/crematorium/04.webp', '/assets/projects/crematorium/05.webp', '/assets/projects/crematorium/06.webp', '/assets/projects/crematorium/07.webp'],
    featured: false,
  },
  {
    slug: 'hse-ndc-tullamore',
    title: 'HSE NDC Tullamore',
    client: 'HSE',
    sector: 'healthcare',
    status: 'completed',
    location: 'Tullamore',
    year: '2020',
    description:
      'Construction of the HSE National Distribution Centre at Burlington Business Park, Tullamore, Co. Offaly, delivering a high-quality industrial and logistics facility with associated external works, access infrastructure, and site services.',
    longDescription:
      'Construction of the HSE National Distribution Centre at Burlington Business Park, Tullamore, Co. Offaly, delivering a high-quality industrial and logistics facility with associated external works, access infrastructure, and site services.\n\nDelivered within a live commercial environment, the project required careful planning and coordination to minimise disruption. Works were executed in phased sequences, supported by controlled site access and just-in-time deliveries to suit the constrained site conditions.\n\nThe scheme incorporated internal warehouse works and external construction activities, with temporary works solutions implemented where required to facilitate safe and efficient delivery.\n\nA strong focus on health & safety, quality control, and stakeholder engagement ensured effective management of traffic, noise, and environmental impacts throughout.\n\nDelivered through a structured and collaborative approach, the project achieved a safe, efficient, and high-quality outcome in line with client and regulatory requirements.',
    image: '/assets/projects/hse-ndc-tullamore/01.webp',
    gallery: ['/assets/projects/hse-ndc-tullamore/01.webp', '/assets/projects/hse-ndc-tullamore/02.webp', '/assets/projects/hse-ndc-tullamore/03.webp', '/assets/projects/hse-ndc-tullamore/04.webp', '/assets/projects/hse-ndc-tullamore/05.webp'],
    featured: false,
  },
  {
    slug: 'ryanair-training-centre',
    title: 'Ryanair Training Centre, Cafe & Simulation Building',
    client: 'Ryanair',
    sector: 'commercial',
    status: 'completed',
    location: 'Dublin',
    year: '2021',
    description:
      'This project involved the refurbishment, restoration, and fit-out of an existing Ryanair facility at Dublin Airport, alongside the construction of a new single-storey building housing two flight simulators.',
    longDescription:
      'This project involved the refurbishment, restoration, and fit-out of an existing Ryanair facility at Dublin Airport, alongside the construction of a new single-storey building housing two flight simulators. A connecting skyway links the new structure to the existing building, which also includes bespoke training classrooms.\n\nWorks included reinforced concrete construction, steel structures, precast flooring, cladding, and high-performance glazing, as well as a full M&E installation and commissioning. Careful coordination was required to protect sensitive simulator equipment throughout.\n\nThe completed facility provides a modern, purpose-built training environment delivered to a high standard.',
    image: '/assets/projects/ryanair-training-centre/01.webp',
    gallery: ['/assets/projects/ryanair-training-centre/01.webp', '/assets/projects/ryanair-training-centre/02.webp', '/assets/projects/ryanair-training-centre/03.webp', '/assets/projects/ryanair-training-centre/04.webp', '/assets/projects/ryanair-training-centre/05.webp', '/assets/projects/ryanair-training-centre/06.webp', '/assets/projects/ryanair-training-centre/07.webp', '/assets/projects/ryanair-training-centre/08.webp'],
    featured: false,
  },
  {
    slug: 'ryevale-nursing-home',
    title: 'Ryevale Nursing Home',
    client: 'Ryevale Nursing Home',
    sector: 'healthcare',
    status: 'completed',
    location: 'Leixlip',
    year: '2019',
    description:
      'Refurbishment, partial demolition, and extension of the existing Ryevale Nursing Home in Leixlip, Co. Kildare, delivering significant new accommodation and upgraded facilities.',
    longDescription:
      'Refurbishment, partial demolition, and extension of the existing Ryevale Nursing Home in Leixlip, Co. Kildare, delivering significant new accommodation and upgraded facilities.\n\nThe project was delivered in a live operational environment, requiring phased construction, careful coordination, and strict safety controls to minimise disruption to residents and staff.\n\nThe completed scheme provides a modern, expanded care facility built to a high standard.',
    image: '/assets/projects/ryevale-nursing-home/01.webp',
    gallery: ['/assets/projects/ryevale-nursing-home/01.webp', '/assets/projects/ryevale-nursing-home/02.webp'],
    featured: false,
  },
  {
    slug: 'dundalk-driver-test-centre',
    title: 'Dundalk Driver Test Centre',
    client: 'OPW Ireland',
    sector: 'commercial',
    status: 'completed',
    location: 'Dundalk',
    year: '2019',
    description:
      'Construction of a new all-category Driver Testing Centre at the former Customs Station site on the Old Newry Road, Dundalk, Co. Louth. The development comprises a single-storey test centre building (approx.',
    longDescription:
      'Construction of a new all-category Driver Testing Centre at the former Customs Station site on the Old Newry Road, Dundalk, Co. Louth. The development comprises a single-storey test centre building (approx. 612 sqm), extensive hardstanding areas for vehicle manoeuvring and testing, car and HGV parking, motorcycle testing facilities, and associated site infrastructure including access roads, lighting, signage, boundary treatments and landscaping.\n\nDelivered under a Public Works Contract for Minor Building and Civil Engineering Works, the project provides a modern, purpose-built facility to support the Road Safety Authority’s driver testing operations.',
    image: '/assets/projects/dundalk-driver-test-centre/01.webp',
    gallery: ['/assets/projects/dundalk-driver-test-centre/01.webp'],
    featured: false,
  },
  {
    slug: 'the-keep',
    title: 'The Keep',
    client: 'Alterity Developments',
    sector: 'commercial',
    status: 'completed',
    location: 'Belfast',
    year: '2022',
    description:
      'Refurbishment and redevelopment of a prominent city centre building, formerly occupied by BHS, transforming the space into a modern mixed-use development.',
    longDescription:
      'Refurbishment and redevelopment of a prominent city centre building, formerly occupied by BHS, transforming the space into a modern mixed-use development.\n\nThe project included the reconfiguration of the ground floor into multiple retail units, along with a partial change of use on the upper floors to accommodate leisure uses. Significant façade upgrades were delivered along Castle Lane, Castle Arcade, and Cornmarket, alongside internal alterations to improve layout and circulation.',
    image: '/assets/projects/the-keep/01.webp',
    gallery: ['/assets/projects/the-keep/01.webp', '/assets/projects/the-keep/02.webp', '/assets/projects/the-keep/03.webp', '/assets/projects/the-keep/04.webp'],
    featured: false,
  },
  {
    slug: 'lidl-castlereagh',
    title: 'Lidl Castlereagh',
    client: 'Lidl',
    sector: 'commercial',
    status: 'completed',
    location: 'Castlereagh',
    year: '2022',
    description:
      'Construction of a new Lidl retail store, including all associated site development and infrastructure works.',
    longDescription:
      'Construction of a new Lidl retail store, including all associated site development and infrastructure works.\n\nThe project comprises full groundworks, car parking, access roads, drainage systems, and landscaping, along with the complete installation of mechanical and electrical services to deliver a modern, fully operational retail environment.\n\nExternal works also included upgrades to the surrounding road network, with the introduction of a new junction, right-hand turn lane, and traffic light system to improve traffic flow along Montgomery Road and Castlereagh Road.',
    image: '/assets/projects/lidl-castlereagh/01.webp',
    gallery: [
      '/assets/projects/lidl-castlereagh/01.webp',
      '/assets/projects/lidl-castlereagh/02.webp',
      '/assets/projects/lidl-castlereagh/03.webp',
      '/assets/projects/lidl-castlereagh/04.webp',
      '/assets/projects/lidl-castlereagh/05.webp',
      '/assets/projects/lidl-castlereagh/06.webp',
    ],
    featured: false,
  },
  {
    slug: 'lidl-boucher-road',
    title: 'Lidl Boucher Road',
    client: 'Lidl NI',
    sector: 'commercial',
    status: 'completed',
    location: 'Belfast',
    year: '2025',
    description:
      'Construction of a new flagship Lidl store at Boucher Road, South Belfast, representing a significant investment in the region’s retail infrastructure.',
    longDescription:
      'Construction of a new flagship Lidl store at Boucher Road, South Belfast, representing a significant investment in the region’s retail infrastructure.\n\nLocated within one of Belfast’s retail corridors, the development delivers a modern, state-of-the-art supermarket designed to Lidl’s latest specifications, providing high-quality retail space for customers and staff.\n\nThe project forms part of Lidl’s continued expansion across Northern Ireland, enhancing local retail provision and contributing to the ongoing development of the Boucher Road area.',
    image: '/assets/projects/lidl-boucher-road/01.webp',
    gallery: [
      '/assets/projects/lidl-boucher-road/01.webp',
      '/assets/projects/lidl-boucher-road/02.webp',
      '/assets/projects/lidl-boucher-road/03.webp',
      '/assets/projects/lidl-boucher-road/04.webp',
      '/assets/projects/lidl-boucher-road/05.webp',
      '/assets/projects/lidl-boucher-road/06.webp',
    ],
    featured: false,
  },
  {
    slug: 'lidl-newry',
    title: 'Lidl Newry',
    client: 'Lidl NI',
    sector: 'commercial',
    status: 'completed',
    location: 'Newry',
    year: '2021',
    description:
      'Fit-out and redevelopment of a new Lidl store within the Buttercrane Shopping Centre, transforming a long-vacant retail unit in the heart of Newry city.',
    longDescription:
      'Fit-out and redevelopment of a new Lidl store within the Buttercrane Shopping Centre, transforming a long-vacant retail unit in the heart of Newry city.\n\nThe 2,190m² store includes a spacious sales area, modern retail layout, and Lidl’s latest concept design, incorporating wide aisles, enhanced customer facilities, and improved staff amenities.\n\nThe project delivers a high-quality shopping environment with upgraded features including an expanded bakery offering and in-store coffee facilities, contributing to the revitalisation of a key city centre location.',
    image: '/assets/projects/lidl-newry/01.webp',
    gallery: ['/assets/projects/lidl-newry/01.webp'],
    featured: false,
    hidden: true,
  },
  {
    slug: 'st-josephs-mercy-primary-school-navan',
    title: 'St. Joseph\'s Mercy Primary School',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'current',
    location: 'Navan',
    year: '2026',
    description:
      'Extension and refurbishment of the existing school campus, delivering upgraded teaching facilities within a live operational environment.',
    longDescription:
      'The project at St. Joseph’s Mercy Primary School comprises a significant extension and refurbishment of the existing school campus, delivering upgraded teaching facilities within a live operational environment.\n\nThe works include the demolition of an existing two-storey toilet block, GP hall annex, and associated structures, alongside the removal of prefabricated accommodation. A new 8-classroom extension with ancillary teaching and support spaces will be constructed, while the existing school building will undergo a comprehensive refurbishment to provide 10 upgraded classrooms and modernised facilities throughout.\n\nThe development also incorporates associated site works, including landscaping and external improvements, enhancing the overall school environment. The project is carefully phased to ensure the school remains fully operational during construction, requiring detailed coordination and management within a live educational setting.',
    image: '/assets/projects/st-josephs-mercy-primary-school-navan/01.webp',
    gallery: ['/assets/projects/st-josephs-mercy-primary-school-navan/01.webp'],
    featured: false,
  },
  {
    slug: 'st-thomas-jns-tallaght',
    title: 'St. Thomas JNS Tallaght',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'current',
    location: 'Dublin',
    year: '2026',
    description:
      'Redevelopment of St. Thomas’ Junior National School under the Department of Education’s ADAPT Schools Programme, delivering a modern, purpose-built primary school campus.',
    longDescription:
      'The redevelopment of St. Thomas’ Junior National School forms part of the Department of Education’s ADAPT Schools Programme, delivering a modern, purpose-built primary school campus.\n\nThe project comprises the demolition of the existing school buildings and the construction of a new c. 4,998 sq.m part two- and three-storey primary school. The new facility will provide 27 mainstream classrooms, a 3-class Special Educational Needs (SEN) unit, and a full range of ancillary teaching and support spaces.\n\nWorks also include the provision of temporary accommodation to enable phased construction on a live school site, ensuring uninterrupted operation throughout the build programme.\n\nExternally, the development incorporates new play areas, staff parking, set-down spaces, cycle parking, boundary upgrades, and full site landscaping, along with associated infrastructure and service connections.\n\nDelivered under a Public Works Contract, the scheme is carefully phased to facilitate safe construction within an active school environment while delivering a high-quality, future-focused learning facility.',
    image: '/assets/projects/st-thomas-jns-tallaght/01.webp',
    gallery: ['/assets/projects/st-thomas-jns-tallaght/01.webp'],
    featured: false,
  },
  {
    slug: 'st-catherines-kilcoole',
    title: 'St. Catherine\'s, Kilcoole',
    client: 'Department of Education and Skills',
    sector: 'education',
    status: 'current',
    location: 'Kilcoole',
    year: '2026',
    description:
      'A new purpose-built c. 6,250 m² special educational needs school, designed to accommodate approximately 158 pupils within a modern, inclusive learning environment.',
    longDescription:
      'A new purpose-built c. 6,250 m² special educational needs school, designed to accommodate approximately 158 pupils within a modern, inclusive learning environment.\n\nThe development comprises a split-level, two-storey building arranged in two interconnected blocks, delivering 25 classrooms alongside a comprehensive suite of specialist teaching, therapy, and support spaces. A key feature of the project is the inclusion of a hydrotherapy pool, supporting the complex needs of students.\n\nThe scheme also includes extensive external works, incorporating dedicated set-down and circulation areas for minibuses and vehicles, 102 car parking spaces, a range of play and sensory environments including soft play areas, a ballcourt, and a multisensory garden, along with associated landscaping, site infrastructure, and access roads.\n\nThis project represents a significant investment in specialist education infrastructure, combining high-quality architectural design with tailored clinical and educational facilities to support a diverse student population.',
    image: '/assets/projects/st-catherines-kilcoole/01.webp',
    gallery: ['/assets/projects/st-catherines-kilcoole/01.webp'],
    featured: false,
  },
  {
    slug: 'kilcoole-nursing-home',
    title: 'Kilcoole Nursing Home',
    client: 'Altere Development Managers',
    sector: 'healthcare',
    status: 'current',
    location: 'Kilcoole',
    year: '2026',
    description:
      'Construction of a 109-bedroom nursing home across three floors, providing modern, purpose-built residential care facilities.',
    longDescription:
      'Construction of a 109-bedroom nursing home across three floors, providing modern, purpose-built residential care facilities.\n\nThe development includes full clinical and support accommodation such as commercial kitchens, laundry facilities, day rooms, and nursing stations. External works feature a landscaped courtyard garden to the rear, with car parking and bicycle storage provided to the front.',
    image: '/assets/projects/kilcoole-nursing-home/01.webp',
    gallery: ['/assets/projects/kilcoole-nursing-home/01.webp'],
    featured: false,
  },
]

export const visibleProjects: readonly Project[] = projects.filter((p) => !p.hidden)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured && !project.hidden)
}

export function getProjectsBySector(sector: Sector): Project[] {
  return projects.filter((project) => project.sector === sector && !project.hidden)
}
