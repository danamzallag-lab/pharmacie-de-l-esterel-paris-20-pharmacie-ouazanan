import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import { SectionReveal } from '@/components/SectionReveal'
import horaireData from '@/content/horaires.json'

export const metadata: Metadata = {
  title: 'Contact & Horaires | Pharmacie Dr Ouazanan Paris 20',
  description: 'Contactez la Pharmacie Dr Ouazanan à Paris 20. Téléphone, email, adresse et horaires d\'ouverture. Prenez RDV sur Doctolib ou venez nous voir.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
        <div className="container-custom">
          <SectionReveal direction="left">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Contactez-nous
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Notre équipe est à votre écoute pour répondre à toutes vos questions
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Contact info */}
      <section className="section bg-light dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <SectionReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-8 text-dark dark:text-light">
                    Informations de contact
                  </h2>

                  <div className="space-y-6">
                    {/* Phone */}
                    <a
                      href={`tel:${process.env.NEXT_PUBLIC_PHONE || '0143724665'}`}
                      className="card card-hover flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-dark/60 dark:text-light/60 text-sm">
                          Téléphone
                        </div>
                        <div className="text-lg font-bold text-primary group-hover:text-primary-dark transition-colors">
                          {process.env.NEXT_PUBLIC_PHONE || '01 43 72 46 65'}
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contact@pharmacieouazanan.fr'}`}
                      className="card card-hover flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-dark/60 dark:text-light/60 text-sm">
                          Email
                        </div>
                        <div className="text-lg font-bold text-primary group-hover:text-primary-dark transition-colors break-all">
                          {process.env.NEXT_PUBLIC_EMAIL || 'contact@pharmacieouazanan.fr'}
                        </div>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="card flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-dark to-accent flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-dark/60 dark:text-light/60 text-sm">
                          Adresse
                        </div>
                        <div className="text-lg font-bold text-dark dark:text-light">
                          4 boulevard Davout
                          <br />
                          75020 Paris
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening hours */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold text-dark dark:text-light">
                      Horaires d'ouverture
                    </h3>
                  </div>

                  <div className="card space-y-3">
                    {horaireData.horaires.map((horaire) => (
                      <div
                        key={horaire.jour}
                        className="flex items-center justify-between py-2 border-b border-dark/5 dark:border-light/5 last:border-0"
                      >
                        <div className="font-semibold text-dark dark:text-light">
                          {horaire.jour}
                        </div>
                        <div className="text-dark/70 dark:text-light/70">
                          {horaire.ferme ? (
                            <span className="text-red-500 font-medium">Fermé</span>
                          ) : (
                            <span>
                              {horaire.ouverture} - {horaire.fermeture}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="pt-3 text-sm text-dark/60 dark:text-light/60">
                      {horaireData.notesSpeciales}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={process.env.NEXT_PUBLIC_DOCTOLIB_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <Calendar className="w-5 h-5" />
                  Prendre RDV sur Doctolib
                </Link>
              </div>
            </SectionReveal>

            {/* Google Maps */}
            <SectionReveal direction="right">
              <div className="sticky top-24">
                <div className="card h-[600px] overflow-hidden p-0">
                  <iframe
                    src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Pharmacie Dr Ouazanan"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
