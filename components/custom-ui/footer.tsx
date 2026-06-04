import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#actividades", label: "Actividades" },
  { href: "#horarios", label: "Horarios" },
  { href: "#contacto", label: "Contacto" },
  { href: "#app", label: "App" },
]

export function Footer() {
  return (
    <footer className="bg-[#080808] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Col 1 - Logo and tagline */}
          <div>
            <Link href="#inicio" className="inline-block">
              <span className="font-[var(--font-bebas)] text-2xl tracking-wide">
                CAYR<span className="text-orange">.</span>D
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Entrenamos. Jugamos. Pertenecemos.
            </p>
          </div>

          {/* Col 2 - Links */}
          <div>
            <h4 className="mb-4 font-[var(--font-bebas)] text-lg tracking-wide text-orange">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Social and contact */}
          <div>
            <h4 className="mb-4 font-[var(--font-bebas)] text-lg tracking-wide text-orange">
              Redes y Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://instagram.com/cayr.d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Instagram size={16} />
                  @cayr.d
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5493413000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Phone size={16} />
                  +54 9 341 300-0000
                </Link>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  Hipódromo de Rosario
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border/30 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 CAYR.D — Centro de Actividad y Rendimiento Deportivo · Rosario,
            Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
