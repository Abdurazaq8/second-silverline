import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlbionBannerCTA from "@/components/AlbionBannerCTA";
import { rawProjects, getProjectBySlug } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rawProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found - Silverline Engineering",
    };
  }

  return {
    title: `${project.title} | Silverline Engineering Case Study`,
    description: project.overview || project.description,
    openGraph: {
      title: `${project.title} - Silverline Engineering`,
      description: project.description,
      images: [project.localImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = rawProjects.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? rawProjects[currentIndex - 1] : rawProjects[rawProjects.length - 1];
  const nextProject =
    currentIndex < rawProjects.length - 1 ? rawProjects[currentIndex + 1] : rawProjects[0];

  const relatedProjects = rawProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#07172B]">
      <Navbar />

      {/* Albion Project Detail Header */}
      <header className="pt-28 sm:pt-36 pb-10 sm:pb-14 bg-[#0C2340] border-b border-white/10 px-4 sm:px-8 lg:px-12 mb-[14px]">
        <div className="max-w-[1200px] mx-auto w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.5px] text-slate-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors no-underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors no-underline">
              Projects
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-[300px]">{project.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Category & Status */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3.5 py-1.5 bg-[var(--accent)] text-[#0C2340] text-[11px] font-bold uppercase tracking-[1.5px] rounded-none">
                  {project.category}
                </span>
                <span
                  className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] rounded-none border ${
                    project.status === "ongoing"
                      ? "border-amber-500/40 text-amber-400 bg-amber-950/40"
                      : "border-emerald-500/40 text-emerald-400 bg-emerald-950/40"
                  }`}
                >
                  {project.status === "ongoing" ? "Active Site" : "Completed Project"}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] tracking-[-1.4px] font-medium text-white m-0">
                {project.title}
              </h1>
            </div>

            {/* Back to Projects Button */}
            <Link
              href="/projects"
              className="button bg-[var(--accent)] text-[#0C2340] px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] rounded-none inline-flex items-center justify-center gap-2 no-underline hover:brightness-110 transition-all w-full sm:w-auto shrink-0 shadow-lg cursor-pointer"
            >
              <ArrowLeft size={15} />
              <span>All Projects</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Interactive Multi-Image Gallery and Content Client */}
      <ProjectDetailClient project={project} />

      {/* Prev / Next Project Navigation Bar */}
      <section className="border-t border-b border-white/10 bg-[#0C2340] mb-[14px]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Prev Project */}
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-5 sm:p-8 flex items-center gap-4 sm:gap-5 hover:bg-[#0F2847] transition-colors no-underline"
            >
              <div className="w-11 h-11 border border-white/15 flex items-center justify-center text-white group-hover:bg-[var(--accent)] group-hover:text-[#0C2340] group-hover:border-[var(--accent)] shrink-0 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-semibold mb-1">
                  Previous Project
                </p>
                <p className="text-[16px] sm:text-[17px] font-medium text-white group-hover:text-[var(--accent)] transition-colors truncate m-0">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-5 sm:p-8 flex items-center justify-between sm:justify-end gap-4 sm:gap-5 hover:bg-[#0F2847] transition-colors text-right no-underline"
            >
              <div className="min-w-0 order-1 sm:order-none">
                <p className="text-[11px] uppercase tracking-[1.5px] text-slate-400 font-semibold mb-1">
                  Next Project
                </p>
                <p className="text-[16px] sm:text-[17px] font-medium text-white group-hover:text-[var(--accent)] transition-colors truncate m-0">
                  {nextProject.title}
                </p>
              </div>
              <div className="w-11 h-11 border border-white/15 flex items-center justify-center text-white group-hover:bg-[var(--accent)] group-hover:text-[#0C2340] group-hover:border-[var(--accent)] shrink-0 transition-colors">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects Grid */}
      <section className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#07172B] mb-[14px]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="block-heading flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div>
              <div className="subtitle flex items-center mb-3">
                <div className="line-subtitle w-[27px] h-[1px] bg-[var(--accent)]" />
                <div className="text-subtitle ml-3 text-[14px] font-semibold uppercase tracking-[1.5px] text-[var(--accent)]">
                  More Works
                </div>
              </div>
              <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-[-1.2px] m-0">
                Other Landmark Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="button bg-[var(--accent)] text-[#0C2340] px-7 py-4 text-[13px] font-bold uppercase tracking-[1.5px] rounded-none inline-flex items-center justify-center gap-2 no-underline hover:brightness-110 transition-all w-full sm:w-auto shadow-md"
            >
              <span>View Full Portfolio</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {relatedProjects.map((other) => (
              <div
                key={other.id}
                className="collection-item-project flex flex-col group bg-[#0F2847] border border-white/10 p-5 rounded-none hover:border-[var(--accent)] transition-all duration-300 shadow-lg"
              >
                <Link
                  href={`/projects/${other.slug}`}
                  className="link-image-project relative w-full aspect-[16/11] mb-5 overflow-hidden block bg-[#0C2340] rounded-none"
                >
                  <Image
                    src={other.localImage}
                    alt={other.title}
                    fill
                    className="image-project object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-[var(--accent)] text-[#0C2340] text-[11px] font-bold uppercase tracking-[1.5px] rounded-none">
                      {other.category}
                    </span>
                  </div>
                </Link>

                <div className="text-project-type text-[12px] font-semibold uppercase tracking-[1.5px] text-slate-400 mb-2">
                  {other.client}
                </div>

                <Link
                  href={`/projects/${other.slug}`}
                  className="link-block-project block no-underline group/link"
                >
                  <div className="block-project flex justify-between items-start pb-3">
                    <h5 className="heading-project text-[20px] font-medium text-white tracking-[-0.6px] leading-[120%] m-0 group-hover/link:text-[var(--accent)] transition-colors">
                      {other.title}
                    </h5>
                    <div className="icon-arrow relative w-[10px] h-[10px] overflow-hidden flex items-center justify-center ml-3 shrink-0 mt-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/albion/arrow_4.svg" alt="" className="icon-arrow-a w-[10px] h-[10px] brightness-0 invert" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/albion/arrow_3.svg" alt="" className="icon-arrow-b w-[10px] h-[10px] brightness-0 invert" />
                    </div>
                  </div>
                  <div className="line-project w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
                    <div className="line-full-anim w-full h-[1px] bg-[var(--accent)] absolute top-0 left-0" />
                  </div>
                </Link>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[12px] text-slate-400 mt-auto font-medium">
                  <span className="flex items-center gap-1.5 truncate max-w-[180px]">
                    <MapPin size={13} className="shrink-0 text-[var(--accent)]" />
                    <span className="truncate">{other.location}</span>
                  </span>
                  <span className="uppercase tracking-[1.5px] font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                    Explore ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Albion Banner CTA */}
      <AlbionBannerCTA />

      <Footer />
    </main>
  );
}
