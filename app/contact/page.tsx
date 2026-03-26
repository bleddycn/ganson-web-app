import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import ContactForm from '@/components/ui/contact-form'
import { offices } from '@/lib/constants'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ganson Building & Civil Engineering. Offices in Dublin and London.',
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

                  {/* Map */}
                  <div className="mt-6 aspect-video overflow-hidden">
                    <iframe
                      src={
                        office.countryCode === 'IE'
                          ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.5!2d-6.1878!3d53.6109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671a4a0a0a0a0b%3A0x0!2sBalbriggan+Business+Park%2C+Balbriggan%2C+Co.+Dublin!5e0!3m2!1sen!2sie!4v1700000000000'
                          : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5!2d-0.1307!3d51.4271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876049e1a6a0a0b%3A0x0!2sEstra+House%2C+Station+Approach%2C+Streatham%2C+London+SW16+6HW!5e0!3m2!1sen!2suk!4v1700000000000'
                      }
                      width="100%"
                      height="100%"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${office.name}`}
                    />
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
