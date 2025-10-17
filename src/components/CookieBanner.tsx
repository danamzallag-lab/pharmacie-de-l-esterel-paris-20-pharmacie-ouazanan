'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-custom">
            <div className="glass glass-border rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2 text-dark dark:text-light">
                      Ce site utilise des cookies
                    </h3>
                    <p className="text-sm text-dark/70 dark:text-light/70 mb-2">
                      Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu.
                    </p>
                    <Link
                      href="/cookies"
                      className="text-sm text-primary hover:text-primary-dark underline"
                    >
                      En savoir plus sur notre politique de cookies
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button
                    onClick={rejectCookies}
                    className="btn-outline whitespace-nowrap"
                  >
                    Refuser
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="btn-primary whitespace-nowrap"
                  >
                    Accepter
                  </button>
                </div>

                <button
                  onClick={rejectCookies}
                  className="absolute top-4 right-4 p-2 hover:bg-dark/5 dark:hover:bg-light/5 rounded-lg transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5 text-dark/50 dark:text-light/50" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
