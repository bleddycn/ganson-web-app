import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import Accordion from '@/components/ui/accordion'
import { policies } from '@/lib/data/policies'

export const metadata = {
  title: 'Policies',
  description:
    'Ganson Building & Civil Engineering company policies — Health & Safety, Environmental, Quality Management, CSR, and more.',
}

export default function PoliciesPage() {
  const accordionItems = policies.map((policy) => ({
    title: policy.title,
    content: policy.content,
  }))

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/policies-hero.jpg"
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
              GOVERNANCE
            </span>
          </ScrollReveal>
          <StaggerText
            text="Our Policies & Commitments"
            className="text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />
          <ScrollReveal delay={0.5} className="mt-6">
            <p className="max-w-2xl font-body text-lg leading-relaxed text-cream">
              Transparency, accountability, and responsible business practices
              are at the heart of everything we do. Our policies set out the
              standards we hold ourselves to on every project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Policies List */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl text-navy md:text-5xl">
              Company Policies
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-dark-grey">
              Select a policy below to read its full details. All policies are
              reviewed annually by the board of directors and updated to reflect
              current legislation and best practice.
            </p>
          </ScrollReveal>

          <div className="mt-12">
            <ScrollReveal delay={0.2}>
              <Accordion items={accordionItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
