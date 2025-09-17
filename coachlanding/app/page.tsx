import { HeroSection } from "@/components/hero-section"
import { TrustBar } from "@/components/trust-bar"
import { ProblemSolution } from "@/components/problem-solution"
import { ServicesSection } from "@/components/services-section"
import { MethodologySection } from "@/components/methodology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROISection } from "@/components/roi-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <AnimatedSection animation="fade-in" delay={100}>
        <TrustBar />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={200}>
        <ProblemSolution />
      </AnimatedSection>

      <AnimatedSection animation="slide-left" delay={100}>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={150}>
        <MethodologySection />
      </AnimatedSection>

      <AnimatedSection animation="slide-right" delay={100}>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection animation="scale-up" delay={200}>
        <ROISection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection animation="slide-left" delay={150}>
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={100}>
        <CTASection />
      </AnimatedSection>
    </main>
  )
}
