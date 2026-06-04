import { ScheduleTable } from "./schedule-table";

export function Schedule() {
  return (
    <section id="horarios" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-4 text-center">
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wide sm:text-5xl">
            <span className="text-orange">Horarios</span>
          </h2>
          <p className="mt-4 font-[var(--font-bebas)] text-2xl text-muted-foreground">
            2 VECES POR SEMANA. A TU RITMO.
          </p>
        </div>

        {/* Schedule table */}
        <ScheduleTable />

        {/* Note */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Lunes, miércoles y jueves 17hs y 18hs · Lunes, martes y jueves 17hs y
          18hs
        </p>
      </div>
    </section>
  );
}
