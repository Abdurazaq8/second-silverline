"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Capabilities", href: "/#capabilities" },
  { name: "Process", href: "/#process" },
  { name: "About", href: "/#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change or ESC
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-none transition-all duration-300 ${
          scrolled
            ? "bg-white border border-[var(--border)] shadow-[0_10px_35px_rgba(0,0,0,0.08)] py-3 px-6 sm:px-8"
            : "bg-white border border-[var(--border)] shadow-[0_10px_40px_rgba(16,27,34,0.06)] py-3.5 px-6 sm:px-8"
        } flex items-center justify-between`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 !no-underline group" style={{ textDecoration: "none" }}>
          <Image
            src="/silverline_s_logo.png"
            alt="Silverline Engineering"
            width={20}
            height={36}
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-bold tracking-tight text-[var(--heading)]" style={{ color: "#0c2340" }}>
              SILVERLINE
            </span>
            <span className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[var(--paragraphs-dark)] mt-0.5" style={{ color: "#64748b" }}>
              ENGINEERING
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[13px] font-semibold uppercase tracking-[1.5px] px-3.5 py-1.5 transition-all duration-200 !no-underline relative rounded-none border-b-2 ${
                  isActive
                    ? "!text-[var(--heading)] bg-[var(--accent)]/20 border-[var(--accent)]"
                    : "!text-[var(--paragraphs)] border-transparent hover:!text-[var(--heading)] hover:bg-[var(--accent)]/20 hover:border-[var(--accent)]"
                }`}
                style={{ textDecoration: "none" }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="bg-[var(--accent)] !text-[var(--heading)] px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[1.5px] flex items-center gap-1.5 !no-underline hover:opacity-90 transition-opacity shadow-sm"
            style={{ color: "#0c2340", backgroundColor: "#f59e0b", textDecoration: "none" }}
          >
            <span style={{ color: "#0c2340" }}>Contact</span>
            <ArrowUpRight size={15} color="#0c2340" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center text-[var(--heading)] focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop Tap Outside */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs z-[-1] lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="lg:hidden max-w-6xl mx-auto mt-2 bg-white border border-[var(--border)] shadow-2xl p-6 flex flex-col space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)] px-3 py-3 border-b border-[var(--border)] border-l-4 border-l-transparent hover:border-l-[var(--accent)] hover:bg-[var(--accent)]/15 transition-all duration-200 !no-underline flex items-center justify-between group"
                style={{ textDecoration: "none", color: "#0c2340" }}
                onClick={() => setIsOpen(false)}
              >
                <span className="group-hover:text-[var(--heading)]">{item.name}</span>
                <span className="text-xs text-[var(--paragraphs-dark)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all">→</span>
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="w-full bg-[var(--accent)] !text-[var(--heading)] py-3.5 text-[13px] font-semibold uppercase tracking-[1.5px] flex items-center justify-center gap-2 !no-underline shadow-sm"
                style={{ textDecoration: "none", color: "#0c2340", backgroundColor: "#f59e0b" }}
                onClick={() => setIsOpen(false)}
              >
                <span style={{ color: "#0c2340" }}>Get in Touch</span>
                <ArrowUpRight size={16} color="#0c2340" />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
