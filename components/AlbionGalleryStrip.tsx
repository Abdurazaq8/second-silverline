"use client";

import Image from "next/image";

export default function AlbionGalleryStrip() {
  const images = [
    { src: "/projects/east-park-expansion.jpg", alt: "East Park Mall Commercial Development" },
    { src: "/capabilities/fabrication-facility.jpg", alt: "Lusaka Structural Steel Fabrication Workshop" },
    { src: "/projects/undp-bulking-centres.jpg", alt: "UNDP Civil Infrastructure Development" },
  ];

  return (
    <div className="section-full w-full mb-[14px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] w-full">
        {images.map((img, idx) => (
          <div key={idx} className="relative h-[240px] sm:h-[340px] lg:h-[380px] overflow-hidden group cursor-pointer">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="image-gallery object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Cinematic Overlay - visible on mobile touch, hover on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 z-10 pointer-events-none">
              <div className="w-6 h-[2px] bg-[var(--accent)] mb-2" />
              <span className="text-white text-[13px] sm:text-[14px] font-semibold uppercase tracking-[1.5px] leading-snug">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
