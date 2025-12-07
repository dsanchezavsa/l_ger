'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Users, TrendingUp, Building, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const services = [
    {
      icon: User,
      title: "Coaching Individual",
      subtitle: "Dueños/Directivos",
      description:
        "Sesiones 1:1 para clarificar objetivos, fortalecer hábitos y alinear decisiones con propósito y resultados.",
      bullets: ["Mapa de objetivos en 90 días", "Rutinas de foco semanales", "Feedback directo y accionable"],
    },
    {
      icon: Users,
      title: "Training Ejecutivo",
      subtitle: "Liderazgo & Management",
      description:
        "Entrenamientos prácticos en liderazgo, comunicación y gestión para elevar el desempeño de mandos medios y managers.",
      bullets: ["Playbook de reuniones efectivas", "Coordinación y accountability", "Coaching de situaciones reales"],
    },
    {
      icon: TrendingUp,
      title: "Capacitación Comercial",
      subtitle: "Inteligencia de Ventas",
      description:
        "Técnicas realistas y medibles para prospección, pipeline y cierre; foco en hábitos y tableros simples.",
      bullets: ["Pipeline claro y priorizado", "Secuencias de contacto simples", "Tableros con indicadores semanales"],
    },
    {
      icon: Building,
      title: "Coaching Organizacional",
      subtitle: "Estrategias ágiles",
      description:
        "Diseño de rituales, coordinación y mejora continua para impulsar inteligencia colectiva y adaptabilidad.",
      bullets: ["Rituales de mejora continua", "KPIs compartidos y visibles", "Roles y acuerdos claros"],
    },
  ]

  return (
    <section
      id="servicios"
      className="py-20 scroll-mt-24 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/team-meeting-background.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            4 formas de <span className="text-primary">evolucionar</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Soluciones diseñadas para cada etapa y necesidad de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index
            return (
              <Card
                key={index}
                className={cn(
                  "h-full cursor-pointer border-white/20 bg-white/95 backdrop-blur-sm transition-all",
                  "hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                  isOpen ? "ring-2 ring-primary/40 shadow-2xl" : "hover:ring-1 hover:ring-primary/30"
                )}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpenIndex(isOpen ? null : index)
                  }
                }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="font-medium text-primary">{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <div
                    className={cn(
                      "overflow-hidden rounded-lg bg-muted/70 px-3 py-2 text-sm transition-all",
                      isOpen ? "opacity-100 max-h-44" : "opacity-0 max-h-0"
                    )}
                  >
                    <div className="mb-2 flex items-center gap-2 text-primary font-semibold">
                      <Sparkles className="h-4 w-4" />
                      Mini plan
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {service.bullets.map((item, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Ver programa
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
