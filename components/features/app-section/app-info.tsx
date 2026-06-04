"use client";
import { useIsVisible } from "@/hooks/use-is-visible";
import { Calendar, BarChart3, MessageCircle, Download } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Reservá tus clases",
    description: "Elegí horario y confirmá tu lugar en segundos",
  },
  {
    icon: BarChart3,
    title: "Seguí tu rendimiento",
    description: "Historial, métricas y evolución semana a semana",
  },
  {
    icon: MessageCircle,
    title: "Conectá con el equipo",
    description: "Novedades, mensajes y actualizaciones directas",
  },
];
export function AppInfo() {
    const [ref, isVisible] = useIsVisible();
    return(
          <div ref={ref} className={`${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700 ease-out`}>
            {/* Eyebrow */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange">
              POWERED BY CROSSFY
            </p>

            {/* Headline */}
            <h2 className="mb-6 font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
              TU ENTRENAMIENTO EN TU BOLSILLO
            </h2>

            {/* Subtext */}
            <p className="mb-8 text-lg text-muted-foreground">
              Reservá, seguí tu progreso y conectá con el equipo
            </p>
            <p className="mb-8 text-muted-foreground">
              Gestioná tus entrenamientos desde la app oficial de CAYR.D.
              Reservas, novedades, seguimiento de rendimiento y comunicación
              directa con tus profes.
            </p>

            {/* Features */}
            <div className="mb-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="mb-4 flex flex-wrap gap-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.crossfy.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-orange bg-transparent px-6 py-3 font-semibold transition-all hover:bg-orange hover:text-white"
              >
                <Download size={18} />
                Google Play
              </Link>
              <Link
                href="https://apps.apple.com/us/app/crossfy/id1390204987"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-orange bg-transparent px-6 py-3 font-semibold transition-all hover:bg-orange hover:text-white"
              >
                <Download size={18} />
                App Store
              </Link>
            </div>

            {/* Note */}
            <p className="text-sm text-muted-foreground">
              Buscá Centro de Actividad y Rendimiento Deportivo dentro de la app
            </p>
          </div>
    )
}