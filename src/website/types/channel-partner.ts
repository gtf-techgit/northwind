export interface BuildingSuccessItem {
  icon: "quality" | "marketing" | "support" | "process" | "insights" | "growth";
  title: string;
  description: string;
}

export interface BuildingSuccessData {
  heading: string;
  paragraph: string;
  image: string;
  imageAlt?: string;
  items: BuildingSuccessItem[];
}