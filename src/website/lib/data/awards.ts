import { AwardSectionData } from "@/website/types/awards";
import { HeroData } from "@/website/types/common";

export const awardsHeroData: HeroData = {
  title: "Awards",
  media: {
    type: "image",
    desktop: "/pages/awards/banner.jpg",
    mobile: "/pages/awards/banner.jpg",
    alt: "Awards",
  },
};

export const awardsData: AwardSectionData = {
  heading: "Awards",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  items: [
    {
      title: "Recognized For Excellence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/pages/awards/awards/award.png",
      imageAlt: "Award trophy",
    },
    {
      title: "Recognized For Excellence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/pages/awards/awards/award.png",
      imageAlt: "Award trophy",
    },
    {
      title: "Recognized For Excellence",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: "/pages/awards/awards/award.png",
      imageAlt: "Award trophy",
    },
  ],
};
