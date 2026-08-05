export interface HeroMedia {
  type: "image" | "video";
  files: {
    desktop_file: string;
    mobile_file?: string;
  };
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

// Section Header
export interface SectionBasicDetailsProps {
  title?: {
    heading: string;
  };
  description?: {
    desc: string;
  };
  files?: {
    desktop_file: string;
    mobile_file?: string;
  };
  listing?: any;
}
