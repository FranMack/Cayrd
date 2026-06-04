import { ScheduleTable } from "./schedule-table";

export function Schedule() {
  return (
    <section id="horarios" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-4 text-center">
          <h2 className="font-(--font-bebas) text-4xl tracking-wide sm:text-5xl">
            <span className="text-orange">Horarios</span>
          </h2>
          <p className="mt-4 font-(--font-bebas) text-2xl text-muted-foreground">
            2 VECES POR SEMANA. A TU RITMO.
          </p>
        </div>

        {/* Schedule table */}
        <ScheduleTable />

        {/* Note */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Los grupos A, B y C son fútbol. Martes y jueves: A de 17 a 18, B de 18
          a 19 y C de 19 a 20. Hockey y A medida tienen horarios variables.
        </p>
      </div>
    </section>
  );
}
