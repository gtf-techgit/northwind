import { HeroData } from "@/website/types/common";
import { CsrGalleryData, CsrOverviewData, ValueBehindData } from "@/website/types/csr";

export const csrHeroData: HeroData = {
  title: "CSR",
  media: {
    type: "image",
    desktop: "/pages/csr/banner.jpg",
    mobile: "/pages/csr/banner.jpg",
    alt: "CSR",
  },
};

export const csrOverviewData: CsrOverviewData = {
  headingLine1: "Building More Than Homes",
  headingLine2: "Building Responsibility.",
  paragraph:
    "Every Northwind development carries a promise that extends beyond its walls to the land it stands on, the community around it, and the future it helps shape.",
  points: ["Environmental Stewardship", "Community Development", "Ethical Practices"],
  image: "/pages/csr/overview.jpg",
  imageAlt: "CSR Overview",
};
export const valueBehindData: ValueBehindData = {
  heading: "The Values Behind Our Work",
  paragraph:
    "Not values we display, but ones we build with quietly, consistently, across every project we take on.",
  items: [
    {
      title: "Environmental Stewardship",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Community Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Ethical Practices",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Giving Back",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
  image: "/pages/csr/valueBehind/valueBehind.png",
  imageAlt: "The Values Behind Our Work",
};

export const csrGalleryData: CsrGalleryData = {
  heading: "CSR Gallery",
  paragraph:
    "Not values we display, but ones we build with quietly, consistently, across every project we take on.",
  images: [
    { src: "/pages/csr/gallery/1.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/2.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/3.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/4.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/1.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/2.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/3.png", alt: "CSR Gallery" },
    { src: "/pages/csr/gallery/4.png", alt: "CSR Gallery" },
  ],
};