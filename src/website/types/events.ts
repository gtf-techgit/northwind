export interface MomentsData {
    heading: string;
    paragraph: string;
}

export type EventCategory =
    | "launches"
    | "brand-milestones"
    | "cultural"
    | "customer-experiences"
    | "community-csr";

export interface EventTab {
    id: EventCategory | "all";
    label: string;
}

export interface EventItem {
    id: string;
    image: string;
    title: string;
    category: EventCategory;
    isFeature?: boolean;
}
