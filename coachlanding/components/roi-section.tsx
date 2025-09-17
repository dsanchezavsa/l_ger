import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Target } from "lucide-react"

export function ROISection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            El ROI del <span className="text-primary">Business Coaching</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Datos respaldados por estudios internacionales sobre el impacto del coaching
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="p-8">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">6x</div>
              <p className="text-sm text-muted-foreground">Retorno sobre la inversión en procesos de coaching</p>
              <p className="text-xs text-muted-foreground mt-2">(Manchester Inc., EE.UU.)</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <p className="text-sm text-muted-foreground">
                Mejora en rentabilidad con formación + coaching vs solo formación
              </p>
              <p className="text-xs text-muted-foreground mt-2">(Public Personnel Management, RU)</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Mejoras en comunicación, liderazgo y trabajo en equipo</p>
              <p className="text-xs text-muted-foreground mt-2">(Manpower, Canadá)</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Solicitar diagnóstico gratuito
          </Button>
        </div>
      </div>
    </section>
  )
}
