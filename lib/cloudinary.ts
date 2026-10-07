/**
 * Cloudinary configuration and helpers for Next.js.
 * Used for optimized images/videos and optional server-side upload.
 */

export const cloudinaryConfig = {
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "",
  apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY ?? "",
  apiSecret: process.env.CLOUDINARY_API_SECRET ?? "",
} as const;

/** Hero background video public ID (Media Library) */
export const HERO_VIDEO_ID = "Hero_video_pk3lc1";

/** Check if Cloudinary is configured (for conditional features) */
export function isCloudinaryConfigured(): boolean {
  const name = cloudinaryConfig.cloudName?.trim();
  return Boolean(name && name !== "your_cloud_name" && !name.includes("your_"));
}

/** Base URL for Cloudinary delivery (images/videos) */
export function getCloudinaryUrl(publicId: string, options?: { type?: "image" | "video"; transformations?: string }) {
  if (!isCloudinaryConfigured()) return "";
  const cloudName = cloudinaryConfig.cloudName;
  const resource = options?.type === "video" ? "video" : "image";
  const trans = options?.transformations ? `/upload/${options.transformations}` : "/upload";
  return `https://res.cloudinary.com/${cloudName}/${resource}${trans}/${publicId}`;
}

/** Hero MP4: Cloudinary video if configured, otherwise local WhatsApp video */
export function getHeroVideoUrl() {
  if (!isCloudinaryConfigured()) {
    return "/whatsapp-hero-video.mp4";
  }
  return getCloudinaryUrl(HERO_VIDEO_ID, {
    type: "video",
    transformations: "f_mp4,vc_h264:baseline:3.0,q_40,w_854,c_limit,ac_none,fps_24",
  }) || "/whatsapp-hero-video.mp4";
}

/** Poster frame from hero video or high-res site poster */
export function getHeroPosterUrl() {
  if (!isCloudinaryConfigured()) {
    return "/construction_hero_modern_site.png";
  }
  return getCloudinaryUrl(HERO_VIDEO_ID, {
    type: "video",
    transformations: "so_0,w_854,c_limit,q_auto:eco,f_jpg",
  }) || "/construction_hero_modern_site.png";
}
