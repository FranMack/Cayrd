
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Canchas de fútbol al atardecer"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
        {/* Additional subtle gradient for depth */}
        <div className="absolute inset-0 bg-linear-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Motion blur lines overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="motion-line absolute h-0.5 w-full bg-linear-to-r from-transparent via-orange/50 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Headline */}
        <h1 className="font-[var(--font-bebas)] text-6xl leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-lg">
          <span className="block opacity-0 animate-fade-in-up">ENTRENATE.</span>
          <span
            className="block text-orange drop-shadow-[0_0_30px_rgba(255,106,0,0.3)] opacity-0 animate-fade-in-up"
            style={{ animationDelay: "220ms" }}
          >
            JUGÁ.
          </span>
          <span
            className="block opacity-0 animate-fade-in-up"
            style={{ animationDelay: "440ms" }}
          >
            PERTENECÉ.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-2xl text-lg text-foreground/90 sm:text-xl drop-shadow-md">
          Fútbol amateur · Hockey Femenino · Entrenamiento personalizado ·
          Rosario
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#actividades"
            className="rounded-full bg-orange px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange/25"
          >
            Ver Más
          </Link>
       
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="bounce-scroll flex flex-col items-center gap-2 text-foreground/70">
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
