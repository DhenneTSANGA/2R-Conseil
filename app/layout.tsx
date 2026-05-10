import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cabinet 2R Conseil — Comptabilité, Audit & Conseil au Gabon",
  description:
    "Cabinet 2R Conseil, votre partenaire stratégique en comptabilité, audit, fiscalité, ressources humaines et formation professionnelle à Libreville, Gabon.",
  keywords: [
    "cabinet comptable Gabon",
    "audit financier Libreville",
    "cabinet conseil fiscal",
    "gestion de paie Gabon",
    "formation fiscalité Libreville",
    "conseil OHADA",
    "accompagnement PME Gabon",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
