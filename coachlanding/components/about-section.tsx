import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative py-20 scroll-mt-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/imgGer/gerBg1.png)" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mi foco está en <span className="text-white">vos</span>
          </h2>
          <h3 className="text-xl font-semibold text-white/80">Business coaching para altos ejecutivos</h3>
          <p className="text-lg leading-relaxed text-pretty">
            Trabajo con dueños de negocios y equipos para construir claridad interna, foco y hábitos que se sostienen.
            Mi enfoque integra coaching ontológico, liderazgo y gestión para lograr cambios visibles en el día a día y
            resultados medibles.
          </p>
          <p className="text-lg leading-relaxed text-pretty">
            Una de mis mayores motivaciones diarias es aportar herramientas para potenciar la agilidad emocional a las
            y los líderes empresarios para hacer del mundo de los negocios un espacio de seres humanos integrados con
            la totalidad de la experiencia de la vida.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Conocer mi enfoque
          </Button>
        </div>
      </div>
    </section>
  )
}
