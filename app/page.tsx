// app/page.tsx
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AudienceSection from "@/components/landing/AudienceSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WidgetLibrarySection from "@/components/landing/WidgetLibrarySection";
import WhyJourneySection from "@/components/landing/WhyJourneySection";
import PricingSection from "@/components/landing/PricingSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

import GridBackground from "@/components/ui/GridBackground";
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <GridBackground />

      <Navbar />
      <ScrollToTop />

      <HeroSection />

      <WhyJourneySection />

      <AudienceSection />

      {/* <HowItWorksSection /> */}

      <WidgetLibrarySection />

      <PricingSection />

      <RoadmapSection />

      <ContactSection />

      <Footer />
    </main>
  );
}