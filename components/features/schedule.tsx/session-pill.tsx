export function SessionPill({ type }: { type: string }) {
  const colors: Record<string, string> = {
    "Prep. Física": "bg-orange text-white",
    "Prep. Técnica": "bg-dark-red text-white",
    "Prep. Táctica": "bg-dark-gold text-white",
  }

  return (
    <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${colors[type] || "bg-muted"}`}>
      {type}
    </span>
  )
}  