import { Users, Target, MapPin } from "lucide-react"
import { AnimatedCounter } from "./animated-counter"

const features = [
  {
    icon: Users,
    title: "Comunidad activa",
    description: "Grupos de todas las edades, de 30 a más de 50",
  },
  {
    icon: Target,
    title: "Entrenamiento real",
    description: "Metodología profesional adaptada al jugador amateur",
  },
  {
    icon: MapPin,
    title: "Hipódromo Rosario",
    description: "Instalaciones de primer nivel en el corazón de la ciudad",
  },
]

const stats = [
  { value: 200, suffix: "+", label: "Atletas activos" },
  { value: 3, suffix: "", label: "Disciplinas" },
  { value: 5, suffix: "+", label: "Años de comunidad" },
]



export function About() {
  return (
    <section className="relative border-t-4 border-orange bg-secondary py-20">
      {/* Diagonal border effect */}
      <div
        className="absolute -top-1 left-0 right-0 h-16 bg-background"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="mb-16 text-center font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
          ¿Qué es <span className="text-orange">CAYR.D</span>?
        </h2>

        {/* Features grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange transition-all group-hover:scale-110 group-hover:bg-orange/20">
                <feature.icon size={32} />
              </div>
              <h3 className="mb-2 font-[var(--font-bebas)] text-2xl tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid gap-8 rounded-xl bg-card/50 p-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
