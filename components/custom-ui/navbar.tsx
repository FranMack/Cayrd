"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#actividades", label: "Actividades" },
  { href: "#horarios", label: "Horarios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#app", label: "App" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 return (
  <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-1">
            <span className="font-[var(--font-bebas)] text-2xl tracking-wide text-foreground">
              CAYR<span className="text-orange">.</span>D
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/5493413000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Sumate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay — FUERA del nav */}
    {isOpen && (
      <div className="fixed inset-0 top-16 z-40 bg-black md:hidden">
        <div className="flex flex-col items-center gap-8 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-[var(--font-bebas)] text-2xl tracking-wide text-white transition-colors hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5493413000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-orange px-8 py-3 text-lg font-semibold text-white"
          >
            Sumate
          </Link>
        </div>
      </div>
    )}
  </>
)
}
