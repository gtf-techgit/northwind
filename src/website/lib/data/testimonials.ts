import { HeroData } from "@/website/types/common";
import {
  TestimonialItem,
  TestimonialSectionData,
  VideoTestimonialItem,
} from "@/website/types/testimonials";

export const testimonialHeroData: HeroData = {
  title: "Testimonials",
  media: {
    type: "image",
    desktop: "/pages/testimonials/banner.jpg",
    mobile: "/pages/testimonials/banner.jpg",
    alt: "Testimonials",
  },
};

export const testimonialSectionData: TestimonialSectionData = {
    heading: "Testimonials",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
}

const testimonialMessage =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London";

export const textTestimonialsData: TestimonialItem[] = Array.from(
  { length: 6 },
  (_, i) => ({
    id: i + 1,
    name: "Solar Power Lightning",
    role: "Lorem Ipsum",
    image: "/pages/testimonials/avatar.png",
    message: testimonialMessage,
  })
);

export const videoTestimonialsData: VideoTestimonialItem[] = Array.from(
  { length: 6 },
  (_, i) => ({
    id: i + 1,
    name: "Solar Power Lightning",
    role: "Lorem Ipsum",
    image: i % 2 === 0 ? "/pages/home/testimonials/2.png" : "/pages/home/testimonials/1.png",
    video: "/pages/home/hero/banner.mp4",
  })
);
