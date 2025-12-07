import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="py-20 scroll-mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Listo para dar foco y orden a tu negocio</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            El secreto no es NO DETENERSE sino SIEMPRE continuar
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Contactanos por WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-background text-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre" />
                  <Input placeholder="Email" type="email" />
                </div>
                <Input placeholder="Empresa" />
                <Textarea placeholder="Mensaje" rows={4} />
                <Button className="w-full">
                  Enviar mensaje
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+54 9 11 32 06 5774</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>coach@gerbianco.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>El Salvador 5707, Palermo, Buenos Aires</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">¿Querés empezar?</h4>
              <p className="opacity-90 mb-4">
                Hablemos sobre cómo podemos transformar tu negocio y alcanzar tus objetivos.
              </p>
              <Button variant="secondary" size="lg">
                Contactanos por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
