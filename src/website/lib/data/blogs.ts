import { BlogContentBlock, BlogItem, BlogSectionData } from "@/website/types/blogs";
import { HeroData } from "@/website/types/common";

export const blogsHeroData: HeroData = {
  title: "Blogs",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/blogs/banner.png",
      mobile_file: "/pages/blogs/banner.png",
    },
    alt: "Blogs",
  },
};

export const blogSectionData: BlogSectionData = {
  heading: "Stories That Inspire Better Living",
  paragraph: "Explore thoughtful articles on architecture, design, wellness, sustainability, and modern living. Discover ideas that enrich everyday experiences and celebrate timeless craftsmanship."
}

const blogImages = [
  "/pages/blogs/blogs/1.png",
  "/pages/blogs/blogs/2.png",
  "/pages/blogs/blogs/3.png",
];

const buildBlogContent = (title: string, bodyImage: string): BlogContentBlock[] => [
  {
    type: "paragraph",
    text: `${title} explores how thoughtful design decisions shape the way we live, feel, and connect with our surroundings. This piece looks at the ideas, materials, and choices that come together to create spaces that are both functional and inspiring.`,
  },
  { type: "heading", text: "Why It Matters" },
  {
    type: "paragraph",
    text: "Every design decision has an impact, on comfort, on wellbeing, and on how a space is experienced over time. Thoughtful architecture considers not just how a space looks, but how it feels to live in every day.",
  },
  { type: "heading", text: "Our Approach" },
  {
    type: "paragraph",
    text: "We start by understanding how people actually use a space, then shape the architecture, layout, and materials around that understanding. Careful planning ensures that form and function work together seamlessly.",
  },
  {
    type: "paragraph",
    text: "Rather than treating design as an afterthought, we integrate it into every stage of the process, from initial concept to final finishing touches.",
  },
  { type: "image", src: bodyImage, alt: title },
  { type: "heading", text: "Bringing Ideas to Life" },
  {
    type: "paragraph",
    text: "Natural materials, warm textures, and considered detailing come together to create interiors that feel timeless rather than trend-driven. Every element is chosen to enhance comfort and longevity.",
  },
  { type: "heading", text: "Creating Spaces That Endure" },
  {
    type: "paragraph",
    text: "Good design continues to deliver value long after construction is complete, spaces that remain adaptable, comfortable, and relevant for years to come.",
  },
  {
    type: "paragraph",
    text: "Ultimately, the goal is to create homes and spaces that support the way people actually live, today and into the future.",
  },
];

export const blogItems: BlogItem[] = Array.from({ length: 18 }, (_, index) => {
  const title = "Lorem Ipsum is simply dummy text.";
  const image = blogImages[index % blogImages.length];
  const bodyImage = blogImages[(index + 1) % blogImages.length];

  return {
    id: `blog-${index + 1}`,
    image,
    title,
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    date: "15 July 2026",
    slug: `blog-${index + 1}`,
    isFeature: index < 3,
    content: buildBlogContent(title, bodyImage),
  };
});