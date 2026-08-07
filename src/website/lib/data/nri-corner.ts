import { HeroData, KeyBenefitsData } from "@/website/types/common";
import { HomeBuyingExperienceData } from "@/website/types/nri-corner";

export const nriHeroData: HeroData = {
  title: "NRI Corner",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/nri-corner/banner.png",
      mobile_file: "/pages/nri-corner/banner.png",
    },
    alt: "NRI Corner",
  },
};

export const nriHomeBuyingExperienceData: HomeBuyingExperienceData = {
  heading: "A Seamless Home Buying Experience",
  paragraph: "Owning a home in India should feel effortless, no matter where life has taken you. From your first enquiry to final documentation and post-purchase support, our dedicated team ensures a transparent, personalized, and hassle-free experience designed around the needs of Non-Resident Indians.",
  image: "/pages/nri-corner/home.png",
  imageAlt: "A Seamless Home Buying Experience",
  items: [
    {
      title: "Virtual Project Tours",
      description: "Explore projects from anywhere, at your convenience.",
    },
    {
      title: "Relationship Manager",
      description: "Personalized guidance from enquiry to possession.",
    },
    {
      title: "Documentation Assistance",
      description: "Expert support for a smooth documentation process.",
    },
    {
      title: "Post-Purchase Assistance",
      description: "Continued support, even after your home is delivered.",
    },
    {
      title: "Flexible Payment Support",
      description: "Simple, transparent guidance at every payment stage.",
    },
    {
      title: "Secure Digital Communication",
      description: "Stay informed with seamless online updates.",
    },
  ],
};

export const nriKeyBenefitsData: KeyBenefitsData = {
  heading: "Your Journey, Simplified",
  paragraph: "A carefully guided process designed to make purchasing your home in India smooth, transparent, and worry-free.",
  image: "/pages/nri-corner/journey.png",
  imageAlt: "Your Journey, Simplified",
  items: [
    {
      icon: "call",
      title: "Connect With Us",
      description: "Share your requirements, preferred location, and investment goals with our team.",
    },
    {
      icon: "building",
      title: "Explore Projects",
      description: "Experience detailed presentations, virtual walkthroughs, and personalized projects",
    },
    {
      icon: "keys",
      title: "Reserve Your Home",
      description: "Complete your booking with expert guidance and complete transparency.",
    },
    {
      icon: "handshake",
      title: "Stay Connected",
      description: "Receive regular construction updates, milestone notifications, and continued support",
    },
  ],
};