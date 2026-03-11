'use client'

import Image from 'next/image'
import { clients } from '@/lib/data/clients'

export default function TrustedBy() {
  // Double the client list for seamless infinite scroll loop
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="bg-ivory py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <p className="mb-8 text-center font-body text-sm uppercase tracking-wider text-mid-grey">
          Trusted by Ireland&apos;s leading organisations
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="group relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-ivory to-transparent" />

        <div className="animate-scroll-x flex w-max items-center group-hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, i) => (
            <div key={`${client.slug}-${i}`} className="flex shrink-0 items-center">
              <div className="flex h-10 w-[120px] items-center justify-center md:w-[140px]">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={40}
                  className="max-h-8 w-auto max-w-[100px] object-contain grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100 md:max-h-10 md:max-w-[120px]"
                />
              </div>
              <span className="mx-3 text-xl text-brand-red/40 md:mx-5" aria-hidden="true">&middot;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline keyframes — scoped to this component */}
      <style jsx>{`
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }

        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
