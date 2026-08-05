import type { HeroData } from "@/website/types/common";
import type {
  ContactImage,
  ContactInfoItem,
  ContactUsData,
  FindUsData,
  OurSpacesData,
} from "@/website/types/contact";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdWatchLater } from "react-icons/md";

export const contactHeroData: HeroData = {
  title: "Contact Us",
  media: {
    type: "image",
    desktop: "/pages/contact/banner.jpg",
    mobile: "/pages/contact/banner.jpg",
    alt: "Contact Us",
  },
};

const contactImage: ContactImage = {
  src: "/pages/contact/northwind.png",
  alt: "North Wind Estates",
  bgpattern: "/images/common/logo-pattern.png",
};

const contactInfoLeft: ContactInfoItem[] = [
  {
    icon: FaLocationDot,
    label: "Visit Us",
    lines: ["Plot 07, Sector PI-1, Greater", "Noida, UP-201306"],
  },
  {
    icon: MdEmail,
    label: "Email Us",
    lines: ["info@nwestates.in"],
  },
];

const contactInfoRight: ContactInfoItem[] = [
  {
    icon: IoCall,
    label: "Call Us",
    lines: ["+91-888 111 0909"],
  },
  {
    icon: MdWatchLater,
    label: "Business Hours",
    lines: ["Monday – Saturday", "10:00 AM – 7:00 PM"],
  },
];

export const contactUsData: ContactUsData = {
  heading: "We'd Love to Hear From You",
  paragraph:
    "Whether you're exploring your next home, seeking project information, or simply have a question, our team is here to assist you with thoughtful guidance and personalized support.",
  image: contactImage,
  infoLeft: contactInfoLeft,
  infoRight: contactInfoRight,
};

export const findUsData: FindUsData = {
  heading: "Find Us",
  paragraph:
    "Conveniently located and easily accessible, our experience centre is ready to welcome you for a personalized consultation.",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.013200549852!2d77.5441505754982!3d28.479960190992774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ce321148fa4e875%3A0x8fe4480253bf60c2!2sNorth%20Wind%20Estates!5e1!3m2!1sen!2sin!4v1785911839141!5m2!1sen!2sin",
};

export const ourSpacesData: OurSpacesData = {
  heading: "Experience Our Spaces Firsthand",
  paragraph:
    "Visit our experience centre to explore thoughtfully crafted residences, discover project details, and connect with our team in a welcoming environment designed around comfort and meaningful conversations.",
  backgroundImage: "/pages/contact/ctabg.jpg",
};

