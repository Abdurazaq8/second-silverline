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

const phaseCodes = [
  "PHASE // 01-SCOPE",
  "PHASE // 02-CAD-DWG",
  "PHASE // 03-ERECTION",
  "PHASE // 04-HANDOVER",
];

export default function Process() {
  return (
    <section id="process" className="section background blueprint-grid w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[var(--background)] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <span className="cad-tag mb-2">SOP // STD-EXEC-PROTOCOL</span>
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                How We Work
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[700px] m-0">
              A transparent, step-by-step engineering process
            </h2>
          </div>
          <p className="text-[16px] text-[var(--paragraphs)] max-w-sm m-0 leading-relaxed">
            Ensuring every civil, structural, and electrical phase is delivered on time, within budget, and to the highest standards.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between group process-step-hover cursor-pointer relative shadow-sm"
            >
              <span className="cad-crosshair-tl" aria-hidden="true">+</span>
              <span className="cad-crosshair-br" aria-hidden="true">+</span>
              <div>
                {/* Step Top: Big Step Number and Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)]">
                  <div>
                    <span className="text-3xl font-bold text-[var(--accent)] tracking-tight block">
                      {step.number}
                    </span>
                    <span className="cad-tag text-[9px] text-[var(--paragraphs-dark)] block mt-0.5">
                      {phaseCodes[index]}
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-[var(--background)] group-hover:bg-[var(--accent)] text-[var(--heading)] flex items-center justify-center transition-colors">
                    <step.icon size={20} />
                  </div>
                </div>

                <h3 className="text-[20px] font-medium text-[var(--heading)] mb-3 leading-[125%] group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[var(--paragraphs)] leading-[160%] m-0">
                  {step.description}
                </p>
              </div>

              {/* Albion Signature Dual Line */}
              <div className="line-block relative w-full h-[2px] mt-6 flex items-center">
                <div className="line-full line-full-anim absolute inset-0 bg-[var(--accent)]" />
                <div className="line-1px w-full h-[1px] bg-[var(--border)]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
