import type { Metadata } from "next";
import { raleway, dmSans } from "@/app/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CustomCursor from "@/components/ui/custom-cursor";
import Analytics from "@/components/analytics";
import CookieBanner from "@/components/ui/cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ganson Building & Civil Engineering",
    template: "%s | Ganson Building & Civil Engineering",
  },
  description:
    "Ganson Building & Civil Engineering Ltd — 20+ years delivering healthcare, education, commercial, and civil engineering projects across Ireland and the UK. €80m+ current workload. 100% credit rating.",
  keywords: [
    "construction company Ireland",
    "building contractor Dublin",
    "civil engineering Ireland",
    "Ganson Building",
    "healthcare construction",
    "education construction",
    "commercial construction",
  ],
  authors: [{ name: "Ganson Building & Civil Engineering Ltd" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://ganson.ie",
    siteName: "Ganson Building & Civil Engineering",
    title: "Ganson Building & Civil Engineering",
    description:
      "20+ years delivering excellence in construction across Ireland and the UK.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/assets/logos/ganson-favicon.png',
    shortcut: '/assets/logos/ganson-favicon.png',
    apple: '/assets/logos/ganson-apple-icon.png',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ganson Building & Civil Engineering Ltd",
  url: "https://ganson.ie",
  description:
    "Construction company specialising in healthcare, education, commercial, and civil engineering projects.",
  foundingDate: "2003",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Balbriggan",
      addressRegion: "Co. Dublin",
      addressCountry: "IE",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Castlewellan",
      addressRegion: "Co. Down",
      addressCountry: "GB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-dark-grey antialiased">
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
