import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import { careers } from '@/lib/data/careers'
import Image from 'next/image'
import JobListings from './job-listings'

export const metadata = {
  title: 'Careers',
  description:
    'Join Ganson Building & Civil Engineering — explore current job openings and build your career with one of Ireland\'s leading construction companies.',
}

const benefits = [
  {
    title: 'Competitive Salary',
    description:
      'We offer market-leading remuneration packages that recognise your skills, experience, and contribution to the team.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="22" width="5" height="6" rx="0.5" />
        <rect x="13.5" y="16" width="5" height="12" rx="0.5" />
        <rect x="23" y="10" width="5" height="18" rx="0.5" />
        <path d="M6.5 18L16 8l4 4 7-7" />
        <path d="M23 5h4v4" />
      </svg>
    ),
  },
  {
    title: 'Professional Development & CPD',
    description:
      'Structured career development programmes, funded training courses, and support towards chartership and professional qualifications.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4L16 20" />
        <path d="M10 14l6-6 6 6" />
        <path d="M8 20h16" />
        <path d="M6 24h20" />
        <path d="M4 28h24" />
      </svg>
    ),
  },
  {
    title: 'Pension Scheme',
    description:
      'Generous employer pension contributions from day one, helping you plan for a secure financial future.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3L4 9v2h24V9L16 3z" />
        <path d="M7 11v12" />
        <path d="M13 11v12" />
        <path d="M19 11v12" />
        <path d="M25 11v12" />
        <path d="M4 23h24v3H4z" />
        <path d="M2 26h28v2H2z" />
      </svg>
    ),
  },
  {
    title: 'Health Insurance',
    description:
      'Comprehensive private health insurance for you and your family, plus income protection and death-in-service benefits.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 28S4 20 4 12a6 6 0 0112-1 6 6 0 0112 1c0 8-12 16-12 16z" />
        <path d="M16 14v6" />
        <path d="M13 17h6" />
      </svg>
    ),
  },
  {
    title: 'Company Vehicle',
    description:
      'Company vehicle or car allowance provided for eligible roles, ensuring you can travel comfortably between sites and offices.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 20l2-6h6l3-4h6l3 4h2a2 2 0 012 2v4H3v-4a2 2 0 012-2z" />
        <path d="M3 20v3a1 1 0 001 1h3a1 1 0 001-1v-3" />
        <path d="M24 20v3a1 1 0 001 1h3a1 1 0 001-1v-3" />
        <circle cx="9" cy="20" r="2" />
        <circle cx="23" cy="20" r="2" />
      </svg>
    ),
  },
  {
    title: 'Flexible Working',
    description:
      'We support work-life balance through flexible working arrangements and generous annual leave entitlements.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="12" />
        <path d="M16 8v8l5 5" />
        <path d="M4 16H2" />
        <path d="M30 16h-2" />
        <path d="M16 4V2" />
        <path d="M16 30v-2" />
      </svg>
    ),
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/careers-hero.jpg"
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
              JOIN OUR TEAM
            </span>
          </ScrollReveal>
          <StaggerText
            text="Build your career with Ganson"
            className="text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />
          <ScrollReveal delay={0.5} className="mt-6">
            <p className="max-w-2xl font-body text-lg leading-relaxed text-cream">
              Join a team that values quality, collaboration, and professional
              growth. We are always looking for talented people to help us build
              Ireland&apos;s future.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text column */}
            <div>
              <ScrollReveal>
                <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
                  OUR CULTURE
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-display text-3xl text-navy md:text-5xl">
                  A place to grow
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-6 space-y-4">
                  <p className="font-body text-base leading-relaxed text-dark-grey">
                    At Ganson, people are our greatest asset. We foster a
                    collaborative working environment where every team member is
                    valued, supported, and empowered to do their best work. From
                    graduate engineers to senior project managers, everyone plays
                    a vital role in our success.
                  </p>
                  <p className="font-body text-base leading-relaxed text-dark-grey">
                    We invest in professional development because we believe that
                    growing our people grows our business. Structured mentoring
                    programmes, funded qualifications, and exposure to a diverse
                    range of projects ensure you are constantly learning and
                    advancing in your career.
                  </p>
                  <p className="font-body text-base leading-relaxed text-dark-grey">
                    The variety of our project portfolio — from healthcare and
                    education to commercial and civil engineering — means no two
                    days are the same. You will work alongside experienced
                    professionals in a supportive team that takes pride in
                    delivering quality on every project.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Culture image */}
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/careers/culture.jpg"
                  alt="Ganson team collaborating in the office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="noise-overlay relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              BENEFITS
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl text-white md:text-5xl">
              What We Offer
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={0.05 + i * 0.05}>
                <div className="group relative border-t-2 border-brand-red bg-white/5 p-8 transition-colors duration-300 hover:bg-white/8">
                  <span className="absolute right-6 top-6 font-display text-sm text-white/15">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="mb-5 text-brand-red">
                    {benefit.icon}
                  </div>
                  <h3 className="font-display text-lg text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-cream/80">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              OPPORTUNITIES
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl text-navy md:text-5xl">
              Current Openings
            </h2>
          </ScrollReveal>

          <div className="mt-12">
            <ScrollReveal delay={0.2}>
              <JobListings jobs={careers} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="noise-overlay relative overflow-hidden bg-navy py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-white md:text-4xl">
              Don&apos;t see a role that fits?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-cream">
              We&apos;re always looking for talented people. Send your CV and a
              cover letter and we&apos;ll be in touch when the right opportunity
              arises.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              <a
                href="mailto:careers@ganson.ie?subject=Speculative Application"
                className="inline-flex items-center justify-center bg-brand-red px-8 py-4 font-body text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-red-dark"
              >
                Send Your CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
