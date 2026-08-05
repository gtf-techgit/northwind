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
