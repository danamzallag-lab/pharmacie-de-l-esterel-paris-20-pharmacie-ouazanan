# 📋 Informations Manquantes - Pharmacie Dr Ouazanan

## 🚨 PRIORITÉ HAUTE - Pour que le site soit fonctionnel

### 1. 🔗 **Lien Doctolib** (TRÈS IMPORTANT)

**Actuellement** : Placeholder `#`
**Fichier à modifier** : `.env.local`

**Action requise** :
```bash
# Ouvrir le fichier .env.local
# Remplacer cette ligne :
NEXT_PUBLIC_DOCTOLIB_URL=https://www.doctolib.fr/pharmacie/paris/pharmacie-ouazanan

# Par le VRAI lien Doctolib de la pharmacie
```

**Où trouver ce lien ?**
- Aller sur votre profil Doctolib
- Copier l'URL complète de votre page de réservation
- Exemple : `https://www.doctolib.fr/pharmacie/paris/nom-de-votre-pharmacie`

**Impact** : Tous les boutons "Prendre RDV sur Doctolib" du site pointent vers ce lien

---

### 2. 📞 **Informations de Contact**

**Fichier** : `.env.local`

**À vérifier et corriger si besoin** :
```bash
NEXT_PUBLIC_PHONE=0143724665              # Téléphone correct ?
NEXT_PUBLIC_EMAIL=contact@pharmacieouazanan.fr  # Email correct ?
NEXT_PUBLIC_ADDRESS=4 bd Davout, 75020 Paris    # Adresse correcte ?
```

**Impact** : Affichées partout sur le site (header, footer, page contact)

---

### 3. 📸 **Images Manquantes**

#### Photos de l'équipe
**Dossier** : `public/images/team/`

**Fichiers à ajouter** :
- `ouazanan.jpg` - Photo du Dr Ouazanan
- `adjoint.jpg` - Photo du pharmacien adjoint
- `preparateur.jpg` - Photo du préparateur (si applicable)

**Format recommandé** :
- JPG ou PNG
- 800x800px minimum
- Fond neutre ou professionnel
- Poids < 500KB

#### Photo hero (page d'accueil)
**Actuellement** : Image Unsplash (pharmacie générique)
**À remplacer par** : Vraie photo de votre pharmacie

**Fichier à modifier** : `src/components/Hero.tsx`
**Ligne 29** : Remplacer l'URL Unsplash par `/images/hero-pharmacie.jpg`

#### Image Open Graph (partage réseaux sociaux)
**Fichier à créer** : `public/images/og-image.jpg`
- Dimensions : 1200x630px
- Format JPG
- Contenu : Logo + nom pharmacie + slogan

---

### 4. 🏢 **Informations Pharmacie**

**Fichier** : `src/content/team.json`

**À personnaliser** :
- Noms réels de l'équipe
- Rôles exacts
- Diplômes véritables
- Spécialisations
- Langues parlées
- Biographies

**Exemple actuel à modifier** :
```json
{
  "name": "Dr Ouazanan",  // ✓ Correct
  "role": "Pharmacien titulaire",  // ✓ À vérifier
  "bio": "...",  // À personnaliser
  "diplomes": [...],  // À compléter avec vrais diplômes
  "langues": ["Français", "Arabe", "Anglais"]  // À vérifier
}
```

---

### 5. ⏰ **Horaires d'Ouverture**

**Fichier** : `src/content/horaires.json`

**À vérifier** :
```json
{
  "jour": "Lundi",
  "ouverture": "09:00",  // ✓ Correct ?
  "fermeture": "20:00",  // ✓ Correct ?
  "ferme": false
}
```

**Vérifier tous les jours**, notamment :
- Horaires du samedi
- Fermeture dimanche
- Jours fériés

---

### 6. 🗺️ **Google Maps**

**Fichier** : `.env.local`

**Action requise** :
1. Aller sur [Google Maps](https://www.google.com/maps)
2. Chercher votre pharmacie : "4 bd Davout, 75020 Paris"
3. Cliquer sur "Partager" → "Intégrer une carte"
4. Copier le lien `src="..."`
5. Le coller dans `.env.local` :

```bash
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
```

**Fichier à modifier** : `src/app/contact/page.tsx` (ligne 145)

---

## 📋 PRIORITÉ MOYENNE - Pour enrichir le contenu

### 7. 📝 **Descriptions des Services**

**Fichier** : `src/content/services.json`

**À personnaliser** :
- Détails spécifiques à votre pharmacie
- Tarifs si applicable
- Durée des consultations
- Modalités pratiques

### 8. 🏷️ **Marques de Parapharmacie**

**Fichier** : `src/content/marques.json`

**À vérifier** :
- Liste complète des marques que vous vendez
- Ajouter/retirer des marques
- Spécialités de chaque marque

**Logos** : Voir `public/logos/README.md` pour obtenir les vrais logos

---

## 🔍 VÉRIFICATION DES LIENS

### Liens Internes (Navigation)

**Header** (`src/components/SiteHeader.tsx`) :
- ✅ `/` - Accueil
- ✅ `/services` - Services
- ⚠️ `/marques` - Page à créer
- ⚠️ `/complements` - Page à créer
- ⚠️ `/equipe` - Page à créer
- ✅ `/contact` - Contact

**Footer** (`src/components/SiteFooter.tsx`) :
- ✅ Tous les liens de navigation
- ✅ `/mentions-legales`
- ✅ `/confidentialite`
- ✅ `/cookies`

### Liens Externes

**Doctolib** :
- ⚠️ Placeholder actuellement (`#`)
- Présent dans :
  - Header (bouton RDV)
  - Hero (page d'accueil)
  - ServicesGrid
  - CTADoctolib
  - Page services
  - Footer

**Action** : Mettre à jour `NEXT_PUBLIC_DOCTOLIB_URL` dans `.env.local`

---

## 📄 PAGES À CRÉER (Optionnel)

### Pages manquantes mais déjà liées :

1. **`/marques`** - Page marques détaillée
   - Liste toutes les marques
   - Photos des produits
   - Descriptions

2. **`/complements`** - Page compléments alimentaires
   - Catégories de compléments
   - Marques spécialisées
   - Conseils

3. **`/equipe`** - Page équipe détaillée
   - Photos de l'équipe
   - Biographies complètes
   - Spécialisations

**Note** : Ces pages peuvent être créées plus tard. En attendant, les liens fonctionnent mais affichent 404.

---

## 🔧 CONFIGURATION TECHNIQUE

### Google Search Console

**Fichier** : `src/app/layout.tsx` (ligne 75)

```typescript
verification: {
  google: 'your-google-verification-code',  // ⚠️ À remplacer
},
```

**Action** :
1. Créer un compte [Google Search Console](https://search.google.com/search-console)
2. Ajouter votre site
3. Copier le code de vérification
4. Le coller dans le fichier

---

## 📊 RÉCAPITULATIF PAR PRIORITÉ

### 🔴 CRITIQUE (Sans ça, le site ne fonctionne pas bien)
1. ✅ Lien Doctolib
2. ✅ Vérifier téléphone/email/adresse
3. ✅ Vérifier horaires

### 🟡 IMPORTANT (Pour un site professionnel)
4. Photos de l'équipe
5. Photo hero personnalisée
6. Google Maps intégration
7. Biographies équipe

### 🟢 BONUS (Améliore l'expérience)
8. Créer pages manquantes (/marques, /complements, /equipe)
9. Logos officiels des marques
10. Google Search Console
11. Image Open Graph

---

## 📝 CHECKLIST RAPIDE

```
INFORMATIONS
□ Lien Doctolib correct dans .env.local
□ Téléphone vérifié
□ Email vérifié
□ Adresse vérifiée
□ Horaires vérifiés

IMAGES
□ Photos équipe ajoutées (3 photos)
□ Photo hero pharmacie
□ Image OG pour partage social

CONTENU
□ Biographies équipe personnalisées
□ Services vérifiés et adaptés
□ Marques de parapharmacie correctes

TECHNIQUE
□ Google Maps configuré
□ Google Search Console (optionnel)
□ Test de tous les liens

PAGES
□ Page /marques créée (optionnel)
□ Page /complements créée (optionnel)
□ Page /equipe créée (optionnel)
```

---

## 🚀 ORDRE RECOMMANDÉ

1. **Aujourd'hui** : Doctolib + Contact + Horaires
2. **Cette semaine** : Photos équipe + Google Maps
3. **Ce mois** : Pages manquantes + Logos officiels

---

## 📞 BESOIN D'AIDE ?

Pour toute question sur :
- La modification des fichiers : Voir README.md
- Les commandes : Voir COMMANDS.md
- Le déploiement : Voir QUICKSTART.md

---

*Document créé le : Octobre 2025*
*Projet : Pharmacie Dr Ouazanan*
