"use client"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Instagram, MessageCircle, CheckCircle, Lock } from "lucide-react"

const activityOptions = [
  "Fútbol Masculino",
  "Hockey Femenino",
  "Entrenamiento Personalizado",
  "Escuela Motriz",
  "No sé aún",
]

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    actividad: "",
    mensaje: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    // Simulate form submission
    setIsSubmitted(true)
  }

  return (
    <section id="contacto" className="relative bg-background py-20">
      {/* Grain overlay */}
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Info */}
          <div>
            <h2 className="mb-6 font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
              ¿TENÉS ALGUNA <span className="text-orange">DUDA</span>?
            </h2>

            <p className="mb-8 text-lg text-muted-foreground">
              Completá el formulario y te respondemos a la brevedad. O escribinos
              directo por WhatsApp.
            </p>

            {/* Contact pills */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-4 rounded-lg border-l-4 border-orange bg-card p-4">
                <MapPin className="text-orange" size={24} />
                <span>Hipódromo de Rosario, Av. Pellegrini 2202, Rosario</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg border-l-4 border-orange bg-card p-4">
                <Phone className="text-orange" size={24} />
                <span>WhatsApp: +54 9 341 300-0000</span>
              </div>
              <div className="flex items-center gap-4 rounded-lg border-l-4 border-orange bg-card p-4">
                <Instagram className="text-orange" size={24} />
                <span>Instagram: @cayr.d</span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Link
              href="https://wa.me/5493413000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-whatsapp/25"
            >
              <MessageCircle size={20} />
              Escribinos ahora
            </Link>
          </div>

          {/* Right - Form */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card">
            {/* Orange accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-orange" />

            {isSubmitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center p-8 text-center">
                <CheckCircle className="mb-4 text-whatsapp" size={64} />
                <p className="text-2xl font-semibold">
                  ¡Listo! Te respondemos pronto 🙌
                </p>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <div className="space-y-4">
                  {/* Nombre */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      WhatsApp / Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email (opcional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  {/* Actividad */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Actividad de interés
                    </label>
                    <select
                      value={formData.actividad}
                      onChange={(e) =>
                        setFormData({ ...formData, actividad: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                    >
                      <option value="">Seleccionar...</option>
                      {activityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      rows={4}
                      placeholder="¿Alguna pregunta sobre horarios, precios o cómo empezar?"
                      className="w-full resize-none rounded-lg border border-border bg-input px-4 py-3 text-foreground transition-all focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full rounded-lg bg-gradient-to-r from-orange to-orange/80 py-4 font-[var(--font-bebas)] text-xl tracking-wide text-white transition-all hover:shadow-lg hover:shadow-orange/25"
                  >
                    ENVIAR CONSULTA
                  </button>

                  {/* Privacy note */}
                  <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                    <Lock size={12} />
                    Tu información es privada. No compartimos tus datos.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
