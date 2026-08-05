import type { IconType } from "react-icons";

export interface ContactInfoItem {
  icon: IconType;
  label: string;
  lines: string[];
}

export interface ContactImage {
  src: string;
  alt: string;
  bgpattern: string;
}

export interface ContactUsData {
  heading: string;
  paragraph: string;
  image: ContactImage;
  infoLeft: ContactInfoItem[];
  infoRight: ContactInfoItem[];
}

export interface FindUsData {
  heading: string;
  paragraph: string;
  mapEmbedSrc: string;
}

export interface OurSpacesData {
  heading: string;
  paragraph: string;
  backgroundImage: string;
}
