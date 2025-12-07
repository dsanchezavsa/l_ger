"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Qué diferencia hay entre Coaching Ontológico y Business Coaching?",
      answer:
        "El Coaching Ontológico se enfoca en el 'ser' de la persona, trabajando en creencias, emociones y formas de interpretar la realidad. El Business Coaching se centra en resultados específicos del negocio. Mi enfoque integra ambos para lograr cambios profundos y sostenibles.",
    },
    {
      question: "¿Cómo se miden los avances y resultados?",
      answer:
        "Definimos métricas claras desde el inicio: KPIs del negocio, indicadores de liderazgo, y objetivos específicos. Realizamos seguimientos regulares y ajustes basados en datos concretos y feedback del equipo.",
    },
    {
      question: "¿Cada cuánto son las sesiones y cuánto duran?",
      answer:
        "Las sesiones individuales son semanales o quincenales, de 60-90 minutos. Para equipos, diseñamos workshops y entrenamientos según necesidades específicas. La frecuencia se adapta a tu agenda y objetivos.",
    },
    {
      question: "¿Trabajás con equipos además de 1:1?",
      answer:
        "Sí, trabajo tanto con líderes individuales como con equipos completos. Ofrezco coaching organizacional, entrenamientos grupales y facilitación de procesos de mejora continua.",
    },
    {
      question: "¿Qué pasa si mi agenda es limitada?",
      answer:
        "Diseñamos un plan flexible que se adapte a tu disponibilidad. Podemos trabajar con sesiones más espaciadas, micro-prácticas entre encuentros, y herramientas que optimicen el tiempo invertido.",
    },
    {
      question: "¿Cómo es el proceso de inicio?",
      answer:
        "Comenzamos con una llamada de diagnóstico gratuita para entender tu situación. Luego diseñamos un plan personalizado con objetivos claros, métricas y cronograma. El proceso formal inicia con la primera sesión estructurada.",
    },
  ]

  return (
    <section id="faq" className="py-20 scroll-mt-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre el proceso de coaching
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
