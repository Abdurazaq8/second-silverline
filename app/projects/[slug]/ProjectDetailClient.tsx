"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/lib/projects";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  CheckCircle2,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetailClient({ project }: { project: ProjectItem }) {
  const gallery =
    project.gallery && project.gallery.length > 0 ? project.gallery : [project.localImage];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);

  const activeImage = gallery[selectedIdx] || gallery[0];

  return (
    <section className="py-10 sm:py-16 bg-white px-4 sm:px-8 lg:px-12 mb-[14px]">
      <div className="max-w-[1200px] mx-auto w-full space-y-12">
        {/* Multi-Image Architectural Gallery */}
        <div className="space-y-4">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-none overflow-hidden bg-gray-950 group border border-[var(--border)]">
            <Image
              key={activeImage}
              src={activeImage}
              alt={`${project.title} - Site Photo ${selectedIdx + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />

            {/* Lightbox Trigger */}
            <button
              onClick={() => setIsLightbox(true)}
              className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 px-4 py-2 bg-black/80 hover:bg-black text-white rounded-none text-[12px] font-semibold uppercase tracking-[1.5px] backdrop-blur-sm transition-colors cursor-pointer"
            >
              <Maximize2 size={13} />
              <span>Fullscreen</span>
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 bg-black/80 text-white rounded-none text-[12px] font-mono tracking-wider backdrop-blur-sm">
              {selectedIdx + 1} / {gallery.length}
            </div>

            {/* Navigation Arrows */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedIdx((prev) =>
                      prev === 0 ? gallery.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-black/60 hover:bg-[var(--accent)] hover:text-[var(--heading)] text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={() =>
                    setSelectedIdx((prev) =>
                      prev === gallery.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-black/60 hover:bg-[var(--accent)] hover:text-[var(--heading)] text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Bar */}
          {gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIdx(i)}
                  className={`relative w-28 sm:w-32 aspect-[16/10] rounded-none overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    selectedIdx === i
                      ? "border-[var(--heading)] shadow-sm opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Project Overview */}
            <div>
              <div className="subtitle flex items-center mb-3">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                  Overview
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium text-[var(--heading)] mb-5 tracking-[-0.8px]">
                Project Scope & Background
              </h2>
              <p className="text-[17px] sm:text-[18px] text-[var(--paragraphs)] leading-[170%] m-0">
                {project.overview || project.description}
              </p>
            </div>

            {/* Scope of Work */}
            {project.scope && project.scope.length > 0 && (
              <div>
                <div className="subtitle flex items-center mb-3">
                  <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                  <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                    Deliverables
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[var(--heading)] mb-6 tracking-[-0.6px]">
                  Technical Scope of Work
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.scope.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-none bg-[var(--background)] border border-[var(--border)]"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[var(--accent)] shrink-0 mt-0.5"
                        color="#fdc23e"
                      />
                      <span className="text-[14px] sm:text-[15px] text-[var(--heading)] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <div className="subtitle flex items-center mb-3">
                  <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                  <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                    Execution
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[var(--heading)] mb-6 tracking-[-0.6px]">
                  Engineering Execution & Key Milestones
                </h3>
                <ul className="space-y-3.5 pl-0 list-none m-0">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3.5 text-[15px] sm:text-[16px] text-[var(--paragraphs)] leading-[160%]"
                    >
                      <span className="w-2 h-2 bg-[var(--accent)] shrink-0 mt-2.5 rounded-none" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="p-8 sm:p-10 rounded-none bg-[var(--background)] border-l-4 border-[var(--accent)]">
                <p className="text-[17px] sm:text-[19px] text-[var(--heading)] italic leading-[160%] mb-5 font-normal">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-[16px] font-bold text-[var(--heading)] mb-0.5">
                    {project.testimonial.author}
                  </p>
                  <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)] m-0">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Technical Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Project Fact Sheet */}
            <div className="bg-[var(--background)] rounded-none p-8 border border-[var(--border)]">
              <div className="subtitle flex items-center mb-4">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                <div className="text-subtitle ml-3 text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                  Fact Sheet
                </div>
              </div>
              <dl className="space-y-4 text-sm divide-y divide-[var(--border)] m-0">
                <div className="pt-2 flex justify-between gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                    Client
                  </dt>
                  <dd className="font-medium text-[var(--heading)] text-right m-0">
                    {project.client}
                  </dd>
                </div>
                <div className="pt-3.5 flex justify-between gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                    Location
                  </dt>
                  <dd className="font-medium text-[var(--heading)] text-right m-0">
                    {project.location}
                  </dd>
                </div>
                <div className="pt-3.5 flex justify-between gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                    Sector
                  </dt>
                  <dd className="font-medium text-[var(--heading)] text-right m-0">
                    {project.category}
                  </dd>
                </div>
                <div className="pt-3.5 flex justify-between gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                    Timeline
                  </dt>
                  <dd className="font-medium text-[var(--heading)] text-right m-0">
                    {project.year}
                  </dd>
                </div>
                <div className="pt-3.5 flex justify-between items-center gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                    Status
                  </dt>
                  <dd className="m-0">
                    <span
                      className={`text-[12px] font-semibold uppercase tracking-[1.5px] ${
                        project.status === "ongoing"
                          ? "text-amber-700"
                          : "text-emerald-800"
                      }`}
                    >
                      {project.status === "ongoing" ? "Active" : "Completed"}
                    </span>
                  </dd>
                </div>
                <div className="pt-3.5 flex justify-between gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--info-text)]">
                    Contractor
                  </dt>
                  <dd className="font-medium text-[var(--heading)] text-right m-0">
                    Silverline Ltd
                  </dd>
                </div>
              </dl>
            </div>

            {/* Albion Signature Yellow Inquiry Box */}
            <div className="bg-[var(--accent)] text-[var(--heading)] p-8 rounded-none space-y-5 shadow-sm">
              <div className="subtitle flex items-center mb-1">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--heading)]" />
                <div className="text-subtitle ml-3 text-[12px] font-semibold uppercase tracking-[1.5px] text-[var(--heading)]">
                  Consultation
                </div>
              </div>
              <h4 className="text-[22px] font-medium leading-[120%] tracking-[-0.6px] text-[var(--heading)] m-0">
                Have a Similar Construction Requirement?
              </h4>
              <p className="text-[14px] text-[var(--heading)] leading-[160%] font-normal">
                Our multidisciplinary engineering team provides comprehensive consulting, structural detailing, and turnkey contracting across Zambia.
              </p>
              <div className="space-y-3 pt-2">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--heading)] hover:bg-black text-white font-semibold text-[13px] uppercase tracking-[1.5px] rounded-none transition-colors no-underline shadow-sm"
                  style={{ color: "#ffffff", backgroundColor: "#101b22", textDecoration: "none" }}
                >
                  <span>Request Technical Proposal</span>
                  <ArrowUpRight size={15} />
                </Link>
                <a
                  href="tel:+260966626579"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[var(--heading)] hover:bg-[var(--background)] font-semibold text-[13px] uppercase tracking-[1.5px] rounded-none transition-colors border border-black/10 no-underline shadow-sm"
                  style={{ color: "#101b22", textDecoration: "none" }}
                >
                  <Phone size={14} />
                  <span>Call: +260 966 626579</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Fullscreen */}
      <AnimatePresence>
        {isLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsLightbox(false)}
          >
            <button
              onClick={() => setIsLightbox(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
              aria-label="Close fullscreen"
            >
              <X size={20} />
            </button>

            <div
              className="relative w-full max-w-6xl max-h-[85vh] aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt={project.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdx((prev) =>
                      prev === 0 ? gallery.length - 1 : prev - 1
                    );
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-white/10 hover:bg-[var(--accent)] hover:text-[var(--heading)] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIdx((prev) =>
                      prev === gallery.length - 1 ? 0 : prev + 1
                    );
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-none bg-white/10 hover:bg-[var(--accent)] hover:text-[var(--heading)] text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
