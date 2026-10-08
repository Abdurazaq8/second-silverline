"use client";

import { Reveal } from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustStrip() {
  const certifications = [
    {
      name: "National Council for Construction",
      acronym: "NCC",
      logo: "/logos/ncc.png",
    },
    {
      name: "Workers' Compensation Fund Control Board",
      acronym: "WCFCB",
      logo: "/logos/wcfcb.png",
    },
    {
      name: "Engineering Institution of Zambia",
      acronym: "EIZ",
      logo: "/logos/eiz.png",
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
    <section id="trust" className="w-full bg-white border-b border-[var(--border)] py-7 sm:py-9 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <Reveal width="100%">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-14 items-center justify-between">
            
            {/* Left: Statutory Accreditations (Compact Static Badges) */}
            <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                <span className="text-[11px] font-bold text-[var(--heading)] uppercase tracking-[1.5px]">
                  Accredited By
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8">
                {certifications.map((cert) => (
                  <div
                    key={cert.acronym}
                    className="group relative flex items-center justify-center hover:scale-105 transition-all duration-300"
                    title={cert.name}
                  >
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={110}
                      height={48}
                      sizes="120px"
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[10px] font-semibold text-[var(--heading)] uppercase tracking-wider whitespace-nowrap pointer-events-none bg-white px-2 py-0.5 shadow-md border border-[var(--border)] z-30">
                      {cert.acronym}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Divider */}
            <div className="hidden lg:block w-[1px] h-14 bg-[var(--border)] shrink-0" />

            {/* Mobile Divider */}
            <div className="w-full h-[1px] bg-[var(--border)] lg:hidden" />

            {/* Right: Trusted By Enterprise Clients (Compact Marquee) */}
            <div className="flex-1 w-full overflow-hidden min-w-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                <span className="text-[11px] font-bold text-[var(--heading)] uppercase tracking-[1.5px]">
                  Trusted By Industry Leaders
                </span>
              </div>

              <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
                <motion.div
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  initial={{ x: 0 }}
                  animate={{ x: "-50%" }}
                  className="flex flex-none gap-8 sm:gap-12 pr-8 sm:pr-12 items-center py-1"
                >
                  {[...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
                      title={client.name}
                    >
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={110}
                        height={42}
                        loading="lazy"
                        sizes="120px"
                        className="h-9 sm:h-10 w-auto object-contain max-h-[42px]"
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
