export type Product = {
  id: "poulet" | "chat";
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
    name: "Poulet - Chien",
    orderName: "Poulet pour chien 500g",
    weight: "500 g",
    description: "70 % de poulet, légumes, riz et huile végétale, pour chiens.",
    price: 25,
    available: true,
    image: "/images/recipe-chicken-500g.png",
    imageAlt: "Repas PawBowl au poulet pour chien avec son packaging de 500 g",
    highlights: ["70 % de poulet", "Pour chiens"],
  },
  {
    id: "chat",
    name: "Poulet - Chat",
    orderName: "Poulet pour chat 500g",
    weight: "500 g",
    description: "70 % de poulet, légumes, riz et huile végétale, pour chats.",
    price: 25,
    available: true,
    image: "/images/recipe-chicken-500g.png",
    imageAlt: "Repas PawBowl au poulet pour chat avec son packaging de 500 g",
    highlights: ["70 % de poulet", "Pour chats"],
  },
];
