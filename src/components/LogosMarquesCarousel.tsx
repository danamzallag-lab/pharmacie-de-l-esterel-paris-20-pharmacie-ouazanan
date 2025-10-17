'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const marques = [
  { name: 'Avène', logo: '/logos/avene.svg' },
  { name: 'La Roche-Posay', logo: '/logos/laroche-posay.svg' },
  { name: 'Bioderma', logo: '/logos/bioderma.svg' },
  { name: 'SVR', logo: '/logos/svr.svg' },
  { name: 'A-Derma', logo: '/logos/aderma.svg' },
  { name: 'PiLeJe', logo: '/logos/pileje.svg' },
  { name: 'NHCO', logo: '/logos/nhco.svg' },
  { name: 'Aboca', logo: '/logos/aboca.svg' },
]

export default function LogosMarquesCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate items for seamless loop
  const duplicatedMarques = [...marques, ...marques]

  return (
    <section className="section bg-white dark:bg-dark-lighter overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-dark dark:text-light">
            Nos marques partenaires
          </h2>
          <p className="text-lg text-dark/70 dark:text-light/70">
            Les plus grandes marques de parapharmacie et de compléments alimentaires
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark-lighter to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark-lighter to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <motion.div
            className="flex gap-20"
            animate={{
              x: isPaused ? 0 : ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {duplicatedMarques.map((marque, index) => (
              <div
                key={`${marque.name}-${index}`}
                className="flex-shrink-0 w-56 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={marque.logo}
                    alt={`Logo ${marque.name}`}
                    width={224}
                    height={128}
                    className="object-contain w-full h-full"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/marques"
            className="btn-outline inline-flex items-center gap-2"
          >
            Découvrir toutes nos marques
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
