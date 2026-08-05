export interface HeroMedia {
  type: "image" | "video";
  desktop: string;
  mobile?: string;
  poster?: string;
  alt?: string;
}

export interface HeroData {
  title?: string;
  media?: HeroMedia;
}

export interface PolicyData {
  heading: string;
  content: string;
}

export interface KeyBenefitItem {
  icon?: "register" | "explore" | "connect" | "grow" | "call" | "building" | "keys" | "handshake";
  title: string;
  description: string;
}

export interface KeyBenefitsData {
  heading: string;
  paragraph?: string;
  image: string;
  imageAlt?: string;
  items: KeyBenefitItem[];
}
