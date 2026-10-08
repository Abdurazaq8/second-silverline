"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Cog,
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Wrench,
  HardHat,
  Phone,
  Clock,
  FileCheck,
  Layers,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Capabilities() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = document.getElementById("cnc-capability-video") as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setIsVideoPlaying(true);
      } else {
        video.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    const video = document.getElementById("cnc-capability-video") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const capabilityCards = [
    {
      value: "5,000m²",
      title: "Fabrication Facility",
      badge: "Heavy Structural",
      description: "High-capacity 5,000m² Lusaka facility equipped with overhead cranes and automated tooling for large-scale steel manufacturing.",
      image: "/capabilities/fabrication-facility.jpg",
      icon: Factory,
      href: "/projects/alix-investment-factory",
      linkText: "View Factory Project",
    },
    {
      value: "2,000m²",
      title: "Prefab Production Line",
      badge: "Modular Units",
      description: "Dedicated production line engineered for precision manufacturing of pre-fabricated units and rapid site installation.",
      image: "/capabilities/metal-fabrication.jpg",
      icon: Layers,
      href: "/projects/undp-bulking-centers",
      linkText: "View Modular Project",
    },
    {
      value: "CNC & Plasma",
      title: "Automated Precision",
      badge: "Precision Cutting",
      description: "Equipped with high-accuracy CNC machinery, plasma cutting systems, rolling machines, and multiple welding stations.",
      image: "/capabilities/cnc-frame-2.jpg",
      icon: Cog,
      href: "/projects/meco-milling-plant",
      linkText: "View Industrial Plant",
    },
    {
      value: "100%",
      title: "Regulatory Compliance",
      badge: "Certified Standards",
      description: "Full statutory compliance including ZRA Tax Clearance, NAPSA, Workers' Compensation Fund, and ISO 14001, 45001, & 9001 standards.",
      image: "/capabilities/welding-workshop.jpg",
      icon: ShieldCheck,
      href: "/contact",
      linkText: "Request Compliance Pack",
    },
  ];

  const fabricationFeatures = [
    "5,000m² heavy steel fabrication facility",
    "2,000m² production line of pre-fabricated units",
    "Automated CNC machinery for precision fabrication",
    "High-definition plasma cutting systems",
    "Plate rolling and bending machines",
    "Multiple multi-process certified welding stations",
    "Overhead cranes for heavy structural handling",
  ];

  const teamStructure = [
    {
      title: "Experienced Engineering Team",
      description: "Registered structural and civil engineers guiding design integrity and technical compliance.",
      icon: Users,
    },
    {
      title: "Skilled Fabricators & Technicians",
      description: "Certified welders, machinists, and steel fitters delivering high-tolerance structural components.",
      icon: Wrench,
    },
    {
      title: "Dedicated Site Supervisors & PMs",
      description: "On-site leadership managing timelines, subcontractor alignment, and execution milestones.",
      icon: HardHat,
    },
    {
      title: "Safety-Focused Operational Teams",
      description: "Trained safety officers ensuring zero-harm site protocols and daily hazard mitigation.",
      icon: ShieldCheck,
    },
  ];

  const qcSystems = [
    "Detailed project planning and scheduling",
    "Material inspection and mill verification",
    "Fabrication and tolerance quality checks",
    "Structural installation supervision",
    "Safety compliance and site management",
  ];

  const certifications = [
    {
      name: "ISO 9001 : 2015",
      status: "Quality Management System (QMS)",
      badge: "Certified",
    },
    {
      name: "ISO 14001 : 2015",
      status: "Environmental Management System (EMS)",
      badge: "Certified",
    },
    {
      name: "ISO 45001 : 2018",
      status: "Occupational Health & Safety (OH&S)",
      badge: "Certified",
    },
    {
      name: "National Council for Construction (NCC)",
      status: "Grade 1 Heavy Civil & Building Works",
      badge: "Grade 1",
    },
    {
      name: "Workers’ Compensation Fund (WCFCB)",
      status: "Full Statutory Occupational Coverage",
      badge: "Compliant",
    },
    {
      name: "Engineering Institution of Zambia (EIZ)",
      status: "Chartered Structural & Civil Engineering Practice",
      badge: "Chartered",
    },
  ];

  return (
    <section id="capabilities" className="section w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Our Capabilities
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] max-w-[700px] m-0">
              Engineering capability built for industrial scale
            </h2>
          </div>

          <p className="text-[16px] text-[var(--paragraphs)] max-w-sm m-0 leading-relaxed">
            From precision fabrication in Lusaka to turnkey site erection, our integrated infrastructure guarantees execution certainty.
          </p>
        </div>

        {/* 4 Cards Grid - Albion Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {capabilityCards.map((card, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <Link
                href={card.href}
                className="bg-white border border-[var(--border)] group h-full flex flex-col capability-card-hover cursor-pointer no-underline block"
              >
                {/* Image Container with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-[var(--background)]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    loading="lazy"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--heading)] text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                    {card.badge}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-3xl font-medium text-[var(--heading)] block mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {card.value}
                    </span>
                    <h3 className="text-[18px] font-medium text-[var(--heading)] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-[var(--paragraphs)] leading-[160%] m-0">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    {/* Action Link Row */}
                    <div className="pt-4 flex items-center justify-between text-[12px] font-semibold uppercase tracking-[1.2px] text-[var(--heading)] group-hover:text-[var(--accent)] transition-colors">
                      <span className="flex items-center gap-1">
                        {card.linkText} <ArrowUpRight size={13} />
                      </span>
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 bg-[var(--background)] group-hover:bg-[var(--accent)] group-hover:text-[var(--heading)] transition-colors">
                        Details
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

        {/* Fabrication Facility Section */}
        <div className="mb-20 pt-12 border-t border-[var(--border)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Facility Features */}
            <Reveal width="100%">
              <div className="space-y-6">
                <div>
                  <div className="subtitle flex items-center mb-2">
                    <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
                    <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                      Manufacturing Infrastructure
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-medium text-[var(--heading)] tracking-[-1px] mb-3">
                    5,000m² Lusaka Fabrication Plant
                  </h3>
                  <p className="text-[16px] text-[var(--paragraphs)] leading-relaxed m-0">
                    Our high-capacity 5,000m² facility located in Lusaka is engineered to support large-scale structural steel manufacturing, automated plasma cutting, and complex pre-engineered building systems.
                  </p>
                </div>

                <div className="bg-[var(--background)] p-6 sm:p-8 border border-[var(--border)] space-y-3">
                  <h4 className="text-[14px] font-semibold text-[var(--heading)] uppercase tracking-wider mb-4">
                    Key Facility Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {fabricationFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[14px] text-[var(--heading)] font-normal">
                        <CheckCircle2 size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right: Active CNC Video Player & Workshop Showcase */}
            <Reveal delay={0.2} width="100%">
              <div className="space-y-4">
                
                {/* Main Video Box */}
                <div className="relative overflow-hidden aspect-video border border-[var(--border)] bg-black group shadow-sm">
                  <video
                    id="cnc-capability-video"
                    src="/capabilities/cnc-machine.mp4"
                    poster="/capabilities/cnc-frame-1.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute top-4 left-4 bg-[var(--accent)] text-[var(--heading)] text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                    CNC Precision Cutting
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
                      className="w-10 h-10 bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      {isVideoPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                      className="w-10 h-10 bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  </div>
                </div>

                {/* Sub-Images Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-video overflow-hidden border border-[var(--border)] group bg-[var(--background)]">
                    <Image
                      src="/capabilities/fabrication-facility.jpg"
                      alt="Lusaka Facility"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[var(--heading)]/85 text-white text-[11px] font-medium px-2 py-1 text-center">
                      Lusaka Facility Workshop
                    </div>
                  </div>

                  <div className="relative aspect-video overflow-hidden border border-[var(--border)] group bg-[var(--background)]">
                    <Image
                      src="/capabilities/welding-workshop.jpg"
                      alt="Welding Stations"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[var(--heading)]/85 text-white text-[11px] font-medium px-2 py-1 text-center">
                      Welding &amp; Assembly Bays
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>

          </div>
        </div>

        {/* Engineering & Workforce Section */}
        <div className="mb-20 pt-12 border-t border-[var(--border)]">
          <div className="text-center mb-12">
            <div className="subtitle flex items-center justify-center mb-2">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
              <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                Human Capital &amp; Technical Depth
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-medium text-[var(--heading)] tracking-[-1px] mb-3">
              Engineering &amp; Technical Workforce
            </h3>
            <p className="text-[16px] text-[var(--paragraphs)] max-w-2xl mx-auto leading-relaxed m-0">
              Our registered structural engineers and certified artisans bring decades of field-proven execution discipline to every build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStructure.map((team, idx) => (
              <div key={idx} className="p-6 bg-[var(--background)] border border-[var(--border)] flex flex-col items-start group hover:border-[var(--heading)] hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="p-3 bg-white mb-4 text-[var(--heading)] group-hover:text-[var(--accent)] transition-colors border border-[var(--border)] shadow-sm">
                  <team.icon size={28} />
                </div>
                <h4 className="font-medium text-[var(--heading)] text-[18px] mb-2">{team.title}</h4>
                <p className="text-[14px] text-[var(--paragraphs)] leading-[160%] m-0">{team.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Control & Compliance Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 pt-12 border-t border-[var(--border)]">
          
          {/* Quality Control */}
          <div className="bg-[var(--background)] p-8 sm:p-10 border border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="subtitle flex items-center mb-3">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                  Inspection Protocols
                </div>
              </div>
              <h3 className="text-2xl font-medium text-[var(--heading)] mb-4">Quality Assurance &amp; Safety</h3>
              <p className="text-[15px] text-[var(--paragraphs)] leading-relaxed mb-6">
                Structured inspection and quality verification procedures executed throughout fabrication and construction.
              </p>
              <div className="space-y-2.5 mb-6">
                {qcSystems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white border border-[var(--border)] text-[14px] text-[var(--heading)] font-normal hover:border-[var(--accent)] hover:translate-x-1.5 transition-all duration-200 cursor-default">
                    <span className="w-5 h-5 bg-[var(--accent)] text-[var(--heading)] text-[11px] font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-[var(--paragraphs-dark)] pt-3 border-t border-[var(--border)] italic m-0">
              Guaranteed compliance with engineering specifications and statutory safety standards.
            </p>
          </div>

          {/* Compliance & Certification */}
          <div className="bg-[var(--background)] p-8 sm:p-10 border border-[var(--border)] flex flex-col justify-between">
            <div>
              <div className="subtitle flex items-center mb-3">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
                <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                  Accredited Operations
                </div>
              </div>
              <h3 className="text-2xl font-medium text-[var(--heading)] mb-4">Statutory &amp; Tender Compliance</h3>
              <p className="text-[15px] text-[var(--paragraphs)] leading-relaxed mb-6">
                Operating in full accordance with statutory, tax, and workforce regulatory bodies in Zambia.
              </p>
              <div className="space-y-3 mb-6">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 bg-white border border-[var(--border)] hover:border-[var(--accent)] hover:translate-x-1.5 transition-all duration-200">
                    <div className="flex items-center gap-3">
                      <FileCheck size={18} className="text-[var(--heading)] shrink-0" />
                      <div>
                        <span className="text-[14px] font-medium text-[var(--heading)] block">{cert.name}</span>
                        <span className="text-[12px] text-[var(--paragraphs)]">{cert.status}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--heading)]">
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs text-[var(--paragraphs)] font-medium">Tender-ready compliance packages</span>
              <Link href="/contact" className="text-xs font-bold text-[var(--heading)] hover:text-[var(--accent)] transition-colors uppercase tracking-wider">
                Request Dossier →
              </Link>
            </div>
          </div>

        </div>

        {/* Call To Action Banner */}
        <div className="bg-[var(--heading)] text-white p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="subtitle flex items-center justify-center mb-2">
              <div className="line-subtitle w-[27px] h-[1px] bg-white" />
              <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-white">
                Steel &amp; Concrete Construction
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white m-0">
              Work With a Team Built for Scale
            </h3>
            <p className="text-white/80 text-[16px] leading-relaxed">
              Silverline Engineering Ltd provides the engineering expertise, fabrication capability, and execution discipline required to deliver complex industrial projects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="button w-full sm:w-auto bg-[var(--accent)] text-[var(--heading)] px-8 py-5 flex items-center justify-center font-semibold text-[14px] uppercase tracking-[1.5px] no-underline hover:opacity-90 transition-opacity"
              >
                <span>Request a Quote</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/albion/icon_button.svg" alt="" className="icon-button ml-3 w-1.5 h-2.5" />
              </Link>

              <a
                href="tel:+260966626579"
                className="button w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-5 flex items-center justify-center font-semibold text-[14px] uppercase tracking-[1.5px] no-underline hover:bg-white/20 transition-colors"
              >
                <Phone size={16} className="mr-2" />
                <span>Call: 0966 626579</span>
              </a>

              <a
                href="https://wa.me/260966626579"
                target="_blank"
                rel="noopener noreferrer"
                className="button w-full sm:w-auto bg-emerald-600 text-white px-8 py-5 flex items-center justify-center font-semibold text-[14px] uppercase tracking-[1.5px] no-underline hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon size={16} className="text-white mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="text-xs text-white/60 pt-3">
              <Clock size={13} className="inline mr-1 text-[var(--accent)]" />
              <span>MON – FRI: 8:00 AM – 5:00 PM | SAT: 8:00 AM – 1:00 PM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
