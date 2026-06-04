export function SessionPill({ type }: { type: string }) {
  const colors: Record<string, string> = {
    "Fútbol A": "bg-orange text-white",
    "Fútbol B": "bg-dark-red text-white",
    "Fútbol C": "bg-dark-gold text-white",
    Hockey: "bg-pitch-green text-white",
    "Personal": "bg-blue-800 text-white",
  };

  return (
    <span
      className={`inline-block max-w-full rounded-full px-1.5 py-1 text-[10px] font-medium leading-none sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 ${colors[type] || "bg-muted"}`}
    >
      {type}
    </span>
  );
}
