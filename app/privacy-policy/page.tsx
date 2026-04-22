import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Ganson Building & Civil Engineering Ltd — how we collect, use, and protect your personal information.',
}

const LAST_UPDATED = '21 April 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="noise-overlay pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <ScrollReveal delay={0.1}>
            <span className="mb-6 inline-block font-body text-sm uppercase tracking-widest text-brand-red">
              LEGAL
            </span>
          </ScrollReveal>
          <StaggerText
            text="Privacy Policy"
            className="text-4xl text-white md:text-6xl"
            tag="h1"
            delay={0.2}
          />
          <ScrollReveal delay={0.4} className="mt-6">
            <p className="font-body text-sm uppercase tracking-widest text-cream/70">
              Last updated: {LAST_UPDATED}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <section className="section-light py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="prose-privacy space-y-10 font-body text-base leading-relaxed text-dark-grey">
              <p>
                Ganson Building &amp; Civil Engineering Ltd (&ldquo;Ganson&rdquo;,
                &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard the personal
                information you provide when you visit our website or engage
                with us. It has been prepared in accordance with the EU General
                Data Protection Regulation (GDPR) and the Irish Data Protection
                Act 2018.
              </p>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect the following types of personal information:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Contact details</strong> you provide through our
                    contact form, email, or phone &mdash; name, company, email
                    address, phone number, and the content of your enquiry.
                  </li>
                  <li>
                    <strong>Recruitment information</strong> you submit when
                    applying for a role &mdash; CV, cover letter, employment
                    history, and qualifications.
                  </li>
                  <li>
                    <strong>Technical data</strong> collected automatically when
                    you browse our site &mdash; IP address, browser type,
                    device information, and pages visited.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  2. How We Use Your Information
                </h2>
                <p>We use your personal information to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Respond to enquiries and provide requested information.</li>
                  <li>
                    Assess job applications and communicate with candidates.
                  </li>
                  <li>
                    Improve the performance, security, and usability of our
                    website.
                  </li>
                  <li>
                    Comply with our legal and regulatory obligations.
                  </li>
                </ul>
                <p className="mt-4">
                  We rely on the lawful bases of <em>legitimate interest</em>,{' '}
                  <em>consent</em>, and <em>contractual necessity</em> under
                  GDPR, depending on the purpose of processing.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  3. Cookies
                </h2>
                <p>
                  Our website uses cookies and similar technologies to ensure
                  the site functions correctly and to help us understand how
                  visitors use our content. You can manage or disable cookies
                  through your browser settings at any time. Disabling cookies
                  may affect some functionality of the site.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  4. Sharing Your Information
                </h2>
                <p>
                  We do not sell your personal information. We may share it
                  with trusted third parties who support our operations &mdash;
                  for example, our website hosting provider, email service, or
                  recruitment platforms &mdash; all of whom are contractually
                  required to protect your data. Where required by law, we may
                  also disclose information to public authorities.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  5. Data Retention
                </h2>
                <p>
                  We retain personal information only for as long as necessary
                  to fulfil the purposes for which it was collected, including
                  to meet any legal, accounting, or reporting requirements.
                  Recruitment data is held for up to 12 months after a decision
                  is made, unless you request earlier deletion.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  6. Your Rights
                </h2>
                <p>Under GDPR, you have the right to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  <li>Request access to the personal data we hold about you.</li>
                  <li>Request correction of inaccurate or incomplete data.</li>
                  <li>Request erasure of your data where there is no compelling reason to retain it.</li>
                  <li>Object to or restrict the processing of your data.</li>
                  <li>Request data portability in a structured, commonly used format.</li>
                  <li>
                    Lodge a complaint with the Irish Data Protection Commission
                    (<a href="https://www.dataprotection.ie" target="_blank" rel="noopener noreferrer" className="text-brand-red underline hover:text-brand-red-dark">www.dataprotection.ie</a>).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  7. Security
                </h2>
                <p>
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access,
                  alteration, disclosure, or destruction. However, no method of
                  transmission over the internet is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  8. Changes to this Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. The
                  latest version will always be available on this page with the
                  revised date of publication.
                </p>
              </div>

              <div>
                <h2 className="mb-4 font-display text-2xl text-navy md:text-3xl">
                  9. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy or wish
                  to exercise any of your rights, please contact us at:
                </p>
                <div className="mt-4 border-l-2 border-brand-red pl-6">
                  <p className="font-medium text-navy">
                    Ganson Building &amp; Civil Engineering Ltd
                  </p>
                  <p>Unit 19, Balbriggan Business Park</p>
                  <p>Balbriggan, Co. Dublin, Ireland</p>
                  <p className="mt-2">
                    Email:{' '}
                    <a
                      href="mailto:info@ganson.ie"
                      className="text-brand-red underline hover:text-brand-red-dark"
                    >
                      info@ganson.ie
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a
                      href="tel:+35316905716"
                      className="text-brand-red underline hover:text-brand-red-dark"
                    >
                      +353 (0)1 690 5716
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
