"use client";

import Link from "next/link";

export default function AlbionStatsWhoWeAre() {
  return (
    <div id="overview" className="section background w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Side (Desktop) / Bottom Side (Mobile): 4 Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1">
            
            {/* Stat 1 */}
            <div className="stats bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group">
              <div className="icon-stats-block bg-[var(--background)] group-hover:bg-[var(--accent)] transition-colors p-3 mb-6 sm:mb-8 ml-auto inline-block self-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/albion/icon_1.svg" alt="" className="w-6 h-6" />
              </div>
              <div className="stats-block">
                <div className="numbers-stats text-3xl sm:text-4xl lg:text-[52px] font-medium text-[var(--heading)] group-hover:text-[var(--cobalt)] transition-colors tracking-tight leading-none mb-3">
                  2,500m²
                </div>
                <h6 className="heading-stats text-[15px] sm:text-[17px] font-medium text-[var(--heading)] leading-[130%] m-0">
                  Heavy fabrication &amp; manufacturing plant in Lusaka
                </h6>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="stats bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group">
              <div className="icon-stats-block bg-[var(--background)] group-hover:bg-[var(--accent)] transition-colors p-3 mb-6 sm:mb-8 ml-auto inline-block self-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/albion/icon_2.svg" alt="" className="w-6 h-6" />
              </div>
              <div className="stats-block">
                <div className="numbers-stats text-3xl sm:text-4xl lg:text-[52px] font-medium text-[var(--heading)] group-hover:text-[var(--cobalt)] transition-colors tracking-tight leading-none mb-3">
                  12+
                </div>
                <h6 className="heading-stats text-[15px] sm:text-[17px] font-medium text-[var(--heading)] leading-[130%] m-0">
                  Core engineering disciplines &amp; equipment fleet
                </h6>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="stats bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group">
              <div className="icon-stats-block bg-[var(--background)] group-hover:bg-[var(--accent)] transition-colors p-3 mb-6 sm:mb-8 ml-auto inline-block self-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/albion/icon_7.svg" alt="" className="w-6 h-6" />
              </div>
              <div className="stats-block">
                <div className="numbers-stats text-3xl sm:text-4xl lg:text-[52px] font-medium text-[var(--heading)] group-hover:text-[var(--cobalt)] transition-colors tracking-tight leading-none mb-3">
                  100%
                </div>
                <h6 className="heading-stats text-[15px] sm:text-[17px] font-medium text-[var(--heading)] leading-[130%] m-0">
                  Statutory compliance (ZRA, NAPSA, Workers&apos; Comp)
                </h6>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="stats bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm cursor-pointer group">
              <div className="icon-stats-block bg-[var(--background)] group-hover:bg-[var(--accent)] transition-colors p-3 mb-6 sm:mb-8 ml-auto inline-block self-end">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/albion/icon_4.svg" alt="" className="w-6 h-6" />
              </div>
              <div className="stats-block">
                <div className="numbers-stats text-3xl sm:text-4xl lg:text-[52px] font-medium text-[var(--heading)] group-hover:text-[var(--cobalt)] transition-colors tracking-tight leading-none mb-3">
                  15+
                </div>
                <h6 className="heading-stats text-[15px] sm:text-[17px] font-medium text-[var(--heading)] leading-[130%] m-0">
                  Years delivering landmark infrastructure in Zambia
                </h6>
              </div>
            </div>

          </div>

          {/* Right Side (Desktop) / Top Side (Mobile): Who We Are Block */}
          <div className="block-right flex flex-col items-start order-1 lg:order-2 w-full">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Who We Are
              </div>
            </div>

            <h2 className="heading text-2xl xs:text-3xl sm:text-4xl lg:text-[52px] leading-[1.12] sm:leading-[1.08] tracking-[-1px] sm:tracking-[-1.4px] font-medium text-[var(--heading)] mb-6 max-w-[620px] w-full">
              We create things that matter
            </h2>

            <p className="paragraph text-[15px] sm:text-[18px] leading-[170%] text-[var(--paragraphs)] max-w-[500px] mb-8 w-full">
              Silverline Engineering Ltd is a leading Zambian-owned multi-disciplinary engineering and construction company. We deliver complex civil infrastructure, precision steel fabrication, pre-engineered buildings, and industrial turnkey developments with absolute execution certainty.
            </p>

            <Link href="/contact" className="button w-full sm:w-auto bg-[var(--accent)] text-[var(--heading)] px-8 py-5 flex items-center justify-center no-underline hover:opacity-90 transition-opacity">
              <span className="text-button text-[14px] font-semibold uppercase tracking-[1.5px]">
                More About
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
