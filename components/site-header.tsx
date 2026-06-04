"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Le Cabinet", href: "/cabinet" },
  { name: "Expertises", href: "/services" },
  { name: "Formations", href: "/formations" },
  { name: "Actualités", href: "/blog" },
  { name: "Carrières", href: "/carrieres" },
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
    <header className="fixed inset-x-0 top-0 z-50 flex flex-col pointer-events-none">
      {/* Topbar - Fixe et Opaque */}
      <div className="w-full py-2 transition-all duration-500 pointer-events-auto bg-primary border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6">
          <a href="tel:+24100000000" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/80 hover:text-accent transition-colors">
            <Phone className="h-3 w-3 text-accent" />
            +241 00 00 00 00
          </a>
          <Button asChild variant="link" className="h-auto p-0 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors border-l border-white/10 pl-6 rounded-none">
            <Link href="/devis">Demander un devis</Link>
          </Button>
        </div>
      </div>

      {/* Main Navigation - Toujours Opaque */}
      <div
        className={cn(
          "w-full transition-all duration-500 pointer-events-auto bg-background border-b border-border/50 shadow-sm py-2 sm:py-3",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative h-16 w-40 sm:h-14 sm:w-48 lg:h-16 lg:w-56">
              <Image
                src="/logo 2r.png"
                alt="Cabinet 2R Conseil"
                fill
                className="object-contain transition-all duration-500"
                priority
              />
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-sm relative group text-primary hover:bg-secondary/50"
              >
                {item.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left bg-accent" />
              </Link>
            ))}
          </nav>

          {/* Right Section Desktop */}
          <div className="hidden lg:flex items-center">
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm transition-colors text-primary hover:bg-secondary"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={cn(
          "lg:hidden fixed inset-0 bg-background z-[60] flex flex-col animate-in fade-in duration-300 pointer-events-auto",
        )}>
          <div className="flex items-center justify-between px-4 py-4 border-b border-border/50">
            <Link href="/" onClick={() => setMobileOpen(false)} className="relative h-10 w-32">
              <Image
                src="/logo 2r.png"
                alt="Cabinet 2R Conseil"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-primary"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between py-5 border-b border-border/30 text-2xl font-serif text-primary active:text-accent transition-colors"
              >
                {item.name}
                <ArrowRight className="h-5 w-5 text-accent" />
              </Link>
            ))}
            <div className="mt-auto pt-10 pb-8 flex flex-col gap-6">
              <a href="tel:+24100000000" className="flex items-center gap-3 text-lg font-medium text-foreground">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                +241 00 00 00 00
              </a>
              <Button asChild size="lg" className="bg-primary text-primary-foreground rounded-none h-16 text-sm font-bold uppercase tracking-widest shadow-xl">
                <Link href="/devis" onClick={() => setMobileOpen(false)}>
                  Demander un devis
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

import { ArrowRight } from "lucide-react"
