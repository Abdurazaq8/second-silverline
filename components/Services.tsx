"use client";

import Link from "next/link";
import { Home, Building2, Hammer, Warehouse, BrickWall, Truck, Zap, Factory, Fuel, Sun, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CloudImage from "./CloudImage";
import { Reveal } from "./Reveal";
import { useRef, useEffect, useState } from "react";

const BLUR_DATA_URL = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

function LazyServiceVideo({ videoSrc, poster }: { videoSrc: string; poster: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.src = videoSrc;
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad, videoSrc]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        muted
        loop
        autoPlay
        playsInline
        poster={poster}
        preload="metadata"
      />
    </div>
  );
}

const services = [
  {
    icon: Truck,
    title: "Plant & Equipment Hire",
    description: "Reliable heavy machinery rental including ADT dump trucks, dozers, excavators, and water bowsers for large-scale operations.",
    image: "/services/plant-equipment-hire.jpg",
    linkText: "Request Machinery",
    href: "/contact",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "Specialized transport solutions including abnormal load haulage and cross-border logistics for heavy industrial goods.",
    image: "/services/logistics-transportation.jpg",
    linkText: "Enquire Logistics",
    href: "/contact",
  },
  {
    icon: Home,
    title: "Prefab & Pre-Engineered Buildings",
    description: "Supply and erection of prefab housing and pre-engineered buildings, offering rapid and durable construction solutions.",
    video: "/construction-video-1.mp4",
    image: "/services/prefab-poster.jpg",
    linkText: "View UNDP Project",
    href: "/projects/undp-bulking-centers",
  },
  {
    icon: Hammer,
    title: "Mining Support Services",
    description: "Comprehensive mining infrastructure support, including heavy equipment supply and tailored civil works.",
    image: "/services/mining-support.jpg",
    linkText: "View Industrial Works",
    href: "/projects/meco-milling-plant",
  },
  {
    icon: Building2,
    title: "Building Construction",
    description: "We construct residential, commercial, and industrial buildings using durable materials and modern engineering standards.",
    image: "/services/building-construction.jpg",
    linkText: "View East Park Mall",
    href: "/projects/east-park-mall-expansion",
  },
  {
    icon: Warehouse,
    title: "Portal-Framed Structures Fabrication & Erection",
    description: "Design, fabrication, and erection of steel structures suitable for warehouses, factories, and industrial facilities.",
    image: "/services/portal-framed-structures.jpg",
    linkText: "View Factory Project",
    href: "/projects/alix-investment-factory",
  },
  {
    icon: BrickWall,
    title: "Concrete Works",
    description: "Execution of reinforced concrete foundations, slabs, beams, columns, and structural elements.",
    image: "/services/concrete-works.jpg",
    linkText: "View Milling Plant",
    href: "/projects/meco-milling-plant",
  },
  {
    icon: Truck,
    title: "All-Weather Roads Construction",
    description: "Construction of durable gravel and paved access roads suitable for farms, industries, and rural infrastructure.",
    image: "/services/all-weather-roads.jpg",
    linkText: "View Road Project",
    href: "/projects/victoria-falls-road",
  },
  {
    icon: Zap,
    title: "Off-Grid Power Construction",
    description: "Development of off-grid power systems and related infrastructure for remote sites and industrial operations.",
    image: "/services/off-grid-power.jpg",
    linkText: "View Solar Plants",
    href: "/projects/engic-solar-plants",
  },
  {
    icon: Factory,
    title: "Substations Construction",
    description: "Civil and mechanical works for electrical substations, including foundations, plinths, cable trenches, and support structures.",
    image: "/services/substations-construction.jpg",
    linkText: "View Substation Works",
    href: "/projects/meco-milling-plant",
  },
  {
    icon: Fuel,
    title: "Filling Stations Mechanical Works",
    description: "Installation and maintenance of fuel station mechanical systems including tanks, piping, and dispensing lines.",
    image: "/services/filling-stations.jpg",
    linkText: "View Oryx Station",
    href: "/projects/oryx-munali-filling-station",
  },
  {
    icon: Sun,
    title: "Solar Works",
    description: "Installation of solar power systems, including solar panels, inverters, battery storage, and support structures.",
    image: "/services/solar-works.jpg",
    linkText: "View Solar Plants",
    href: "/projects/engic-solar-plants",
  },
];

function isLocalImage(src: string) {
  return src.startsWith("/");
}

export default function Services() {
  return (
    <section id="services" className="section w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Our Services
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[700px] m-0">
              Comprehensive engineering and construction disciplines
            </h2>
          </div>

          <p className="text-[16px] text-[var(--paragraphs)] max-w-sm m-0 leading-relaxed">
            Tailored to meet the demanding requirements of commercial developers, mines, and infrastructure projects across Zambia.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.05} width="100%">
              <Link
                href={service.href}
                className="bg-white border border-[var(--border)] group h-full flex flex-col service-card-hover cursor-pointer no-underline block"
              >
                {/* Media Container (Image or Video) */}
                {(service.image || service.video) && (
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--background)]">
                    {service.video ? (
                      <LazyServiceVideo videoSrc={service.video} poster={service.image} />
                    ) : isLocalImage(service.image) ? (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    ) : (
                      <CloudImage
                        src={service.image}
                        alt={service.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Content Box */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 text-[var(--heading)] group-hover:text-[var(--accent)] transition-colors">
                      <service.icon size={36} />
                    </div>
                    <h3 className="text-[20px] font-medium text-[var(--heading)] leading-[125%] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[14px] text-[var(--paragraphs)] leading-[160%] m-0">
                      {service.description}
                    </p>
                  </div>

                  <div>
                    {/* Action Link Row */}
                    <div className="pt-4 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[1.2px] text-[var(--heading)] group-hover:text-[var(--accent)] transition-colors">
                      <span className="flex items-center gap-1">
                        {service.linkText} <ArrowUpRight size={14} />
                      </span>
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 bg-[var(--background)] group-hover:bg-[var(--accent)] group-hover:text-[var(--heading)] transition-colors">
                        Explore
                      </span>
                    </div>

                    <div className="line-block relative w-full h-[2px] mt-4 flex items-center">
                      <div className="line-full line-full-anim absolute inset-0 bg-[var(--accent)]" />
                      <div className="line-1px w-full h-[1px] bg-[var(--border)]" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
