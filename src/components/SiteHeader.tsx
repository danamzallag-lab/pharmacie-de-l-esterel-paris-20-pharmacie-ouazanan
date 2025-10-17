'use client'

import { motion, useScroll } from 'framer-motion'
import { Menu, X, Phone, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { useTheme } from './ThemeProvider'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Parapharmacie', href: '/marques' },
  { name: 'Compléments', href: '/complements' },
  { name: 'Équipe', href: '/equipe' },
  { name: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_PHONE || '0143724665'}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{process.env.NEXT_PUBLIC_PHONE || '01 43 72 46 65'}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>4 bd Davout, 75020 Paris</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent font-semibold">●</span>
            <span>Ouvert · Ferme à 20:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-light/95 dark:bg-dark/95 border-dark/10 dark:border-light/10 shadow-lg'
            : 'bg-transparent border-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white">PO</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-xl text-dark dark:text-light">
                  Pharmacie Ouazanan
                </div>
                <div className="text-xs text-dark/60 dark:text-light/60">
                  Votre santé, notre priorité
                </div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary-light font-medium transition-colors focus-visible-ring rounded-lg px-2 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <ThemeToggle />

              <Link
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 btn-primary"
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden lg:inline">RDV Doctolib</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-dark dark:text-light focus-visible-ring rounded-lg"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-dark/10 dark:border-light/10 bg-light dark:bg-dark"
          >
            <div className="container-custom py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-dark dark:text-light hover:text-primary dark:hover:text-primary-light transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center mt-4"
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV sur Doctolib
              </Link>
            </div>
          </motion.div>
        )}
      </header>
    </>
  )
}
