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
      <section className="noise-overlay section-dark relative overflow-hidden bg-navy py-32 md:py-40">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal delay={0.1}>
            <span className="mb-6 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              Our Work
            </span>
          </ScrollReveal>

          <StaggerText
            text="We don't just build structures; we build the partnerships that make them possible."
            className="max-w-3xl text-4xl text-white md:text-6xl lg:text-7xl"
            tag="h1"
            delay={0.2}
          />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-light bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </>
  )
}
