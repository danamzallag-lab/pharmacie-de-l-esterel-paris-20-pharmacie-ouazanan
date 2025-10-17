# 🚀 Guide de Déploiement sur Vercel

## ✅ Prérequis

- [x] Code pushé sur GitHub ✓
- [x] Fichier `vercel.json` présent ✓
- [x] Configuration Next.js correcte ✓
- [ ] Variables d'environnement à configurer

---

## 📝 Étape par Étape

### 1. Se connecter à Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur **"Sign Up"** ou **"Log In"**
3. Choisir **"Continue with GitHub"**
4. Autoriser Vercel à accéder à vos repositories GitHub

---

### 2. Importer le Projet

1. Une fois connecté, cliquer sur **"Add New..."** → **"Project"**
2. Dans la liste des repositories, chercher :
   ```
   pharmacie-de-l-esterel-paris-20-pharmacie-ouazanan
   ```
3. Cliquer sur **"Import"** à côté du repository

---

### 3. Configurer le Projet

Vercel va détecter automatiquement que c'est un projet Next.js.

**Framework Preset** : Next.js ✓ (détecté automatiquement)
**Root Directory** : `.` (laisser par défaut)
**Build Command** : `npm run build` (déjà configuré dans vercel.json)
**Output Directory** : `.next` (automatique)

👉 **Ne changez rien ici**, tout est déjà configuré !

---

### 4. ⚠️ IMPORTANT - Configurer les Variables d'Environnement

**Avant de déployer**, vous DEVEZ ajouter les variables d'environnement :

Dans la section **"Environment Variables"** :

#### Variable 1 : NEXT_PUBLIC_DOCTOLIB_URL
```
Name:  NEXT_PUBLIC_DOCTOLIB_URL
Value: https://www.doctolib.fr/pharmacie/paris/[VOTRE-PHARMACIE]
```
⚠️ **REMPLACER** `[VOTRE-PHARMACIE]` par le vrai lien !

#### Variable 2 : NEXT_PUBLIC_SITE_URL
```
Name:  NEXT_PUBLIC_SITE_URL
Value: https://pharmacie-ouazanan.vercel.app
```
(ou votre domaine personnalisé)

#### Variable 3 : NEXT_PUBLIC_PHONE
```
Name:  NEXT_PUBLIC_PHONE
Value: 0143724665
```
(vérifier que c'est le bon numéro)

#### Variable 4 : NEXT_PUBLIC_EMAIL
```
Name:  NEXT_PUBLIC_EMAIL
Value: contact@pharmacieouazanan.fr
```
(vérifier que c'est le bon email)

#### Variable 5 : NEXT_PUBLIC_ADDRESS
```
Name:  NEXT_PUBLIC_ADDRESS
Value: 4 bd Davout, 75020 Paris
```

#### Variable 6 (optionnel) : NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL
```
Name:  NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL
Value: [URL Google Maps à obtenir plus tard]
```

**Important** : Cocher **"Production"**, **"Preview"**, et **"Development"** pour chaque variable

---

### 5. Déployer !

1. Une fois les variables ajoutées, cliquer sur **"Deploy"**
2. Vercel va :
   - Cloner le repository
   - Installer les dépendances (`npm install`)
   - Builder le projet (`npm run build`)
   - Déployer automatiquement

⏱️ **Durée** : 2-3 minutes

---

### 6. Vérifier le Déploiement

Une fois terminé, vous verrez :
- ✅ Un message "Deployment Ready"
- 🔗 Une URL : `https://pharmacie-ouazanan.vercel.app` (ou similaire)

**Cliquer sur l'URL** pour voir votre site en ligne ! 🎉

---

## 🔍 Vérifications Post-Déploiement

Une fois le site déployé, **vérifier** :

### Page d'accueil
- [ ] Le site s'affiche correctement
- [ ] Les animations fonctionnent
- [ ] Le bouton "Prendre RDV sur Doctolib" redirige vers Doctolib
- [ ] Le mode sombre/clair fonctionne

### Page Services
- [ ] Les 6 services s'affichent
- [ ] Les icônes sont visibles
- [ ] Les boutons Doctolib fonctionnent

### Page Contact
- [ ] Téléphone correct
- [ ] Email correct
- [ ] Adresse correcte
- [ ] Horaires corrects

### Footer
- [ ] Lien Doctolib fonctionne
- [ ] Tous les liens de navigation fonctionnent

---

## 🌐 Ajouter un Domaine Personnalisé (Optionnel)

Si vous avez un nom de domaine (ex: `pharmacieouazanan.fr`) :

1. Dans le dashboard Vercel, aller dans **Settings** → **Domains**
2. Cliquer sur **"Add"**
3. Entrer votre domaine : `pharmacieouazanan.fr`
4. Suivre les instructions pour configurer les DNS
5. Attendre la propagation DNS (jusqu'à 48h)

**Records DNS à ajouter** (chez votre registrar) :
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔄 Mises à Jour Futures

Pour mettre à jour le site :

1. Modifier les fichiers localement
2. Commit et push sur GitHub :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push
   ```
3. Vercel va **automatiquement** redéployer ! ✨

Aucune action manuelle nécessaire sur Vercel !

---

## 🐛 Problèmes Courants

### Erreur de Build
**Problème** : Le build échoue
**Solution** : Vérifier que `npm run build` fonctionne localement

```bash
cd /c/Users/danam/Desktop/pharmacie-ouazanan
npm run build
```

Si ça fonctionne localement, commit et push à nouveau.

### Variables d'Environnement Manquantes
**Problème** : Les boutons Doctolib ne fonctionnent pas
**Solution** : Vérifier que `NEXT_PUBLIC_DOCTOLIB_URL` est bien configurée dans Vercel

1. Aller dans **Settings** → **Environment Variables**
2. Vérifier la valeur
3. Redéployer : **Deployments** → **...** → **Redeploy**

### Page 404
**Problème** : Certaines pages affichent 404
**Solution** : Normal pour `/marques`, `/equipe`, `/complements` (à créer plus tard)

---

## 📊 Monitoring

### Analytics Vercel (gratuit)
Vercel fournit des analytics gratuites :
- Nombre de visiteurs
- Pages les plus visitées
- Temps de chargement
- Web Vitals

**Activer** : Settings → Analytics → Enable

### Speed Insights
Pour monitorer les performances :
- Settings → Speed Insights → Enable

---

## ✅ Checklist Finale

Avant de considérer le déploiement terminé :

**Configuration Vercel** :
- [ ] Variables d'environnement configurées
- [ ] Build réussi
- [ ] Site accessible via l'URL Vercel

**Fonctionnalités** :
- [ ] Boutons Doctolib fonctionnent
- [ ] Téléphone/email/adresse corrects
- [ ] Horaires corrects
- [ ] Navigation fonctionne
- [ ] Mode sombre/clair fonctionne

**SEO** (optionnel mais recommandé) :
- [ ] Domaine personnalisé configuré
- [ ] Soumettre sitemap à Google Search Console
- [ ] Vérifier meta descriptions

---

## 🎉 C'est Terminé !

Votre site est maintenant en ligne et accessible à tous !

**URL du site** : https://[votre-projet].vercel.app

**Prochaines étapes** :
1. Tester toutes les fonctionnalités
2. Ajouter les photos manquantes
3. Créer les pages manquantes (/marques, /equipe)
4. Configurer Google Analytics (optionnel)

---

## 📞 Besoin d'Aide ?

- Documentation Vercel : https://vercel.com/docs
- Support Vercel : https://vercel.com/support
- Problème avec le code : Voir README.md

---

*Guide créé pour : Pharmacie Dr Ouazanan*
*Octobre 2025*
