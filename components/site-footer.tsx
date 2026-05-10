import Link from "next/link"
import Image from "next/image"
import { Linkedin, MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const liens = {
  Cabinet: [
    { label: "À propos", href: "/cabinet" },
    { label: "Notre équipe", href: "/equipe" },
    { label: "Recrutement", href: "#" },
    { label: "Blog", href: "/blog" },
  ],
  Services: [
    { label: "Comptabilité", href: "/services" },
    { label: "Audit", href: "/services" },
    { label: "Conseil stratégique", href: "/services" },
    { label: "Fiscalité", href: "/services" },
    { label: "Formation", href: "/services" },
  ],
  Ressources: [
    { label: "Témoignages", href: "/#temoignages" },
    { label: "FAQ", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Espace client", href: "#" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-premium-gradient text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-primary-foreground/15">
          <div className="lg:col-span-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-balance">
              Recevez notre newsletter d&apos;expertise.
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/70 max-w-md leading-relaxed">
              Conseils fiscaux, actualités OHADA, astuces de gestion. Un email mensuel, sans spam.
            </p>
          </div>
          <form className="lg:col-span-6 flex flex-col sm:flex-row gap-3 lg:items-end">
            <Input
              type="email"
              required
              placeholder="votre@email.com"
              aria-label="Adresse email"
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-brand-green"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md font-semibold border-b-2 border-brand-green/50"
            >
              S&apos;inscrire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* Main footer */}
        <div className="grid lg:grid-cols-12 gap-10 py-14">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-40 bg-white/10 rounded-lg p-2 transition-transform hover:scale-105">
                <Image
                  src="/logo 2r.png"
                  alt="Cabinet 2R Conseil"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Cabinet de conseil et d&apos;accompagnement des entreprises basé à Libreville.
              Comptabilité, audit, fiscalité, RH, conseil et formation.
            </p>

            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-brand-green mt-0.5 shrink-0" />
                <span className="text-primary-foreground/80">
                  Boulevard du Bord de Mer, Libreville, Gabon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-green shrink-0" />
                <a
                  href="tel:+24100000000"
                  className="text-primary-foreground/80 hover:text-brand-green transition-colors"
                >
                  +241 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-green shrink-0" />
                <a
                  href="mailto:contact@cabinet2r-conseil.ga"
                  className="text-primary-foreground/80 hover:text-brand-green transition-colors"
                >
                  contact@cabinet2r-conseil.ga
                </a>
              </li>
            </ul>
          </div>

          {Object.entries(liens).map(([title, items]) => (
            <div key={title} className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
                {title}
              </p>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/75 hover:text-brand-green transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
              Suivez-nous
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-brand-green hover:border-brand-green hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/24100000000"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-brand-green hover:border-brand-green hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Cabinet 2R Conseil — Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href="#" className="hover:text-brand-green transition-colors">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-green transition-colors">
                Confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brand-green transition-colors">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
