"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Empecé a los 42 y nunca me sentí más en forma. El grupo te engancha.",
    author: "Sebastián R.",
    initial: "S",
  },
  {
    quote: "Franco te exige pero te cuida. Aprendí más en 3 meses que en años de fútbol de barrio.",
    author: "Diego M.",
    initial: "D",
  },
  {
    quote: "Lourdes es una genia. El hockey femenino acá tiene identidad propia.",
    author: "Valentina G.",
    initial: "V",
  },
  {
    quote: "Vine a perder unos kilos y terminé clasificando a un torneo. El CAYR te cambia.",
    author: "Marcelo T.",
    initial: "M",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="mb-12 text-center font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
          Lo que dice la <span className="text-orange">gente</span>
        </h2>

        {/* Testimonial carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-4"
              >
                <div className="rounded-xl bg-card p-8 text-center">
                  {/* Quote marks */}
                  <div className="mb-6 font-[var(--font-bebas)] text-6xl leading-none text-orange">
                    &ldquo;
                  </div>

                  {/* Quote */}
                  <p className="mb-8 text-xl leading-relaxed sm:text-2xl">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange">
                      <span className="font-[var(--font-bebas)] text-xl text-white">
                        {testimonial.initial}
                      </span>
                    </div>
                    <span className="font-semibold">{testimonial.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot navigation */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-orange"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
