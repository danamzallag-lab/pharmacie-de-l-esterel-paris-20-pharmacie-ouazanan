# 🎯 Commandes Essentielles - Pharmacie Dr Ouazanan

## 🚀 Commandes de Base

### Développement Local
```bash
# Démarrer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:3000
```

### Build Production
```bash
# Créer un build optimisé pour la production
npm run build

# Démarrer en mode production
npm run start
```

### Linting & Formatting
```bash
# Linter le code
npm run lint

# Formatter le code
npm run format
```

## 📦 Installation & Configuration

### Première Installation
```bash
# Se déplacer dans le dossier du projet
cd pharmacie-ouazanan

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.local.example .env.local

# Éditer les variables d'environnement
# (Utiliser votre éditeur préféré)
nano .env.local
```

### Réinstallation Propre
```bash
# Supprimer node_modules et .next
rm -rf node_modules .next

# Supprimer package-lock.json
rm package-lock.json

# Réinstaller
npm install

# Rebuilder
npm run build
```

## 🔧 Git & GitHub

### Initialisation
```bash
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Pharmacie Dr Ouazanan website"

# Créer branche main
git branch -M main

# Ajouter remote (remplacer par votre URL)
git remote add origin https://github.com/VOTRE-USERNAME/pharmacie-ouazanan.git

# Push vers GitHub
git push -u origin main
```

### Workflow Quotidien
```bash
# Vérifier le statut
git status

# Ajouter les modifications
git add .

# Commit avec message
git commit -m "Description des changements"

# Push vers GitHub
git push

# Récupérer les derniers changements
git pull
```

## 🌐 Déploiement Vercel

### Via CLI Vercel
```bash
# Installer Vercel CLI globalement
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer (première fois)
vercel

# Déployer en production
vercel --prod
```

### Variables d'Environnement Vercel
```bash
# Ajouter une variable d'environnement
vercel env add NEXT_PUBLIC_DOCTOLIB_URL

# Lister les variables
vercel env ls

# Pull les variables localement
vercel env pull
```

## 🔍 Tests & Debugging

### Tests Manuels
```bash
# Build et vérifier les erreurs
npm run build

# Démarrer en mode production localement
npm run start

# Ouvrir dans le navigateur
# http://localhost:3000
```

### Lighthouse (Performance)
```bash
# Dans Chrome DevTools:
# 1. Ouvrir DevTools (F12)
# 2. Aller dans l'onglet "Lighthouse"
# 3. Cliquer sur "Generate report"
```

## 📝 Modification du Contenu

### Éditer les Services
```bash
# Ouvrir le fichier JSON
nano src/content/services.json

# Ou avec VS Code
code src/content/services.json
```

### Éditer les Horaires
```bash
nano src/content/horaires.json
```

### Éditer l'Équipe
```bash
nano src/content/team.json
```

### Éditer les Marques
```bash
nano src/content/marques.json
```

## 🖼️ Gestion des Images

### Ajouter des Images
```bash
# Copier une image dans le dossier public
cp /chemin/vers/image.jpg public/images/

# Créer les dossiers si nécessaire
mkdir -p public/images/team
mkdir -p public/logos

# Optimiser les images (optionnel, avec ImageMagick)
convert image.jpg -resize 1920x1080\> -quality 85 image-optimized.jpg
```

## 🔄 Mise à Jour

### Mettre à Jour les Dépendances
```bash
# Vérifier les mises à jour disponibles
npm outdated

# Mettre à jour toutes les dépendances (attention!)
npm update

# Mettre à jour une dépendance spécifique
npm update next

# Mettre à jour vers la dernière version
npm install next@latest
```

### Mettre à Jour Next.js
```bash
# Mettre à jour Next.js et React
npm install next@latest react@latest react-dom@latest

# Rebuilder
npm run build
```

## 🐛 Résolution de Problèmes

### Erreur de Port Occupé
```bash
# Trouver le processus qui utilise le port 3000
# Windows:
netstat -ano | findstr :3000

# Linux/Mac:
lsof -i :3000

# Tuer le processus ou utiliser un autre port
PORT=3001 npm run dev
```

### Erreur de Build
```bash
# Nettoyer le cache
rm -rf .next

# Nettoyer node_modules
rm -rf node_modules package-lock.json

# Réinstaller
npm install

# Rebuilder
npm run build
```

### Erreur TypeScript
```bash
# Vérifier les erreurs TypeScript
npx tsc --noEmit

# Régénérer les types Next.js
rm -rf .next
npm run dev
```

## 📊 Analyse & Monitoring

### Analyser la Taille du Bundle
```bash
# Analyser le bundle (nécessite next-bundle-analyzer)
ANALYZE=true npm run build
```

### Générer le Sitemap
```bash
# Le sitemap est généré automatiquement après chaque build
npm run build

# Vérifier le sitemap
cat public/sitemap.xml
```

## 🔐 Sécurité

### Audit de Sécurité
```bash
# Auditer les vulnérabilités
npm audit

# Corriger automatiquement
npm audit fix

# Forcer les corrections (attention!)
npm audit fix --force
```

## 📱 Tests Mobile

### Avec Chrome DevTools
```bash
# 1. npm run dev
# 2. Ouvrir Chrome
# 3. F12 pour DevTools
# 4. Ctrl+Shift+M pour toggle device toolbar
# 5. Sélectionner un appareil (iPhone, iPad, etc.)
```

### Avec ngrok (Tester sur un vrai mobile)
```bash
# Installer ngrok
# https://ngrok.com/download

# Démarrer le site
npm run dev

# Dans un autre terminal, démarrer ngrok
ngrok http 3000

# Utiliser l'URL ngrok sur votre mobile
```

## 🎨 Personnalisation Rapide

### Changer les Couleurs
```bash
# Éditer le fichier de config Tailwind
code tailwind.config.ts

# Modifier la section colors.primary
```

### Modifier le Logo
```bash
# Remplacer les initiales "PO" dans SiteHeader.tsx
code src/components/SiteHeader.tsx

# Ligne à modifier: <span className="text-2xl font-bold text-white">PO</span>
```

## 📚 Documentation

### Générer la Documentation
```bash
# Lire le README
cat README.md

# Lire le Quick Start
cat QUICKSTART.md

# Lire les fonctionnalités
cat FEATURES.md

# Voir le TODO
cat TODO.md
```

## 🚨 Commandes d'Urgence

### Site Down - Redémarrage Rapide
```bash
# Vérifier que le build fonctionne
npm run build

# Si erreur, nettoyer et rebuilder
rm -rf .next node_modules
npm install
npm run build

# Redéployer sur Vercel
vercel --prod
```

### Rollback Vercel
```bash
# Lister les déploiements
vercel ls

# Promouvoir un déploiement précédent
vercel promote [DEPLOYMENT-URL]
```

## 💡 Astuces

### Développement Plus Rapide
```bash
# Utiliser turbopack (expérimental)
npm run dev -- --turbo
```

### Voir les Variables d'Environnement
```bash
# Afficher les variables (attention, pas en production!)
cat .env.local
```

### Ouvrir Automatiquement dans le Navigateur
```bash
# Ajouter dans package.json -> scripts -> dev:
# "dev": "next dev --open"
```

---

*Guide des commandes - Pharmacie Dr Ouazanan*
*Dernière mise à jour: Octobre 2025*
