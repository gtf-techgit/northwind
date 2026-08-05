export interface HomeInvestmentItem {
    image: string;
    title: string;
    description: string;
}

export interface HomeInvestmentData {
    heading: string;
    paragraph: string;
    items: HomeInvestmentItem[];
}