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
      title: "Business Coaching",
      subtitle: "Sesiones 1:1 y Coaching de Sala",
      description:
        "Una integración única de coaching ontológico, coaching de negocios y coaching comercial para líderes, dueños de negocios y equipos que buscan claridad, dirección y resultados sostenibles.",
      bullets: ["Entrenamiento estratégico, emocional y conductual aplicado directamente a tus desafíos actuales."],
    },
    {
      icon: Users,
      title: "Dirección Estratégica & Alta Performance",
      subtitle: "Acompañamiento 1:1 para Dueños de Negocios y Ejecutivos",
      description:
        "Un espacio de trabajo de alto rendimiento donde combinamos dirección estratégica, mentalidad, diseño de futuro e implementación operativa.",
      bullets: [
        "Optimizamos tus decisiones, tu enfoque y tu capacidad de ejecución en el negocio y en el mercado.",
        "De la visión a la acción, con método, precisión y seguimiento profesional.",
      ],
    },
    {
      icon: TrendingUp,
      title: "Inteligencia Comercial Aplicada",
      subtitle: "Equipos Comerciales, Brokers y Unidades de Negocio",
      description: "Un modelo integral para ordenar, potenciar y escalar la operación comercial.",
      bullets: [
        "Incluye diagnóstico profundo, estrategia comercial, entrenamiento de habilidades, métricas de performance y seguimiento estructurado.",
        "Ideal para equipos que necesitan productividad, método y resultados claros, con una mirada moderna y basada en datos.",
      ],
    },
    {
      icon: Building,
      title: "Sistemas Organizacionales, Coaching Organizacional & Agilidad",
      subtitle: "OKR | Scrum | SPF | Procesos | Liderazgo | Cultura | Coaching Organizacional",
      description:
        "Implementación de sistemas modernos de ejecución para empresas que buscan orden, precisión y adaptabilidad.",
      bullets: [
        "Integración de OKR, metodologías ágiles, diseño de procesos, dirección de equipos, coaching organizacional y ajuste cultural en un mismo marco.",
        "Un enfoque práctico para organizaciones que quieren crecer con estructura, foco, velocidad y personas preparadas para ese crecimiento.",
      ],
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
                      isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
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
