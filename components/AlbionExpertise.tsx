"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const all12Services = [
  {
    icon: "/albion/icon_8.svg",
    title: "Building Construction",
    description: "Residential, commercial, and industrial facilities engineered for durability and structural integrity.",
    image: "/services/building-construction.jpg",
  },
  {
    icon: "/albion/icon_7.svg",
    title: "Prefab & Pre-Engineered Buildings",
    description: "Supply and erection of modular housing and pre-engineered buildings for rapid site commissioning.",
    image: "/services/prefab-poster.jpg",
  },
  {
    icon: "/albion/icon_5.svg",
    title: "Plant & Equipment Hire",
    description: "Heavy machinery rental including ADT dump trucks, excavators, dozers, and water bowsers.",
    image: "/services/plant-equipment-hire.jpg",
  },
  {
    icon: "/albion/icon_6.svg",
    title: "Substations Construction",
    description: "Civil and mechanical works for electrical substations including foundations, plinths, and trenches.",
    image: "/services/substations-construction.jpg",
  },
  {
    icon: "/albion/icon_1.svg",
    title: "Portal-Framed Structures",
    description: "Design, fabrication, and erection of steel structures suitable for warehouses and industrial facilities.",
    image: "/services/portal-framed-structures.jpg",
  },
  {
    icon: "/albion/icon_2.svg",
    title: "Concrete Works",
    description: "Execution of reinforced concrete foundations, suspended slabs, structural beams, and columns.",
    image: "/services/concrete-works.jpg",
  },
  {
    icon: "/albion/icon_4.svg",
    title: "All-Weather Roads Construction",
    description: "Construction of durable gravel and paved access roads suitable for farms, industries, and mines.",
    image: "/services/all-weather-roads.jpg",
  },
  {
    icon: "/albion/icon_7.svg",
    title: "Mining Support Services",
    description: "Comprehensive mining infrastructure support including specialized equipment and tailored civil works.",
    image: "/services/mining-support.jpg",
  },
  {
    icon: "/albion/icon_8.svg",
    title: "Logistics & Transportation",
    description: "Specialized abnormal load haulage and cross-border transport logistics for heavy industrial goods.",
    image: "/services/logistics-transportation.jpg",
  },
  {
    icon: "/albion/icon_5.svg",
    title: "Solar Works",
    description: "Commercial and industrial solar installations including PV arrays, inverters, and battery storage.",
    image: "/services/solar-works.jpg",
  },
  {
    icon: "/albion/icon_6.svg",
    title: "Off-Grid Power Construction",
    description: "Development of autonomous off-grid power systems and transmission infrastructure for remote sites.",
    image: "/services/off-grid-power.jpg",
  },
  {
    icon: "/albion/icon_4.svg",
    title: "Filling Stations Mechanical Works",
    description: "Installation and maintenance of fuel dispensing lines, underground tanks, and pipework.",
    image: "/services/filling-stations.jpg",
  },
];

export default function AlbionExpertise() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? all12Services : all12Services.slice(0, 4);

  return (
    <div id="services" className="section w-full py-[110px] px-6 sm:px-12 bg-white mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                Our expertise
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[700px] m-0">
              We construct spaces where amazing things happen
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)] hover:text-[var(--accent)] transition-colors cursor-pointer border-b border-[var(--heading)] pb-1"
          >
            <span>{showAll ? "Show Primary" : "View All 12 Services"}</span>
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* 4-Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {displayedServices.map((svc, i) => (
            <div key={i} className="expertise flex flex-col items-start group">
              <div className="icon-expertise-block bg-[var(--background)] p-4 mb-6 inline-block group-hover:bg-[var(--accent)] transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.icon} alt="" className="w-7 h-7" />
              </div>

              <h5 className="heading-expertise text-[22px] sm:text-[24px] font-medium text-[var(--heading)] tracking-[-0.8px] leading-[120%] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {svc.title}
              </h5>

              <p className="paragraph-expertise text-[15px] sm:text-[16px] leading-[160%] text-[var(--paragraphs)] m-0">
                {svc.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
