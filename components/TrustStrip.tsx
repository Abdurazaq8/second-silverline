"use client";

import { Reveal } from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustStrip() {
  const certifications = [
    {
      name: "National Council for Construction",
      acronym: "NCC Grade 1",
      logo: "/logos/ncc.png",
    },
    {
      name: "Workers' Compensation Fund Control Board",
      acronym: "WCFCB Compliant",
      logo: "/logos/wcfcb.png",
    },
    {
      name: "Engineering Institution of Zambia",
      acronym: "EIZ Practice",
      logo: "/logos/eiz.png",
    },
    {
      name: "ISO 9001 (Quality) • ISO 14001 (Environment) • ISO 45001 (OH&S)",
      acronym: "ISO 14001 • 45001 • 9001",
      logo: "/logos/iso.svg",
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
    <section id="trust" className="w-full bg-[#08182D] border-y border-[#F59E0B]/30 py-7 sm:py-9 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <Reveal width="100%">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-between">
            
            {/* Left: Statutory Accreditations & ISO Certified (Full Brand Colors) */}
            <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-[1.5px]">
                  Accredited &amp; ISO Certified
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 flex-wrap">
                {certifications.map((cert) => (
                  <div
                    key={cert.acronym}
                    className="group relative flex items-center justify-center p-2 bg-white/95 border border-white/20 hover:border-[var(--accent)] hover:scale-105 transition-all duration-300 shadow-sm"
                    title={cert.name}
                  >
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={110}
                      height={48}
                      sizes="120px"
                      className="h-9 sm:h-10 w-auto object-contain"
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-semibold text-white uppercase tracking-wider whitespace-nowrap pointer-events-none bg-[#0C2340] px-2.5 py-1 shadow-lg border border-[var(--accent)] z-30">
                      {cert.acronym}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Divider */}
            <div className="hidden lg:block w-[1px] h-14 bg-white/15 shrink-0" />

            {/* Mobile Divider */}
            <div className="w-full h-[1px] bg-white/15 lg:hidden" />

            {/* Right: Trusted By Enterprise Clients (Full Color Marquee) */}
            <div className="flex-1 w-full overflow-hidden min-w-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-[1.5px]">
                  Trusted By Industry Leaders
                </span>
              </div>

              <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-20 before:bg-gradient-to-r before:from-[#08182D] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-20 after:bg-gradient-to-l after:from-[#08182D] after:to-transparent after:content-['']">
                <motion.div
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  className="flex flex-none gap-4 sm:gap-6 pr-4 sm:pr-6 items-center py-1"
                >
                  {[...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 p-2 bg-white/95 border border-white/20 hover:border-[var(--accent)] hover:scale-105 transition-all duration-300 shadow-sm"
                      title={client.name}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={110}
                        height={42}
                        loading="lazy"
                        sizes="120px"
                        className="h-8 sm:h-9 w-auto object-contain max-h-[38px]"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
