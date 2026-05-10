"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react"
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
  { icon: Phone, label: "Téléphone", value: "+241 00 00 00 00", href: "tel:+24100000000" },
  { icon: Mail, label: "Email", value: "contact@cabinet2r-conseil.ga", href: "mailto:contact@cabinet2r-conseil.ga" },
  { icon: MapPin, label: "Siège Social", value: "Boulevard du Bord de Mer, Libreville" },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Demande de Consultation</p>
              <h2 className="mt-6 font-serif text-4xl sm:text-5xl font-medium text-primary leading-tight">
                Une approche <span className="italic font-light">personnalisée</span> pour vos enjeux.
              </h2>
              <p className="mt-8 text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                Nos experts sont à votre disposition pour analyser vos besoins et vous proposer une stratégie d&apos;accompagnement adaptée à votre structure.
              </p>

              <div className="mt-12 space-y-10">
                {coordonnees.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex items-start gap-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-secondary text-primary">
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
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/50 p-8 lg:p-12 border border-border"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="h-20 w-20 bg-primary flex items-center justify-center text-accent mb-8">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-3xl text-primary mb-4">Message Envoyé</h3>
                <p className="text-muted-foreground font-light">Nous reviendrons vers vous dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Nom Complet</Label>
                    <Input required placeholder="Ex: Jean Dupont" className="rounded-none border-border bg-background h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Email Professionnel</Label>
                    <Input type="email" required placeholder="Ex: j.dupont@entreprise.ga" className="rounded-none border-border bg-background h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Sujet de Consultation</Label>
                  <Select>
                    <SelectTrigger className="rounded-none border-border bg-background h-12">
                      <SelectValue placeholder="Sélectionnez un domaine d'expertise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audit">Audit & Commissariat</SelectItem>
                      <SelectItem value="fiscalite">Conseil Fiscal & Juridique</SelectItem>
                      <SelectItem value="comptabilite">Expertise Comptable</SelectItem>
                      <SelectItem value="rh">Capital Humain & Paie</SelectItem>
                      <SelectItem value="formation">Formation & Séminaires</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-primary/60">Message</Label>
                  <Textarea required placeholder="Décrivez brièvement votre besoin..." className="rounded-none border-border bg-background min-h-[150px] resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-none h-14 font-bold uppercase tracking-widest text-xs transition-all shadow-xl">
                  Envoyer la Demande
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

