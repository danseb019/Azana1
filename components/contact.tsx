"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              CONTACTEZ-<span className="text-primary">NOUS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Prêt à commencer votre aventure musicale avec AZANA ?
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-8 bg-card border-border space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Informations de Contact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    N'hésitez pas à nous contacter pour toute question concernant nos services ou pour soumettre votre
                    musique.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a
                        href="mailto:contact@azanaworldwide.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contact@azanaworldwide.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Téléphone</p>
                      <a href="tel:+243" className="text-muted-foreground hover:text-primary transition-colors">
                        +243 XXX XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Localisation</p>
                      <p className="text-muted-foreground">
                        Est de la République
                        <br />
                        Démocratique du Congo
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="lg:col-span-3 p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="De quoi souhaitez-vous parler ?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto px-12">
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
