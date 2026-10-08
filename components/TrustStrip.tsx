"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustStrip() {
  const certifications = [
    {
      name: "National Council for Construction",
      acronym: "NCC Grade 1",
      logo: "/logos/ncc.png",
      href: "/#capabilities",
    },
    {
      name: "Workers' Compensation Fund Control Board",
      acronym: "WCFCB Compliant",
      logo: "/logos/wcfcb.png",
      href: "/#capabilities",
    },
    {
      name: "Engineering Institution of Zambia",
      acronym: "EIZ Practice",
      logo: "/logos/eiz.png",
      href: "/#capabilities",
    },
    {
      name: "ISO 9001 (Quality) • ISO 14001 (Environment) • ISO 45001 (OH&S)",
      acronym: "ISO 14001 • 45001 • 9001",
      logo: "/logos/iso.svg",
      href: "/#capabilities",
    },
  ];

  const clients = [
    { name: "Oryx Energies", logo: "/logos/oryx.png", href: "/projects/oryx-munali-filling-station" },
    { name: "Napoli Property", logo: "/logos/napoli.png", href: "/projects/east-park-mall-expansion" },
    { name: "Real Estate Investments Zambia", logo: "/logos/reiz.png", href: "/projects" },
    { name: "Ministry of Education", logo: "/logos/ministry.png", href: "/projects/limulunga-day-secondary-school" },
    { name: "Khalif Motors", logo: "/logos/khalif.png", href: "/projects" },
    { name: "Zambia Revenue Authority", logo: "/logos/zra.png", href: "/#capabilities" },
    { name: "UNDP", logo: "/logos/undp.png", href: "/projects/undp-bulking-centers" },
    { name: "Engie PowerCorner", logo: "/logos/engie.png", href: "/projects/engic-solar-plants" },
    { name: "Afroil", logo: "/logos/afroil.png", href: "/projects/afro-oil-filling-station" },
  ];

  return (
    <section id="trust" className="w-full bg-white border-b border-[var(--border)] py-7 sm:py-9 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <Reveal width="100%">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center justify-between">
            
            {/* Left: Statutory Accreditations & ISO Certified (Full Brand Colors) */}
            <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                <span className="text-[11px] font-bold text-[var(--heading)] uppercase tracking-[1.5px]">
                  Accredited &amp; ISO Certified
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-6 flex-wrap">
                {certifications.map((cert) => (
                  <Link
                    key={cert.acronym}
                    href={cert.href}
                    className="group relative flex items-center justify-center hover:scale-105 transition-all duration-300 no-underline cursor-pointer"
                    title={`${cert.name} - View statutory standing`}
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
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Divider */}
            <div className="hidden lg:block w-[1px] h-14 bg-[var(--border)] shrink-0" />

            {/* Mobile Divider */}
            <div className="w-full h-[1px] bg-[var(--border)] lg:hidden" />

            {/* Right: Trusted By Enterprise Clients (Full Color Marquee) */}
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
                    <Link
                      key={index}
                      href={client.href}
                      className="flex-shrink-0 hover:scale-110 transition-transform duration-300 opacity-100 no-underline cursor-pointer"
                      title={`${client.name} - View project case study`}
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
                    </Link>
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
