"use client";

import { useState } from "react";
import Link from "next/link";
import { rawProjects } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CloudImage from "@/components/CloudImage";
import AlbionBannerCTA from "@/components/AlbionBannerCTA";
import { MapPin, Images } from "lucide-react";
import Counter from "@/components/Counter";
import { getHeroPosterUrl, getHeroVideoUrl } from "@/lib/cloudinary";

const categories = ["All", ...Array.from(new Set(rawProjects.map((p) => p.category)))];

export default function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [videoError, setVideoError] = useState(false);

  const heroPoster = getHeroPosterUrl() || "/construction_hero_modern_site.png";
  const heroVideo = getHeroVideoUrl() || "/whatsapp-hero-video.mp4";

  const filteredProjects =
    activeCategory === "All"
      ? rawProjects
      : rawProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Portfolio Hero with Background Video & Cinematic Color Overlay */}
      <section className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden mb-[14px] bg-[#101b22]">
        
        {/* Background Video & Cinematic Color Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Dual Color Overlays for Rich Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#101b22]/90 via-[#101b22]/80 to-[#101b22]/95 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[#101b22]/35 z-10 pointer-events-none" />

          {/* Fallback Poster Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroPoster}
            alt="Silverline Projects"
            className="absolute inset-0 w-full h-full object-cover"
          />

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

        {/* High-Contrast Foreground Content */}
        <div className="relative z-20 content max-w-[1200px] mx-auto w-full">
          {/* Subtitle */}
          <div className="subtitle flex items-center mb-3">
            <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
            <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
              Our Portfolio
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-[-1px] sm:tracking-[-1.5px] font-medium !text-white mb-6 max-w-3xl drop-shadow-md">
            Engineering &amp; Infrastructure Projects
          </h1>

          <p className="text-[16px] sm:text-[19px] !text-white/85 leading-[170%] max-w-2xl mb-12 sm:mb-14 font-light drop-shadow-sm">
            Explore our track record of civil infrastructure, heavy structural steel fabrication, commercial developments, and mining-grade installations delivered across Zambia.
          </p>

          {/* Albion Stats Strip over Dark Video */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/20">
            {[
              {
                value: rawProjects.filter((p) => p.status === "complete").length,
                suffix: "+",
                label: "Completed Projects",
              },
              { value: 15, suffix: "+", label: "Years Experience" },
              { value: 8, suffix: "", label: "Engineering Disciplines" },
              { value: 100, suffix: "%", label: "Statutory Compliance" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight !text-white mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Albion Category Filter Tabs */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[var(--border)] py-3 sm:py-4 px-4 sm:px-8 lg:px-12 mb-[14px]">
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-center overflow-x-auto scrollbar-none py-1">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[1.2px] sm:tracking-[1.5px] rounded-none transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-[var(--heading)] text-white border border-[var(--heading)] shadow-sm"
                    : "bg-white text-[var(--paragraphs)] border border-[var(--border)] hover:text-[var(--heading)] hover:border-[var(--heading)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Albion Projects Collection Grid */}
      <section className="w-full py-12 px-4 sm:px-8 lg:px-12 bg-white mb-[14px]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="collection-item-project flex flex-col group bg-white border border-[var(--border)] p-5 rounded-none hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Link with Hover Zoom */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="link-image-project relative w-full aspect-[16/11] mb-5 overflow-hidden block bg-[var(--background)] rounded-none"
                >
                  <CloudImage
                    src={project.localImage}
                    alt={project.title}
                    fill
                    crop="fill"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="image-project object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    format="auto"
                  />

                  {/* Sharp Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[var(--heading)] text-white text-[11px] font-semibold uppercase tracking-[1.5px] rounded-none">
                      {project.category}
                    </span>
                  </div>

                  {/* Photo Count */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/75 text-white text-[11px] font-medium tracking-wider rounded-none backdrop-blur-sm">
                        <Images size={12} />
                        {project.gallery.length} Photos
                      </span>
                    </div>
                  )}
                </Link>

                {/* Client & Status */}
                <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)] mb-2">
                  <span className="truncate max-w-[180px]">{project.client}</span>
                  <span
                    className={`font-semibold ${
                      project.status === "ongoing"
                        ? "text-amber-600"
                        : "text-emerald-700"
                    }`}
                  >
                    {project.status === "ongoing" ? "Active Site" : "Completed"}
                  </span>
                </div>

                {/* Project Title + Dual Sliding Arrow */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="link-block-project block no-underline group/link"
                >
                  <div className="block-project flex justify-between items-start pb-3">
                    <h5 className="heading-project text-[22px] sm:text-[23px] font-medium text-[var(--heading)] tracking-[-0.8px] leading-[120%] m-0 group-hover/link:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h5>
                    <div className="icon-arrow relative w-[10px] h-[10px] overflow-hidden flex items-center justify-center ml-3 shrink-0 mt-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/albion/arrow_4.svg"
                        alt=""
                        className="icon-arrow-a w-[10px] h-[10px]"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/albion/arrow_3.svg"
                        alt=""
                        className="icon-arrow-b w-[10px] h-[10px]"
                      />
                    </div>
                  </div>

                  {/* Albion Animated Line */}
                  <div className="line-project w-full h-[1px] bg-[var(--border)] relative overflow-hidden mb-4">
                    <div className="line-full-anim w-full h-[1px] bg-[var(--heading)] absolute top-0 left-0" />
                  </div>
                </Link>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] leading-[160%] text-[var(--paragraphs)] line-clamp-2 mb-6">
                  {project.description}
                </p>

                {/* Footer Metadata */}
                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-[12px] text-[var(--info-text)] mt-auto font-medium">
                  <span className="flex items-center gap-1.5 truncate max-w-[200px]">
                    <MapPin size={13} className="shrink-0 text-[var(--accent)]" />
                    <span className="truncate">{project.location}</span>
                  </span>
                  <span className="uppercase tracking-[1.5px] font-semibold text-[var(--heading)] group-hover:text-[var(--accent)] transition-colors">
                    Case Study ↗
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-[var(--background)] p-12 border border-[var(--border)]">
              <p className="text-[16px] text-[var(--paragraphs)]">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Albion Signature Banner CTA */}
      <AlbionBannerCTA />

      <Footer />
    </main>
  );
}
