export interface CsrOverviewData {
  headingLine1: string;
  headingLine2: string;
  paragraph: string;
  points: string[];
  image: string;
  imageAlt?: string;
}

export interface ValueBehindItem {
  title: string;
  description: string;
}

export interface ValueBehindData {
  heading: string;
  paragraph: string;
  items: ValueBehindItem[];
  image: string;
  imageAlt?: string;
}

export interface CsrGalleryImage {
  src: string;
  alt?: string;
}

export interface CsrGalleryData {
  heading: string;
  paragraph: string;
  images: CsrGalleryImage[];
}
