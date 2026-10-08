"use client";

import { motion } from "framer-motion";
import { MessageSquare, Ruler, HardHat, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Scope",
    description: "We meet to analyze site feasibility, project budget, and structural requirements to ensure complete alignment from day one.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Engineering & Design",
    description: "Our registered structural engineers generate comprehensive CAD blueprints, Bill of Quantities, and statutory permit documentation.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Fabrication & Construction",
    description: "Precision workshop fabrication at our Lusaka plant and skilled on-site erection executed with daily safety audits and milestone reporting.",
  },
  {
    number: "04",
    icon: Key,
    title: "Quality Handover",
    description: "Final structural walkthrough, rigorous compliance verification, and formal facility handover with full warranty documentation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section background w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#0C2340] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                How We Work
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-white max-w-[700px] m-0">
              A transparent, step-by-step engineering process
            </h2>
          </div>
          <p className="text-[16px] text-slate-300 max-w-sm m-0 leading-relaxed">
            Ensuring every civil, structural, and electrical phase is delivered on time, within budget, and to the highest standards.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0F2847] border border-white/10 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group cursor-pointer relative shadow-xl"
            >
              <div>
                {/* Step Top: Big Step Number and Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="text-4xl font-black text-[var(--accent)] tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 bg-[#08182D] border border-white/10 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] text-[var(--accent)] group-hover:text-[#0C2340] flex items-center justify-center transition-all duration-300">
                    <step.icon size={20} />
                  </div>
                </div>

                <h3 className="text-[20px] font-medium text-white mb-3 leading-[125%] group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[14px] text-slate-300 leading-[160%] m-0">
                  {step.description}
                </p>
              </div>

              {/* Albion Signature Dual Line */}
              <div className="line-block relative w-full h-[2px] mt-6 flex items-center">
                <div className="line-full line-full-anim absolute inset-0 bg-[var(--accent)]" />
                <div className="line-1px w-full h-[1px] bg-white/10" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
