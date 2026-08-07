import { Heart, PawPrint } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCta() {
  return (
    <section className="bg-paper py-16 sm:py-22 lg:py-26">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-orange-cta px-5 py-12 text-center shadow-[0_24px_70px_rgba(126,46,0,0.2)] sm:rounded-[2.5rem] sm:px-10 sm:py-16 lg:px-16">
          <PawPrint
            aria-hidden="true"
            className="absolute -top-7 -left-5 -z-10 size-36 rotate-[-18deg] text-white/8 sm:size-48"
            fill="currentColor"
          />
          <Heart
            aria-hidden="true"
            className="absolute -right-3 -bottom-8 -z-10 size-32 rotate-12 text-white/9 sm:size-44"
          />
          <p className="text-xs font-extrabold tracking-[0.18em] text-orange-soft uppercase">
            Du bonheur dans sa gamelle
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-[clamp(2.65rem,6vw,5rem)] leading-[0.94] font-bold tracking-[-0.05em] text-white">
            Offrez-lui le meilleur, chaque jour.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
            Des repas frais, naturels et faits avec amour. Commandez maintenant sur
            WhatsApp.
          </p>
          <WhatsAppButton variant="light" className="mt-8 w-full sm:w-auto">
            Commander sur WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
