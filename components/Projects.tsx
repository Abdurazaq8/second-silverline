"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import CloudImage from "./CloudImage";

function isLocalImage(src: string) {
  return src.startsWith("/");
}

export default function Projects() {
  const featured = projects.slice(0, 3);

  return (
    <div id="projects" className="section background w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#0C2340] mb-[14px]">
      <div className="content max-w-[1200px] mx-auto w-full">
        
        {/* Albion Block Heading */}
        <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="block-heading-text">
            <div className="subtitle flex items-center mb-3">
              <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
              <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                Featured Projects
              </div>
            </div>
            <h2 className="heading text-3xl sm:text-4xl lg:text-[52px] leading-[1.08] tracking-[-1.4px] font-medium text-white max-w-[620px] m-0">
              We build the structures <br className="hidden sm:inline" />and infrastructure
            </h2>
          </div>

          <div className="block-heading-button w-full sm:w-auto">
            <Link
              href="/projects"
              className="button w-full sm:w-auto bg-[var(--accent)] text-[#0C2340] px-8 py-5 inline-flex items-center justify-center no-underline hover:brightness-110 transition-all font-bold shadow-lg"
            >
              <span className="text-button text-[14px] uppercase tracking-[1.5px]">
                All Projects
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/albion/icon_button.svg" alt="" className="icon-button ml-3 w-1.5 h-2.5" />
            </Link>
          </div>
        </div>

        {/* Albion Projects Collection Grid */}
        <div className="collection-list-wrapper-project w-full">
          <div className="collection-list-project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featured.map((project) => (
              <div key={project.id} className="collection-item-project flex flex-col group">
                
                {/* Image Link with Hover Zoom */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="link-image-project relative w-full aspect-[16/11] mb-5 overflow-hidden block bg-[#08182D] border border-white/10 group-hover:border-[var(--accent)] transition-colors"
                >
                  {isLocalImage(project.image) ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="image-project object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <CloudImage
                      src={project.image}
                      alt={project.title}
                      fill
                      crop="fill"
                      className="image-project object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      format="auto"
                    />
                  )}
                </Link>

                {/* Category Type */}
                <div className="text-project-type text-[13px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)] mb-2">
                  {project.category}
                </div>

                {/* Project Title + Dual Sliding Arrow Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="link-block-project block no-underline"
                >
                  <div className="block-project flex justify-between items-center pb-3">
                    <h5 className="heading-project text-[22px] sm:text-[24px] font-medium text-white tracking-[-0.8px] leading-[120%] m-0 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h5>
                    <div className="icon-arrow relative w-[10px] h-[10px] overflow-hidden flex items-center justify-center ml-3 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/albion/arrow_4.svg" alt="" className="icon-arrow-a w-[10px] h-[10px] brightness-200" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/albion/arrow_3.svg" alt="" className="icon-arrow-b w-[10px] h-[10px] brightness-200" />
                    </div>
                  </div>

                  {/* Dual Dark Underline */}
                  <div className="line-block relative w-full h-[2px] flex items-center">
                    <div className="line-full line-full-anim absolute inset-0 bg-[var(--accent)]" />
                    <div className="line-1px w-full h-[1px] bg-white/15" />
                  </div>
                </Link>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
