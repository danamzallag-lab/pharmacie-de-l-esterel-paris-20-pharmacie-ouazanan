# 🏥 Pharmacie Dr Ouazanan - Site Vitrine

Site web moderne et performant pour la Pharmacie Dr Ouazanan, développé avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## ✨ Fonctionnalités

- 🎨 Design ultra moderne avec glassmorphism
- 🌓 Mode sombre/clair avec basculement automatique
- 🎭 Animations fluides avec Framer Motion (entrées gauche/droite, parallax, micro-interactions)
- 📱 100% responsive (mobile-first)
- ♿ Accessibilité WCAG 2.1 AA
- 🔍 SEO optimisé avec données structurées Schema.org
- 🍪 Conformité RGPD (bannière cookies, politique de confidentialité)
- 🚀 Performances optimales (Lighthouse ≥ 95)
- 📅 Intégration Doctolib pour prise de RDV
- 🎪 Carrousel de logos marques avec auto-scroll

## 🛠️ Technologies

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Fonts**: Sora (titres) + Inter (texte)

## 📦 Installation

1. **Cloner le projet**:
```bash
git clone [votre-repo]
cd pharmacie-ouazanan
```

2. **Installer les dépendances**:
```bash
npm install
```

3. **Configurer les variables d'environnement**:
```bash
cp .env.local.example .env.local
```

Éditer `.env.local` avec vos valeurs:
```env
NEXT_PUBLIC_DOCTOLIB_URL=https://www.doctolib.fr/...
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://...
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
NEXT_PUBLIC_PHONE=0143724665
NEXT_PUBLIC_EMAIL=contact@pharmacieouazanan.fr
NEXT_PUBLIC_ADDRESS=4 bd Davout, 75020 Paris
```

4. **Lancer en développement**:
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 🚀 Déploiement sur Vercel

1. **Push vers GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [votre-repo-github]
git push -u origin main
```

2. **Déployer sur Vercel**:
   - Aller sur [vercel.com](https://vercel.com)
   - Importer votre repository GitHub
   - Configurer les variables d'environnement (cf. `.env.local.example`)
   - Déployer automatiquement

3. **Configuration post-déploiement**:
   - Ajouter un domaine personnalisé
   - Configurer les DNS
   - Vérifier les variables d'environnement en production

## 📁 Structure du Projet

```
src/
├── app/                    # Pages et routes (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page services
│   ├── contact/           # Page contact
│   └── ...
├── components/            # Composants réutilisables
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   └── ...
├── content/               # Données JSON
│   ├── services.json
│   ├── marques.json
│   ├── team.json
│   └── horaires.json
└── lib/                   # Utilitaires
    └── utils.ts
```

## 🎨 Personnalisation

### Couleurs

Modifier `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#0FA958',  // Vert principal
    light: '#0BCF7C',
    dark: '#0A7F45',
  },
  accent: '#12B886',
  // ...
}
```

### Contenu

Éditer les fichiers JSON dans `src/content/`:
- `services.json` - Services pharmaceutiques
- `marques.json` - Marques de parapharmacie
- `team.json` - Équipe de la pharmacie
- `horaires.json` - Horaires d'ouverture

## 📄 Pages disponibles

- `/` - Accueil
- `/services` - Services détaillés
- `/marques` - Marques parapharmacie
- `/complements` - Compléments alimentaires
- `/equipe` - Présentation de l'équipe
- `/contact` - Contact et horaires
- `/mentions-legales` - Mentions légales
- `/confidentialite` - Politique de confidentialité
- `/cookies` - Politique des cookies

## 🔧 Scripts disponibles

```bash
npm run dev          # Développement
npm run build        # Build production
npm run start        # Démarrer en production
npm run lint         # Linter
npm run format       # Formatter le code
```

## 📊 Performance

Le site est optimisé pour obtenir des scores Lighthouse excellents :
- Performance: ≥ 95
- Accessibilité: ≥ 95
- SEO: 100
- Best Practices: 100

## 🌐 SEO

- Métadonnées optimisées pour chaque page
- Données structurées Schema.org (Pharmacy)
- Sitemap automatique
- robots.txt configuré
- Open Graph et Twitter Cards

## 🍪 RGPD

- Bannière de consentement des cookies
- Politique de confidentialité complète
- Politique des cookies détaillée
- Mentions légales

## 🎨 Design System

### Glassmorphism
Classes utilitaires pour l'effet verre :
```tsx
<div className="glass glass-border">
  Contenu
</div>
```

### Boutons
```tsx
<button className="btn-primary">Primaire</button>
<button className="btn-secondary">Secondaire</button>
<button className="btn-outline">Outline</button>
```

### Cards
```tsx
<div className="card card-hover">
  Contenu
</div>
```

### Animations
```tsx
<SectionReveal direction="left" delay={0.1}>
  Contenu animé
</SectionReveal>
```

## 📝 TODO / Améliorations futures

- [ ] Ajouter les vraies images de l'équipe
- [ ] Intégrer Google Maps réel
- [ ] Ajouter les vrais logos des marques
- [ ] Créer page marques détaillée
- [ ] Créer page compléments détaillée
- [ ] Créer page équipe détaillée
- [ ] Ajouter un blog/actualités
- [ ] Intégrer analytics (Google Analytics ou autre)
- [ ] Ajouter système de recherche
- [ ] Créer section FAQ

## 🤝 Support

Pour toute question ou problème :
- Email : contact@pharmacieouazanan.fr
- Téléphone : 01 43 72 46 65

## 📄 Licence

© 2025 Pharmacie Dr Ouazanan. Tous droits réservés.
