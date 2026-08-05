export interface InvestorValuesData {
  heading: string;
  paragraph: string;
  image: string;
}

export interface InvestorUpdateItem {
  title: string;
  tag: string;
  date: string;
  fileUrl: string;
  isNew?: boolean;
}

export interface InvestorUpdatesData {
  heading: string;
  paragraph: string;
  items: InvestorUpdateItem[];
}