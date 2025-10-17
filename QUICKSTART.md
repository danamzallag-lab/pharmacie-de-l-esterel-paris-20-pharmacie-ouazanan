# 🚀 Guide de Démarrage Rapide

## Démarrage Local

### 1. Installation
```bash
npm install
```

### 2. Configuration
Créer un fichier `.env.local` (déjà créé avec valeurs par défaut) :
```env
NEXT_PUBLIC_DOCTOLIB_URL=https://www.doctolib.fr/pharmacie/paris/pharmacie-ouazanan
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE=0143724665
NEXT_PUBLIC_EMAIL=contact@pharmacieouazanan.fr
```

### 3. Lancer en développement
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement sur Vercel

### Étape 1 : Créer un repository GitHub
```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "Initial commit - Pharmacie Dr Ouazanan website"

# Créer une nouvelle branche main
git branch -M main

# Ajouter votre remote GitHub
git remote add origin https://github.com/VOTRE-USERNAME/pharmacie-ouazanan.git

# Push vers GitHub
git push -u origin main
```

### Étape 2 : Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com) et se connecter avec GitHub

2. Cliquer sur "Add New Project"

3. Importer votre repository `pharmacie-ouazanan`

4. Configurer les variables d'environnement :
   ```
   NEXT_PUBLIC_DOCTOLIB_URL=https://www.doctolib.fr/pharmacie/paris/pharmacie-ouazanan
   NEXT_PUBLIC_SITE_URL=https://pharmacieouazanan.vercel.app (ou votre domaine)
   NEXT_PUBLIC_PHONE=0143724665
   NEXT_PUBLIC_EMAIL=contact@pharmacieouazanan.fr
   NEXT_PUBLIC_ADDRESS=4 bd Davout, 75020 Paris
   ```

5. Cliquer sur "Deploy"

6. Attendre la fin du déploiement (environ 2-3 minutes)

### Étape 3 : Configurer un domaine personnalisé

1. Dans le dashboard Vercel, aller dans Settings > Domains

2. Ajouter votre domaine : `pharmacieouazanan.fr`

3. Suivre les instructions pour configurer vos DNS

4. Attendre la propagation DNS (jusqu'à 48h)

## Structure des Fichiers Importants

```
pharmacie-ouazanan/
├── src/
│   ├── app/                    # Pages Next.js
│   │   ├── layout.tsx         # Layout principal
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── services/          # Page services
│   │   ├── contact/           # Page contact
│   │   └── ...
│   ├── components/            # Composants React
│   │   ├── Hero.tsx
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   └── ...
│   └── content/               # Données JSON
│       ├── services.json      # À MODIFIER : Vos services
│       ├── marques.json       # À MODIFIER : Vos marques
│       ├── team.json          # À MODIFIER : Votre équipe
│       └── horaires.json      # À MODIFIER : Vos horaires
```

## Personnalisation Rapide

### 1. Modifier les couleurs
Éditer `tailwind.config.ts` :
```typescript
colors: {
  primary: {
    DEFAULT: '#0FA958',  // Votre couleur principale
    // ...
  },
}
```

### 2. Modifier les services
Éditer `src/content/services.json`

### 3. Modifier l'équipe
Éditer `src/content/team.json`

### 4. Modifier les horaires
Éditer `src/content/horaires.json`

### 5. Ajouter des images
Placer vos images dans `public/images/`

## Scripts Disponibles

```bash
npm run dev       # Développement
npm run build     # Build production
npm run start     # Démarrer en production
npm run lint      # Linter
```

## Problèmes Courants

### Erreur de build
```bash
# Nettoyer et reconstruire
rm -rf .next node_modules
npm install
npm run build
```

### Port déjà utilisé
```bash
# Changer le port
PORT=3001 npm run dev
```

## Support

Pour toute question :
- 📧 Email : contact@pharmacieouazanan.fr
- 📞 Téléphone : 01 43 72 46 65

## Checklist Avant Production

- [ ] Modifier les variables d'environnement en production
- [ ] Ajouter les vraies images de l'équipe
- [ ] Vérifier les horaires d'ouverture
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Configurer Google Analytics (optionnel)
- [ ] Tester le formulaire de contact
- [ ] Vérifier l'intégration Doctolib
- [ ] Soumettre le sitemap à Google Search Console

## 🎉 C'est Fait !

Votre site est maintenant en ligne ! 🚀
