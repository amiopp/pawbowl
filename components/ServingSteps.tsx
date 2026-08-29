import { Clock3, Heart, Snowflake, Utensils } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    icon: Snowflake,
    title: "Décongelez",
    text: "Au réfrigérateur 12 à 24h avant de servir.",
  },
  {
    icon: Utensils,
    title: "Servez",
    text: "À température ambiante.",
  },
  {
    icon: Heart,
    title: "Savourez",
    text: "Votre chien ou votre chat profite d’un repas frais.",
  },
  {
    icon: Clock3,
    title: "Conservez",
    text: "Au frais jusqu’à 3 jours après ouverture.",
  },
];

export function ServingSteps() {
  return (
    <section id="servir" className="bg-paper py-20 sm:py-24 lg:py-30">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Simple au quotidien"
          title="Comment servir PawBowl ?"
          description="Quatre gestes simples pour lui servir son repas dans les meilleures conditions."
        />

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-9 right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-orange/28 lg:block"
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative flex min-h-[205px] flex-col rounded-[1.5rem] border border-sand/75 bg-cream p-5 shadow-[0_10px_32px_rgba(82,47,16,0.05)] sm:p-6"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-orange-cta text-white shadow-[0_10px_22px_rgba(200,76,0,0.18)]">
                      <Icon className="size-6" strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <span className="font-display text-3xl font-semibold text-sand">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold tracking-[-0.025em] text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-muted sm:text-[15px]">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
