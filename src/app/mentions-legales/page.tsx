import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales de la Pharmacie Dr Ouazanan',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8 text-dark dark:text-light">
            Mentions Légales
          </h1>

          <div className="card space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Éditeur du site
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                <strong>Pharmacie Dr Ouazanan</strong>
                <br />
                4 boulevard Davout
                <br />
                75020 Paris
                <br />
                Téléphone : 01 43 72 46 65
                <br />
                Email : contact@pharmacieouazanan.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Directeur de la publication
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Dr Ouazanan, Pharmacien titulaire
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Hébergement
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Vercel Inc.
                <br />
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789, USA
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Propriété intellectuelle
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Données personnelles
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
