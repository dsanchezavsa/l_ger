'use client'

import Image from "next/image"

import { cn } from "@/lib/utils"

export function StickyHeader() {
  const visible = true
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#metodologia", label: "Metodología" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "FAQs" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 ease-out",
        visible ? "translate-y-0 opacity-100" : "-translate-y-6 pointer-events-none opacity-0"
      )}
    >
      <div className="mt-3 w-full max-w-6xl px-4">
        <div className="flex items-center justify-between gap-6 rounded-full bg-gradient-to-r from-slate-900/95 to-slate-800/90 px-5 py-3 shadow-xl ring-1 ring-white/10 backdrop-blur">
          <Image src="/images/logoger.png" alt="Logo German Bianco" width={160} height={40} className="h-10 w-auto" priority />

          <nav className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
