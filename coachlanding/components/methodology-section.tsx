'use client'

import { useState } from "react"
import { Search, Target, Calendar, TrendingUp } from "lucide-react"

import { cn } from "@/lib/utils"

export function MethodologySection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: Search,
      title: "Diagnóstico guiado",
      description: "Entendemos objetivos, contexto y fricciones.",
      detail: "Reunimos datos clave, métricas base y escuchamos a stakeholders para alinear expectativas.",
    },
    {
      icon: Target,
      title: "Plan de foco",
      description: "Priorizamos 2-3 frentes con impacto real y definimos métricas.",
      detail: "Diseñamos objetivos SMART, hitos quincenales y tableros simples para medir avance.",
    },
    {
      icon: Calendar,
      title: "Sesiones y prácticas",
      description: "Encuentros semanales/quincenales + prácticas breves entre sesiones.",
      detail: "Micro-retos semanales, feedback inmediato y ajustes de agenda para mantener el ritmo.",
    },
    {
      icon: TrendingUp,
      title: "Seguimiento y ajustes",
      description: "Revisamos avances y tomamos decisiones informadas.",
      detail: "Iteramos sobre resultados, reforzamos hábitos y desbloqueamos cuellos de botella.",
    },
  ]

  return (
    <section id="metodologia" className="py-20 scroll-mt-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cómo <span className="text-primary">trabajamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro y estructurado para obtener resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const isActive = activeStep === index
            const isNext = activeStep + 1 === index
            return (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "group relative flex h-full flex-col gap-4 rounded-2xl border bg-card/60 p-5 text-left transition-all",
                  "hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                  isActive ? "border-primary/70 shadow-xl ring-1 ring-primary/40" : "border-border",
                  isNext ? "ring-1 ring-primary/20" : ""
                )}
              >
                <div className="relative flex items-center justify-between">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold",
                      isActive ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    )}
                  >
                    {index + 1}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                <div
                  className={cn(
                    "overflow-hidden rounded-xl bg-muted/50 px-4 py-3 text-sm text-foreground/90 transition-all",
                    isActive ? "opacity-100 max-h-32" : "opacity-0 max-h-0"
                  )}
                >
                  {step.detail}
                </div>
                {isActive && activeStep < steps.length - 1 && (
                  <div className="flex items-center justify-between text-xs text-primary/80 pt-1">
                    <span>Siguiente paso:</span>
                    <span className="font-semibold">{steps[activeStep + 1].title}</span>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
