"use client";

import Link from "next/link";

const capabilityFeatures = [
  {
    tag: "5,000m² Plant • Lusaka",
    title: "Heavy Steel Fabrication & Assembly Bays",
    summary: "High-capacity facility equipped with overhead cranes and automated tooling for large-scale structural steel manufacturing.",
    link: "/#capabilities",
  },
  {
    tag: "Automated Systems • High Precision",
    title: "Precision CNC & High-Definition Plasma Cutting",
    summary: "Equipped with automated CNC machinery, plasma cutting systems, plate rolling machines, and multiple welding bays.",
    link: "/#capabilities",
  },
  {
    tag: "Statutory Certified • Tender Ready",
    title: "Full Regulatory & Statutory Compliance",
    summary: "Verified compliance with ZRA Tax Clearance, NAPSA, Workers' Compensation Fund, and ISO Quality Management.",
    link: "/#capabilities",
  },
];

export default function AlbionCapabilitiesNews() {
  return (
    <div id="capabilities" className="section w-full py-[110px] px-6 sm:px-12 bg-white mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Section Heading */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                Capabilities &amp; Infrastructure
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[700px] m-0">
              Advanced fabrication built for industrial scale
            </h2>
          </div>
        </div>

        {/* 3-Column Albion Blog/Capabilities Grid */}
        <div className="collection-list-wrapper-blog w-full">
          <div className="collection-list-blog grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {capabilityFeatures.map((cap, i) => (
              <div key={i} className="collection-item-blog flex flex-col group">
                
                {/* Date / Tag */}
                <div className="text-blog-date text-[13px] font-medium uppercase tracking-[1.5px] text-[var(--info-text)] mb-3">
                  {cap.tag}
                </div>

                {/* Title + Dual Sliding Arrow Link */}
                <Link href={cap.link} className="link-block-blog block no-underline">
                  <div className="block-blog flex justify-between items-center pb-3">
                    <h5 className="heading-blog text-[22px] sm:text-[24px] font-medium text-[var(--heading)] tracking-[-0.8px] leading-[120%] m-0">
                      {cap.title}
                    </h5>
                    <div className="icon-arrow relative w-[10px] h-[10px] overflow-hidden flex items-center justify-center ml-3 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/albion/arrow_4.svg" alt="" className="icon-arrow-a w-[10px] h-[10px]" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/albion/arrow_3.svg" alt="" className="icon-arrow-b w-[10px] h-[10px]" />
                    </div>
                  </div>

                  {/* Dual Dark Underline */}
                  <div className="line-block relative w-full h-[2px] flex items-center">
                    <div className="line-full dark line-full-anim absolute inset-0 bg-[var(--heading)]" />
                    <div className="line-1px dark w-full h-[1px] bg-[var(--border)]" />
                  </div>
                </Link>

                {/* Summary Paragraph */}
                <p className="paragraph-summary text-[15px] sm:text-[16px] leading-[160%] text-[var(--paragraphs)] mt-3 mb-0">
                  {cap.summary}
                </p>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
