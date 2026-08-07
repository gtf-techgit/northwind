import { HeroData } from "@/website/types/common";
import { BrandAssetData, VoiceData, VoiceItem } from "@/website/types/media-center";

export const mediaHeroData: HeroData = {
  title: "Media Center",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/media/banner.png",
      mobile_file: "/pages/media/banner.png",
    },
    alt: "Media Center",
  },
};

const voiceLogos = [
  "/pages/media/voices/1.png",
  "/pages/media/voices/2.png",
  "/pages/media/voices/3.png",
];

const voiceItems: VoiceItem[] = Array.from({ length: 18 }, (_, index) => ({
  id: `voice-${index + 1}`,
  category: index % 2 === 0 ? "online" : "offline",
  logo: voiceLogos[index % voiceLogos.length],
  title: "Lorem Ipsum is simply dummy text.",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}));

export const voiceData: VoiceData = {
  heading: "Voices Talking About Us",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, ",
  tabs: [
    { id: "all", label: "All" },
    { id: "online", label: "Online" },
    { id: "offline", label: "Offline" },
  ],
  items: voiceItems,
}

export const brandData: BrandAssetData = {
  heading: "Brand Asset",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, ",
  logos: [
    {
      id: "brand-logo-light",
      theme: "light",
      image: "/pages/media/brand/dark/logo.png",
      alt: "North Wind Estates logo on light background",
      files: [
        { label: "PNG", url: "/pages/media/brand/dark/logo.png" },
        { label: "JPEG", url: "/pages/media/brand/dark/logo.jpg" },
        { label: "SVG", url: "/pages/media/brand/dark/logo.svg" },
      ],
    },
    {
      id: "brand-logo-dark",
      theme: "dark",
      image: "/pages/media/brand/light/logo.png",
      alt: "North Wind Estates logo on dark background",
      files: [
        { label: "PNG", url: "/pages/media/brand/light/logo.png" },
        { label: "JPEG", url: "/pages/media/brand/light/logo.jpg" },
        { label: "SVG", url: "/pages/media/brand/light/logo.svg" },
      ],
    },
  ],
}