import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données de la Pharmacie Dr Ouazanan',
}

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold mb-8 text-dark dark:text-light">
            Politique de Confidentialité
          </h1>

          <div className="card space-y-8">
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Collecte des données
              </h2>
              <p className="text-dark/70 dark:text-light/70 mb-4">
                La Pharmacie Dr Ouazanan collecte uniquement les données nécessaires au traitement de vos demandes et à l'amélioration de nos services.
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark/70 dark:text-light/70">
                <li>Données d'identification (nom, prénom)</li>
                <li>Coordonnées (email, téléphone, adresse)</li>
                <li>Données de santé (uniquement dans le cadre de nos services pharmaceutiques)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Utilisation des données
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark/70 dark:text-light/70 mt-4">
                <li>La gestion de vos rendez-vous</li>
                <li>La délivrance de médicaments et conseils pharmaceutiques</li>
                <li>Le suivi de vos traitements</li>
                <li>L'amélioration de nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Vos droits
              </h2>
              <p className="text-dark/70 dark:text-light/70 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 text-dark/70 dark:text-light/70">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p className="text-dark/70 dark:text-light/70 mt-4">
                Pour exercer vos droits, contactez-nous à : contact@pharmacieouazanan.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold mb-4 text-dark dark:text-light">
                Sécurité des données
              </h2>
              <p className="text-dark/70 dark:text-light/70">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données personnelles et les protéger contre toute destruction, perte, altération, divulgation ou accès non autorisé.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
