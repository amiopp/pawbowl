# PawBowl — landing page

Landing page premium en français pour PawBowl, réalisée avec Next.js, TypeScript et Tailwind CSS. Toutes les commandes sont dirigées vers WhatsApp avec un message pré-rempli.

## Lancer le projet

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

Pour vérifier la version de production :

```bash
npm run build
npm run start
```

## Structure principale

```text
app/
  globals.css       Thème Tailwind et styles globaux minimaux
  layout.tsx        Métadonnées, polices et layout racine
  page.tsx          Assemblage de la landing page
components/
  Header.tsx
  Hero.tsx
  Benefits.tsx
  Recipes.tsx
  ProductCard.tsx
  ServingSteps.tsx
  Delivery.tsx
  FinalCta.tsx
  Footer.tsx
  WhatsAppButton.tsx
data/
  products.ts       Recettes, prix, descriptions et chemins d’images
lib/
  whatsapp.ts       Numéro, message et ouverture de WhatsApp
public/images/      Logo et visuels PawBowl
```

## Modifier les produits

Éditez simplement `data/products.ts`. Le nom envoyé dans le message WhatsApp est la propriété `orderName`. Exemple :

```ts
{
  name: "Poulet",
  orderName: "Poulet 500g",
  price: 25,
  available: true,
  image: "/images/recipe-chicken-500g.png"
}
```

Le numéro WhatsApp est centralisé dans `lib/whatsapp.ts` :

```ts
export const WHATSAPP_NUMBER = "212662020419";
```

## Remplacer les images

Placez les nouveaux fichiers dans `public/images/`, puis gardez les mêmes noms :

- `pawbowl-logo.png` : logo horizontal avec peu de marge autour du mot-symbole ;
- `hero-marrakech.png` : visuel principal horizontal, idéalement autour de 3:2 ou 5:4 ;
- `recipe-chicken-500g.png` : photo de la recette poulet ;
- `recipe-beef-500g.png` : photo de la recette bœuf.

Vous pouvez aussi changer les chemins dans `data/products.ts` et `components/Hero.tsx`. Préférez des fichiers WebP, AVIF ou PNG de bonne qualité. Next.js s’occupe ensuite de produire des tailles adaptées à l’écran.

## Déployer sur Vercel

1. Placez le projet dans un dépôt GitHub, GitLab ou Bitbucket.
2. Dans Vercel, choisissez **Add New → Project** puis importez le dépôt.
3. Vercel détecte automatiquement Next.js. Gardez la commande de build `npm run build`.
4. Cliquez sur **Deploy**.
5. Une fois le domaine final connu, remplacez `https://pawbowl.ma` dans `app/layout.tsx` si nécessaire.

Aucun backend, paiement en ligne, compte client ou variable d’environnement n’est nécessaire pour cette version.
