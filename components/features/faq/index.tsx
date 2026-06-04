
import { FAQCard } from "./faq-card";

const faqs = [
  {
    question: "¿Necesito experiencia previa para unirme?",
    answer:
      "No, no necesitás experiencia previa. Tenemos grupos para todos los niveles, desde principiantes hasta jugadores con años de experiencia. Nuestros entrenadores adaptarán los ejercicios a tu nivel.",
  },
  {
    question: "¿Cuántas veces por semana entreno?",
    answer:
      "Recomendamos entrenar 3 veces por semana para ver resultados óptimos. Podés elegir los días y horarios que mejor se adapten a tu rutina según nuestra grilla de horarios.",
  },
  {
    question: "¿Hay grupos por edad o nivel?",
    answer:
      "Sí, organizamos los grupos tanto por edad como por nivel de juego. Esto nos permite ofrecer entrenamientos más personalizados y efectivos para cada participante.",
  },
  {
    question: "¿Cómo me inscribo?",
    answer:
      "Podés escribirnos por WhatsApp o completar el formulario de contacto en esta página. Te respondemos a la brevedad con toda la información sobre horarios, precios y cómo empezar.",
  },
  {
    question: "¿Qué incluye el entrenamiento personalizado?",
    answer:
      "El entrenamiento personalizado incluye evaluación inicial, planificación semanal adaptada a tus objetivos, seguimiento de tu progreso, y comunicación directa con tu entrenador a través de la app.",
  },
  {
    question: "¿Tienen actividades para mujeres?",
    answer:
      "¡Sí! Tenemos Hockey Femenino con Lourdes, que es jugadora activa del hockey rosarino. También aceptamos mujeres en todas nuestras otras actividades.",
  },
  {
    question: "¿Cómo descargo la app Crossfy?",
    answer:
      "Podés descargar la app desde Google Play o App Store. Una vez instalada, buscá 'Centro de Actividad y Rendimiento Deportivo' dentro de la app para acceder a las reservas y seguimiento.",
  },
];

export function FAQ() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <h2 className="mb-12 text-center font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
          Preguntas <span className="text-orange">Frecuentes</span>
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
