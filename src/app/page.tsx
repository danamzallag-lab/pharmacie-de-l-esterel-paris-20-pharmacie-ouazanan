import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import LogosMarquesCarousel from '@/components/LogosMarquesCarousel'
import CTADoctolib from '@/components/CTADoctolib'
import { SectionReveal } from '@/components/SectionReveal'
import { Star, Users, Clock, Shield } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <LogosMarquesCarousel />

      {/* Why choose us section */}
      <section className="section bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
        <div className="container-custom">
          <SectionReveal direction="left">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-dark dark:text-light">
                Pourquoi nous choisir ?
              </h2>
              <p className="text-lg md:text-xl text-dark/70 dark:text-light/70">
                Une pharmacie de proximité alliant expertise, disponibilité et qualité de service
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Équipe experte',
                description: 'Pharmaciens diplômés et formés en continu',
                direction: 'left' as const,
              },
              {
                icon: Clock,
                title: 'Disponibilité',
                description: 'Ouvert 7j/7 avec prise de RDV en ligne',
                direction: 'right' as const,
              },
              {
                icon: Shield,
                title: 'Confidentialité',
                description: 'Respect strict du secret médical',
                direction: 'left' as const,
              },
              {
                icon: Star,
                title: 'Qualité',
                description: 'Marques premium et conseils personnalisés',
                direction: 'right' as const,
              },
            ].map((feature, index) => (
              <SectionReveal key={index} direction={feature.direction} delay={index * 0.1}>
                <div className="card text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-dark dark:text-light">
                    {feature.title}
                  </h3>
                  <p className="text-dark/70 dark:text-light/70">
                    {feature.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTADoctolib />
    </>
  )
}
