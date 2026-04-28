import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
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
        <div className="absolute inset-0 bg-navy/70" />
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

      {/* Direct Line */}
      <section className="relative overflow-hidden bg-navy py-28 md:py-40">
        {/* Noise + thin top/bottom rules — architectural blueprint feel */}
        <div className="noise-overlay pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/8" />

        {/* Decorative corner brackets — surveyor / drawing-sheet detail */}
        <div className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-brand-red/60 md:left-12 md:top-12 lg:left-16 lg:top-16" />
        <div className="pointer-events-none absolute right-6 bottom-6 h-8 w-8 border-b border-r border-brand-red/60 md:right-12 md:bottom-12 lg:right-16 lg:bottom-16" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Eyebrow + supporting copy */}
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-red-light">
                  [&nbsp;01&nbsp;]&nbsp;&nbsp;Direct&nbsp;Line
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-10 max-w-xs font-body text-base leading-relaxed text-cream/80 md:text-lg">
                  Whether you&apos;re at brief, tender, or feasibility stage — we&apos;d be glad to hear from you. We reply to every enquiry within one working day.
                </p>
              </ScrollReveal>
            </div>

            {/* The email — hero element */}
            <div className="md:col-span-8">
              <ScrollReveal delay={0.2}>
                <h2 className="font-body text-base font-light tracking-wide text-cream/65 md:text-lg">
                  Tell us about your project.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <a
                  href="mailto:info@ganson.ie"
                  className="group relative mt-10 inline-block break-all leading-none focus-visible:outline-none"
                  aria-label="Email info@ganson.ie"
                >
                  <span className="font-display text-4xl italic text-white transition-colors duration-500 group-hover:text-brand-red-light group-focus-visible:text-brand-red-light md:text-6xl lg:text-7xl">
                    info@ganson.ie
                  </span>
                  {/* Underline grows on hover */}
                  <span className="absolute -bottom-2 left-0 block h-px w-0 bg-brand-red transition-[width] duration-700 ease-out group-hover:w-full group-focus-visible:w-full" />
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.6}>
                <div className="mt-12 flex items-center gap-4 md:mt-16">
                  <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-cream/55">
                    Or call our offices above
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
