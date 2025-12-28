"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Script from "next/script"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      text: "Gracias a su apoyo pude reconectar con lo estratégico y capacitar al equipo en liderazgo con excelentes resultados. Tranquilidad, visión y foco en lo importante.",
      author: "Juan Manuel Otero",
      role: "Titular, La Maquinita",
    },
    {
      text: "Logré cambios más rápido de lo esperado: reenfoque, mejoras concretas en la oficina y resultados medibles. Entrega total en cada encuentro.",
      author: "Martín Macagno",
      role: "Broker, RE/MAX Express",
    },
    {
      text: "Metodología clara y minuciosa. Mejoramos procesos, trabajo en equipo, ventas y comunicación interna en un 100%.",
      author: "Ariel Nassimoff",
      role: "La Maquinita Villa Crespo y Palermo",
    },
    {
      text: "Profesionalismo y claridad. Las sesiones son un espacio valioso para descubrir lo que realmente necesito y accionar.",
      author: "Hernán Horischnik",
      role: "Broker, RE/MAX Splendid",
    },
    {
      text: "Enfoque inteligente y energía que impulsan a lograr objetivos ambiciosos de forma sostenida.",
      author: "Ezequiel Karp",
      role: "Agencia Tormenta",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/jr7p19kwja.js" strategy="afterInteractive" type="module" />
      <Script src="https://fast.wistia.com/embed/byw6n33dvj.js" strategy="afterInteractive" type="module" />
      <Script src="https://fast.wistia.com/embed/6sy9gteqtd.js" strategy="afterInteractive" type="module" />
      <Script src="https://fast.wistia.com/embed/61ujocskyw.js" strategy="afterInteractive" type="module" />
      <section
        id="testimonios"
        className="py-20 scroll-mt-24 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/imgGer/gerBgTestis.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Lo que dicen mis <span className="text-primary">clientes</span>
            </h2>
            <p className="text-xl text-gray-200">Testimonios reales de empresarios que transformaron sus negocios</p>
          </div>

          <div className="mb-16 grid grid-cols-3 gap-6 justify-items-center">
            <style jsx>{`
              wistia-player[media-id='jr7p19kwja']:not(:defined),
              wistia-player[media-id='byw6n33dvj']:not(:defined),
              wistia-player[media-id='6sy9gteqtd']:not(:defined),
              wistia-player[media-id='61ujocskyw']:not(:defined) {
                display: block;
                filter: blur(5px);
                padding-top: 177.78%;
              }
              wistia-player[media-id='jr7p19kwja']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jr7p19kwja/swatch');
              }
              wistia-player[media-id='byw6n33dvj']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/byw6n33dvj/swatch');
              }
              wistia-player[media-id='6sy9gteqtd']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6sy9gteqtd/swatch');
              }
              wistia-player[media-id='61ujocskyw']:not(:defined) {
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/61ujocskyw/swatch');
              }
            `}</style>
            <div className="w-full max-w-xs">
              <wistia-player media-id="jr7p19kwja" aspect="0.5625"></wistia-player>
            </div>
            <div className="w-full max-w-xs">
              <wistia-player media-id="byw6n33dvj" aspect="0.5625"></wistia-player>
            </div>
            <div className="w-full max-w-xs">
              <wistia-player media-id="6sy9gteqtd" aspect="0.5625"></wistia-player>
            </div>
            <div className="w-full max-w-xs col-start-2">
              <wistia-player media-id="61ujocskyw" aspect="0.5625"></wistia-player>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <Quote className="h-12 w-12 text-primary mb-6 mx-auto" />
                <blockquote className="text-xl md:text-2xl text-center mb-8 leading-relaxed text-balance">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
