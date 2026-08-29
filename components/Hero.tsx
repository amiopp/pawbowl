import Image from "next/image";
import { ArrowRight, Heart, Leaf, MapPin, ShieldCheck } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const trustItems = [
  { icon: Leaf, label: "Ingrédients naturels" },
  { icon: ShieldCheck, label: "Sans conservateurs" },
  { icon: Heart, label: "Pour chiens et chats" },
];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-hidden bg-cream pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 opacity-50 [background-image:radial-gradient(circle_at_15%_20%,rgba(242,106,22,0.12),transparent_27%),radial-gradient(circle_at_83%_20%,rgba(85,122,53,0.11),transparent_23%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-36 -right-28 -z-10 size-[32rem] rounded-full border border-orange/15 sm:size-[42rem]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-11 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/25 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-green uppercase shadow-sm backdrop-blur">
            <MapPin className="size-4" aria-hidden="true" />
            Frais &amp; préparé à Marrakech
          </div>

          <h1 className="max-w-[720px] font-display text-[clamp(3.35rem,7.2vw,6.4rem)] leading-[0.88] font-bold tracking-[-0.055em] text-navy">
            De vrais repas pour chiens et chats{" "}
            <span className="text-orange-cta">heureux.</span>
          </h1>

          <p className="mt-7 max-w-[590px] text-lg leading-8 text-navy/76 sm:text-xl sm:leading-9">
            Des repas frais, naturels et équilibrés, préparés avec amour pour
            vos compagnons à Marrakech.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton className="w-full sm:w-auto">
              Commander sur WhatsApp
            </WhatsAppButton>
            <a
              href="#recettes"
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full border border-navy/20 bg-paper/75 px-6 font-extrabold text-navy transition duration-200 hover:-translate-y-0.5 hover:border-orange hover:text-orange-cta focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange sm:w-auto"
            >
              Découvrir nos recettes
              <ArrowRight className="size-4.5" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm font-bold text-navy/78"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-green-soft text-green">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[720px] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-soft sm:rounded-[2.5rem] sm:p-3">
            <div className="relative aspect-[1.22/1] overflow-hidden rounded-[1.55rem] sm:rounded-[2rem]">
              <Image
                src="/images/pawbowl-hero-delivery.png"
                alt="PawBowl pour chiens et chats, repas frais et livraison à Marrakech"
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/18 via-transparent to-white/5" />
            </div>
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-sand/80 bg-paper/95 px-4 py-3 shadow-card backdrop-blur sm:-left-5 sm:px-5">
            <span className="grid size-10 place-items-center rounded-full bg-orange text-white">
              <Heart className="size-5" fill="currentColor" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-[11px] font-extrabold tracking-[0.12em] text-orange-cta uppercase">
                Préparé localement
              </span>
              <strong className="text-sm text-navy sm:text-base">
                Avec soin, chaque jour
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
