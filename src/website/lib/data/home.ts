import type {
  HeroSectionData,
  OverviewData,
  OurProjectsData,
  ProjectValuesData,
  OurPresenceData,
  AwardsData,
  TestimonialsData,
  BlogsData,
  InstagramData,
  ContactData,
} from "@/website/types/home";

export const heroSectionData: HeroSectionData = {
  videoSrc: "/pages/home/hero/banner.mp4",
};

export const overviewData: OverviewData = {
  heading: "North Wind Estates where every breeze brings change",
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500, when an unknown printer took a galley of type.",
  buttonText: "Know More",
  stats: [
    { value: "100%", label: "Customer-Centric Planning" },
    { value: "20+", label: "Years of Legacy" },
    { value: "10 Lakh+", label: "Sq. Ft. Delivered" },
  ],
  image: "/pages/home/overview/art.png",
};

export const ourProjectsData: OurProjectsData = {
  heading: "Our Projects That Inspire Better Living",
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since 1966,",
  buttonText: "Know More",
  bgImage: "/pages/home/projects/bgpattern.png",
};

export const projectValuesData: ProjectValuesData = {
  project: {
    heading: "North Wind Sanctuary",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    buttonText: "Know More",
    buttonHref: "/",
    buildingDesk: "/pages/home/projects/elevation.png",
    buildingMob: "/pages/home/projects/elevation-mob.png",
  },
  values: {
    heading: "Values That Shape Every Space",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    shapeImage: "/pages/home/values/shape.svg",
  },
  valueCards: [
    {
      id: 1,
      title: "Innovation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "leaf",
      rotation: 0,
    },
    {
      id: 2,
      title: "Innovation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "leaf",
      rotation: -8,
    },
    {
      id: 3,
      title: "Innovation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "leaf",
      rotation: 8,
    },
    {
      id: 4,
      title: "Innovation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "leaf",
      rotation: -6,
    },
    {
      id: 5,
      title: "Innovation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "leaf",
      rotation: 6,
    },
    {
      id: 6,
      title: "Innovation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "leaf",
      rotation: 0,
    },
  ],
};

export const ourPresenceData: OurPresenceData = {
  heading: "Our presence",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  mapImage: "/pages/home/presence/map.png",
  areaOperations: {
    heading: "Area of Operations",
    paragraph: "We have projects in Greater Noida, Delhi & Dehradun",
  },
  areas: [
    {
      id: "greater-noida",
      label: "Greater Noida",
      project: "Northwind Sanctuary",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/pages/home/projects/elevation.png",
    },
    {
      id: "delhi",
      label: "Delhi",
      project: "Northwind Residency",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/pages/home/projects/elevation.png",
    },
    {
      id: "dehradun",
      label: "Dehradun",
      project: "Northwind Meadows",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/pages/home/projects/elevation.png",
    },
  ],
};

export const awardsData: AwardsData = {
  heading: "Awards That Reflect Our Commitment",
  buttonText: "Know More",
  buttonHref: "/",
  cardHeading: "Recognized For Excellence",
  cardParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export const testimonialsData: TestimonialsData = {
  heading: "Testimonials",
  paragraph:
    "Gulshan meticulously designs timeless residences from well planned neighborhoods to majestic high-rises where luxury and grandeur are never compromised.",
  playIcon: "/pages/home/testimonials/play.svg",
  testimonials: [
    { id: 1, image: "/pages/home/testimonials/2.png", video: "/pages/home/hero/banner.mp4", name: "Rohan & Priya" },
    { id: 2, image: "/pages/home/testimonials/1.png", video: "/pages/home/hero/banner.mp4", name: "Ananya Verma" },
    { id: 3, image: "/pages/home/testimonials/1.png", video: "/pages/home/hero/banner.mp4", name: "Ananya Verma" },
    { id: 4, image: "/pages/home/testimonials/2.png", video: "/pages/home/hero/banner.mp4", name: "Rohan & Priya" },
    { id: 5, image: "/pages/home/testimonials/1.png", video: "/pages/home/hero/banner.mp4", name: "Ananya Verma" },
  ],
};

export const blogsData: BlogsData = {
  heading: "Explore Our Blogs",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
  buttonText: "Know More",
  tabs: [
    { id: "blogs", label: "Blogs" },
    { id: "media", label: "Media" },
  ],
  blogs: [
    {
      id: 1,
      image: "/pages/home/blogs/1.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 15, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 2,
      image: "/pages/home/blogs/2.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 20, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 3,
      image: "/pages/home/blogs/3.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 25, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 4,
      image: "/pages/home/blogs/2.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 30, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ],
  media: [
    {
      id: 1,
      image: "/pages/home/blogs/2.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 15, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 2,
      image: "/pages/home/blogs/3.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 20, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 3,
      image: "/pages/home/blogs/1.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 25, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 4,
      image: "/pages/home/blogs/1.png",
      title: "Lorem Ipsum is simply dummy text.",
      date: "August 25, 2023",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ],
};

export const instagramData: InstagramData = {
  heading: "Follow us on instagram",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  posts: [
    { image: "/pages/home/instagram/1.png" },
    { image: "/pages/home/instagram/2.png" },
    { image: "/pages/home/instagram/3.png" },
    { image: "/pages/home/instagram/4.png" },
    { image: "/pages/home/instagram/5.png" },
  ],
};

export const contactData: ContactData = {
  heading: "Get in Touch",
  paragraph: "Have questions about our projects, pricing, or site visits? Get in touch—we're here to help.",
  bgImage: "/pages/home/contact/bgpattern.png",
};
