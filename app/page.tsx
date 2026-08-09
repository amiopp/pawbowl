import { Benefits } from "@/components/Benefits";
import { Delivery } from "@/components/Delivery";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Newsletter } from "@/components/Newsletter";
import { Recipes } from "@/components/Recipes";
import { ServingSteps } from "@/components/ServingSteps";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Recipes />
        <ServingSteps />
        <Delivery />
        <FinalCta />
        <Newsletter />
      </main>
      <Footer />

      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-white/20 bg-paper/92 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-12px_36px_rgba(28,38,35,0.12)] backdrop-blur-xl md:hidden">
        <WhatsAppButton variant="mobile">
          Commander sur WhatsApp
        </WhatsAppButton>
      </div>
    </>
  );
}
