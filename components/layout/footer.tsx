import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'News', href: '/news' },
  { label: 'Policies', href: '/policies' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="noise-overlay bg-navy text-cream">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Main footer grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo & Company Info */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/assets/logos/ganson-mark.png"
                alt="Ganson Building & Civil Engineering"
                width={400}
                height={216}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-cream/80">
              Building excellence across Ireland and the UK since 2004.
            </p>
            <p className="text-xs text-cream/50">
              ISO 9001:2008 | ISO 14001:2004
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mb-6">
              <p className="mb-1 text-sm font-semibold text-white">
                Dublin Office
              </p>
              <p className="text-sm leading-relaxed text-cream/70">
                Balbriggan, Co. Dublin, Ireland
              </p>
              <a
                href="tel:+3531XXXXXXX"
                className="text-sm text-cream/70 transition-colors duration-300 hover:text-brand-red"
              >
                +353 1 XXX XXXX
              </a>
            </div>

            <div className="mb-6">
              <p className="mb-1 text-sm font-semibold text-white">
                Northern Ireland Office
              </p>
              <p className="text-sm leading-relaxed text-cream/70">
                Castlewellan, Co. Down, UK
              </p>
              <a
                href="tel:+4428XXXXXXX"
                className="text-sm text-cream/70 transition-colors duration-300 hover:text-brand-red"
              >
                +44 28 XXX XXXX
              </a>
            </div>

            <a
              href="mailto:info@ganson.ie"
              className="text-sm text-cream/70 transition-colors duration-300 hover:text-brand-red"
            >
              info@ganson.ie
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sand/20 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; 2024 Ganson Building &amp; Civil Engineering Ltd. All rights reserved.
          </p>
          <Link
            href="/privacy-policy"
            className="text-xs text-cream/50 transition-colors duration-300 hover:text-brand-red"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
