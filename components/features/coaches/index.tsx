import { CouchCard } from "./couch-card";

const coaches = [
  {
    image: "/images/tincho.webp",
    name: "Martín",
    role: "Preparador Físico",
    bio: "Especializado en rendimiento deportivo amateur. Más de 8 años formando jugadores de fútbol en Rosario. Metodología basada en periodización táctica.",
    tags: ["#FísicaDeportiva", "#Fútbol", "#Rendimiento"],
    color: "ring-orange",
    position: "object-[25%_15%]",
  },
  {
    image: "/images/pela.webp",
    name: "Franco",
    role: "Entrenador de Fútbol",
    bio: "Ex jugador amateur de Liga Rosarina. Apasionado por la enseñanza del juego en todas sus dimensiones: técnica, táctica y mental.",
    tags: ["#TécnicaFútbol", "#Táctica", "#Amateur"],
    color: "ring-orange",
    position: "object-[50%_15%]",
  },
  {
    image: "/images/lurdes.webp",
    name: "Lourdes",
    role: "Entrenadora de Hockey",
    bio: "Jugadora activa del hockey rosarino. Especializada en desarrollo técnico y formación de equipos femeninos competitivos.",
    tags: ["#HockeyFemenino", "#Técnica", "#Comunidad"],
     color: "ring-orange",
    position: "object-[75%_15%]",
  },
];

export function Coaches() {
  return (
    <section id="nosotros" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="mb-12 text-center font-(--font-bebas) text-4xl tracking-wide sm:text-5xl">
          Nuestro <span className="text-orange">Equipo</span>
        </h2>

        {/* Coaches grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <CouchCard key={index} index={index} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
}
