import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import TeamGrid from '@/components/ui/team-card'
import { team } from '@/lib/data/team'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description:
    'Learn about Ganson Building & Civil Engineering — founded in 2003, delivering construction excellence across Ireland and the UK.',
}

const founders = team.slice(0, 2)
const leadership = team.slice(2)

const values = [
  {
    number: '01',
    title: 'Safety',
    description:
      'We are committed to a zero-harm culture on every site we operate. Our ISO 45001 certified health and safety management system, combined with rigorous training and leadership from the boardroom to the site, has delivered an industry-leading safety record. Every person on a Ganson site goes home safe, every day.',
  },
  {
    number: '02',
    title: 'Quality',
    description:
      'Our ISO 9001 certified quality management system underpins everything we do. We apply Total Quality Management principles across every project, from pre-construction planning through to handover, ensuring consistent delivery to the highest standards. Quality is not an afterthought — it is embedded in our culture.',
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
        <div className="absolute inset-0 bg-navy/70" />
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
          {/* Oversized heading with red accent */}
          <ScrollReveal>
            <div className="mb-12 flex items-center gap-6 md:mb-16">
              <div className="h-px w-12 bg-brand-red md:w-20" />
              <span className="font-body text-sm uppercase tracking-widest text-brand-red">
                Est. 2003
              </span>
            </div>
            <h2 className="font-display text-4xl leading-none text-navy md:text-5xl lg:text-6xl">
              Our Story
            </h2>
          </ScrollReveal>

          {/* Lead paragraph — large editorial intro */}
          <ScrollReveal delay={0.15}>
            <p className="mt-10 max-w-5xl border-l-2 border-brand-red pl-6 font-display text-2xl leading-snug text-navy/90 md:mt-14 md:pl-8 md:text-3xl lg:text-4xl">
              Ganson is one of Ireland and the UK&apos;s most progressive
              building contractors, delivering large-scale and complex
              projects across both jurisdictions.
            </p>
          </ScrollReveal>

          {/* Supporting text — single column with dividers */}
          <div className="mt-12 max-w-3xl md:mt-16">
            <div className="space-y-8 border-l-2 border-sand pl-8 md:pl-10">
              <ScrollReveal delay={0.25}>
                <p className="font-body text-lg leading-relaxed text-dark-grey">
                  Founded in 2003 by Paul McQuaid and David Rogers, both Civil
                  Engineering graduates of Queen&apos;s University Belfast,
                  Ganson was built on a singular vision: to redefine industry
                  standards through technical excellence and genuine partnership.
                  What began as a small contracting firm has evolved into a
                  premier full-service main contractor, delivering complex
                  projects across multiple sectors in Ireland and the UK.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="font-body text-lg leading-relaxed text-dark-grey">
                  We operate as a leading contractor across a wide range of
                  public and private sector developments, with a proven track
                  record of quality delivery, programme certainty and strong
                  client relationships.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.35}>
                <p className="font-body text-lg leading-relaxed text-dark-grey">
                  Operating from a strategic hub in Dublin and in London, allowing us to serve
                  Ireland and the UK, we provide an agile, multidisciplinary
                  response to the complexities of the modern built environment.
                  Whether through Traditional, Design &amp; Build, or Management
                  Contracting models, our approach is tailored to the unique
                  demands of every project.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="font-body text-lg leading-relaxed text-dark-grey">
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
            <div className="mb-6 flex items-center gap-6">
              <div className="h-px w-12 bg-brand-red md:w-20" />
              <span className="font-body text-sm uppercase tracking-widest text-brand-red">
                Leadership
              </span>
            </div>
            <h2 className="mb-16 font-display text-4xl text-white md:text-5xl">
              Our Founders
            </h2>
          </ScrollReveal>

          <div className="space-y-12 md:space-y-16">
            {founders.map((founder, i) => (
              <ScrollReveal key={founder.name} delay={0.1 * (i + 1)}>
                {i > 0 && <div className="mb-12 h-px bg-white/10 md:mb-16" />}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-12 lg:gap-16">
                  <div className="relative aspect-3/4 w-40 overflow-hidden rounded-sm bg-sand/20 md:w-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-2xl text-white md:text-3xl">
                      {founder.name}
                    </h3>
                    <p className="mt-1 font-body text-sm uppercase tracking-wider text-brand-red">
                      {founder.role}
                    </p>
                    <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-cream/80">
                      {founder.bio}
                    </p>
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
                    <span className="font-display text-6xl font-light text-brand-red/60 md:text-7xl">
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

      {/* Errigal Partnership */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-6">
              <div className="h-px w-12 bg-brand-red md:w-20" />
              <span className="font-body text-sm uppercase tracking-widest text-brand-red">
                Partnership
              </span>
            </div>
            <h2 className="font-display text-3xl text-navy md:text-5xl">
              Ganson &amp; Errigal Group
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 max-w-4xl font-body text-lg leading-relaxed text-dark-grey">
              Ganson&apos;s partnership with Errigal strengthens our ability to
              deliver exceptional results for clients across every project. By
              combining Ganson&apos;s expertise and local knowledge with
              Errigal&apos;s scale, experience, and resources, the partnership
              creates a powerful foundation built on shared values of quality,
              reliability, and innovation. Together, we bring greater capability,
              stability, and opportunity to every project, ensuring our clients
              benefit from the strength of a trusted and collaborative
              relationship.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
