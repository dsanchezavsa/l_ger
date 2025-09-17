import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Users, TrendingUp, Building } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: User,
      title: "Coaching Individual",
      subtitle: "Dueños/Directivos",
      description:
        "Sesiones 1:1 para clarificar objetivos, fortalecer hábitos y alinear decisiones con propósito y resultados.",
    },
    {
      icon: Users,
      title: "Training Ejecutivo",
      subtitle: "Liderazgo & Management",
      description:
        "Entrenamientos prácticos en liderazgo, comunicación y gestión para elevar el desempeño de mandos medios y managers.",
    },
    {
      icon: TrendingUp,
      title: "Capacitación Comercial",
      subtitle: "Inteligencia de Ventas",
      description:
        "Técnicas realistas y medibles para prospección, pipeline y cierre; foco en hábitos y tableros simples.",
    },
    {
      icon: Building,
      title: "Coaching Organizacional",
      subtitle: "Estrategias Ágiles",
      description:
        "Diseño de rituales, coordinación y mejora continua para impulsar inteligencia colectiva y adaptabilidad.",
    },
  ]

  return (
    <section
      className="py-20 relative bg-cover bg-center bg-no-repeat"
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
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm border-white/20"
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
                <Button variant="outline" className="w-full bg-transparent">
                  Ver programa
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
