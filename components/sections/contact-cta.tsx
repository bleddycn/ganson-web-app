'use client'

import { useState, type FormEvent } from 'react'
import ScrollReveal from '@/components/animations/scroll-reveal'
import StaggerText from '@/components/animations/stagger-text'
import { offices } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  )

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (validate()) {
      console.log('Form submitted:', formData)
      // Placeholder for future server action
    }
  }

  function handleChange(
    field: keyof FormData,
    value: string
  ) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const inputClasses =
    'w-full border-b border-white/20 bg-transparent py-3 font-body text-white placeholder:text-white/40 transition-colors duration-300 focus:border-brand-red focus:outline-none'

  return (
    <section className="noise-overlay bg-navy-dark py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
        {/* Headline */}
        <StaggerText
          text="Let's build something together"
          className="text-center text-4xl text-white md:text-6xl"
          tag="h2"
        />

        {/* Subtitle */}
        <ScrollReveal delay={0.3} className="mt-6">
          <p className="text-center font-body text-lg text-cream">
            Get in touch to discuss your next project.
          </p>
        </ScrollReveal>

        {/* Office cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {offices.map((office, i) => (
            <ScrollReveal key={office.name} delay={0.4 + i * 0.15}>
              <div className="rounded-sm border border-white/10 bg-navy p-6">
                <h3 className="font-display text-xl text-white">
                  {office.name}
                </h3>
                <p className="mt-3 font-body text-cream">
                  {office.address}
                  <br />
                  {office.city}, {office.region}
                </p>
                <p className="mt-3 font-body">
                  <a
                    href={`tel:${office.phone.replace(/\s/g, '')}`}
                    className="text-cream transition-colors duration-300 hover:text-brand-red"
                  >
                    {office.phone}
                  </a>
                </p>
                <p className="mt-1 font-body">
                  <a
                    href={`mailto:${office.email}`}
                    className="text-cream transition-colors duration-300 hover:text-brand-red"
                  >
                    {office.email}
                  </a>
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact form */}
        <ScrollReveal delay={0.6}>
          <form onSubmit={handleSubmit} className="mt-12" noValidate>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={inputClasses}
                />
                {errors.name && (
                  <span className="mt-1 block font-body text-sm text-brand-red">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={inputClasses}
                />
                {errors.email && (
                  <span className="mt-1 block font-body text-sm text-brand-red">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="mt-8">
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={inputClasses}
              />
            </div>

            {/* Message */}
            <div className="mt-8">
              <textarea
                placeholder="Message *"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`${inputClasses} resize-none`}
              />
              {errors.message && (
                <span className="mt-1 block font-body text-sm text-brand-red">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-brand-red px-8 py-4 font-body font-medium text-white transition-colors duration-300 hover:bg-brand-red-dark md:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
