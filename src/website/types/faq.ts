export interface Faq {
  question: string;
  answer: string;
}

export interface FaqSectionData {
  heading: string;
  paragraph: string;
  faqs: Faq[];
}
