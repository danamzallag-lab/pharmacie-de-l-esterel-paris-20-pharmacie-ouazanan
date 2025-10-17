import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique des Cookies',
  description: 'Politique d\'utilisation des cookies de la Pharmacie Dr Ouazanan',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8 text-dark dark:text-light">
            Politique des Cookies
          </h1>

          <div className="card space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Qu'est-ce qu'un cookie ?
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Il permet de mémoriser des informations relatives à votre navigation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Types de cookies utilisés
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">
                    Cookies essentiels
                  </h3>
                  <p className="text-dark/70 dark:text-light/70">
                    Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils comprennent notamment les préférences de confidentialité et le mode d'affichage (clair/sombre).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2 text-dark dark:text-light">
                    Cookies analytiques
                  </h3>
                  <p className="text-dark/70 dark:text-light/70">
                    Ces cookies nous permettent d'analyser l'utilisation du site afin d'améliorer nos services. Ils sont déposés uniquement avec votre consentement.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Gestion des cookies
              </h2>
              <p className="text-dark/70 dark:text-light/70 mb-4">
                Vous pouvez à tout moment modifier vos préférences concernant les cookies :
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark/70 dark:text-light/70">
                <li>Via la bannière de cookies affichée lors de votre première visite</li>
                <li>En configurant votre navigateur pour refuser les cookies</li>
                <li>En supprimant les cookies déjà déposés sur votre terminal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Durée de conservation
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur votre terminal. Votre consentement est valable pour une durée de 13 mois.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
