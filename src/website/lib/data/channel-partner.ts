import { BuildingSuccessData } from "@/website/types/channel-partner";
import { HeroData, KeyBenefitsData } from "@/website/types/common";

export const cpHeroData: HeroData = {
  title: "Channel Partner",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/channel-partners/banner.png",
      mobile_file: "/pages/channel-partners/banner.png",
    },
    alt: "Channel Partner",
  },
};

export const cpBuildingSuccessData: BuildingSuccessData = {
  heading: "Building Success Through Strong Partnerships",
  paragraph: "We believe lasting success is built through trusted relationships. Our channel partner network brings together experienced real estate professionals who share our commitment to transparency, service, and meaningful customer experiences.",
  image: "/pages/channel-partners/success/success.png",
  imageAlt: "Building Success Through Strong Partnerships",
  items: [
    {
      icon: "quality",
      title: "Quality Projects",
      description: "Present thoughtfully planned residences with strong customer appeal.",
    },
    {
      icon: "marketing",
      title: "Marketing Support",
      description: "Access relevant sales and marketing resources.",
    },
    {
      icon: "support",
      title: "Dedicated Support",
      description: "Receive responsive assistance throughout every transaction.",
    },
    {
      icon: "process",
      title: "Transparent Process",
      description: "Experience clear communication at every stage.",
    },
    {
      icon: "insights",
      title: "Project Insights",
      description: "Stay informed with timely project information and updates.",
    },
    {
      icon: "growth",
      title: "Long-Term Growth",
      description: "Build a relationship designed for continued success.",
    },
  ],
};

export const cpKeyBenefitsData: KeyBenefitsData = {
  heading: "A Simple Way to Partner",
  paragraph: "Our streamlined approach keeps every stage clear, connected, and focused on delivering the best experience for your clients.",
  image: "/pages/channel-partners/partner/partner.png",
  imageAlt: "A Simple Way to Partner",
  items: [
    {
      icon: "register",
      title: "Register",
      description: "Share your details and join our channel partner network.",
    },
    {
      icon: "explore",
      title: "Explore",
      description: "Understand our projects, offerings, and partner resources.",
    },
    {
      icon: "connect",
      title: "Connect",
      description: "Introduce your clients to the right opportunities with our team's support.",
    },
    {
      icon: "grow",
      title: "Grow",
      description: "Build successful relationships through continued collaboration.",
    },
  ],
};