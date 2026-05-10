"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Cabinet", href: "/cabinet" },
  { name: "Services", href: "/services" },
  { name: "Équipe", href: "/equipe" },
  { name: "Témoignages", href: "/#temoignages" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "relative h-24 w-44 transition-all duration-300 group-hover:scale-105",
            !scrolled && !mobileOpen && "bg-white/10 rounded-lg px-2 py-1 backdrop-blur-sm"
          )}>
            <Image
              src="/logo 2r.png"
              alt="Cabinet 2R Conseil"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brand-green after:transition-all hover:after:w-full",
                scrolled 
                  ? "text-foreground/80 hover:text-primary" 
                  : "text-white hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+24100000000"
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              scrolled ? "text-foreground/80" : "text-white"
            )}
          >
            <Phone className="h-4 w-4 text-brand-green" />
            <span>+241 00 00 00 00</span>
          </a>
          <Button asChild className="bg-brand-green hover:bg-brand-green/90 text-primary rounded-full px-6 font-bold shadow-lg border-b-2 border-black/10">
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors",
            scrolled || mobileOpen ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 text-brand-green" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-brand-green hover:bg-brand-green/90 text-primary rounded-full h-12 font-bold shadow-lg">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Demander un devis
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
