export interface HomeBuyingExperienceItem {
  title: string;
  description: string;
}

export interface HomeBuyingExperienceData {
  heading: string;
  paragraph: string;
  image: string;
  imageAlt?: string;
  items: HomeBuyingExperienceItem[];
}
