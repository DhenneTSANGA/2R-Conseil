"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight, Check, Building2, User } from "lucide-react"
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
import { RevealOnScroll } from "@/components/reveal-on-scroll"

const coordonnees = [
  { icon: Phone, label: "Téléphone", value: "+241 00 00 00 00", href: "tel:+24100000000" },
  { icon: Mail, label: "Email", value: "contact@cabinet2r-conseil.ga", href: "mailto:contact@cabinet2r-conseil.ga" },
  { icon: MapPin, label: "Siège Social", value: "Boulevard du Bord de Mer, Libreville" },
]

export function QuoteSection() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="devis" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Content */}
          <div>
            <RevealOnScroll animation="reveal-up">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Demande de Devis</p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Obtenez une <span className="italic font-light">proposition sur-mesure</span> pour votre entreprise.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                Remplissez le formulaire ci-contre pour recevoir une estimation détaillée de nos prestations. Nos experts analysent vos données pour vous proposer le meilleur accompagnement.
              </p>

              <div className="mt-12 space-y-10">
                {coordonnees.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-6 animate-reveal-up" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary text-primary transition-all hover:bg-accent hover:text-primary-foreground hover:rotate-6">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-lg font-serif text-primary hover:text-accent transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-lg font-serif text-primary">{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </RevealOnScroll>
          </div>

          {/* Form */}
          <RevealOnScroll
            animation="reveal-right"
            className="bg-secondary/50 p-8 lg:p-12 border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
            
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="h-20 w-20 bg-primary flex items-center justify-center text-accent mb-8 animate-reveal-up">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-3xl text-primary mb-4 animate-reveal-up delay-100">Demande de Devis Envoyée</h3>
                <p className="text-muted-foreground font-light animate-reveal-up delay-200">Nous reviendrons vers vous avec une proposition détaillée dans les 48h.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Nom & Prénom</Label>
                    <div className="relative">
                      <Input required placeholder="Ex: Jean Dupont" className="rounded-none border-border bg-background h-12 focus-visible:border-accent pl-10" />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Entreprise</Label>
                    <div className="relative">
                      <Input required placeholder="Nom de votre société" className="rounded-none border-border bg-background h-12 focus-visible:border-accent pl-10" />
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Email Professionnel</Label>
                    <Input type="email" required placeholder="Ex: j.dupont@entreprise.ga" className="rounded-none border-border bg-background h-12 focus-visible:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Téléphone</Label>
                    <Input type="tel" required placeholder="+241 00 00 00 00" className="rounded-none border-border bg-background h-12 focus-visible:border-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Service Souhaité</Label>
                  <Select>
                    <SelectTrigger className="rounded-none border-border bg-background h-12 focus-visible:border-accent">
                      <SelectValue placeholder="Sélectionnez un service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                      <SelectItem value="audit">Audit & Commissariat aux Comptes</SelectItem>
                      <SelectItem value="fiscalite">Conseil Fiscal & Juridique</SelectItem>
                      <SelectItem value="comptabilite">Tenue & Supervision Comptable</SelectItem>
                      <SelectItem value="rh">Externalisation de la Paie & RH</SelectItem>
                      <SelectItem value="strategie">Conseil en Stratégie & Organisation</SelectItem>
                      <SelectItem value="formation">Formation Professionnelle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Description du Besoin</Label>
                  <Textarea required placeholder="Veuillez préciser le contexte et l'étendue de la mission souhaitée..." className="rounded-none border-border bg-background min-h-[120px] resize-none focus-visible:border-accent" />
                </div>

                <Button type="submit" variant="shimmer" className="w-full rounded-none h-14 font-bold uppercase tracking-widest text-xs transition-all shadow-xl group">
                  Envoyer ma Demande de Devis
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
