"use client";

import Link from "next/link";
import Image from "next/image";

export default function AlbionWhatWeDoBanner() {
  return (
    <div className="section-full w-full mb-[14px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[var(--heading)] w-full">
        
        {/* Left Side: Full Background Image */}
        <div className="relative w-full min-h-[260px] sm:min-h-[380px] lg:min-h-[580px] overflow-hidden group">
          <Image
            src="/services/plant-equipment-hire.jpg"
            alt="Silverline Plant Equipment and Construction"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />
        </div>

        {/* Right Side: Signature Albion Block-Full */}
        <div className="block-full flex flex-col justify-center items-start px-6 sm:px-14 lg:px-20 py-12 sm:py-16 lg:py-24 bg-[var(--heading)] text-white">
          <div className="block max-w-[520px]">
            
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-white" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-white">
                WHAT WE DO
              </div>
            </div>

            <h2 className="heading white text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] tracking-[-1.4px] font-medium text-white mb-6">
              We know how to deliver your vision
            </h2>

            <p className="paragraph white text-[16px] sm:text-[18px] leading-[170%] text-white/80 mb-8">
              From heavy structural steel fabrication and pre-engineered buildings to electrical substations, solar infrastructure, and abnormal load logistics, our integrated capabilities allow us to manage complex multi-disciplinary developments under one unified standard.
            </p>

            <Link href="/#services" className="button w-full sm:w-auto bg-[var(--accent)] text-[var(--heading)] px-8 py-5 inline-flex items-center justify-center no-underline hover:opacity-90 transition-opacity">
              <span className="text-button text-[14px] font-semibold uppercase tracking-[1.5px]">
                Our Services
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/albion/icon_button.svg" alt="" className="icon-button ml-3 w-1.5 h-2.5" />
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
