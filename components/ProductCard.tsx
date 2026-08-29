import Image from "next/image";
import { Check, Clock3, Drumstick, Utensils } from "lucide-react";
import type { Product } from "@/data/products";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  const RecipeIcon = product.id === "chat" ? Utensils : Drumstick;
  const accentClasses =
    product.id === "chat"
      ? "bg-[#f8e7df] text-terracotta"
      : "bg-green-soft text-green";

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-sand/75 bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:rounded-[2rem]">
      <div className="relative aspect-[4/3] overflow-hidden bg-orange-soft">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          quality={88}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition duration-700 group-hover:scale-[1.025] ${product.available ? "" : "grayscale-[0.18] saturate-[0.72]"}`}
        />
        <span
          className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-extrabold shadow-sm backdrop-blur ${product.available ? "bg-paper/95 text-navy" : "bg-terracotta text-white"}`}
        >
          {product.available ? `Format ${product.weight}` : "Rupture de stock"}
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
          {product.available && product.price !== null ? (
            <div className="shrink-0 text-right">
              <strong className="font-display text-3xl font-bold tracking-[-0.04em] text-navy sm:text-4xl">
                {product.price}
              </strong>
              <span className="ml-1 text-sm font-extrabold text-navy">DH</span>
              <span className="block text-[11px] font-bold text-ink-muted">
                les {product.weight}
              </span>
            </div>
          ) : (
            <span className="shrink-0 rounded-full bg-[#f6e5df] px-3 py-2 text-xs font-extrabold text-terracotta">
              Indisponible
            </span>
          )}
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

        {product.available ? (
          <WhatsAppButton product={product.orderName} className="mt-6 w-full">
            Commander sur WhatsApp
          </WhatsAppButton>
        ) : (
          <button
            type="button"
            disabled
            aria-label={`${product.name} en rupture de stock`}
            className="mt-6 inline-flex min-h-13 w-full cursor-not-allowed items-center justify-center gap-2.5 rounded-full bg-[#ead8d0] px-6 font-extrabold text-terracotta"
          >
            <Clock3 className="size-5" aria-hidden="true" />
            Rupture de stock
          </button>
        )}
      </div>
    </article>
  );
}
