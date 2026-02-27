'use client'

import { useState, type FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  projectType: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const projectTypes = [
  'New Build',
  'Refurbishment',
  'Civil Engineering',
  'Design & Build',
  'Other',
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
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
      console.log('Contact form submission:', formData)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      })
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <h3 className="font-display text-2xl text-white">Thank you for your message.</h3>
        <p className="mt-4 font-body text-lg text-cream">
          We&apos;ll be in touch within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-block font-body text-sm text-brand-red transition-colors duration-300 hover:text-brand-red-light"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClasses =
    'w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 font-body text-white placeholder:text-white/40 transition-colors duration-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none'

  const labelClasses = 'mb-1 block font-body text-sm text-cream'

  const errorClasses = 'mt-1 block font-body text-sm text-brand-red-light'

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={inputClasses}
          />
          {errors.name && <span className={errorClasses}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputClasses}
          />
          {errors.email && <span className={errorClasses}>{errors.email}</span>}
        </div>
      </div>

      {/* Row 2: Phone + Company */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClasses}>
            Company
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            placeholder="Your company name"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      {/* Row 3: Project Type */}
      <div className="mt-6">
        <label htmlFor="contact-project-type" className={labelClasses}>
          Project Type
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          value={formData.projectType}
          onChange={(e) => handleChange('projectType', e.target.value)}
          className={`${inputClasses} ${!formData.projectType ? 'text-white/40' : ''}`}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-navy text-white">
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Row 4: Message */}
      <div className="mt-6">
        <label htmlFor="contact-message" className={labelClasses}>
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`${inputClasses} resize-none`}
        />
        {errors.message && <span className={errorClasses}>{errors.message}</span>}
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          type="submit"
          className="w-full bg-brand-red px-8 py-4 font-body font-medium text-white transition-colors duration-300 hover:bg-brand-red-dark md:w-auto"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
