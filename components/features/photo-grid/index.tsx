"use client";

import { useIsVisible } from "@/hooks/use-is-visible";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    caption: "Pretemporada 2024",
    size: "large",
    src: "/images/grilla-6.png",
  },
  {
    caption: "Entrenos nocturnos",
    size: "small",
    src: "/images/grilla-2.webp",
  },
  {
    caption: "El grupo manda",
    size: "small",
    src: "/images/grilla-3.webp",
  },
  {
    caption: "Complejo deportivo",
    size: "large",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AV3bgzonTjfJPu2vgfi1CpDzYP8Q3r.png",
  },
  {
    caption: "Cuerpo técnico",
    size: "small",
    src: "/images/grilla-5.webp",
  },
  {
    caption: "El equipo completo",
    size: "small",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ax68x7UwQD9KwBwT0dAO9Pz1wxPLUv.png",
  },
];

export function PhotoGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [ref, isVisible] = useIsVisible();
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="mb-12 text-center font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
          ASÍ SE VIVE EL{" "}
          <span className="relative inline-block text-orange">
            CAYR
            <span className="absolute -bottom-2 left-0 h-1 w-full skew-x-[-12deg] bg-orange" />
          </span>
        </h2>

        {/* Photo grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2"
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700 ease-out`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              {/* Image */}
              <div
                className={`relative aspect-square w-full overflow-hidden ${
                  index === 0 || index === 3 ? "md:aspect-auto md:h-full" : ""
                }`}
                style={{
                  minHeight: index === 0 || index === 3 ? "100%" : "auto",
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-orange/80 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="font-[var(--font-bebas)] text-xl text-white sm:text-2xl">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
