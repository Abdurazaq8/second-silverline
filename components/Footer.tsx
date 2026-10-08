"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="section-footer w-full bg-[#0c2340] text-white pt-16 sm:pt-24 pb-12 sm:pb-14 px-4 sm:px-8 lg:px-12 mt-auto border-t border-[#163559] font-[family-name:var(--font-barlow)]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* 4-Columns Grid Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1.1fr_1.2fr_1.3fr] gap-10 lg:gap-10 pb-12 sm:pb-16 border-b border-[#1c4068]">
          
          {/* Column 1: Brand Logo & Company Profile */}
          <div className="flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-6 group">
              <Image
                src="/silverline_s_logo.png"
                alt="Silverline Engineering"
                width={24}
                height={42}
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[21px] font-bold tracking-tight text-white">
                  SILVERLINE
                </span>
                <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#f59e0b] mt-1">
                  ENGINEERING
                </span>
              </div>
            </Link>

            <p className="paragraph-footer text-[15px] sm:text-[16px] leading-[170%] text-[#94a3b8] mb-6 max-w-[340px]">
              A leading Zambian-owned multi-disciplinary engineering contractor delivering civil infrastructure, heavy structural steel fabrication, pre-engineered buildings, and turnkey developments.
            </p>

            <div className="flex items-start gap-2.5 text-[14px] text-[#94a3b8] leading-relaxed">
              <MapPin size={16} className="text-[#f59e0b] mt-1 shrink-0" />
              <span>Plot 10, Buluwe Street, Woodlands, Lusaka, Zambia</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-start">
            <div className="heading-footer text-white text-[13px] font-semibold uppercase tracking-[1.5px] mb-6">
              Navigation
            </div>
            <div className="flex flex-col space-y-1">
              <Link href="/#services" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Services (12 Disciplines)
              </Link>
              <Link href="/projects" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Projects Portfolio
              </Link>
              <Link href="/#capabilities" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Plant &amp; Capabilities
              </Link>
              <Link href="/#process" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Engineering Process
              </Link>
              <Link href="/#about" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                About Company
              </Link>
              <Link href="/contact" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Contact &amp; Tender Desk
              </Link>
            </div>
          </div>

          {/* Column 3: Disciplines */}
          <div className="flex flex-col items-start">
            <div className="heading-footer text-white text-[13px] font-semibold uppercase tracking-[1.5px] mb-6">
              Disciplines
            </div>
            <div className="flex flex-col space-y-1 text-[16px] text-[#95a3b2]">
              <Link href="/projects?category=Industrial" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Structural Steel Works
              </Link>
              <Link href="/projects/undp-bulking-centers" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Pre-Engineered Units
              </Link>
              <Link href="/projects?category=Infrastructure" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Civil Infrastructure
              </Link>
              <Link href="/projects?category=Commercial" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Commercial Developments
              </Link>
              <Link href="/projects/oryx-munali-filling-station" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Filling Stations &amp; Tanks
              </Link>
              <Link href="/projects/engic-solar-plants" className="link-footer text-[16px] text-[#95a3b2] hover:text-white hover:translate-x-1.5 transition-all no-underline">
                Solar &amp; Substations
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Office Hours */}
          <div className="flex flex-col items-start">
            <div className="heading-footer text-white text-[13px] font-semibold uppercase tracking-[1.5px] mb-6">
              Head Office
            </div>
            <div className="flex flex-col space-y-3.5 text-[15px] text-[#94a3b8]">
              <a href="tel:+260966626579" className="flex items-center gap-2.5 text-[#94a3b8] hover:text-white transition-colors no-underline">
                <Phone size={15} className="text-[#f59e0b] shrink-0" />
                <span>+260 966 626579</span>
              </a>
              <a href="tel:+260771814040" className="flex items-center gap-2.5 text-[#94a3b8] hover:text-white transition-colors no-underline">
                <Phone size={15} className="text-[#f59e0b] shrink-0" />
                <span>+260 771 814040</span>
              </a>
              <a href="mailto:info@silverlineng.com" className="flex items-center gap-2.5 text-[#94a3b8] hover:text-white transition-colors no-underline">
                <Mail size={15} className="text-[#f59e0b] shrink-0" />
                <span>info@silverlineng.com</span>
              </a>

              <div className="pt-3 border-t border-white/10 text-[13px] text-[#94a3b8] leading-relaxed">
                <div className="font-semibold text-white/90 uppercase tracking-wider text-[11px] mb-1">
                  Operating Hours
                </div>
                <span>Mon – Fri: 08:00 – 17:00</span><br />
                <span>Sat: 08:00 – 13:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-down-block flex flex-col sm:flex-row justify-between items-center pt-8 gap-5">
          <div className="text-footer-down text-[14px] text-[#94a3b8] text-center sm:text-left">
            © {new Date().getFullYear()} Silverline Engineering Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/260966626579"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 bg-white/5 hover:bg-[#f59e0b] hover:border-[#f59e0b] text-white hover:text-[#0c2340] flex items-center justify-center transition-all duration-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={16} />
            </a>
            <a
              href="https://www.facebook.com/share/1KntzJukRd/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 bg-white/5 hover:bg-[#f59e0b] hover:border-[#f59e0b] text-white hover:text-[#0c2340] flex items-center justify-center transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/silverline.eng_limited?stkn=aGtib2tuc2hvNW5w"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 bg-white/5 hover:bg-[#f59e0b] hover:border-[#f59e0b] text-white hover:text-[#0c2340] flex items-center justify-center transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/silverline-engineering-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 bg-white/5 hover:bg-[#f59e0b] hover:border-[#f59e0b] text-white hover:text-[#0c2340] flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
