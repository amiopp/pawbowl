import { ChefHat, House, Leaf, Truck } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Ingrédients naturels",
    text: "Des produits frais et simples, sélectionnés avec soin.",
    color: "bg-green-soft text-green",
  },
  {
    icon: ChefHat,
    title: "Recettes équilibrées",
    text: "Des recettes généreuses pensées pour son quotidien.",
    color: "bg-orange-soft text-orange-cta",
  },
  {
    icon: House,
    title: "Préparé à Marrakech",
    text: "Fait maison localement, avec attention et savoir-faire.",
    color: "bg-[#f8e9de] text-terracotta",
  },
  {
    icon: Truck,
    title: "Livraison à domicile",
    text: "Une commande facile et une livraison rapide à Marrakech.",
    color: "bg-[#e8f1f5] text-navy",
  },
];

export function Benefits() {
  return (
    <section aria-label="Les avantages PawBowl" className="relative z-10 bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="group rounded-[1.5rem] border border-sand/70 bg-white p-5 shadow-[0_10px_32px_rgba(82,47,16,0.055)] transition duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6"
              >
                <div className="mb-7 flex items-start justify-between">
                  <span className={`grid size-13 place-items-center rounded-2xl ${benefit.color}`}>
                    <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-display text-lg font-semibold text-sand">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-lg font-extrabold tracking-[-0.025em] text-navy">
                  {benefit.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-ink-muted">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
