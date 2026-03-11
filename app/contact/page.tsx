import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import ContactForm from '@/components/ui/contact-form'
import { offices } from '@/lib/constants'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ganson Building & Civil Engineering. Offices in Dublin and Northern Ireland.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/contact-hero.jpg"
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
              Get in Touch
            </span>
          </ScrollReveal>

          <StaggerText
            text="Let's discuss your project"
            className="max-w-3xl text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />
        </div>
      </section>

      {/* Office Cards */}
      <section className="section-light py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {offices.map((office, i) => (
              <ScrollReveal key={office.name} delay={0.1 * (i + 1)}>
                <div className="border border-sand bg-white p-8">
                  <h2 className="font-display text-2xl text-navy">{office.name}</h2>

                  <p className="mt-4 font-body text-dark-grey">
                    {office.address}
                    <br />
                    {office.city}, {office.region}
                    <br />
                    {office.country}
                  </p>

                  <p className="mt-4 font-body">
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-dark-grey transition-colors duration-300 hover:text-brand-red"
                    >
                      {office.phone}
                    </a>
                  </p>

                  <p className="mt-1 font-body">
                    <a
                      href={`mailto:${office.email}`}
                      className="text-dark-grey transition-colors duration-300 hover:text-brand-red"
                    >
                      {office.email}
                    </a>
                  </p>

                  {/* Map placeholder */}
                  <div className="mt-6 flex aspect-video items-center justify-center bg-sand">
                    <span className="font-body text-sm text-mid-grey">
                      Map &mdash; Coming Soon
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="noise-overlay section-dark bg-navy py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="mb-10 font-display text-3xl text-white md:text-4xl">
              Send us a message
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
