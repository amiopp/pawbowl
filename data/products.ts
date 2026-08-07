export type Product = {
  id: "poulet" | "boeuf";
  name: string;
  orderName: string;
  weight: string;
  description: string;
  price: number | null;
  available: boolean;
  image: string;
  imageAlt: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    id: "poulet",
    name: "Poulet",
    orderName: "Poulet 500g",
    weight: "500 g",
    description: "70 % de poulet, légumes, riz et huile végétale.",
    price: 25,
    available: true,
    image: "/images/recipe-chicken-500g.png",
    imageAlt: "Repas PawBowl au poulet avec son nouveau packaging de 500 g",
    highlights: ["70 % de poulet", "Fait maison"],
  },
  {
    id: "boeuf",
    name: "Bœuf",
    orderName: "Bœuf 500g",
    weight: "500 g",
    description: "70 % de bœuf, légumes, riz et huile végétale.",
    price: null,
    available: false,
    image: "/images/recipe-beef-500g.png",
    imageAlt: "Repas PawBowl au bœuf avec son nouveau packaging de 500 g",
    highlights: ["70 % de bœuf", "Bientôt de retour"],
  },
];
