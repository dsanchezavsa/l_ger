import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Mi foco está en <span className="text-primary">vos</span>
            </h2>
            <h3 className="text-xl font-semibold text-muted-foreground">Business coaching para altos ejecutivos</h3>
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

          <div className="relative">
            <Image
              src="/images/coach-working.jpeg"
              alt="Germán Bianco en su oficina profesional"
              width={600}
              height={600}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
