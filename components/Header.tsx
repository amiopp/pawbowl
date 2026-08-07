"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Recettes", href: "#recettes" },
  { label: "Comment servir", href: "#servir" },
  { label: "Livraison", href: "#livraison" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/60 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-5 md:min-h-21 md:px-8">
        <a
          href="#accueil"
          aria-label="PawBowl — retour à l’accueil"
          className="relative z-10 shrink-0 rounded-sm focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-orange"
        >
          <Image
            src="/images/pawbowl-logo.png"
            alt="PawBowl"
            width={1172}
            height={308}
            priority
            className="h-auto w-[132px] sm:w-[154px]"
          />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-3 text-sm font-bold text-navy/82 transition hover:text-orange-cta focus-visible:rounded-sm focus-visible:outline-3 focus-visible:outline-orange"
            >
              {item.label}
              <span className="absolute right-0 bottom-1 left-0 h-0.5 origin-left scale-x-0 rounded-full bg-orange transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton variant="nav">Commander sur WhatsApp</WhatsAppButton>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-sand bg-white text-navy transition hover:border-orange lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-sand/70 bg-paper px-5 pt-3 pb-6 shadow-card lg:hidden"
        >
          <nav aria-label="Navigation mobile" className="mx-auto grid max-w-7xl">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-sand/50 py-3.5 text-base font-bold text-navy"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton variant="primary" className="mt-5 w-full">
              Commander sur WhatsApp
            </WhatsAppButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
