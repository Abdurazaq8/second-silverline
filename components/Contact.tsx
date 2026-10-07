"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState("General");

  const inquiryTypes = [
    "Structural Steel",
    "Prefab Buildings",
    "Civil Infrastructure",
    "Plant & Equipment",
    "Commercial Build",
    "General Inquiry",
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: WhatsAppIcon,
      href: "https://wa.me/260966626579",
      hoverStyle: "hover:bg-emerald-600 hover:text-white hover:border-emerald-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/1KntzJukRd/?mibextid=wwXIfr",
      hoverStyle: "hover:bg-[var(--heading)] hover:text-white hover:border-[var(--heading)]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/silverline.eng_limited?stkn=aGtib2tuc2hvNW5w",
      hoverStyle: "hover:bg-[var(--heading)] hover:text-white hover:border-[var(--heading)]",
    },
  ];

  return (
    <section id="contact" className="section w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-white mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Architectural Media & Contact Details */}
          <div className="space-y-10">
            {/* Header Block */}
            <Reveal width="100%">
              <div>
                <span className="cad-tag mb-2 block">DWG // COMM-INQ-2026</span>
                <div className="subtitle flex items-center mb-3">
                  <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                  <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                    Get in Touch
                  </div>
                </div>
                <h2 className="heading text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] tracking-[-1.4px] font-medium text-[var(--heading)] mb-6 max-w-xl">
                  Let&apos;s build your vision with certainty
                </h2>
                <p className="text-[17px] sm:text-[18px] leading-[170%] text-[var(--paragraphs)] max-w-lg m-0">
                  From structural steel design and feasibility to turnkey civil works, our registered engineers are available to review your specifications and tender requirements.
                </p>
              </div>
            </Reveal>

            {/* Architectural Visual Preview */}
            <Reveal delay={0.15} width="100%">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[16/11] border border-[var(--border)] overflow-hidden group bg-[var(--background)] cursor-pointer">
                  <Image
                    src="/services/building-construction.jpg"
                    alt="Commercial Engineering Facility"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
                <div className="relative aspect-[16/11] border border-[var(--border)] overflow-hidden group bg-[var(--background)] cursor-pointer">
                  <Image
                    src="/capabilities/fabrication-facility.jpg"
                    alt="Lusaka Fabrication Workshop"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                </div>
              </div>
            </Reveal>

            {/* Architectural Contact Info Cards */}
            <Reveal delay={0.25} width="100%">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--border)]">
                {/* Location */}
                <div className="p-6 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--heading)] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-[var(--heading)]">
                    <MapPin size={18} className="text-[var(--accent)] shrink-0" />
                    <h3 className="text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)] m-0">
                      Headquarters
                    </h3>
                  </div>
                  <p className="text-[14px] text-[var(--paragraphs)] leading-relaxed m-0 pl-6">
                    Plot 10, Buluwe Street, Woodlands, Lusaka, Zambia
                  </p>
                </div>

                {/* Email */}
                <div className="p-6 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--heading)] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-[var(--heading)]">
                    <Mail size={18} className="text-[var(--accent)] shrink-0" />
                    <h3 className="text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)] m-0">
                      Email Inquiries
                    </h3>
                  </div>
                  <a
                    href="mailto:info@silverlineng.com"
                    className="text-[14px] text-[var(--paragraphs)] hover:text-[var(--heading)] transition-colors block pl-6 font-medium no-underline"
                  >
                    info@silverlineng.com
                  </a>
                </div>

                {/* Direct Calling */}
                <div className="p-6 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--heading)] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-[var(--heading)]">
                    <Phone size={18} className="text-[var(--accent)] shrink-0" />
                    <h3 className="text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)] m-0">
                      Direct Phone
                    </h3>
                  </div>
                  <div className="pl-6 space-y-1">
                    <a
                      href="tel:+260966626579"
                      className="text-[14px] text-[var(--paragraphs)] hover:text-[var(--heading)] font-medium block no-underline"
                    >
                      +260 966 626579
                    </a>
                    <a
                      href="tel:+260771814040"
                      className="text-[14px] text-[var(--paragraphs)] hover:text-[var(--heading)] font-medium block no-underline"
                    >
                      +260 771 814040
                    </a>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="p-6 bg-[var(--background)] border border-[var(--border)] hover:border-[var(--heading)] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)] mb-3">
                    Follow Silverline
                  </h3>
                  <div className="flex items-center gap-2.5">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`w-10 h-10 bg-white border border-[var(--border)] text-[var(--heading)] flex items-center justify-center transition-all duration-200 ${social.hoverStyle}`}
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Architectural Quotation Form */}
          <div className="bg-[var(--background)] border border-[var(--border)] p-5 sm:p-8 lg:p-12 shadow-sm relative">
            <span className="cad-crosshair-tl" aria-hidden="true">+</span>
            <span className="cad-crosshair-tr" aria-hidden="true">+</span>
            <span className="cad-crosshair-bl" aria-hidden="true">+</span>
            <span className="cad-crosshair-br" aria-hidden="true">+</span>
            <Reveal width="100%">
              <div className="mb-8">
                <span className="cad-tag mb-2 block">FORM // SPEC-REQ-2026</span>
                <div className="subtitle flex items-center mb-2">
                  <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                  <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                    Project Consultation
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[var(--heading)] tracking-[-0.8px] mb-3">
                  Request a Tender or Quotation
                </h3>
                <p className="text-[15px] text-[var(--paragraphs)] leading-relaxed m-0">
                  Fill in your project requirements below. Our engineering estimating team will respond within 24 hours.
                </p>
              </div>
            </Reveal>

            {/* Direct WhatsApp Quick Response Bar */}
            <Reveal delay={0.1} width="100%">
              <div className="mb-8 p-4 sm:p-5 bg-white border border-[var(--border)]">
                <div className="flex items-center gap-2 mb-3">
                  <WhatsAppIcon size={16} className="text-emerald-600 shrink-0" />
                  <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                    Instant WhatsApp Dispatch
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/260966626579"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[12px] uppercase tracking-[1.2px] transition-all hover:-translate-y-0.5 no-underline shadow-sm"
                  >
                    <WhatsAppIcon size={15} />
                    <span>+260 966 626579</span>
                  </a>
                  <a
                    href="https://wa.me/260771814040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[12px] uppercase tracking-[1.2px] transition-all hover:-translate-y-0.5 no-underline shadow-sm"
                  >
                    <WhatsAppIcon size={15} />
                    <span>+260 771 814040</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Inquiry Type Chips */}
              <Reveal delay={0.2} width="100%">
                <div>
                  <label className="block text-[13px] font-semibold uppercase tracking-[1.2px] text-[var(--heading)] mb-2.5">
                    Engineering Discipline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[1px] rounded-none transition-all cursor-pointer ${
                          inquiryType === type
                            ? "bg-[var(--heading)] text-white border border-[var(--heading)]"
                            : "bg-white text-[var(--paragraphs)] border border-[var(--border)] hover:border-[var(--heading)] hover:text-[var(--heading)]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Names */}
              <Reveal delay={0.25} width="100%">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mwansa"
                      className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Phiri"
                      className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Email & Phone */}
              <Reveal delay={0.3} width="100%">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+260 9..."
                      className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Message */}
              <Reveal delay={0.35} width="100%">
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                    Project Scope / Specifications *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your site location, structural requirements, timeline, or BOQ details..."
                    className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none resize-none"
                  ></textarea>
                </div>
              </Reveal>

              {/* Submit Button */}
              <Reveal delay={0.4} width="100%">
                <button
                  type="submit"
                  className="w-full bg-[var(--accent)] hover:brightness-105 text-[var(--heading)] px-8 py-5 text-[14px] font-semibold uppercase tracking-[1.5px] flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg border-0"
                >
                  <span>Submit Inquiry</span>
                  <ArrowUpRight size={16} />
                </button>
              </Reveal>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
