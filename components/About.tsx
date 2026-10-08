"use client";

import { Award, Users, Briefcase, Clock, ShieldCheck, HardHat, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Briefcase, label: "Projects Completed", value: "40+" },
  { icon: Users, label: "Qualified Artisans", value: "50+" },
  { icon: Award, label: "Industry Awards", value: "5+" },
];

const safetyPoints = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Zero Incident Target",
    description: "Strict occupational health and zero-harm workplace safety protocols enforced across all active job sites.",
  },
  {
    number: "02",
    icon: HardHat,
    title: "Certified Personnel",
    description: "Accredited structural engineers, coded welders, and OSHA-compliant full-time site safety supervisors.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Statutory & ISO Compliance",
    description: "Certified standards under ISO 9001, ISO 14001, and ISO 45001, with complete standing with ZRA, NAPSA, and Workers' Compensation Fund.",
  },
  {
    number: "04",
    icon: AlertTriangle,
    title: "Proactive Risk Mitigation",
    description: "Mandatory daily pre-shift briefings, proactive hazard identification checklists, and rigorous PPE enforcement.",
  },
];

export default function About() {
  return (
    <section id="about" className="section w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#08182D] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                About Our Company
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-white max-w-[700px] m-0">
              Engineering solutions delivered with integrity &amp; precision
            </h2>
          </div>

          <div className="text-[13px] font-semibold uppercase tracking-[1.5px] text-slate-300 border-l-2 border-[var(--accent)] pl-4 max-w-sm">
            Quality • Safety • Integrity • Innovation • Professionalism
          </div>
        </div>

        {/* Mission Statement Callout */}
        <div className="bg-[#0F2847] p-6 sm:p-12 border-l-4 border-[var(--accent)] border-y border-r border-white/10 mb-14 shadow-xl">
          <div className="subtitle flex items-center mb-3">
            <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
            <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
              Our Mission
            </div>
          </div>
          <p className="text-[16px] sm:text-[19px] leading-[170%] text-slate-100 font-normal m-0 max-w-4xl">
            To deliver world-class engineering and construction solutions with integrity, innovation, and professionalism — ensuring client satisfaction through exceptional workmanship, strict statutory compliance, and on-time project execution.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-20">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className="bg-[#0F2847] border border-white/10 hover:border-[var(--accent)] hover:-translate-y-1 transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between group cursor-pointer h-full shadow-xl">
                <div className="icon-stats-block bg-[#08182D] p-2.5 sm:p-3.5 mb-4 sm:mb-6 ml-auto inline-block self-end transition-colors group-hover:bg-[var(--accent)] border border-white/10 group-hover:border-[var(--accent)]">
                  <stat.icon size={22} className="text-[var(--accent)] group-hover:text-[#0C2340] transition-colors" />
                </div>
                <div>
                  <div className="numbers-stats text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--accent)] tracking-tight leading-none mb-2">
                    {stat.value}
                  </div>
                  <h6 className="heading-stats text-[12px] sm:text-[14px] font-medium text-slate-300 uppercase tracking-wider leading-[130%] m-0">
                    {stat.label}
                  </h6>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Health, Safety & Zero-Harm Standards (Redesigned to 100% Albion Design System) */}
        <div className="pt-16 border-t border-white/10">
          
          {/* Safety Header Block */}
          <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="block-heading-text">
              <div className="subtitle flex items-center mb-3">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
                <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                  Health, Safety &amp; Environment
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.1] tracking-[-1.3px] font-medium text-white max-w-[650px] m-0">
                Committed to zero-harm site standards
              </h3>
            </div>

            <p className="text-[16px] text-slate-300 max-w-sm m-0 leading-relaxed">
              We enforce uncompromising occupational health and safety protocols across all our active mining, civil, and industrial developments.
            </p>
          </div>

          {/* 4 Architectural Safety Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {safetyPoints.map((point, index) => (
              <Reveal key={index} delay={index * 0.1} width="100%">
                <div className="bg-[#0F2847] border border-white/10 p-6 sm:p-8 flex flex-col justify-between h-full group hover:border-[var(--accent)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  
                  <div>
                    {/* Top Row: Number & Icon */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <span className="text-2xl font-bold text-[var(--accent)] tracking-tight">
                        {point.number}
                      </span>
                      <div className="w-11 h-11 bg-[#08182D] border border-white/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-[#0C2340] flex items-center justify-center transition-all duration-300">
                        <point.icon size={20} />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-[20px] font-medium text-white leading-[125%] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {point.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[14px] leading-[160%] text-slate-300 m-0">
                      {point.description}
                    </p>
                  </div>

                  {/* Albion Animated Line */}
                  <div className="line-block relative w-full h-[2px] mt-8 flex items-center">
                    <div className="line-full line-full-anim absolute inset-0 bg-[var(--accent)]" />
                    <div className="line-1px w-full h-[1px] bg-white/10" />
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Statutory Compliance Verification Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="p-5 bg-[#0F2847] border border-white/10 flex items-center gap-4 hover:border-[var(--accent)] transition-colors shadow-sm">
              <div className="w-9 h-9 bg-[var(--accent)] text-[#0C2340] flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-white block">
                  Mining Industry Approved
                </span>
                <span className="text-[12px] text-slate-300">
                  Full mine site safety protocol compliance
                </span>
              </div>
            </div>

            <div className="p-5 bg-[#0F2847] border border-white/10 flex items-center gap-4 hover:border-[var(--accent)] transition-colors shadow-sm">
              <div className="w-9 h-9 bg-[var(--accent)] text-[#0C2340] flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-white block">
                  WCFCB Registered
                </span>
                <span className="text-[12px] text-slate-300">
                  100% occupational hazard standing
                </span>
              </div>
            </div>

            <div className="p-5 bg-[#0F2847] border border-white/10 flex items-center gap-4 hover:border-[var(--accent)] transition-colors shadow-sm">
              <div className="w-9 h-9 bg-[var(--accent)] text-[#0C2340] flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[1.2px] text-white block">
                  Regular Safety Audits
                </span>
                <span className="text-[12px] text-slate-300">
                  Daily pre-shift risk assessments &amp; PPE
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
