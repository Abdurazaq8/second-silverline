"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Mail, Phone, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState("General");
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "00c82320-be18-4a6c-b94a-87232b5f30f3";

      const fullName = `${formData.get("first_name") || ""} ${formData.get("last_name") || ""}`.trim();
      formData.append("name", fullName || "Website Visitor");
      formData.append("access_key", accessKey);
      formData.append(
        "subject",
        `New Tender / Project Inquiry: [${inquiryType}] - Silverline Engineering`
      );
      formData.append("from_name", "Silverline Engineering Website");
      formData.append("discipline", inquiryType);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
        setErrorMessage(
          data.message || "Failed to send inquiry. Please try again or message our team directly on WhatsApp."
        );
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setFormStatus("error");
      setErrorMessage(
        "Network connection issue or adblocker detected. Please try again or reach out directly on WhatsApp."
      );
    }
  };

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
                <div className="subtitle flex items-center mb-3">
                  <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
                  <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
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
                <Link
                  href="/projects"
                  className="relative aspect-[16/11] border border-[var(--border)] overflow-hidden group bg-[var(--background)] cursor-pointer block"
                  title="View Silverline projects"
                >
                  <Image
                    src="/services/building-construction.jpg"
                    alt="Commercial Engineering Facility"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 text-white text-[10px] uppercase font-bold tracking-wider">
                    Our Works ↗
                  </div>
                </Link>
                <Link
                  href="/#capabilities"
                  className="relative aspect-[16/11] border border-[var(--border)] overflow-hidden group bg-[var(--background)] cursor-pointer block"
                  title="View Fabrication Plant"
                >
                  <Image
                    src="/capabilities/fabrication-facility.jpg"
                    alt="Lusaka Fabrication Workshop"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 text-white text-[10px] uppercase font-bold tracking-wider">
                    Fabrication Plant ↗
                  </div>
                </Link>
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
          <div className="bg-[var(--background)] border border-[var(--border)] p-5 sm:p-8 lg:p-12 shadow-sm">
            <Reveal width="100%">
              <div className="mb-8">
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

            {/* Form or Success State */}
            {formStatus === "success" ? (
              <Reveal width="100%">
                <div className="p-8 sm:p-10 bg-emerald-50/80 border border-emerald-300 text-left space-y-5">
                  <div className="w-12 h-12 bg-emerald-600 text-white flex items-center justify-center rounded-none shadow-sm">
                    <CheckCircle2 size={26} />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-medium text-[var(--heading)] tracking-tight mb-2">
                      Inquiry Received Successfully!
                    </h4>
                    <p className="text-[15px] sm:text-[16px] text-[var(--paragraphs)] leading-[170%] m-0">
                      Thank you for contacting Silverline Engineering. Your technical scope and project specifications have been dispatched to our estimating team. We will review your requirements and respond via email or phone within 24 hours.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-3.5 bg-[var(--heading)] hover:bg-black text-white text-[12px] font-semibold uppercase tracking-[1.5px] transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href="https://wa.me/260966626579"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-semibold uppercase tracking-[1.5px] transition-colors inline-flex items-center justify-center gap-2 no-underline"
                    >
                      <WhatsAppIcon size={14} />
                      <span>Urgent Tender? WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Anti-spam honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Error Banner */}
                {formStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-300 flex items-start gap-3 text-red-900 text-[14px]">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600" />
                    <div className="space-y-1">
                      <p className="font-semibold m-0">{errorMessage}</p>
                      <p className="text-[13px] text-red-700 m-0">
                        You can also contact our dispatch directly on{" "}
                        <a
                          href="https://wa.me/260966626579"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-bold"
                        >
                          WhatsApp (+260 966 626579)
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                {/* Inquiry Type Chips */}
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

                {/* Names */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="first_name"
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
                      name="last_name"
                      required
                      placeholder="e.g. Phiri"
                      className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
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
                      name="phone"
                      placeholder="+260 9..."
                      className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-[1px] text-[var(--heading)] mb-1.5">
                    Project Scope / Specifications *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Describe your site location, structural requirements, BOQ details, or questions..."
                    className="w-full px-4 py-3.5 bg-white border border-[var(--border)] text-[16px] sm:text-sm text-[var(--heading)] placeholder-gray-400 focus:outline-none focus:border-[var(--heading)] transition-colors rounded-none resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full bg-[var(--accent)] hover:brightness-105 disabled:opacity-75 disabled:cursor-not-allowed text-[var(--heading)] px-8 py-5 text-[14px] font-semibold uppercase tracking-[1.5px] flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg border-0"
                >
                  {formStatus === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <ArrowUpRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
