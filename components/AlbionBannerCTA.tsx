"use client";

import Link from "next/link";
import Image from "next/image";

export default function AlbionBannerCTA() {
  return (
    <div className="section-full w-full mb-[14px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        
        {/* Left Side: Background Site Image */}
        <div className="relative w-full min-h-[260px] sm:min-h-[360px] lg:min-h-[480px] overflow-hidden group">
          <Image
            src="/projects/east-park-expansion.jpg"
            alt="Silverline Landmark Construction Site"
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
        </div>

        {/* Right Side: Signature Albion Accent Block-Banner */}
        <div className="block-banner flex flex-col justify-center items-start px-6 sm:px-14 lg:px-20 py-12 sm:py-16 lg:py-24 bg-[var(--accent)] text-[#0C2340]">
          <div className="block max-w-[500px]">
            
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[#0C2340]" />
              <div className="text-subtitle ml-3 text-[14px] font-bold uppercase tracking-[1.5px] text-[#0C2340]">
                Contact Us
              </div>
            </div>

            <h3 className="heading-banner text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] tracking-[-1.4px] font-bold text-[#0C2340] mb-8">
              Ready to work together?
            </h3>

            <Link
              href="/contact"
              className="button accent w-full sm:w-auto bg-[#0C2340] text-white px-8 py-5 inline-flex items-center justify-center no-underline hover:bg-[#07172B] transition-colors shadow-lg cursor-pointer"
            >
              <span className="text-button text-[14px] font-bold uppercase tracking-[1.5px]">
                View contacts
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/albion/icon_button.svg" alt="" className="icon-button ml-3 w-1.5 h-2.5 brightness-0 invert" />
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
