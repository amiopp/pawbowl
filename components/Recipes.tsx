import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";

export function Recipes() {
  return (
    <section
      id="recettes"
      className="relative isolate overflow-hidden bg-[#fff3e4] py-20 sm:py-24 lg:py-30"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-55 [background-image:radial-gradient(circle_at_10%_15%,rgba(242,106,22,0.12),transparent_22%),radial-gradient(circle_at_90%_88%,rgba(85,122,53,0.1),transparent_24%)]"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Nos recettes"
          title="Deux recettes. Beaucoup de bonheur."
          description="Des ingrédients simples, des portions généreuses et un goût que votre chien attendra avec impatience."
        />

        <div className="mt-11 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-5 text-ink-muted">
          Le poulet est disponible à 25 DH les 500 g. La recette bœuf est
          actuellement en rupture de stock.
        </p>
      </div>
    </section>
  );
}
