import { HeroData } from "@/website/types/common";
import { EmiCalculatorData } from "@/website/types/emi-calculator";

export const emiHeroData: HeroData = {
  title: "EMI Calculator",
  media: {
    type: "image",
    files: {
      desktop_file: "/pages/emi/banner.png",
      mobile_file: "/pages/emi/banner.png",
    },
    alt: "EMI Calculator",
  },
};

export const emiCalculatorData: EmiCalculatorData = {
  heading: "Plan Your Investment with Confidence",
  paragraph: "Estimate your monthly EMI by adjusting the loan amount, interest rate, and tenure. A simple way to understand your repayment and plan your home purchase with clarity.",
};