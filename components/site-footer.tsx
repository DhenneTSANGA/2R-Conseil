import Link from "next/link"
import Image from "next/image"
import { Linkedin, MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const liens = {
  Institution: [
    { label: "Le Cabinet", href: "/cabinet" },
    { label: "Expertises", href: "/services" },
    { label: "Formations", href: "/formations" },
    { label: "Carrières", href: "/carrieres" },
  ],
  Expertises: [
    { label: "Audit & Commissariat", href: "/services" },
    { label: "Conseil Fiscal", href: "/services" },
    { label: "Expertise Comptable", href: "/services" },
    { label: "Gestion RH & Paie", href: "/services" },
  ],
  Ressources: [
    { label: "Demander un Devis", href: "/devis" },
    { label: "Actualités", href: "/blog" },
    { label: "Espace Client", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 pb-20">
          {/* Info Cabinet */}
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-block">
              <div className="relative h-50 w-65 mb-8">
                <Image
                  src="/logo 2r.png"
                  alt="Cabinet 2R Conseil"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm mb-10">
              L&apos;excellence dans l&apos;accompagnement stratégique, fiscal et financier au Gabon. Bâtissons ensemble votre succès durable.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: MessageCircle, href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="h-12 w-12 flex items-center justify-center border border-white/10 hover:border-accent hover:text-accent transition-all duration-500 hover:scale-110 hover:-rotate-6"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {Object.entries(liens).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">{title}</h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-all duration-300 font-light hover:translate-x-1 inline-block">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Contact & Siège</h4>
            <ul className="space-y-6 text-sm font-light text-white/70 mb-10">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin className="h-5 w-5 text-accent shrink-0 transition-transform group-hover:scale-110" />
                <span className="group-hover:text-white transition-colors">Boulevard du Bord de Mer, <br />Libreville, Gabon</span>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="h-5 w-5 text-accent shrink-0 transition-transform group-hover:scale-110" />
                <a href="tel:+24100000000" className="group-hover:text-white transition-colors">+241 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="h-5 w-5 text-accent shrink-0 transition-transform group-hover:scale-110" />
                <a href="mailto:contact@cabinet2r-conseil.ga" className="group-hover:text-white transition-colors">contact@cabinet2r-conseil.ga</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} Cabinet 2R Conseil. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Plan du Site</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

