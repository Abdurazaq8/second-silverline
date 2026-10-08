"use client";

import Link from "next/link";
import { Quote, Star, Building2 } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Hussein Mohamed Ahmed",
    company: "Eco Petroleum",
    initials: "HA",
    project: "Meco Milling Plant & Chalala Fuel Station",
    projectHref: "/projects/meco-milling-plant",
    tag: "Eco Petroleum Review",
    content: "We entrusted the team with two very different projects: the Meco Milling Plant in Ndola and our Chalala fuel station. Both projects were completed to a high standard, with the milling plant now fully operational. Throughout both projects, the team was professional, responsive, and easy to work with. We were very pleased with the results and would gladly work with them again.",
  },
  {
    name: "Kayamba Kayamba",
    company: "Oryx Energy",
    initials: "KK",
    project: "Munali & Chalala Fuel Stations",
    projectHref: "/projects/oryx-munali-filling-station",
    tag: "Oryx Energy Review",
    content: "The team served as our main contractors for the Munali filling station and later took on the Chalala site following its acquisition. They handled the renovation of the canopy and the shop rebranding with professionalism and attention to detail. Our experience working with them on both projects was smooth and positive, and we appreciate their commitment to quality and timely delivery.",
  },
  {
    name: "Gillian Casilli",
    company: "Napoli Property",
    initials: "GC",
    project: "East Park Mall Expansion",
    projectHref: "/projects/east-park-mall-expansion",
    tag: "Napoli Property Review",
    content: "The team delivered the East Park Mall expansion works with professionalism, strong communication, and careful site management. Working alongside a busy, fully operational shopping mall presented its challenges, but they managed the works responsibly while keeping us well informed throughout the project. We are very pleased with the quality of the completed works and the overall experience.",
  },
  {
    name: "Patrick Muchimba",
    company: "UNDP",
    initials: "PM",
    project: "SCLARA Bulking Centers",
    projectHref: "/projects/undp-bulking-centers",
    tag: "UNDP Review",
    content: "The team successfully constructed four portal-framed bulking centers as part of the SCLARA drought mitigation project across Eastern and Western Provinces. They worked professionally and adapted well to the challenges of delivering projects in remote locations. The completed structures will provide a lasting benefit to the communities they were built to serve.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section background w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Client Testimonials
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[700px] m-0">
              Trusted by Zambia&apos;s leading commercial and industrial enterprises
            </h2>
          </div>

          <p className="text-[16px] text-[var(--paragraphs)] max-w-sm m-0 leading-relaxed">
            Real feedback from property developers, international organizations, and energy leaders who rely on our engineering capability.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="bg-white border border-[var(--border)] p-6 sm:p-10 flex flex-col justify-between h-full group testimonial-card-hover cursor-pointer">
                <div>
                  {/* Top Row: Stars and Tag */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-[var(--accent)] fill-[var(--accent)]" />
                      ))}
                    </div>
                    <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Content Quote */}
                  <p className="text-[16px] sm:text-[17px] leading-[170%] text-[var(--paragraphs)] italic mb-8 font-light">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Bottom Row: Client info */}
                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--heading)] font-bold flex items-center justify-center shrink-0 text-base">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="text-[17px] font-semibold text-[var(--heading)] m-0 leading-tight">
                      {item.name}
                    </h4>
                    <div className="text-[13px] text-[var(--paragraphs-dark)] flex items-center gap-1.5 mt-1 flex-wrap">
                      <Building2 size={13} className="text-[var(--accent)] shrink-0" />
                      <span>{item.company}</span>
                      <span>•</span>
                      <Link
                        href={item.projectHref}
                        className="text-[var(--heading)] font-semibold hover:text-[var(--accent)] transition-colors underline decoration-[var(--accent)] decoration-1 underline-offset-2 no-underline"
                        title="View project case study"
                      >
                        {item.project} ↗
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
