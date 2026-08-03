export interface HeroSectionData {
  videoSrc: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface OverviewData {
  heading: string;
  paragraph: string;
  buttonText: string;
  stats: StatItem[];
  image: string;
}

export interface OurProjectsData {
  heading: string;
  paragraph: string;
  buttonText: string;
  bgImage: string;
}

export interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  rotation: number;
}

export interface ProjectValuesData {
  project: {
    heading: string;
    paragraph: string;
    buttonText: string;
    buttonHref: string;
    buildingDesk: string;
    buildingMob: string;
  };
  values: {
    heading: string;
    paragraph: string;
    shapeImage: string;
  };
  valueCards: ValueCard[];
}

export interface PresenceArea {
  id: string;
  label: string;
  project: string;
  description: string;
  image: string;
}

export interface OurPresenceData {
  heading: string;
  paragraph: string;
  mapImage: string;
  areaOperations: {
    heading: string;
    paragraph: string;
  };
  areas: PresenceArea[];
}

export interface AwardsData {
  heading: string;
  buttonText: string;
  buttonHref: string;
  cardHeading: string;
  cardParagraph: string;
}

export interface TestimonialItem {
  id: number;
  image: string;
  video: string;
  name: string;
}

export interface TestimonialsData {
  heading: string;
  paragraph: string;
  playIcon: string;
  testimonials: TestimonialItem[];
}

export interface BlogItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export type BlogTab = "blogs" | "media";

export interface BlogsData {
  heading: string;
  paragraph: string;
  buttonText: string;
  tabs: { id: BlogTab; label: string }[];
  blogs: BlogItem[];
  media: BlogItem[];
}

export interface InstagramPost {
  image: string;
}

export interface InstagramData {
  heading: string;
  paragraph: string;
  posts: InstagramPost[];
}

export interface ContactData {
  heading: string;
  paragraph: string;
  bgImage: string;
}
