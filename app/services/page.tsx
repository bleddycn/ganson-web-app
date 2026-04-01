import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'

export const metadata = {
  title: 'Services',
  description:
    'Ganson provides construction services across healthcare, education, commercial, retail, tourism, high-tech, refurbishment and civil engineering sectors.',
}

const procurementRoutes = [
  {
    number: '01',
    title: 'Traditional Build',
    description:
      'Under a traditional procurement route, the design is fully developed by the client\'s design team before the contractor is appointed. Ganson delivers the works to a complete set of drawings and specifications, providing certainty on cost and programme while ensuring the client retains full control over design quality and detail.',
  },
  {
    number: '02',
    title: 'Design & Build',
    description:
      'Our Design & Build service provides single-point responsibility for both design and construction, streamlining communication and reducing risk. We manage the entire process from concept through to completion, coordinating architects, engineers and specialist subcontractors to deliver an integrated solution on time and within budget.',
  },
  {
    number: '03',
    title: 'Management Contracting',
    description:
      'As Management Contractor, Ganson acts on behalf of the client to procure, coordinate and manage specialist trade packages. This approach offers maximum flexibility, allowing design development and construction to proceed in parallel while maintaining rigorous cost and quality controls throughout.',
  },
  {
    number: '04',
    title: 'Early Contractor Engagement',
    description:
      'Through Early Contractor Engagement, Ganson joins the project team at pre-construction stage to contribute buildability advice, value engineering, supply chain intelligence and realistic programme development. This collaborative approach reduces risk, improves cost certainty and enables faster, smoother delivery.',
  },
]

const sectorData = [
  {
    name: 'Healthcare',
    description:
      'Delivering acute hospitals, primary care centres, and specialist healthcare facilities with exacting infection control and compliance standards.',
  },
  {
    name: 'Education',
    description:
      'Building modern schools, universities, and research facilities that create inspiring learning environments for students and educators.',
  },
  {
    name: 'Commercial',
    description:
      'Constructing offices, corporate headquarters, and mixed-use developments that meet the demands of contemporary business.',
  },
  {
    name: 'Retail',
    description:
      'Delivering retail parks, shopping centres, and high-street fit-outs with minimal disruption to trading and public access.',
  },
  {
    name: 'Tourism',
    description:
      'Creating hotels, visitor centres, and leisure destinations that enhance Ireland\'s tourism offering and cultural heritage.',
  },
  {
    name: 'High-Tech',
    description:
      'Building cleanrooms, data centres, and advanced manufacturing facilities to the precise tolerances the technology sector demands.',
  },
  {
    name: 'Refurbishment',
    description:
      'Breathing new life into existing buildings through sensitive renovation, extension, and adaptive reuse projects across all sectors.',
  },
  {
    name: 'Civil Engineering',
    description:
      'Delivering infrastructure projects including roads, bridges, drainage, and site development works across Ireland and Northern Ireland.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Pre-Construction',
    description:
      'Every successful project starts with thorough preparation. Our pre-construction team works closely with clients and design teams to review feasibility, develop realistic programmes, prepare detailed cost plans, and identify risks before a single foundation is dug.',
  },
  {
    number: '02',
    title: 'Design Development',
    description:
      'We collaborate with architects, engineers, and specialist consultants to refine designs for buildability, value, and compliance. Our experience across sectors allows us to contribute practical insight that improves outcomes and avoids costly changes during construction.',
  },
  {
    number: '03',
    title: 'Construction',
    description:
      'On site, our experienced project teams deliver with an unwavering focus on quality, safety, and programme. Rigorous planning, proactive subcontractor management, and real-time reporting ensure every project is built to the highest standards.',
  },
  {
    number: '04',
    title: 'Handover',
    description:
      'We manage a structured handover process including commissioning of all building services, comprehensive snagging, preparation of operation and maintenance manuals, and client training. Our aim is a seamless transition from construction to occupation.',
  },
  {
    number: '05',
    title: 'Aftercare',
    description:
      'Our commitment extends well beyond practical completion. We provide responsive defects-period support, planned maintenance guidance, and a dedicated aftercare contact to ensure every building performs as intended for years to come.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/services-hero.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="noise-overlay pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal delay={0.1}>
            <span className="mb-6 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              OUR SERVICES
            </span>
          </ScrollReveal>
          <StaggerText
            text="Expertise across every sector"
            className="text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />
          <ScrollReveal delay={0.5} className="mt-6">
            <p className="max-w-2xl font-body text-lg leading-relaxed text-cream">
              From traditional build to design and build, Ganson delivers
              construction excellence through flexible procurement routes and
              deep sector expertise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Procurement Routes */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              PROCUREMENT
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl text-navy md:text-5xl">
              How We Deliver
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {procurementRoutes.map((route, i) => (
              <ScrollReveal key={route.number} delay={0.1 + i * 0.1}>
                <div className="h-full border border-sand bg-white p-8">
                  <span className="font-display text-4xl text-brand-red">
                    {route.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-navy">
                    {route.title}
                  </h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-dark-grey">
                    {route.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Expertise */}
      <section className="noise-overlay relative overflow-hidden bg-navy py-24 md:py-32">
        {/* Architectural photography background */}
        <Image
          src="/assets/heroes/sectors-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-5"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              SECTORS
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl text-white md:text-5xl">
              Sectors We Serve
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sectorData.map((sector, i) => (
              <ScrollReveal key={sector.name} delay={0.05 + i * 0.05}>
                <div className="h-full border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 h-1 w-12 bg-brand-red" />
                  <h3 className="font-display text-lg text-white">
                    {sector.name}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-cream">
                    {sector.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              DELIVERY
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl text-navy md:text-5xl">
              Our Process
            </h2>
          </ScrollReveal>

          <div className="relative mt-16">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-sand md:left-[23px]" />

            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={0.1 + i * 0.08}>
                  <div className="relative flex gap-8 md:gap-12">
                    {/* Number node */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center bg-ivory md:h-12 md:w-12">
                      <span className="font-display text-2xl text-brand-red md:text-3xl">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pb-2 pt-1">
                      <h3 className="font-display text-xl text-navy md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-2xl font-body text-base leading-relaxed text-dark-grey">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
