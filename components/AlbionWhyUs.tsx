"use client";

import Link from "next/link";
import Image from "next/image";

export default function AlbionWhyUs() {
  return (
    <div className="section w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white mb-[14px] overflow-hidden">
      <div className="content max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Block */}
          <div className="block-left flex flex-col items-start w-full">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Why us?
              </div>
            </div>

            <h2 className="heading text-2xl xs:text-3xl sm:text-4xl lg:text-[52px] leading-[1.12] sm:leading-[1.08] tracking-[-1px] sm:tracking-[-1.4px] font-medium text-[var(--heading)] mb-6 max-w-[620px] w-full">
              We conduct all business with the highest standards
            </h2>

            <p className="paragraph text-[15px] sm:text-[18px] leading-[170%] text-[var(--paragraphs)] max-w-[500px] mb-8 w-full">
              From structural analysis and feasibility to on-site assembly, our registered structural and civil engineers maintain rigorous engineering discipline, statutory safety protocols, and execution certainty.
              <br /><br />
              Backed by our 2,500m² Lusaka fabrication plant, high-capacity earthmoving fleet, and certified artisans, we guarantee turnkey delivery and tender compliance for mining, commercial, and government partners.
            </p>

            <Link href="/contact" className="button dark w-full sm:w-auto bg-[var(--heading)] text-white px-8 py-5 flex items-center justify-center no-underline hover:bg-black transition-colors">
              <span className="text-button white text-[14px] font-semibold uppercase tracking-[1.5px] text-white">
                Learn more
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/albion/icon_button_white.svg" alt="" className="icon-button ml-3 w-1.5 h-2.5" />
            </Link>
          </div>

          {/* Right Block: Signature Albion Overlapping Images */}
          <div className="image-block relative w-full aspect-[4/3] sm:aspect-[16/11] group cursor-pointer pr-3 sm:pr-6 pb-3 sm:pb-6">
            {/* Base Image */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/services/building-construction.jpg"
                alt="Silverline Engineering Building Construction"
                fill
                className="image object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Absolute Image */}
            <div
              className="image-absolute absolute w-[52%] h-[58%] bottom-0 right-0 sm:bottom-[-4%] sm:right-[-4%] overflow-hidden border-4 sm:border-8 border-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-[var(--accent)]"
              style={{ boxShadow: "0 35px 120px rgba(16, 27, 34, 0.25)" }}
            >
              <Image
                src="/capabilities/fabrication-facility.jpg"
                alt="Lusaka Fabrication Workshop"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
