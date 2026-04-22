'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('cookie-banner-dismissed')
    if (!dismissed) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem('cookie-banner-dismissed', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-sand bg-ivory px-6 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-sm leading-relaxed text-dark-grey">
          This website does not use cookies or track your browsing activity.
          Your privacy is important to us.{' '}
          <Link
            href="/privacy-policy"
            className="font-medium text-brand-red underline-offset-2 hover:underline"
          >
            Read our Privacy Policy
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 bg-navy px-6 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-navy-light"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
