"use client";

import { type MouseEvent, type ReactNode } from "react";
import { getWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  children: ReactNode;
  product?: string;
  variant?: "primary" | "outline" | "light" | "nav" | "mobile";
  className?: string;
};

const variantClasses = {
  primary:
    "min-h-13 bg-orange-cta px-6 text-white shadow-[0_14px_30px_rgba(200,76,0,0.22)] hover:-translate-y-0.5 hover:bg-[#ae4200]",
  outline:
    "min-h-13 border border-navy/20 bg-paper/80 px-6 text-navy hover:-translate-y-0.5 hover:border-orange hover:text-orange-cta",
  light:
    "min-h-13 bg-paper px-6 text-navy shadow-[0_14px_35px_rgba(91,41,8,0.17)] hover:-translate-y-0.5 hover:bg-white",
  nav: "min-h-11 bg-orange-cta px-5 text-sm text-white shadow-[0_10px_24px_rgba(200,76,0,0.2)] hover:bg-[#ae4200]",
  mobile:
    "min-h-13 w-full bg-[#16883f] px-5 text-white shadow-[0_14px_34px_rgba(14,85,41,0.28)] hover:bg-[#117334]",
};

export function WhatsAppButton({
  children,
  product,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    openWhatsApp(product);
  };

  return (
    <a
      href={getWhatsAppUrl(product)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold tracking-[-0.01em] transition duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-orange ${variantClasses[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        fill="currentColor"
        d="M16.04 3.2c-7.04 0-12.76 5.64-12.76 12.59 0 2.38.68 4.68 1.96 6.67L3.2 28.8l6.58-1.94a12.94 12.94 0 0 0 6.26 1.6c7.03 0 12.76-5.65 12.76-12.6S23.07 3.2 16.04 3.2Zm0 22.97c-2.03 0-4.01-.58-5.71-1.69l-.41-.27-3.85 1.13 1.19-3.7-.28-.43a10.19 10.19 0 0 1-1.48-5.42c0-5.7 4.73-10.33 10.54-10.33 5.8 0 10.52 4.64 10.52 10.34 0 5.69-4.72 10.37-10.52 10.37Zm5.82-7.75c-.32-.16-1.89-.92-2.18-1.03-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.22-.19.22-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.83-1.57-1.86-1.75-2.17-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.22.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.35-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.07-1.11 2.62 0 1.54 1.14 3.03 1.3 3.24.16.22 2.24 3.37 5.42 4.72.76.32 1.35.51 1.81.66.76.24 1.46.21 2.01.13.61-.09 1.89-.76 2.16-1.5.27-.73.27-1.36.19-1.5-.08-.13-.29-.21-.61-.37Z"
      />
    </svg>
  );
}
