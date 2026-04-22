import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/animations/scroll-reveal'
import ProjectGallery from '@/components/ui/project-gallery'
import { projects } from '@/lib/data/projects'

const sectorLabels: Record<string, string> = {
  healthcare: 'Healthcare',
  education: 'Education',
  commercial: 'Commercial',
  residential: 'Residential',
  'hotel-leisure': 'Hotel, Leisure & Student',
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  return {
    title: project?.title || 'Project',
    description: project?.description || '',
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Find the next project (wrap around to first)
  const currentIndex = projects.indexOf(project)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  // Split longDescription into paragraphs
  const paragraphs = project.longDescription
    .split('\n\n')
    .filter((p) => p.trim())

  const factItems = [
    { label: 'Client', value: project.client },
    {
      label: 'Sector',
      value: sectorLabels[project.sector] ?? project.sector,
    },
    { label: 'Status', value: project.status === 'current' ? 'Current' : 'Completed' },
    { label: 'Location', value: project.location },
    { label: 'Year', value: project.year },
  ]

  return (
    <>
      {/* Hero — full-width project image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden md:h-[70vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Navy gradient overlay — matching homepage hero strength */}
        <div className="absolute inset-0 bg-linear-to-r from-navy/95 via-navy/80 to-navy/50" />
        {/* Top gradient for header/nav readability */}
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-navy/70 to-transparent" />
        {/* Bottom gradient for text area */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-navy to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-6 pb-12 md:px-12 md:pb-16 lg:px-16">
            <ScrollReveal>
              <span className="mb-3 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
                {sectorLabels[project.sector] ?? project.sector}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="max-w-3xl font-display text-4xl text-white md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 font-body text-lg text-cream/80">
                {project.client} &middot; {project.location}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-light bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left column — description */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <h2 className="mb-8 font-display text-3xl text-navy md:text-4xl">
                  Project Overview
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {paragraphs.map((paragraph, i) => (
                  <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                    <p className="font-body text-lg leading-relaxed text-dark-grey">
                      {paragraph}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right column — key facts sidebar */}
            <div className="lg:col-span-4">
              <ScrollReveal delay={0.2}>
                <div className="rounded-sm bg-white p-8 shadow-sm">
                  <h3 className="mb-6 font-display text-xl text-navy">
                    Key Facts
                  </h3>
                  <div className="divide-y divide-sand">
                    {factItems.map((item) => (
                      <div key={item.label} className="py-4 first:pt-0 last:pb-0">
                        <dt className="font-body text-xs uppercase tracking-wider text-mid-grey">
                          {item.label}
                        </dt>
                        <dd className="mt-1 font-body text-base font-medium text-navy">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="section-light bg-ivory pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
            <ScrollReveal>
              <h2 className="mb-12 font-display text-3xl text-navy md:text-4xl">
                Project Gallery
              </h2>
            </ScrollReveal>

            <ProjectGallery images={project.gallery} title={project.title} />
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="noise-overlay section-dark bg-navy py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <span className="mb-4 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              Next Project
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group relative block aspect-[21/9] overflow-hidden rounded-sm"
            >
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="100vw"
              />

              {/* Gradient overlay — matching homepage project cards */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy from-10% via-navy/80 via-55% to-transparent transition-opacity duration-500" />

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-12">
                <span className="mb-2 inline-block font-body text-xs uppercase tracking-wider text-brand-red">
                  {sectorLabels[nextProject.sector] ?? nextProject.sector}
                </span>
                <h3 className="font-display text-3xl text-white md:text-4xl">
                  {nextProject.title}
                </h3>
                <p className="mt-2 font-body text-sm text-cream/80">
                  {nextProject.client} &middot; {nextProject.location}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
