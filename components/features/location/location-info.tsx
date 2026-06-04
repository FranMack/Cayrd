"use client";
import { useIsVisible } from "@/hooks/use-is-visible";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function LocationInfo() {
  const [ref, isVisible] = useIsVisible();

  
  return (
    <div ref={ref} className="space-y-6">
      <div
        className={`flex items-start gap-4 transition-all duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
        style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}
      >
        <MapPin className="mt-1 shrink-0 text-orange" size={24} />
        <div>
          <h3 className="font-semibold">Dirección</h3>
          <p className="text-muted-foreground">
            Hipódromo de Rosario, Av. Pellegrini 2202
            <br />
            Rosario, Santa Fe, Argentina
          </p>
        </div>
      </div>

      <div
        className={`flex items-start gap-4 transition-all duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
        style={{ transitionDelay: isVisible ? "140ms" : "0ms" }}
      >
        <Clock className="mt-1 shrink-0 text-orange" size={24} />
        <div>
          <h3 className="font-semibold">Horarios de atención</h3>
          <p className="text-muted-foreground">
            Lunes a Viernes: 9:00 - 21:00
            <br />
            Sábados: 9:00 - 13:00
          </p>
        </div>
      </div>

      <div
        className={`flex items-start gap-4 transition-all duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
        style={{ transitionDelay: isVisible ? "280ms" : "0ms" }}
      >
        <Phone className="mt-1 shrink-0 text-orange" size={24} />
        <div>
          <h3 className="font-semibold">WhatsApp</h3>
          <Link
            href="https://wa.me/5493413000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:underline"
          >
            +54 9 341 300-0000
          </Link>
        </div>
      </div>

      <div
        className={`flex items-start gap-4 transition-all duration-700 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
        }`}
        style={{ transitionDelay: isVisible ? "420ms" : "0ms" }}
      >
        <Instagram className="mt-1 shrink-0 text-orange" size={24} />
        <div>
          <h3 className="font-semibold">Instagram</h3>
          <Link
            href="https://instagram.com/cayr.d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange hover:underline"
          >
            @cayr.d
          </Link>
        </div>
      </div>
    </div>
  );
}
