'use client'

import { motion } from 'framer-motion'
import { Syringe, TestTube, FileText, ArrowRight, HeartPulse, Activity, Users, Package } from 'lucide-react'
import Link from 'next/link'
import { SectionReveal } from './SectionReveal'

const services = [
  {
    slug: 'vaccination',
    title: 'Vaccination',
    icon: Syringe,
    summary: 'Vaccination à l\'officine par un professionnel de santé habilité.',
    bullets: ['Sur RDV', 'Contre-indications vérifiées', 'Traçabilité sécurisée'],
    color: 'from-primary to-primary-dark',
  },
  {
    slug: 'consultation-pharmacien',
    title: 'Consultation pharmacien',
    icon: HeartPulse,
    summary: 'Consultation personnalisée prise en charge par l\'Assurance Maladie.',
    bullets: ['Prise en charge Sécu', 'Entretien confidentiel', 'Conseils personnalisés'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    slug: 'bilan-prevention',
    title: 'Bilan de prévention',
    icon: Activity,
    summary: 'Bilans gratuits aux âges clés : 18-25, 45-50, 60-65, 70-75 ans.',
    bullets: ['100% gratuit', 'Dépistage personnalisé', 'Conseils adaptés'],
    color: 'from-green-500 to-green-700',
  },
  {
    slug: 'suivi-pathologies-chroniques',
    title: 'Suivi pathologies chroniques',
    icon: Users,
    summary: 'Accompagnement AOD/AVK, asthme, anticancéreux et personnes âgées.',
    bullets: ['Suivi régulier', 'Détection interactions', 'Coordination médecin'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    slug: 'depistage',
    title: 'Tests de dépistage',
    icon: TestTube,
    summary: 'Tests urinaire, angine (TROD), COVID et autres dépistages rapides.',
    bullets: ['Résultats rapides', 'Conseils personnalisés', 'Orientation médicale'],
    color: 'from-accent to-primary',
  },
  {
    slug: 'renouvellement-ordonnance',
    title: 'Renouvellement d\'ordonnance',
    icon: FileText,
    summary: 'Accompagnement dans le respect du cadre légal en vigueur.',
    bullets: ['Évaluation pharmacien', 'Coordination médecin', 'Conseils de bon usage'],
    color: 'from-primary-dark to-accent',
  },
  {
    slug: 'location-materiel-medical',
    title: 'Location matériel médical',
    icon: Package,
    summary: 'Vente et location : béquilles, fauteuils roulants, lits médicalisés, aérosols.',
    bullets: ['Large gamme disponible', 'Prise en charge Sécu', 'Livraison à domicile'],
    color: 'from-orange-500 to-orange-700',
  },
]

export default function ServicesGrid() {
  return (
    <section className="section bg-light dark:bg-dark">
      <div className="container-custom">
        <SectionReveal direction="left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-dark dark:text-light"
            >
              Nos services de santé
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-dark/70 dark:text-light/70">
              Une gamme complète de services pour votre bien-être et celui de votre famille
            </motion.p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <SectionReveal
              key={service.slug}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group card card-hover h-full flex flex-col"
              >
                {/* Icon with gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                  {service.title}
                </h3>

                <p className="text-dark/70 dark:text-light/70 mb-6 flex-1">
                  {service.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark/60 dark:text-light/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.slug}`}
                  className="group/link inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all focus-visible-ring rounded-lg"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal direction="left" delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-primary inline-flex items-center gap-2"
            >
              Voir tous nos services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
