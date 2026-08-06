import { HeroData } from "@/website/types/common";
import { Faq, FaqSectionData } from "@/website/types/faq";

export const faqHeroData: HeroData = {
  title: "FAQ's",
  media: {
    type: "image",
    desktop: "/pages/faq/banner.jpg",
    mobile: "/pages/faq/banner.jpg",
    alt: "Frequently Asked Questions",
  },
};

const faqs: Faq[] = [
  {
    question: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  },
  {
    question: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  },
  {
    question: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  },
  {
    question: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  },
  {
    question: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. ?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  },
];

export const faqSectionData: FaqSectionData = {
  heading: "Frequently Asked Questions",
  paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  faqs,
};
