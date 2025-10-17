'use client'

import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

const navigation = {
  services: [
    { name: 'Vaccination', href: '/services#vaccination' },
    { name: 'Tests de dépistage', href: '/services#depistage' },
    { name: 'Renouvellement ordonnance', href: '/services#renouvellement' },
  ],
  shop: [
    { name: 'Parapharmacie', href: '/marques' },
    { name: 'Compléments alimentaires', href: '/complements' },
    { name: 'Nos marques', href: '/marques' },
  ],
  about: [
    { name: 'Notre équipe', href: '/equipe' },
    { name: 'Contact', href: '/contact' },
    { name: 'Prendre RDV', href: process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'Politique des cookies', href: '/cookies' },
  ],
}

export default function SiteFooter() {
  return (
    <footer className="bg-dark text-light">
      <div className="container-custom">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">PO</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">
                  Pharmacie Ouazanan
                </div>
                <div className="text-sm text-light/60">
                  Votre santé, notre priorité
                </div>
              </div>
            </div>

            <p className="text-light/70 mb-6 max-w-sm">
              Pharmacie de proximité à Paris 20ème. Vaccination, dépistage, conseils personnalisés et parapharmacie experte.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE || '0143724665'}`}
                className="flex items-center gap-3 text-light/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{process.env.NEXT_PUBLIC_PHONE || '01 43 72 46 65'}</span>
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contact@pharmacieouazanan.fr'}`}
                className="flex items-center gap-3 text-light/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{process.env.NEXT_PUBLIC_EMAIL || 'contact@pharmacieouazanan.fr'}</span>
              </a>
              <div className="flex items-start gap-3 text-light/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>4 boulevard Davout<br />75020 Paris</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-light/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Boutique</h3>
            <ul className="space-y-3">
              {navigation.shop.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-light/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">À propos</h3>
            <ul className="space-y-3">
              {navigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-light/70 hover:text-primary transition-colors"
                    target={item.name === 'Prendre RDV' ? '_blank' : undefined}
                    rel={item.name === 'Prendre RDV' ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horaires */}
        <div className="py-8 border-t border-light/10">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-display font-bold text-lg">Horaires d'ouverture</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-light/60">Lundi - Vendredi</div>
              <div className="font-semibold">09:00 - 20:00</div>
            </div>
            <div>
              <div className="text-light/60">Samedi</div>
              <div className="font-semibold">09:00 - 19:30</div>
            </div>
            <div>
              <div className="text-light/60">Dimanche</div>
              <div className="font-semibold">Fermé</div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-light/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-light/60">
              © {new Date().getFullYear()} Pharmacie Dr Ouazanan. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-light/60 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
