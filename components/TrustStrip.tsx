"use client";

import { Reveal } from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck2 } from "lucide-react";

export default function TrustStrip() {
  const certifications = [
    {
      name: "National Council for Construction",
      acronym: "NCC",
      badge: "Grade 1 Certified",
      scope: "Highest statutory category for heavy civil engineering, industrial structures, and turnkey commercial building.",
      logo: "/logos/ncc.png",
      icon: Award,
    },
    {
      name: "Workers' Compensation Fund Control Board",
      acronym: "WCFCB",
      badge: "100% Statutory Standing",
      scope: "Fully certified occupational safety coverage and workforce protection across all active project sites in Zambia.",
      logo: "/logos/wcfcb.png",
      icon: ShieldCheck,
    },
    {
      name: "Engineering Institution of Zambia",
      acronym: "EIZ",
      badge: "Chartered Practice",
      scope: "Lead structural and civil engineers accredited for certified design verification, safety sign-off, and site supervision.",
      logo: "/logos/eiz.png",
      icon: FileCheck2,
    },
  ];

  const clients = [
    { name: "Oryx Energies", logo: "/logos/oryx.png" },
    { name: "Napoli Property", logo: "/logos/napoli.png" },
    { name: "Real Estate Investments Zambia", logo: "/logos/reiz.png" },
    { name: "Ministry of Education", logo: "/logos/ministry.png" },
    { name: "Khalif Motors", logo: "/logos/khalif.png" },
    { name: "Zambia Revenue Authority", logo: "/logos/zra.png" },
    { name: "UNDP", logo: "/logos/undp.png" },
    { name: "Engie PowerCorner", logo: "/logos/engie.png" },
    { name: "Afroil", logo: "/logos/afroil.png" },
  ];

  return (
    <section id="trust" className="section background w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Level 1: Primary Section Header with Clear Architectural Hierarchy */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                Accreditations &amp; Trust
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[680px] m-0">
              Statutory compliance and national execution trust
            </h2>
          </div>

          <p className="text-[16px] text-[var(--paragraphs)] max-w-sm m-0 leading-relaxed">
            Operating with full regulatory clearance from Zambia&apos;s apex engineering bodies, trusted by industry-leading commercial and mining enterprises.
          </p>
        </div>

        {/* Level 2: Primary Tier — 3 High-Status Statutory Accreditation Cards */}
        <div className="mb-16">
          <div className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[var(--accent)] inline-block shrink-0" />
            <span>Apex Statutory Regulators &amp; Governing Bodies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {certifications.map((cert, index) => (
              <Reveal key={cert.acronym} delay={index * 0.1} width="100%">
                <div className="bg-white border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between h-full group rounded-none hover:border-[var(--accent)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer relative">
                  
                  {/* Top: Logo and Status Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-8 pb-5 border-b border-[var(--border)]">
                      <div className="relative h-16 w-36 flex items-center justify-start">
                        <Image
                          src={cert.logo}
                          alt={cert.name}
                          width={140}
                          height={64}
                          sizes="160px"
                          className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="px-3 py-1 bg-[var(--accent)] text-[var(--heading)] text-[11px] font-bold uppercase tracking-wider rounded-none shrink-0 shadow-sm">
                        {cert.badge}
                      </span>
                    </div>

                    {/* Acronym and Full Title */}
                    <div className="mb-3">
                      <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[var(--heading)] block mb-1">
                        {cert.acronym}
                      </span>
                      <h3 className="text-[20px] font-medium text-[var(--heading)] leading-[125%] group-hover:text-[var(--accent)] transition-colors m-0">
                        {cert.name}
                      </h3>
                    </div>

                    {/* Scope & Description */}
                    <p className="text-[14px] text-[var(--paragraphs)] leading-[160%] m-0 mt-3">
                      {cert.scope}
                    </p>
                  </div>

                  {/* Albion Animated Line */}
                  <div className="line-block relative w-full h-[2px] mt-8 flex items-center">
                    <div className="line-full line-full-anim absolute inset-0 bg-[var(--accent)]" />
                    <div className="line-1px w-full h-[1px] bg-[var(--border)]" />
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Level 3: Secondary Tier — Corporate & Development Client Partners */}
        <div className="pt-10 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
            <div className="subtitle flex items-center">
              <div className="line-subtitle w-[20px] h-[1px] bg-[var(--heading)]" />
              <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                Enterprise Clients &amp; Public Infrastructure
              </div>
            </div>
            <span className="text-[13px] text-[var(--paragraphs)] font-medium">
              Landmark developments across Zambia
            </span>
          </div>

          {/* Infinite Scrolling Ticker of Clients */}
          <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-24 before:bg-gradient-to-r before:from-[var(--background)] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-24 after:bg-gradient-to-l after:from-[var(--background)] after:to-transparent after:content-['']">
            <motion.div
              transition={{
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              }}
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              className="flex flex-none gap-6 sm:gap-8 pr-8 items-center py-2"
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white border border-[var(--border)] px-8 py-5 hover:border-[var(--heading)] hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 rounded-none flex items-center justify-center min-w-[160px] sm:min-w-[190px] h-[84px] sm:h-[92px] cursor-pointer group"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={60}
                    loading="lazy"
                    sizes="180px"
                    className="h-11 sm:h-13 w-auto max-h-[54px] object-contain transition-transform duration-300 group-hover:scale-108"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
