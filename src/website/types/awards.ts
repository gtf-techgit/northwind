export interface AwardItem {
     title: string;
     description: string;
     image: string;
     imageAlt?: string;
}

export interface AwardSectionData {
     heading: string;
     paragraph: string;
     items: AwardItem[];
}