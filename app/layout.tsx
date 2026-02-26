import type { Metadata } from "next";
import { playfair, dmSans } from "@/app/fonts";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-ivory text-dark-grey antialiased">
        {children}
      </body>
    </html>
  );
}
