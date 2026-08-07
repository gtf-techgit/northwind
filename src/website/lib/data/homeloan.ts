import { HeroData } from "@/website/types/common";
import { BankingPartnersData, HomeFinancingData, LoanJourneyData } from "@/website/types/homeloan";

export const homeloanHeroData: HeroData = {
  title: "Home Loan",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/homeloan/banner.png",
      mobile_file: "/pages/homeloan/banner.png",
    },
    alt: "Home Loan",
  },
};

export const homeFinancingData: HomeFinancingData = {
  heading: "Making Home Financing Simple",
  paragraph: "Finding the right home loan is an important step toward homeownership. Our team helps you understand financing options, making the process smooth, transparent, and stress-free.",
  cards: [
    { image: "/pages/homeloan/financing/1.jpg", title: "Faster Coordination" },
    { image: "/pages/homeloan/financing/2.jpg", title: "Transparent Assistance" },
    { image: "/pages/homeloan/financing/3.jpg", title: "Trusted Banking Partners" },
    { image: "/pages/homeloan/financing/4.jpg", title: "Expert Guidance" },
    { image: "/pages/homeloan/financing/5.jpg", title: "Documentation Support" },
  ],
};

export const loanJourneyData: LoanJourneyData = {
  heading: "Your Loan Journey, Simplified",
  paragraph: "A step-by-step approach designed to make financing your dream home easier.",
  image: "/pages/homeloan/loan-journey/journey.png",
  steps: [
    {
      icon: "list",
      title: "Share Your Requirements",
      description: "Tell us about your budget and financing needs.",
    },
    {
      icon: "hand",
      title: "Choose the Right Loan",
      description: "Explore suitable financing options with expert guidance.",
    },
    {
      icon: "document",
      title: "Complete Documentation",
      description: "Submit the necessary documents for processing.",
    },
    {
      icon: "check",
      title: "Loan Approval & Disbursement",
      description: "Move forward with confidence toward your new home.",
    },
  ],
}

export const bankingPartnersData: BankingPartnersData = {
  heading: "Trusted Banking Partners",
  paragraph: "We collaborate with leading banks to provide you with a range of home loan options, ensuring you find the best fit for your financial needs.",
  logos: [
    { image: "/pages/homeloan/partners/1.png", alt: "Logo" },
    { image: "/pages/homeloan/partners/2.png", alt: "Logo" },
    { image: "/pages/homeloan/partners/3.png", alt: "LogoPartners" },
    { image: "/pages/homeloan/partners/4.png", alt: "Logo" },
    { image: "/pages/homeloan/partners/5.png", alt: "Logo" },
  ],
};
