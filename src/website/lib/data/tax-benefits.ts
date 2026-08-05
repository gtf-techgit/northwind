import { HeroData, KeyBenefitsData } from "@/website/types/common";
import { HomeInvestmentData } from "@/website/types/tax-benefits";

export const taxBenefitHeroData: HeroData = {
  title: "Tax Benefits",
  media: {
    type: "image",
    desktop: "/pages/tax-benefits/banner.png",
    mobile: "/pages/tax-benefits/banner.png",
    alt: "Tax Benefits",
  },
};

export const homeInvestmentData: HomeInvestmentData = {
  heading: "Make the Most of Your Home Investment",
  paragraph: "Homeownership may offer valuable tax benefits on eligible home loans under applicable income tax provisions. Understanding these benefits can help you plan your finances with greater confidence.",
  items: [
    {
      image: "/pages/tax-benefits/homeInvestment/1.jpg",
      title: "First-Time Homebuyers",
      description: "Additional tax benefits may be available under applicable provisions.",
    },
    {
      image: "/pages/tax-benefits/homeInvestment/2.jpg",
      title: "Home Loan Interest",
      description: "Tax benefits may be available on the interest paid towards your home loan.",
    },
    {
      image: "/pages/tax-benefits/homeInvestment/3.jpg",
      title: "Principal Repayment",
      description: "Eligible principal repayments may qualify for tax deductions.",
    },
  ],
};

export const keyBenefitsData: KeyBenefitsData = {
  heading: "Key Tax Benefits",
  paragraph: "The exact benefits depend on individual eligibility, loan type, and prevailing tax regulations.",
  image: "/pages/tax-benefits/benefits/benefit.png",
  imageAlt: "Key Tax Benefits",
  items: [
    {
      title: "Interest Deduction",
      description: "Available on eligible interest payments for home loans.",
    },
    {
      title: "Principal Deduction",
      description: "Applicable on qualifying principal repayments.",
    },
    {
      title: "Additional Benefits",
      description: "Certain homebuyers may qualify for extra deductions under specific conditions.",
    },
    {
      title: "Joint Ownership",
      description: "Eligible co-borrowers may claim benefits individually, where applicable.",
    },
  ],
};