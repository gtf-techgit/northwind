export interface HomeFinancingCard {
  image: string;
  title: string;
}

export interface HomeFinancingData {
  heading: string;
  paragraph: string;
  cards: HomeFinancingCard[];
}

export interface LoanJourneyStep {
  icon: "list" | "hand" | "document" | "check";
  title: string;
  description: string;
}

export interface LoanJourneyData {
  heading: string;
  paragraph: string;
  image: string;
  steps: LoanJourneyStep[];
}


export interface BankingPartnersData {
  heading: string;
  paragraph: string;
  logos: { image: string; alt: string }[];
}