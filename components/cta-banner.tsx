import Link from "next/link"

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Diagonal orange stripe */}
      <div
        className="absolute inset-0 bg-orange"
        style={{
          clipPath: "polygon(0 30%, 100% 0%, 100% 70%, 0% 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 font-[var(--font-bebas)] text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
          ¿LISTO PARA EL PRÓXIMO NIVEL?
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Sumate al grupo. El primer entrenamiento es gratis.
        </p>
        <Link
          href="https://wa.me/5493413000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-white px-8 py-4 font-[var(--font-bebas)] text-xl tracking-wide text-orange transition-all hover:scale-105 hover:shadow-xl"
        >
          Escribinos por WhatsApp
        </Link>
      </div>
    </section>
  )
}
