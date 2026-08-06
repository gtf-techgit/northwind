import { JobItem, JoinTeamData, StartJourneyData, WhyJoinUsData } from "@/website/types/careers";
import { HeroData } from "@/website/types/common";

export const careerHeroData: HeroData = {
  title: "Careers",
  media: {
    type: "image",
    desktop: "/pages/careers/banner.png",
    mobile: "/pages/careers/banner.png",
    alt: "Careers",
  },
};

export const whyjoinus: WhyJoinUsData = {
  heading: "Why Join North Wind",
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  image: "/pages/careers/whyjoinus/whyjoinus.jpg",
  imageAlt: "Why Join North Wind",
  items: [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ],
};

const jobs: JobItem[] = [
  {
    title: "Full-Stack Web Designer",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset.",
    type: "Full-time",
    location: "Location",
  },
  {
    title: "Full-Stack Web Designer",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset.",
    type: "Full-time",
    location: "Location",
  },
  {
    title: "Full-Stack Web Designer",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset.",
    type: "Full-time",
    location: "Location",
  },
];

export const jointeam: JoinTeamData = {
  heading: "Join Our Growing Team",
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  jobs,
};
export const startJourney: StartJourneyData = {
  heading: "Start Your Journey With Us",
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};
