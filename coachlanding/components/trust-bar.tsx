"use client"

import Image from "next/image"

export function TrustBar() {
  const companies = [
    { name: "RE/MAX Splendid", logo: "/images/logos/remax.png" },
    { name: "Star Technology", logo: "/images/logos/star.png" },
    { name: "RE/MAX Vincit", logo: "/images/logos/remax-vincit.png" },
    { name: "Chevron", logo: "/images/logos/chevron.png" },
    { name: "Codigo", logo: "/images/logos/codigo.png" },
    { name: "Corven", logo: "/images/logos/corven.png" },
    { name: "Exxon", logo: "/images/logos/exxon.png" },
    { name: "Iris", logo: "/images/logos/iris.png" },
    { name: "Manly", logo: "/images/logos/manly.png" },
    { name: "Mesquita Hermanos", logo: "/images/logos/Mesquita-hermanos.png" },
    { name: "Mustand", logo: "/images/logos/mustand.png" },
    { name: "Nimbo", logo: "/images/logos/nimbo.png" },
    { name: "Polonia", logo: "/images/logos/polonia.png" },
  ]

  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Más de <span className="font-semibold text-primary">10 mil horas</span> de sesiones y entrenamientos con
            dueños de negocios, brokers y equipos comerciales
          </p>

          <div className="relative overflow-hidden mask-gradient max-w-full">
            <div className="flex animate-infinite-scroll will-change-transform">
              {/* First set of logos */}
              {companies.map((company, i) => (
                <div key={`first-${i}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`Logo de ${company.name}`}
                    width={150}
                    height={75}
                    className="max-w-[150px] max-h-[75px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, i) => (
                <div key={`second-${i}`} className="flex-shrink-0 mx-8">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`Logo de ${company.name}`}
                    width={150}
                    height={75}
                    className="max-w-[150px] max-h-[75px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        
        @keyframes infinite-scroll {
          from { transform: translate3d(0, 0, 0) }
          to { transform: translate3d(-50%, 0, 0) }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          width: fit-content;
          will-change: transform;
        }
        
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

