"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { getHeroPosterUrl } from "@/lib/cloudinary";

export default function Hero() {
  const heroPoster = getHeroPosterUrl() || "/construction_hero_modern_site.png";
  const heroVideo = "/whatsapp-hero-video.mp4";
  const [videoError, setVideoError] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] py-28 sm:py-32 flex items-center justify-center overflow-hidden mb-[14px]"
    >
      {/* Background Video with Cinematic Dark Contrast */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85 z-10 pointer-events-none" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroPoster}
          alt="Silverline Engineering"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Architectural Blueprint Grid Overlay */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-35 z-10 pointer-events-none" />

        {heroVideo && !videoError && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={heroPoster}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>

      {/* High-Contrast Centered Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Architectural Datum / Survey Telemetry Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-black/50 backdrop-blur-md border border-white/20 text-white/90 font-mono text-[10px] sm:text-[11px] uppercase tracking-[2px]"
        >
          <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0 animate-pulse" />
          <span>LUSAKA HQ // 15°25&apos;35&quot;S 28°19&apos;22&quot;E // NCC GRADE 1</span>
        </motion.div>

        {/* Monumental Clean White Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="!text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium leading-[1.08] sm:leading-[1.02] tracking-[-1px] sm:tracking-[-1.5px] max-w-3xl mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          style={{ color: "#ffffff" }}
        >
          Together, let&apos;s build a better construction experience.
        </motion.h1>

        {/* Concise Refined Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="!text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          style={{ color: "rgba(255, 255, 255, 0.92)" }}
        >
          Zambian-owned engineering contractor delivering civil infrastructure, heavy structural steel fabrication, and turnkey developments.
        </motion.p>

        {/* Minimal Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[var(--accent)] !text-[var(--heading)] px-8 py-4 text-[13px] font-semibold uppercase tracking-[1.5px] flex items-center justify-center gap-2 !no-underline hover:brightness-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg cursor-pointer"
            style={{ color: "#101b22", backgroundColor: "#fdc23e", textDecoration: "none" }}
          >
            <span style={{ color: "#101b22" }}>Discuss Project</span>
            <ArrowUpRight size={16} color="#101b22" />
          </Link>

          <Link
            href="/projects"
            className="w-full sm:w-auto bg-black/40 backdrop-blur-md !text-white border-2 border-white/60 px-8 py-4 text-[13px] font-semibold uppercase tracking-[1.5px] flex items-center justify-center gap-2 !no-underline hover:bg-white hover:!text-[var(--heading)] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 shadow-lg cursor-pointer group"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            <span className="!text-white group-hover:!text-[var(--heading)] transition-colors" style={{ color: "#ffffff" }}>View Our Work</span>
          </Link>
        </motion.div>

      </div>

      {/* Minimal Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 z-20 flex flex-col items-center !text-white/70 text-[11px] uppercase tracking-[2px]"
        style={{ color: "rgba(255, 255, 255, 0.75)" }}
      >
        <span className="mb-1 text-[10px] font-semibold tracking-[2px]">Scroll</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
