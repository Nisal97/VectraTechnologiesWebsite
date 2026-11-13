import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AutomationAudit from "@/components/services/AutomationAudit";
import QaStrategy from "@/components/services/QaStrategy";
import TechStackMatrix from "@/components/services/TechStackMatrix";
import DeliveryProcess from "@/components/services/DeliveryProcess";
import PricingModels from "@/components/services/PricingModels";
import ServicesCta from "@/components/services/ServicesCta";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import TestAutomation from "@/components/services/TestAutomation";
import WebMobileMvp from "@/components/services/WebMobileMvp";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen bg-[#090d16] text-white selection:bg-cyan-500 selection:text-black pt-16"
    >
      <Navbar />
      <ServicesHero />
      <WebMobileMvp />
      <TestAutomation />
      <AutomationAudit />
      <QaStrategy />
      <TechStackMatrix />
      <DeliveryProcess />
      <PricingModels />
      <ServicesCta />
      <Footer />
    </main>
  );
}