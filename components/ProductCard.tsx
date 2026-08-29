import Image from "next/image";
import { Check, Drumstick, Utensils } from "lucide-react";
import type { Product } from "@/data/products";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  const RecipeIcon = product.id === "chat" ? Utensils : Drumstick;
  const accentClasses =
    product.id === "chat"
      ? "bg-[#f8e7df] text-terracotta"
      : "bg-green-soft text-green";
  const featuredPrice =
    product.prices.find((tier) => tier.label === "500 g") ?? product.prices[0];

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-sand/75 bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden bg-orange-soft">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          quality={88}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.025]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-paper/95 px-3 py-1.5 text-xs font-extrabold text-navy shadow-sm backdrop-blur">
          Format {product.weight}
        </span>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className={`grid size-11 shrink-0 place-items-center rounded-2xl ${accentClasses}`}>
              <RecipeIcon className="size-5" strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-extrabold tracking-[0.14em] text-orange-cta uppercase">
                Recette fraîche
              </p>
              <h3 className="font-display text-3xl font-bold tracking-[-0.035em] text-navy sm:text-4xl">
                {product.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <strong className="font-display text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl">
              {featuredPrice.price}
            </strong>
            <span className="ml-1 text-sm font-extrabold text-navy">DH</span>
            <span className="block text-[11px] font-bold text-ink-muted">
              les {featuredPrice.label}
            </span>
          </div>
        </div>

        <p className="mt-5 min-h-12 text-[15px] leading-6 text-ink-muted sm:text-base">
          {product.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {product.highlights.map((highlight) => (
            <span
              key={highlight}
              className="inline-flex items-center gap-1.5 rounded-full border border-green/15 bg-green-soft px-3 py-1.5 text-xs font-bold text-green"
            >
              <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
              {highlight}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {product.prices.map((tier) => (
            <div
              key={tier.label}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-bold ${
                tier.label === "500 g"
                  ? "border-orange/20 bg-orange-soft/40 text-navy"
                  : "border-sand/70 bg-white text-navy/80"
              }`}
            >
              <span>{tier.label}</span>
              <span>{tier.price} DH</span>
            </div>
          ))}
        </div>

        <p className="mt-3 text-xs leading-5 text-ink-muted">
          À partir de 2 kg, le tarif baisse de 5 % par kilo supplémentaire.
        </p>

        <WhatsAppButton product={product.orderName} className="mt-6 w-full">
          Commander sur WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
