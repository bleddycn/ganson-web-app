import Image from 'next/image'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import ProjectFilter from '@/components/ui/project-filter'
import { projects } from '@/lib/data/projects'

export const metadata = {
  title: 'Projects',
  description:
    'Explore our portfolio of construction projects across healthcare, education, commercial, and civil engineering sectors throughout Ireland and the UK.',
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-32 md:py-40">
        <Image
          src="/assets/heroes/projects-hero.jpg"
          alt=""
          fill
          className="object-cover object-[center_30%]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="noise-overlay pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal delay={0.1}>
            <span className="mb-6 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              Our Work
            </span>
          </ScrollReveal>

          <StaggerText
            text="Built to Last.|Designed to Inspire."
            className="text-5xl text-white md:text-6xl lg:text-7xl"
            lineClassNames={[
              '',
              'text-cream/80',
            ]}
            tag="h1"
            delay={0.2}
            separator={
              <span className="my-2 block h-[2px] w-12 bg-brand-red md:my-3 md:w-16" />
            }
          />
        </div>
      </section>

      {/* Intro */}
      <section className="section-light bg-ivory pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="max-w-3xl border-l-2 border-brand-red pl-6 md:pl-8">
              <p className="font-body text-lg leading-relaxed text-dark-grey">
                Every <span className="font-medium text-navy">project</span> we deliver reflects a <span className="font-medium text-navy">partnership</span> built on trust, transparency, and a shared commitment to <span className="font-medium text-navy">excellence</span>. Across healthcare, education, commercial, and civil engineering sectors, our portfolio demonstrates over twenty years of precision construction — delivered on programme, on budget, and to the highest standards.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-light bg-ivory py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </>
  )
}
