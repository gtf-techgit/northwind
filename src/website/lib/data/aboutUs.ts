import {
  BrnadStoryProps,
  LeaderShipProps,
  MissionVisionProps,
  OverViewProps,
} from "@/website/types/aboutUs";
import type { HeroData, PolicyData } from "@/website/types/common";

export const aboutUsHeroData: HeroData = {
  title: "About Us",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/about-us/hero.webp",
      mobile_file: "/pages/about-us/hero.webp",
    },
    alt: "About Us",
  },
};

export const aboutOverviewData: OverViewProps = {
  title: {
    heading: "North Wind Estates Breeze Of Change",
  },
  description: {
    desc: "It is a statement of refined living. Built on the foundation of trust, transparency, and timeless design, the estate represents a commitment to creating spaces that blend luxury with functionality. Every detail at North Wind Estate is curated with precision – from the architectural planning to the finishing touches. The focus is not only on building structures but on designing a community that resonates with elegance, comfort, and long-term value.",
  },
  files: {
    desktop_file: "/pages/about-us/overview.webp",
    mobile_file: "/pages/about-us/overview.webp",
  },
  listing: [
    { key: "100%", value: "Customer-Centric Planning" },
    { key: "20+", value: "Years of Legacy" },
    { key: "10 Lakh+", value: "Sq. Ft. Delivered" },
  ],
};

export const missionVisionData: MissionVisionProps[] = [
  {
    title: {
      heading: "Our Vision",
    },
    description: {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
    },
    files: {
      desktop_file: "/pages/about-us/vision.webp",
      mobile_file: "/pages/about-us/vision.webp",
    },
  },
  {
    title: {
      heading: "Our Mission",
    },
    description: {
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing.",
    },
    files: {
      desktop_file: "/pages/about-us/mission.webp",
      mobile_file: "/pages/about-us/mission.webp",
    },
  },
];

export const BrandStory: BrnadStoryProps = {
  title: {
    heading: "The Brand Story",
  },
  description: {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  listing: [
    {
      desc: "In the realm where the North Wind blows, A tale of real estate unfolds. Not just bricks and mortar, we decree, But soulful spaces where dreams roam free.",
    },
    {
      desc: "In the realm where the North Wind blows, A tale of real estate unfolds. Not just bricks and mortar, we decree, But soulful spaces where dreams roam free.",
    },
    {
      desc: "In the realm where the North Wind blows, A tale of real estate unfolds. Not just bricks and mortar, we decree, But soulful spaces where dreams roam free.",
    },
    {
      desc: "In the realm where the North Wind blows, A tale of real estate unfolds. Not just bricks and mortar, we decree, But soulful spaces where dreams roam free.",
    },
  ],
};

export const LeaderShip: LeaderShipProps = {
  title: {
    heading: "Visionaries in action",
  },
  description: {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  listing: [
    {
      name: "Manoj Garg",
      designation: "Chief Executive Officer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text",
      files: {
        desktop_file: "/pages/about-us/leadership/leader1.webp",
      },
    },
    {
      name: "Shaurya Garg",
      designation: "Marketing & Sales Director",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text",
      files: {
        desktop_file: "/pages/about-us/leadership/leader1.webp",
      },
    },
    {
      name: "Manoj Garg",
      designation: "Chief Executive Officer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text",
      files: {
        desktop_file: "/pages/about-us/leadership/leader1.webp",
      },
    },
    {
      name: "Shaurya Garg",
      designation: "Marketing & Sales Director",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text",
      files: {
        desktop_file: "/pages/about-us/leadership/leader1.webp",
      },
    },
  ],
};
