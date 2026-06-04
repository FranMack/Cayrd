"use client";

import { useIsVisible } from "@/hooks/use-is-visible";
import { SessionPill } from "./session-pill";

const scheduleData = [
  {
    hora: "8hs",
    L: "Personal",
    M: null,
    MI: "Personal",
    J: null,
    V: null,
  },
  { hora: "14hs", L: "Hockey", M: null, MI: "Hockey", J: "Hockey", V: null },
  { hora: "15hs", L: null, M: "Personal", MI: null, J: null, V: null },
  { hora: "16hs", L: "Hockey", M: null, MI: null, J: null, V: "Hockey" },
  { hora: "17hs", L: null, M: "Fútbol A", MI: null, J: "Fútbol A", V: null },
  { hora: "18hs", L: null, M: "Fútbol B", MI: null, J: "Fútbol B", V: null },
  { hora: "19hs", L: null, M: "Fútbol C", MI: null, J: "Fútbol C", V: null },
  {
    hora: "20hs",
    L: "Personal",
    M: null,
    MI: "Personal",
    J: null,
    V: null,
  },
];

const days = ["L", "M", "MI", "J", "V"] as const;

const dayLabels: Record<(typeof days)[number], string> = {
  L: "Lun",
  M: "Mar",
  MI: "Mié",
  J: "Jue",
  V: "Vie",
};

export function ScheduleTable() {
  const [ref, isVisible] = useIsVisible();

  return (
    <div
      ref={ref}
      className={`mt-12 transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="overflow-hidden rounded-xl bg-card">
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b border-border">
              <th className="w-14 px-1.5 py-3 text-left font-(--font-bebas) text-sm text-orange sm:w-20 sm:px-4 sm:py-4 sm:text-lg">
                Hora
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="w-[18%] px-1 py-3 text-center font-(--font-bebas) text-sm text-orange sm:px-4 sm:py-4 sm:text-lg"
                >
                  <span className="sm:hidden">{dayLabels[day]}</span>
                  <span className="hidden sm:inline">
                    {day === "MI" ? "MI" : day}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-border/50 last:border-0"
              >
                <td className="whitespace-nowrap px-1.5 py-2 font-(--font-bebas) text-sm sm:px-4 sm:py-3 sm:text-lg">
                  {row.hora}
                </td>
                {days.map((day) => (
                  <td key={day} className="px-1 py-2 text-center sm:px-4">
                    {row[day] ? (
                      <SessionPill type={row[day]} />
                    ) : (
                      <span className="text-[10px] text-muted-foreground/30 sm:text-sm">
                        —
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
