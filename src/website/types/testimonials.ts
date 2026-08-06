export interface TestimonialSectionData {
    heading: string;
    paragraph: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

export interface VideoTestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string;
  video: string;
}
