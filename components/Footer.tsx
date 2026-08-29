import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Recettes", href: "#recettes" },
  { label: "Comment servir", href: "#servir" },
  { label: "Livraison", href: "#livraison" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-sand/70 bg-cream pb-28 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_0.8fr] md:px-8 md:py-14">
        <div>
          <Image
            src="/images/pawbowl-logo.png"
            alt="PawBowl"
            width={1172}
            height={308}
            className="h-auto w-[150px]"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink-muted">
            De vrais repas frais pour chiens et chats, préparés avec amour à
            Marrakech.
          </p>
        </div>

        <div>
          <p className="text-xs font-extrabold tracking-[0.15em] text-orange-cta uppercase">
            Navigation
          </p>
          <nav aria-label="Navigation de pied de page" className="mt-4 grid gap-2.5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm font-bold text-navy/72 transition hover:text-orange-cta"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-extrabold tracking-[0.15em] text-orange-cta uppercase">
            Nous contacter
          </p>
          <div className="mt-4 grid gap-3 text-sm text-navy/78">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 font-bold hover:text-orange-cta"
            >
              <Phone className="size-4 text-green" aria-hidden="true" />
              +212 662-020419
            </a>
            <span className="flex items-center gap-2.5 font-bold">
              <MapPin className="size-4 text-green" aria-hidden="true" />
              Marrakech, Maroc
            </span>
            <a
              href="mailto:pawbowl2026@gmail.com"
              className="flex items-center gap-2.5 font-bold hover:text-orange-cta"
            >
              <Mail className="size-4 text-green" aria-hidden="true" />
              pawbowl2026@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-sand/65">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
          <span>© 2026 PawBowl. Tous droits réservés.</span>
          <span>Fait avec soin à Marrakech.</span>
        </div>
      </div>
    </footer>
  );
}
