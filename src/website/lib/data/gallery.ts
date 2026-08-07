import { HeroData } from "@/website/types/common";
import { GalleryItem, GallerySectionData } from "@/website/types/gallery";

export const galleryHeroData: HeroData = {
  title: "Gallery",
  media: {
    type: "image",
    desktop: "/pages/gallery/banner.jpg",
    mobile: "/pages/gallery/banner.jpg",
    alt: "Gallery",
  },
};

export const gallerySectionData: GallerySectionData = {
    heading: "Gallery",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}

export const galleryProjects: string[] = [
  "Northwind Heights",
  "Northwind Business Park",
  "Northwind Residency",
  "Northwind Greens",
];

export const galleryItems: GalleryItem[] = [
  { id: "nh-1", src: "/pages/gallery/gallery/2.jpg", alt: "Northwind Heights", project: "Northwind Heights", type: "image" },
  { id: "nh-2", src: "/pages/gallery/gallery/1.jpg", alt: "Northwind Heights", project: "Northwind Heights", type: "video" },
  { id: "nh-3", src: "/pages/gallery/gallery/3.jpg", alt: "Northwind Heights", project: "Northwind Heights", type: "image" },
  { id: "nh-4", src: "/pages/gallery/gallery/1.jpg", alt: "Northwind Heights", project: "Northwind Heights", type: "image" },
  { id: "nh-5", src: "/pages/gallery/gallery/3.jpg", alt: "Northwind Heights", project: "Northwind Heights", type: "image" },

  { id: "nbp-1", src: "/pages/gallery/gallery/3.jpg", alt: "Northwind Business Park", project: "Northwind Business Park", type: "image" },
  { id: "nbp-2", src: "/pages/gallery/gallery/2.jpg", alt: "Northwind Business Park", project: "Northwind Business Park", type: "video" },
  { id: "nbp-3", src: "/pages/gallery/gallery/1.jpg", alt: "Northwind Business Park", project: "Northwind Business Park", type: "image" },
  { id: "nbp-4", src: "/pages/gallery/gallery/2.jpg", alt: "Northwind Business Park", project: "Northwind Business Park", type: "image" },

  { id: "nr-1", src: "/pages/gallery/gallery/1.jpg", alt: "Northwind Residency", project: "Northwind Residency", type: "image" },
  { id: "nr-2", src: "/pages/gallery/gallery/3.jpg", alt: "Northwind Residency", project: "Northwind Residency", type: "image" },
  { id: "nr-3", src: "/pages/gallery/gallery/2.jpg", alt: "Northwind Residency", project: "Northwind Residency", type: "video" },
  { id: "nr-4", src: "/pages/gallery/gallery/1.jpg", alt: "Northwind Residency", project: "Northwind Residency", type: "image" },

  { id: "ng-1", src: "/pages/gallery/gallery/2.jpg", alt: "Northwind Greens", project: "Northwind Greens", type: "image" },
  { id: "ng-2", src: "/pages/gallery/gallery/3.jpg", alt: "Northwind Greens", project: "Northwind Greens", type: "image" },
  { id: "ng-3", src: "/pages/gallery/gallery/1.jpg", alt: "Northwind Greens", project: "Northwind Greens", type: "video" },
  { id: "ng-4", src: "/pages/gallery/gallery/3.jpg", alt: "Northwind Greens", project: "Northwind Greens", type: "image" },
];
