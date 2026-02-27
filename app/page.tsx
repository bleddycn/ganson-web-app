import Hero from '@/components/sections/hero'
import TrustedBy from '@/components/sections/trusted-by'
import FeaturedProjects from '@/components/sections/featured-projects'
import WhyGanson from '@/components/sections/why-ganson'
import AboutTeaser from '@/components/sections/about-teaser'
import ContactCTA from '@/components/sections/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeaturedProjects />
      <WhyGanson />
      <AboutTeaser />
      <ContactCTA />
    </>
  )
}
