"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const coordonnees = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Boulevard du Bord de Mer, Libreville, Gabon",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+241 00 00 00 00",
    href: "tel:+24100000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@cabinet2r-conseil.ga",
    href: "mailto:contact@cabinet2r-conseil.ga",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+241 00 00 00 00",
    href: "https://wa.me/24100000000",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/40 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Nous contacter
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight text-balance">
              Parlons de votre projet.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
              Une question, un devis, un rendez-vous ? Notre équipe vous répond sous 24 à 48 heures
              ouvrées avec une première analyse personnalisée.
            </p>

            <ul className="mt-10 space-y-5">
              {coordonnees.map((c) => {
                const Icon = c.icon
                const Wrapper = c.href ? "a" : "div"
                const props = c.href ? { href: c.href } : {}
                return (
                  <li key={c.label}>
                    <Wrapper
                      {...props}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:bg-brand-green group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {c.value}
                        </p>
                      </div>
                    </Wrapper>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Suivez-nous
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-primary hover:bg-brand-green hover:text-primary-foreground hover:border-brand-green transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/24100000000"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background border border-border text-primary hover:bg-brand-green hover:text-primary-foreground hover:border-brand-green transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-background border border-border p-6 sm:p-8 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/15 text-brand-green">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-primary">
                    Message bien reçu !
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md">
                    Merci pour votre confiance. Un membre de notre équipe vous recontactera sous 24 à
                    48 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="grid gap-2">
                      <Label htmlFor="prenom" className="text-xs uppercase tracking-wider font-semibold">
                        Prénom
                      </Label>
                      <Input id="prenom" required placeholder="Jean" className="h-11" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="nom" className="text-xs uppercase tracking-wider font-semibold">
                        Nom
                      </Label>
                      <Input id="nom" required placeholder="Dupont" className="h-11" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="grid gap-2">
                      <Label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="jean.dupont@entreprise.ga"
                        className="h-11"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="tel" className="text-xs uppercase tracking-wider font-semibold">
                        Téléphone
                      </Label>
                      <Input id="tel" type="tel" placeholder="+241 00 00 00 00" className="h-11" />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="entreprise" className="text-xs uppercase tracking-wider font-semibold">
                      Entreprise
                    </Label>
                    <Input id="entreprise" placeholder="Nom de votre entreprise" className="h-11" />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="service" className="text-xs uppercase tracking-wider font-semibold">
                      Service souhaité
                    </Label>
                    <Select>
                      <SelectTrigger id="service" className="h-11">
                        <SelectValue placeholder="Sélectionnez un domaine" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="comptabilite">Comptabilité</SelectItem>
                        <SelectItem value="audit">Audit</SelectItem>
                        <SelectItem value="conseil">Conseil stratégique</SelectItem>
                        <SelectItem value="fiscalite">Fiscalité</SelectItem>
                        <SelectItem value="rh">Ressources humaines</SelectItem>
                        <SelectItem value="formation">Formation</SelectItem>
                        <SelectItem value="autre">Autre / Sur mesure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold">
                      Votre message
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Décrivez votre besoin ou votre projet…"
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 rounded-full bg-brand-green hover:bg-brand-green/90 text-primary h-12 font-bold shadow-lg border-b-2 border-black/10"
                  >
                    Envoyer ma demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Vos données sont traitées de manière strictement confidentielle, conformément à
                    notre politique de confidentialité.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
