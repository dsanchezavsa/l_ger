import { Search, Target, Calendar, TrendingUp } from "lucide-react"

export function MethodologySection() {
  const steps = [
    {
      icon: Search,
      title: "Diagnóstico guiado",
      description: "Entendemos objetivos, contexto y fricciones.",
    },
    {
      icon: Target,
      title: "Plan de foco",
      description: "Priorizamos 2-3 frentes con impacto real y definimos métricas.",
    },
    {
      icon: Calendar,
      title: "Sesiones y prácticas",
      description: "Encuentros semanales/quincenales + prácticas breves entre sesiones.",
    },
    {
      icon: TrendingUp,
      title: "Seguimiento y ajustes",
      description: "Revisamos avances y tomamos decisiones informadas.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cómo <span className="text-primary">trabajamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso claro y estructurado para obtener resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
