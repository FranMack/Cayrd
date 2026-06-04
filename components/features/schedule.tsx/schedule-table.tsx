
"use client";

import { useIsVisible } from "@/hooks/use-is-visible";
import { SessionPill } from "./session-pill";

const scheduleData = [
  { hora: "9hs", L: "Prep. Física", M: null, MI: "Prep. Física", J: "Prep. Táctica", V: null },
  { hora: "15hs", L: null, M: null, MI: null, J: null, V: null },
  { hora: "16hs", L: null, M: null, MI: null, J: null, V: null },
  { hora: "17hs", L: "Prep. Física", M: "Prep. Física", MI: "Prep. Técnica", J: "Prep. Táctica", V: null },
  { hora: "18hs", L: "Prep. Física", M: "Prep. Física", MI: "Prep. Técnica", J: "Prep. Táctica", V: null },
  { hora: "19hs", L: "Prep. Física", M: "Prep. Física", MI: "Prep. Técnica", J: "Prep. Táctica", V: null },
  { hora: "20hs", L: "Prep. Física", M: null, MI: "Prep. Técnica", J: null, V: null },
]

const days = ["L", "M", "MI", "J", "V"] as const

export function ScheduleTable(){
    const [ref, isVisible] = useIsVisible();
      
    return(
        <div ref={ref} className={`mt-12 overflow-x-auto rounded-xl bg-card ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} transition-all duration-700 ease-out`}>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-4 text-left font-[var(--font-bebas)] text-lg text-orange">
                  Hora
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="px-4 py-4 text-center font-[var(--font-bebas)] text-lg text-orange"
                  >
                    {day === "MI" ? "MI" : day}
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
                  <td className="px-4 py-3 font-[var(--font-bebas)] text-lg">
                    {row.hora}
                  </td>
                  {days.map((day) => (
                    <td key={day} className="px-4 py-3 text-center">
                      {row[day] ? (
                        <SessionPill type={row[day]} />
                      ) : (
                        <span className="text-muted-foreground/30">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}