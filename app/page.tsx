import Image from 'next/image'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-24">
      <Image
        src="/assets/logos/ganson-mark.svg"
        alt="Ganson"
        width={80}
        height={80}
        className="mb-8 h-20 w-auto"
      />
      <h1 className="mb-4 text-center text-4xl font-bold text-navy md:text-5xl">
        Homepage Coming Soon
      </h1>
      <p className="max-w-md text-center text-lg leading-relaxed text-mid-grey">
        Building excellence across Ireland and the UK since 2004. Our new website is under construction.
      </p>
    </section>
  )
}
