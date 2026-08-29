import {
  BadgeCheck,
  Bike,
  MapPin,
  MessageCircle,
  Snowflake,
  WalletCards,
} from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const deliveryPoints = [
  { icon: Bike, label: "Livraison gratuite dès 5 kg d’achat" },
  { icon: Snowflake, label: "Produits frais" },
  { icon: WalletCards, label: "Paiement à la livraison ou selon disponibilité" },
  { icon: MessageCircle, label: "Commande simple via WhatsApp" },
];

export function Delivery() {
  return (
    <section id="livraison" className="bg-paper py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-5 py-10 shadow-soft sm:rounded-[2.5rem] sm:px-9 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -top-40 -right-30 -z-10 size-[34rem] rounded-full border border-white/8"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 -bottom-36 -z-10 size-80 rounded-full bg-orange/14 blur-3xl"
          />

          <div className="grid items-center gap-11 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/7 px-4 py-2 text-xs font-extrabold tracking-[0.14em] text-orange-soft uppercase">
                <MapPin className="size-4" aria-hidden="true" />
                Service local
              </span>
              <h2 className="mt-6 max-w-xl font-display text-[clamp(2.75rem,5.7vw,5rem)] leading-[0.94] font-bold tracking-[-0.05em] text-white">
                Livraison à <span className="text-orange">Marrakech</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Nous livrons rapidement vos repas frais pour chiens et chats,
                directement à votre porte, dans tout Marrakech.
              </p>
              <WhatsAppButton variant="light" className="mt-8 w-full sm:w-auto">
                Organiser ma livraison
              </WhatsAppButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliveryPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.label}
                    className="flex min-h-[118px] items-start gap-4 rounded-2xl border border-white/11 bg-white/[0.065] p-5 text-white backdrop-blur-sm"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange text-white">
                      <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <BadgeCheck className="mb-2 size-4 text-green-soft" aria-hidden="true" />
                      <p className="text-sm leading-5 font-bold">{point.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
