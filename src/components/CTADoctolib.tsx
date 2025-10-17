'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

export default function CTADoctolib() {
  return (
    <section className="section bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Prise de rendez-vous en ligne</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Prenez rendez-vous en quelques clics
            </h2>

            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Vaccination, tests de dépistage, entretiens pharmaceutiques... Réservez votre créneau sur Doctolib 24h/24.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Clock,
                  title: 'Disponibilités en temps réel',
                  description: 'Choisissez le créneau qui vous convient',
                },
                {
                  icon: Shield,
                  title: 'Confirmation immédiate',
                  description: 'Recevez votre confirmation par email et SMS',
                },
                {
                  icon: Calendar,
                  title: 'Gestion simplifiée',
                  description: 'Modifiez ou annulez votre RDV facilement',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <feature.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                  <h3 className="font-display font-bold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-primary hover:bg-light px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-6 h-6" />
                Accéder à Doctolib
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
