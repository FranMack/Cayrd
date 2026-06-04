"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const activities = [
  {
    title: "Fútbol Masculino",
    description:
      "Grupos por nivel, 3 veces por semana. Preparación física y técnica con metodología profesional.",
    tag: "MÁS POPULAR",
    image: "images/futbol.jpg",
  },
  {
    title: "Hockey Femenino",
    description:
      "Técnica, táctica y comunidad. Grupos mixtos con enfoque competitivo y recreativo.",
    tag: null,
    image: "images/hockey.jpg",
  },
  {
    title: "Entrenamiento Personalizado",
    description:
      "Planificación individual con seguimiento semana a semana de tus objetivos.",
    tag: null,
        image: "images/personalizado.jpg",
  },
 
]

export function Activities() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="actividades" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
            Nuestras <span className="text-orange">Actividades</span>
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange text-orange transition-all hover:bg-orange hover:text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-orange text-orange transition-all hover:bg-orange hover:text-white"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards slider */}
        <div
          ref={scrollRef}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative min-w-[280px] max-w-[320px] flex-shrink-0 snap-start overflow-hidden rounded-xl bg-card transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-orange/10"
            >
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 right-0 z-10 h-1 bg-orange" />

              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {activity.tag && (
                  <div className="absolute top-4 right-4 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">
                    {activity.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 font-[var(--font-bebas)] text-2xl tracking-wide">
                  {activity.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile navigation dots */}
        <div className="mt-6 flex justify-center gap-2 sm:hidden">
          {activities.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-muted-foreground/30"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
