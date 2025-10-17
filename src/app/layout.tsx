import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import CookieBanner from '@/components/CookieBanner'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pharmacieouazanan.fr'),
  title: {
    default: 'Pharmacie Dr Ouazanan | Vaccination, Dépistage & Parapharmacie à Paris 20',
    template: '%s | Pharmacie Dr Ouazanan',
  },
  description: 'Pharmacie du Dr Ouazanan à Paris 20ème. Services de vaccination, tests de dépistage (COVID, angine, urinaire), renouvellement d\'ordonnance, parapharmacie et compléments alimentaires. Prenez RDV sur Doctolib.',
  keywords: ['pharmacie', 'Paris 20', 'Dr Ouazanan', 'vaccination', 'dépistage', 'parapharmacie', 'Doctolib', 'Avène', 'La Roche-Posay', 'PiLeJe'],
  authors: [{ name: 'Pharmacie Dr Ouazanan' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    title: 'Pharmacie Dr Ouazanan | Votre santé, notre priorité',
    description: 'Vaccination, dépistage, conseils personnalisés et parapharmacie experte à Paris 20.',
    siteName: 'Pharmacie Dr Ouazanan',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pharmacie Dr Ouazanan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pharmacie Dr Ouazanan',
    description: 'Votre pharmacie de proximité à Paris 20',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'Pharmacie Dr Ouazanan',
  image: '/images/pharmacy-exterior.jpg',
  '@id': process.env.NEXT_PUBLIC_SITE_URL,
  url: process.env.NEXT_PUBLIC_SITE_URL,
  telephone: process.env.NEXT_PUBLIC_PHONE || '0143724665',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 bd Davout',
    addressLocality: 'Paris',
    postalCode: '75020',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '19:30',
    },
  ],
  sameAs: [
    'https://www.doctolib.fr/pharmacie/paris/pharmacie-ouazanan',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
