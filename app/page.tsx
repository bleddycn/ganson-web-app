export default function Home() {
  const colours = [
    { name: "Brand Red", token: "brand-red", hex: "#d00918" },
    { name: "Brand Red Dark", token: "brand-red-dark", hex: "#a80714" },
    { name: "Brand Red Light", token: "brand-red-light", hex: "#e83a47" },
    { name: "Navy", token: "navy", hex: "#122047" },
    { name: "Navy Light", token: "navy-light", hex: "#1a2d5e" },
    { name: "Navy Dark", token: "navy-dark", hex: "#0c1530" },
    { name: "Ivory", token: "ivory", hex: "#f7f4ef" },
    { name: "Sand", token: "sand", hex: "#e6e1d8" },
    { name: "Cream", token: "cream", hex: "#f0ece4" },
    { name: "Dark Grey", token: "dark-grey", hex: "#4a4a4a" },
    { name: "Mid Grey", token: "mid-grey", hex: "#7a7a7a" },
    { name: "Light Grey", token: "light-grey", hex: "#c4c4c4" },
  ];

  return (
    <main className="min-h-screen px-8 py-16 md:px-16 lg:px-24">
      {/* Header */}
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-red">
          Design System Test
        </p>

        {/* Heading — Playfair Display */}
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
          Ganson Building &amp; Civil Engineering
        </h1>

        {/* Body text — DM Sans */}
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-mid-grey">
          This is a temporary test page to verify that the Ganson design system
          is working correctly. The heading above should render in Playfair
          Display, and this paragraph should render in DM Sans. The background
          should be ivory (#f7f4ef) and body text should be dark grey (#4a4a4a).
        </p>

        {/* Colour Swatches */}
        <h2 className="mb-6 text-2xl font-semibold">Colour Palette</h2>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {colours.map((colour) => (
            <div key={colour.token} className="overflow-hidden rounded-lg border border-sand">
              <div
                className="h-20 w-full"
                style={{ backgroundColor: colour.hex }}
              />
              <div className="bg-white p-3">
                <p className="text-sm font-semibold text-navy">{colour.name}</p>
                <p className="font-mono text-xs text-mid-grey">{colour.hex}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button test */}
        <h2 className="mb-6 text-2xl font-semibold">Button Test</h2>
        <div className="mb-12 flex flex-wrap gap-4">
          <button className="rounded-lg bg-brand-red px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-red-dark">
            Primary Button
          </button>
          <button className="rounded-lg bg-navy px-8 py-3 font-semibold text-white transition-colors hover:bg-navy-light">
            Secondary Button
          </button>
          <button className="rounded-lg border-2 border-navy px-8 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white">
            Outline Button
          </button>
        </div>

        {/* Dark section test */}
        <h2 className="mb-6 text-2xl font-semibold">Dark Section Test</h2>
        <div className="section-dark noise-overlay mb-12 rounded-xl p-8 md:p-12">
          <h3 className="mb-4 text-3xl font-bold">Dark Section Heading</h3>
          <p className="max-w-xl text-cream/80">
            This section tests the dark background variant with the noise
            overlay texture. Headings should be white and body text should be a
            soft cream colour.
          </p>
        </div>

        {/* Typography scale */}
        <h2 className="mb-6 text-2xl font-semibold">Typography Scale</h2>
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl font-bold">H1 — Display Heading</h1>
          <h2 className="text-4xl font-semibold">H2 — Section Heading</h2>
          <h3 className="text-3xl font-medium">H3 — Sub-section</h3>
          <h4 className="text-2xl font-medium">H4 — Card Heading</h4>
          <h5 className="text-xl font-medium">H5 — Small Heading</h5>
          <p className="text-lg">Body Large — 18px paragraph text</p>
          <p className="text-base">Body — 16px default paragraph text</p>
          <p className="text-sm text-mid-grey">
            Small — 14px secondary text and captions
          </p>
        </div>

        <p className="text-sm text-mid-grey">
          This page is temporary and will be replaced with the actual homepage.
        </p>
      </div>
    </main>
  );
}
