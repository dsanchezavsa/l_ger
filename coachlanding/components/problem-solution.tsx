import { Target, Users, BarChart3 } from "lucide-react"

export function ProblemSolution() {
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
      </div>
    </section>
  )
}
