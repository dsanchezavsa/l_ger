import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background py-16 md:py-24"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                Business Coaching y <span className="text-primary">Coaching Ontológico</span> para dueños de negocios
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Lográ foco, claridad y hábitos efectivos para tomar mejores decisiones y obtener resultados medibles.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-base md:text-lg">Liderazgo con agilidad emocional</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-base md:text-lg">Equipo alineado y comunicación efectiva</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-base md:text-lg">Plan claro, prioridades y ejecución sostenida</span>
              </div>
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="text-base md:text-lg px-6 py-4">
                Escríbeme por WhatsApp
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center overflow-hidden">
            <div className="relative z-10">
              <Image
                src="/images/coach-office.png"
                alt="Germán Bianco - Business Coach"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl max-h-[70vh] w-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
