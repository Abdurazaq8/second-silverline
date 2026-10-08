import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AlbionStatsWhoWeAre from "@/components/AlbionStatsWhoWeAre";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import AlbionWhyUs from "@/components/AlbionWhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import AlbionGalleryStrip from "@/components/AlbionGalleryStrip";
import AlbionBannerCTA from "@/components/AlbionBannerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Albion Navigation */}
      <Navbar />

      {/* 2. Hero with Looping Video & Quick CTAs */}
      <Hero />

      {/* 3. Compact Statutory Accreditations & Client Trust Strip */}
      <TrustStrip />

      {/* 4. Albion Signature 2x2 Stats & Who We Are Overview */}
      <AlbionStatsWhoWeAre />

      {/* 5. Core Services: All 12 Engineering Disciplines & Prefab Video */}
      <Services />

      {/* 6. Featured Landmark Projects: Proven Turnkey Execution */}
      <Projects />

      {/* 7. Engineering & Manufacturing Capabilities: 5,000m² Plant, CNC & Fleet */}
      <Capabilities />

      {/* 8. How We Work: 4-Step Engineering Delivery */}
      <Process />

      {/* 9. Albion Why Us: Engineering Rigor & Quality Standards */}
      <AlbionWhyUs />

      {/* 10. Client Social Proof & Testimonials: Napoli, Eco Petroleum, Oryx, UNDP */}
      <Testimonials />

      {/* 11. About Company: Heritage, Values & Zero-Harm Safety Protocol */}
      <About />

      {/* 12. Architectural Site Gallery Strip */}
      <AlbionGalleryStrip />

      {/* 13. Albion Full-Bleed Call to Action Banner */}
      <AlbionBannerCTA />

      {/* 14. Comprehensive 4-Column Footer */}
      <Footer />
    </main>
  );
}
