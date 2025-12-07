import { Target, Users, BarChart3 } from "lucide-react"

export function ProblemSolution() {
  const stats = [
    { value: "85%", label: "mejora en alineación y comunicación" },
    { value: "6x", label: "retorno promedio en procesos de coaching" },
    { value: "90 días", label: "para ver avances claros en foco y hábitos" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            De la complejidad a la <span className="text-primary">claridad</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cuando faltan foco y hábitos, el negocio se vuelve reactivo. Con un proceso de coaching claro, convertimos
            ruido en prioridades, y prioridades en acciones sostenidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Decisiones estratégicas</h3>
            <p className="text-muted-foreground">
              Con calma y perspectiva para tomar las decisiones correctas en el momento adecuado.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Comunicación efectiva</h3>
            <p className="text-muted-foreground">
              Coordinación que eleva el desempeño del equipo y mejora los resultados.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Tablero simple</h3>
            <p className="text-muted-foreground">Para ejecutar y medir avances de forma clara y sostenida.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border bg-muted/40 px-4 py-3"
            >
              <div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
