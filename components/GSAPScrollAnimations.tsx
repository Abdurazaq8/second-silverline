"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollAnimations() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // 1. Reveal Section Titles & Headings
      const headings = document.querySelectorAll(
        "h2.heading, .block-heading h2, .section h2"
      );
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { y: isMobile ? 20 : 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.6 : 0.85,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: heading,
              start: isMobile ? "top 95%" : "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 2. Expand Subtitle Accent Lines
      const subtitleLines = document.querySelectorAll(".line-subtitle");
      subtitleLines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: line,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 3. Staggered Entrance for Stats Blocks (AlbionStatsWhoWeAre)
      const statsCards = document.querySelectorAll(".stats");
      if (statsCards.length > 0) {
        gsap.fromTo(
          statsCards,
          { y: isMobile ? 20 : 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.5 : 0.75,
            stagger: isMobile ? 0.08 : 0.12,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: statsCards[0],
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Parallax only on desktop devices (disabled on touch mobile to prevent jank)
      if (!isMobile) {
        const galleryImages = document.querySelectorAll(".image-gallery");
        galleryImages.forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        });

        const overlappingImg = document.querySelector(".image-absolute");
        if (overlappingImg) {
          gsap.fromTo(
            overlappingImg,
            { y: 15 },
            {
              y: -10,
              ease: "none",
              scrollTrigger: {
                trigger: overlappingImg,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
