import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AlbionStatsWhoWeAre from "@/components/AlbionStatsWhoWeAre";
import AlbionWhyUs from "@/components/AlbionWhyUs";
import AlbionWhatWeDoBanner from "@/components/AlbionWhatWeDoBanner";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import AlbionGalleryStrip from "@/components/AlbionGalleryStrip";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AlbionBannerCTA from "@/components/AlbionBannerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Albion Navigation */}
      <Navbar />

      {/* 2. Albion Hero with Looping Video & 3-Column Service Links */}
      <Hero />

      {/* 3. Accreditations & Infinite Client Ticker */}
      <TrustStrip />

      {/* 4. Albion Signature 2x2 Stats & Who We Are */}
      <AlbionStatsWhoWeAre />

      {/* 5. Albion Signature Why Us with Overlapping Architectural Images */}
      <AlbionWhyUs />

      {/* 6. Albion Full-Bleed 50/50 Split Banner: What We Do */}
      <AlbionWhatWeDoBanner />

      {/* 7. All 12 Core Services with Photos & Prefab Video Player */}
      <Services />

      {/* 8. Full Capabilities: 4 Cards, CNC Video Player, Workshop Bays, Workforce & Compliance */}
      <Capabilities />

      {/* 9. How We Work 4-Step Engineering Workflow */}
      <Process />

      {/* 10. Featured Landmark Projects with Dual Sliding Arrows */}
      <Projects />

      {/* 11. Full-Bleed 3-Image Construction Gallery Strip */}
      <AlbionGalleryStrip />

      {/* 12. About Company: Mission, Core Values, Stats & Health & Safety Commitment */}
      <About />

      {/* 13. All 4 Real Client Testimonials (Napoli, Eco Petroleum, Oryx, UNDP) */}
      <Testimonials />

      {/* 14. Albion Signature Split Banner: Ready to Work Together */}
      <AlbionBannerCTA />

      {/* 15. Albion 4-Column Footer with Contacts & Accreditation */}
      <Footer />
    </main>
  );
}
