"use client";

import Link from "next/link";
import { MoveLeft, Compass, HardHat, Building2, Wrench, Phone, ArrowUpRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function NotFound() {
  const popularProjects = [
    {
      title: "East Park Mall Expansion",
      category: "Commercial",
      slug: "east-park-mall-expansion",
      client: "Napoli Property",
    },
    {
      title: "Meco 150T/Day Milling Plant",
      category: "Industrial",
      slug: "meco-milling-plant",
      client: "Eco Petroleum",
    },
    {
      title: "UNDP SCLARA Bulking Centers",
      category: "Institutional",
      slug: "undp-bulking-centers",
      client: "United Nations (UNDP)",
    },
    {
      title: "Oryx Energy Service Stations",
      category: "Energy",
      slug: "oryx-munali-filling-station",
      client: "Oryx Energies",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-barlow)]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-36 pb-20 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
        <div className="max-w-[1000px] w-full mx-auto">
          
          {/* Top Architectural Notice Banner */}
          <div className="bg-[var(--background)] border border-[var(--border)] p-8 sm:p-14 text-center relative overflow-hidden mb-10 shadow-sm">
            
            {/* Subtle Engineering Grid Indicator */}
            <div className="subtitle flex items-center justify-center mb-4">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Specification Error 404
              </div>
            </div>

            {/* Giant 404 with Brand Colors */}
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tight text-[var(--heading)] mb-4 select-none">
              4<span className="text-[var(--accent)]">0</span>4
            </h1>

            <h2 className="text-2xl sm:text-4xl font-medium text-[var(--heading)] tracking-[-1px] mb-4">
              Site Location or Blueprint Not Found
            </h2>

            <p className="text-[15px] sm:text-[17px] text-[var(--paragraphs)] max-w-2xl mx-auto leading-relaxed mb-8">
              The project case study, technical specification, or document you are trying to access has been relocated, archived, or is currently off-grid. Please use the directories below to navigate our engineering portfolio.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--heading)] font-semibold uppercase tracking-[1.5px] text-[13px] rounded-none hover:opacity-90 transition-opacity no-underline shadow-sm"
              >
                <MoveLeft size={16} />
                <span>Return to Homepage</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--heading)] text-white font-semibold uppercase tracking-[1.5px] text-[13px] rounded-none hover:bg-black transition-colors no-underline shadow-sm"
              >
                <Building2 size={16} />
                <span>Browse Projects</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--heading)] border border-[var(--border)] font-semibold uppercase tracking-[1.5px] text-[13px] rounded-none hover:bg-[var(--background)] transition-colors no-underline shadow-sm"
              >
                <HardHat size={16} />
                <span>Contact Engineering</span>
              </Link>
            </div>
          </div>

          {/* Quick Jump Directory: Landmark Case Studies */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <Compass size={18} className="text-[var(--accent)]" />
                <h3 className="text-[16px] sm:text-[18px] font-medium text-[var(--heading)] uppercase tracking-[1.2px] m-0">
                  Featured Case Studies
                </h3>
              </div>
              <Link
                href="/projects"
                className="text-[12px] font-semibold text-[var(--heading)] hover:text-[var(--accent)] uppercase tracking-[1.5px] no-underline transition-colors"
              >
                View All 11 Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="p-5 bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-200 no-underline group block shadow-xs"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[var(--background)] text-[var(--heading)] inline-block mb-2 group-hover:bg-[var(--accent)] transition-colors">
                    {p.category}
                  </span>
                  <h4 className="text-[15px] font-medium text-[var(--heading)] group-hover:text-[var(--accent)] transition-colors mb-1 line-clamp-1">
                    {p.title}
                  </h4>
                  <p className="text-[12px] text-[var(--info-text)] m-0">
                    Client: {p.client}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Direct Support Strip */}
          <div className="bg-[var(--heading)] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-medium text-white mb-1 m-0">
                Need Immediate Assistance or Tender Inquiries?
              </h4>
              <p className="text-sm text-white/80 m-0">
                Our Lusaka engineering headquarters is available during business hours.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+260966626579"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors no-underline border border-white/20"
              >
                <Phone size={14} />
                <span>+260 966 626579</span>
              </a>
              <a
                href="https://wa.me/260966626579"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors no-underline"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
