import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import TeamGrid from '@/components/ui/team-card'
import { team } from '@/lib/data/team'
import { clients } from '@/lib/data/clients'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description:
    'Learn about Ganson Building & Civil Engineering — founded in 2004, delivering construction excellence across Ireland and the UK.',
}

const founders = team.slice(0, 2)
const leadership = team.slice(2)

const values = [
  {
    number: '01',
    title: 'Quality',
    description:
      'Our ISO 9001 certified quality management system underpins everything we do. We apply Total Quality Management principles across every project, from pre-construction planning through to handover, ensuring consistent delivery to the highest standards. Quality is not an afterthought — it is embedded in our culture.',
  },
  {
    number: '02',
    title: 'Safety',
    description:
      'We are committed to a zero-harm culture on every site we operate. Our ISO 45001 certified health and safety management system, combined with rigorous training and leadership from the boardroom to the site, has delivered an industry-leading safety record. Every person on a Ganson site goes home safe, every day.',
  },
  {
    number: '03',
    title: 'Sustainability',
    description:
      'Environmental responsibility is central to how we build. Our ISO 14001 certified environmental management system drives continuous improvement in resource efficiency, waste reduction, and carbon footprint management. We work with clients and design teams to deliver buildings that perform for generations.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/about-hero.jpg"
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
              About Us
            </span>
          </ScrollReveal>

          <StaggerText
            text="Modern Construction Specialists"
            className="max-w-3xl text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />

          <ScrollReveal delay={0.5} className="mt-6">
            <p className="max-w-xl text-lg leading-relaxed text-cream">
              One of Ireland&apos;s most trusted building and civil engineering
              firms — our story is one of steady growth, enduring partnerships,
              and a commitment to quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-light bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <h2 className="font-display text-4xl text-navy md:text-5xl">
                Our Story
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <p className="text-lg leading-relaxed text-dark-grey">
                  Ganson is one of Ireland and the UK&apos;s most progressive
                  building contractors, delivering large-scale and complex
                  projects across both jurisdictions. We operate as a leading
                  contractor across a wide range of public and private sector
                  developments, with a proven track record of quality delivery,
                  programme certainty and strong client relationships.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg leading-relaxed text-dark-grey">
                  Founded in 2004 by Paul McQuaid and David Rogers, both Civil
                  Engineering graduates of Queen&apos;s University Belfast,
                  Ganson was built on a singular vision: to redefine industry
                  standards through technical excellence and genuine partnership.
                  What began as a small contracting firm has evolved into a
                  premier full-service main contractor, delivering complex
                  projects across multiple sectors in Ireland and the UK.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg leading-relaxed text-dark-grey">
                  Operating from a strategic hub in Dublin, allowing us to serve
                  Ireland and the UK, we provide an agile, multidisciplinary
                  response to the complexities of the modern built environment.
                  Whether through Traditional, Design &amp; Build, or Management
                  Contracting models, our approach is tailored to the unique
                  demands of every project.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-lg leading-relaxed text-dark-grey">
                  Our commitment to the &ldquo;Ganson Standard&rdquo; offers our
                  clients the ultimate assurance of financial stability,
                  operational precision and integrity.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="noise-overlay section-dark bg-navy py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="mb-16 font-display text-4xl text-white md:text-5xl">
              Our Founders
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder, i) => (
              <ScrollReveal key={founder.name} delay={0.1 * (i + 1)}>
                <div className="overflow-hidden rounded-sm">
                  <div className="relative aspect-square bg-sand/20">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="pt-6">
                    <h3 className="font-display text-2xl text-white">
                      {founder.name}
                    </h3>
                    <p className="mt-1 font-body text-sm uppercase tracking-wider text-brand-red">
                      {founder.role}
                    </p>
                    <p className="mt-4 font-body text-base leading-relaxed text-cream/80">
                      {founder.bio}
                    </p>
                    {founder.qualifications && (
                      <ul className="mt-4 space-y-1">
                        {founder.qualifications.map((q) => (
                          <li
                            key={q}
                            className="font-body text-sm text-cream/60"
                          >
                            {q}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="mb-16 font-display text-4xl text-navy md:text-5xl">
              Our Leadership Team
            </h2>
          </ScrollReveal>

          <TeamGrid members={leadership} />
        </div>
      </section>

      {/* Values Section */}
      <section className="section-dark bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="mb-16 font-display text-4xl text-white md:text-5xl">
              Our Approach
            </h2>
          </ScrollReveal>

          <div className="space-y-16 md:space-y-24">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={0.1 * (i + 1)}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-2">
                    <span className="font-display text-6xl font-light text-brand-red/30 md:text-7xl">
                      {value.number}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-display text-3xl text-white">
                      {value.title}
                    </h3>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-body text-lg leading-relaxed text-cream/80">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-light py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="mb-12 text-center font-display text-3xl text-navy md:text-4xl">
              Trusted Partners
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((client, i) => (
              <ScrollReveal key={client.slug} delay={0.05 * (i + 1)}>
                <div className="flex h-20 items-center justify-center rounded-sm border border-sand bg-white px-4 py-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
