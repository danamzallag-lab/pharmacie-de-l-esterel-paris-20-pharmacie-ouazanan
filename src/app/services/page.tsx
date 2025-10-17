import { Metadata } from 'next'
import { Syringe, TestTube, FileText, Calendar, Clock, Shield, HeartPulse, Activity, Users, Package } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SectionReveal } from '@/components/SectionReveal'
import servicesData from '@/content/services.json'

export const metadata: Metadata = {
  title: 'Nos Services | Vaccination, Dépistage & Renouvellement',
  description: 'Découvrez tous les services de la Pharmacie Dr Ouazanan : vaccination en officine, tests de dépistage rapides, renouvellement d\'ordonnance et conseils pharmaceutiques personnalisés.',
}

const iconMap: Record<string, any> = {
  vaccination: Syringe,
  depistage: TestTube,
  'renouvellement-ordonnance': FileText,
  'consultation-pharmacien': HeartPulse,
  'bilan-prevention': Activity,
  'suivi-pathologies-chroniques': Users,
  'location-materiel-medical': Package,
}

const colorMap: Record<string, string> = {
  vaccination: 'from-primary to-primary-dark',
  depistage: 'from-accent to-primary',
  'renouvellement-ordonnance': 'from-primary-dark to-accent',
  'consultation-pharmacien': 'from-blue-500 to-blue-700',
  'bilan-prevention': 'from-green-500 to-green-700',
  'suivi-pathologies-chroniques': 'from-purple-500 to-purple-700',
  'location-materiel-medical': 'from-orange-500 to-orange-700',
}

const imageMap: Record<string, string> = {
  vaccination: '/images/services/vaccination.jpg',
  'consultation-pharmacien': '/images/services/consultation-pharmacien.jpg',
  'bilan-prevention': 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80',
  'suivi-pathologies-chroniques': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  depistage: '/images/services/depistage.jpg',
  'renouvellement-ordonnance': '/images/services/renouvellement-ordonnance.jpg',
  'location-materiel-medical': '/images/services/location-materiel-medical.jpg',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
        <div className="container-custom">
          <SectionReveal direction="left">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Nos services de santé
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Des services pharmaceutiques complets pour prendre soin de votre santé au quotidien
              </p>
              <Link
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-light px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                Prendre rendez-vous
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="section bg-light dark:bg-dark">
        <div className="container-custom">
          <div className="space-y-20">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.slug]
              const color = colorMap[service.slug]

              return (
                <SectionReveal
                  key={service.slug}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div id={service.slug} className="scroll-mt-24">
                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark dark:text-light">
                          {service.title}
                        </h2>

                        <p className="text-lg text-dark/70 dark:text-light/70 mb-6">
                          {service.description}
                        </p>

                        <div className="space-y-6">
                          {/* Avantages */}
                          <div>
                            <h3 className="font-display font-bold text-lg mb-3 text-dark dark:text-light">
                              Avantages
                            </h3>
                            <ul className="space-y-2">
                              {service.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-dark/70 dark:text-light/70">
                                  <span className="w-6 h-6 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                  </span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Prérequis */}
                          <div>
                            <h3 className="font-display font-bold text-lg mb-3 text-dark dark:text-light">
                              Prérequis
                            </h3>
                            <ul className="space-y-2">
                              {service.prerequisites.map((prerequisite, i) => (
                                <li key={i} className="flex items-start gap-3 text-dark/70 dark:text-light/70">
                                  <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                  <span>{prerequisite}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Link
                          href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center gap-2 mt-6"
                        >
                          <Calendar className="w-5 h-5" />
                          {service.cta}
                        </Link>
                      </div>

                      {/* Image */}
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="card overflow-hidden p-0 h-96 relative group">
                          <Image
                            src={imageMap[service.slug]}
                            alt={service.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary to-accent text-white">
        <div className="container-custom">
          <SectionReveal direction="left">
            <div className="text-center max-w-3xl mx-auto">
              <Clock className="w-16 h-16 mx-auto mb-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Prêt à prendre soin de votre santé ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Prenez rendez-vous en ligne sur Doctolib ou contactez-nous directement
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-light px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre RDV sur Doctolib
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
