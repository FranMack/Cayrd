"use client";
import { useIsVisible } from "@/hooks/use-is-visible";
import Image from "next/image";
import Link from "next/link";

interface LocationMapProps {
  google_map_url: string;
}
export function LocationMap({ google_map_url }: LocationMapProps) {
  const [ref, isVisible] = useIsVisible();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
      }`}
    >
      <Link
        href={google_map_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-3/2 overflow-hidden rounded-xl border border-border/50 transition-all hover:border-orange/50 hover:shadow-lg hover:shadow-orange/10"
      >
        <Image
          src="/images/map.png"
          alt="Mapa de ubicación del Centro de Actividad y Rendimiento Deportivo"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
          <span className="translate-y-4 rounded-lg bg-orange px-4 py-2 font-semibold text-black opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            Abrir en Google Maps
          </span>
        </div>
      </Link>
    </div>
  );
}
