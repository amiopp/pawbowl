type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <span
        className={`mb-4 inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.18em] uppercase ${inverse ? "text-orange-soft" : "text-orange-cta"}`}
      >
        <span
          className={`h-px w-8 ${inverse ? "bg-orange-soft/70" : "bg-orange"}`}
        />
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[clamp(2.35rem,5vw,4.25rem)] leading-[0.98] font-bold tracking-[-0.04em] ${inverse ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${inverse ? "text-white/72" : "text-ink-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
