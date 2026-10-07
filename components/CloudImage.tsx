"use client";

import { useState } from "react";
import Image from "next/image";
import { getCloudinaryUrl, isCloudinaryConfigured } from "@/lib/cloudinary";

type CloudImageProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  /** Kept for call-site compatibility; ignored by next/image */
  crop?: string;
  format?: string;
  loading?: "lazy" | "eager";
};

function resolveSrc(src: string, fallbackSrc: string) {
  if (!src) return fallbackSrc;
  // Local public path or absolute URL — use as-is
  if (src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (isCloudinaryConfigured()) {
    return (
      getCloudinaryUrl(src, {
        transformations: "f_auto,q_auto,c_fill,w_800",
      }) || fallbackSrc
    );
  }
  return fallbackSrc;
}

/**
 * Loads Cloudinary public IDs (or local / absolute URLs).
 * Remote Cloudinary URLs are unoptimized so missing assets cannot hang Next.js.
 */
export default function CloudImage({
  src,
  alt,
  fallbackSrc = "/office_complex_lusaka.png",
  className,
  fill,
  width,
  height,
  sizes,
  loading,
}: CloudImageProps) {
  const initial = resolveSrc(src, fallbackSrc);
  const [imageSrc, setImageSrc] = useState(initial);
  const [failed, setFailed] = useState(false);

  const resolvedSrc = failed ? fallbackSrc : imageSrc;
  const isRemote = resolvedSrc.startsWith("http");

  const handleError = () => {
    if (!failed) {
      setFailed(true);
      setImageSrc(fallbackSrc);
    }
  };

  if (fill) {
    return (
      <Image
        src={resolvedSrc}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        loading={loading}
        unoptimized={isRemote}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width ?? 600}
      height={height ?? 400}
      sizes={sizes}
      className={className}
      loading={loading}
      unoptimized={isRemote}
      onError={handleError}
    />
  );
}
