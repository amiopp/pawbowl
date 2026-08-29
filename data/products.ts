export type Product = {
  id: "poulet" | "chat";
  name: string;
  orderName: string;
  weight: string;
  description: string;
  prices: { label: string; price: number }[];
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
    prices: [
      { label: "500 g", price: 25 },
      { label: "1 kg", price: 45 },
      { label: "2 kg", price: 80 },
      { label: "3 kg", price: 76 },
      { label: "4 kg", price: 72 },
      { label: "5 kg", price: 68 },
    ],
    image: "/images/pawbowl-pack-500g.png",
    imageAlt: "Repas PawBowl au poulet pour chien avec son packaging de 500 g",
    highlights: ["70 % de poulet", "Pour chiens"],
  },
  {
    id: "chat",
    name: "Poulet - Chat",
    orderName: "Poulet pour chat 500g",
    weight: "500 g",
    description: "70 % de poulet, légumes, riz et huile végétale, pour chats.",
    prices: [
      { label: "500 g", price: 25 },
      { label: "1 kg", price: 45 },
      { label: "2 kg", price: 80 },
      { label: "3 kg", price: 76 },
      { label: "4 kg", price: 72 },
      { label: "5 kg", price: 68 },
    ],
    image: "/images/pawbowl-pack-500g.png",
    imageAlt: "Repas PawBowl au poulet pour chat avec son packaging de 500 g",
    highlights: ["70 % de poulet", "Pour chats"],
  },
];
