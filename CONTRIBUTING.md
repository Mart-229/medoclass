# Guide de Contribution - WICEN

Ce guide vous explique étape par étape comment ajouter du contenu à WICEN.

---

## 📁 Table des Matières

1. [Structure du Projet](#structure-du-projet)
2. [Ajouter un Nouveau Module](#ajouter-un-nouveau-module)
3. [Ajouter des Examens/Corrections](#ajouter-des-examenscorrections)
4. [Ajouter un Article](#ajouter-un-article)
5. [Erreurs Courantes](#erreurs-courantes)
6. [Vérifier vos Changements](#vérifier-vos-changements)

---

## 📂 Structure du Projet

WICEN utilise deux fichiers principaux pour stocker le contenu :

### Fichiers Importants

```
wicen-nextjs/
├── lib/
│   └── data/
│       ├── years-content-complete.ts   # Tous les modules des 5 années + internat
│       └── articles.ts                  # Tous les articles de blog
```

---

## ➕ Ajouter un Nouveau Module

### Étape 1 : Comprendre la Structure d'un Module

Un module ressemble à ceci :

```typescript
{
  id: "biophysique",           // Identifiant unique (pas d'espaces, en minuscules)
  semester: 2,                 // Numéro de semestre (1-10)
  name: "BIOPHYSIQUE",         // Nom affiché (majuscules, accents autorisés)
  description: "Cours et ressources pour BIOPHYSIQUE",
  driveUrl: "https://...",     // (Optionnel) Lien vers un dossier Drive
  courses: [                   // (Optionnel) Liste des cours
    {
      title: "Cours 2021",
      url: "https://drive.google.com/...",
      year: "2021"              // (Optionnel) Année du cours
    }
  ],
  exams: [],                    // (Optionnel) Liste des examens
  corrections: []               // (Optionnel) Liste des corrections
}
```

### Étape 2 : Choisir l'Année et le Semestre

**Années et leurs semestres :**

- **1ère année** : Semestres 1-2
- **2ème année** : Semestres 3-4
- **3ème année** : Semestres 5-6
- **4ème année** : Semestres 7-8
- **5ème année** : Semestres 9-10
- **Internat** : Pas de semestre (ne pas mettre `semester`)

### Étape 3 : Ajouter le Module

Ouvrez le fichier `lib/data/years-content-complete.ts` et trouvez l'année correspondante.

**Exemple : Ajouter un module en 1ère année, semestre 1**

```typescript
"1ereannee": {
  description: "1ère Année",
  modules: [
    // ... modules existants ...

    // ➕ AJOUTER ICI votre nouveau module
    {
      id: "votre-nouveau-module",
      semester: 1,
      name: "NOM DU MODULE",
      description: "Cours et ressources pour NOM DU MODULE",
      driveUrl: "https://drive.google.com/...",
      courses: [],
      exams: [],
      corrections: []
    }
  ],
},
```

### Étape 4 : Règles Importantes

✅ **À respecter :**

- `id` : pas d'espaces, utilisez des tirets `-` au lieu des espaces
- `id` : toujours en minuscules
- `semester` : un nombre de 1 à 10 (ou ne pas mettre cette propriété pour l'internat)
- `name` : peut avoir des accents et des majuscules
- Toutes les chaînes de caractères (texte) doivent être entre guillemets `" "`
- Chaque objet se termine par une virgule `,` SAUF le dernier

❌ **À éviter :**

```typescript
❌ id: "Module De Biologie"  // Espaces et majuscules dans l'id
❌ id: "module_de_biologie" // Underscores (utilisez des tirets)
✅ id: "module-de-biologie" // CORRECT
```

---

## 📝 Ajouter des Examens/Corrections

### Format d'un Examen

```typescript
{
  year: "2023",              // Année de l'examen
  title: "SN",               // Type : "SN" (session normale) ou "Sr" (rattrapage)
  url: "https://drive.google.com/file/d/.../view?usp=sharing"
}
```

### Étape 1 : Trouver le Module

Cherchez le module dans `years-content-complete.ts` :

```typescript
{
  id: "biophysique",
  semester: 2,
  name: "BIOPHYSIQUE",
  // ...
  exams: [
    // ➕ AJOUTER ICI les nouveaux examens
  ],
}
```

### Étape 2 : Ajouter les Examens

```typescript
exams: [
  {
    year: "2023",
    title: "SN",
    url: "https://drive.google.com/file/d/1NiczWrEPkC6g2DEhNbTWGLjAL-mjtGDD/view?usp=drive_link"
  },
  {
    year: "2023",
    title: "Sr",  // Session de rattrapage
    url: "https://drive.google.com/file/d/1rSZzx-srOhn2LDeK0x12DEWmwHupsyGy/view?usp=drive_link"
  },
  // Ajoutez une virgule après chaque examen SAUF le dernier
],
```

### Comment Obtenir l'URL Google Drive

1. Ouvrez le fichier/folder dans Google Drive
2. Clic droit → **Obtenir le lien**
3. Assurez-vous que le lien est **public** (accès autorisé)
4. Copiez l'URL complète

### Types de Titres Courants

| Titre   | Signification         |
| ------- | --------------------- |
| `SN`    | Session Normale       |
| `Sr`    | Session de Rattrapage |
| `TP`    | Travaux Pratiques     |
| `Excep` | Exceptionnel          |

---

## 📰 Ajouter un Article

### Étape 1 : Comprendre la Structure d'un Article

```typescript
{
  id: 1,                        // Numéro unique (incrémenter de 1)
  slug: "le-serment-d-hippocrate",  // URL de l'article (minuscules, tirets)
  title: "Le Serment d'Hippocrate",
  description: "Le fondement éthique...",
  content: `                   // Contenu HTML (utiliser des backticks `)
    <p>Paragraphe...</p>
    <h2>Sous-titre</h2>
  `,
  date: "2024-01-01",          // Format YYYY-MM-DD
  category: "Éthique",
  readTime: "6 min",           // (Optionnel) Temps de lecture
  image: "/hippo.jpg"          // (Optionnel) Image dans public/
}
```

### Étape 2 : Ajouter un Article

Ouvrez `lib/data/articles.ts` et ajoutez à la fin du tableau `articles` :

```typescript
export const articles: Article[] = [
  // ... articles existants ...

  // ➕ AJOUTER ICI votre nouvel article
  {
    id: 8, // Important : incrémentez l'id !
    slug: "votre-nouvel-article",
    title: "Titre de Votre Article",
    description: "Courte description qui apparaît dans la liste",
    content: `
      <p>Contenu de votre article en HTML.</p>

      <h2>Première Section</h2>
      <p>Texte de la première section...</p>

      <h2>Deuxième Section</h2>
      <p>Texte de la deuxième section...</p>

      <ul>
        <li>Premier point</li>
        <li>Deuxième point</li>
      </ul>
    `,
    date: "2024-03-20",
    category: "Catégorie",
    readTime: "5 min",
    image: "/votre-image.jpg",
  },
];
```

### Étape 3 : Ajouter une Image (Optionnel)

Si vous voulez ajouter une image à votre article :

1. Placez l'image dans le dossier `public/`
2. Nommez-la simplement (ex: `mon-article.jpg`)
3. Dans l'article, référencez-la : `image: "/mon-article.jpg"`

### Étape 4 : Règles pour le Contenu HTML

**Balises HTML courantes :**

- `<p>` : Paragraphe
- `<h2>` : Sous-titre (utilisez h2, h3 pour les sous-titres)
- `<ul>` + `<li>` : Liste à puces
- `<ol>` + `<li>` : Liste numérotée
- `<strong>` : **Gras**
- `<em>` : _Italique_

✅ **Bon exemple :**

```html
<h2>Les principes fondamentaux</h2>
<p>Le serment énonce plusieurs principes clés :</p>
<ul>
  <li><strong>Respect de la vie :</strong> La protection de la vie</li>
  <li><strong>Confidentialité :</strong> La préservation des secrets</li>
</ul>
```

---

## ⚠️ Erreurs Courantes

### Erreur 1 : Virgule Manquante

```typescript
❌ {
    year: "2023"
    title: "SN"  // Manque une virgule !
  }

✅ {
    year: "2023",
    title: "SN",  // Virgule présente ✓
  }
```

### Erreur 2 : Virgule en Trop (Dernier Élément)

```typescript
exams: [
  { year: "2023", title: "SN", url: "..." },
  { year: "2022", title: "SN", url: "..." },  // ❌ Virgule en trop !
]

✅ exams: [
  { year: "2023", title: "SN", url: "..." },
  { year: "2022", title: "SN", url: "..." }  // ✓ Pas de virgule à la fin
]
```

### Erreur 3 : ID en Double

```typescript
❌ { id: 1, ... }  // Premier article
   { id: 1, ... }  // ❌ ID déjà utilisé !

✅ { id: 1, ... }  // Premier article
   { id: 2, ... }  // ✓ ID unique
```

### Erreur 4 : Guillemets Manquants

```typescript
❌ name: BIOPHYSIQUE,      // Manque les guillemets
✅ name: "BIOPHYSIQUE",    // Guillemets présents
```

---

## ✅ Vérifier vos Changements

### Méthode 1 : Vérification de la Syntaxe

Après avoir modifié un fichier TypeScript (`.ts`), vous pouvez vérifier la syntaxe :

```bash
cd wicen-nextjs
npm run build
```

S'il y a des erreurs, elles seront affichées avec le numéro de ligne.

### Méthode 2 : Lancer le Site

```bash
cd wicen-nextjs
npm run dev
```

Ouvrez votre navigateur à `http://localhost:3000` et vérifiez que :

- Le nouveau module apparaît dans la bonne année
- Les liens fonctionnent
- Les articles s'affichent correctement

---

## 📚 Exemples Complets

### Exemple 1 : Ajouter un Module Complet

```typescript
{
  id: "biochimie-clinique",
  semester: 4,
  name: "BIOCHIMIE CLINIQUE",
  description: "Cours et ressources pour BIOCHIMIE CLINIQUE",
  courses: [
    {
      title: "Biochimie Clinique",
      url: "https://drive.google.com/open?id=1dGqgcxFPkTXKvNkQl-stE9FViIWPzthD"
    },
    {
      title: "Valeurs Usuelles",
      url: "https://drive.google.com/open?id=1aPnlunex-OxZgcOHgfg__Jc1qkkne5Jv"
    }
  ],
  exams: [
    {
      year: "2023",
      title: "SN",
      url: "https://drive.google.com/file/d/1vRKYgR49PbjaO-txnr7eQdy2uR4oc4te/view?usp=drive_link"
    },
    {
      year: "2023",
      title: "Sr",
      url: "https://drive.google.com/file/d/1izTFEUONZJC4VfqGa7Hh84BQoTbhF0md/view?usp=drive_link"
    }
  ],
  corrections: []
}
```

### Exemple 2 : Ajouter un Article Complet

```typescript
{
  id: 10,
  slug: "gestion-du-temps-medecine",
  title: "La Gestion du Temps en Faculté de Médecine",
  description: "Techniques pour optimiser son temps d'étude",
  content: `
    <p>La gestion du temps est cruciale en médecine. Voici quelques stratégies...</p>

    <h2>Planification</h2>
    <p>Créez un emploi du temps réaliste qui inclut :</p>
    <ul>
      <li>Temps d'étude</li>
      <li>Temps de repos</li>
      <li>Activités physiques</li>
    </ul>

    <h2>Techniques d'Étude</h2>
    <p>La méthode Pomodoro est efficace : 25 minutes d'étude, 5 minutes de pause.</p>
  `,
  date: "2024-03-25",
  category: "Productivité",
  readTime: "7 min"
}
```

---

## 🆘 Besoin d'Aide ?

Si vous rencontrez des problèmes :

1. **Vérifiez la syntaxe** : Assurez-vous que toutes les virgules et guillemets sont corrects
2. **Vérifiez les IDs** : Assurez-vous que chaque ID est unique
3. **Consultez les exemples** : Regardez les modules/articles existants pour référence
4. **Testez localement** : Lancez `npm run dev` pour voir les erreurs

---

## 🎉 Résumé Rapide

**Pour ajouter un module :**

1. Ouvrez `lib/data/years-content-complete.ts`
2. Trouvez la bonne année
3. Ajoutez le module avec : `id`, `semester`, `name`, `description`
4. Ajoutez `courses`, `exams`, `corrections` si nécessaire
5. Vérifiez les virgules et guillemets

**Pour ajouter un article :**

1. Ouvrez `lib/data/articles.ts`
2. Incrémentez l'`id`
3. Ajoutez `slug`, `title`, `description`, `content` (HTML)
4. Ajoutez `date`, `category`, `readTime`, `image` si nécessaire
5. Testez en local

**Bonne contribution ! 🚀**
