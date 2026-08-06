export interface WhyJoinUsItem {
    title: string;
    description: string;
}

export interface WhyJoinUsData {
    heading: string;
    paragraph: string;
    image: string;
    imageAlt?: string;
    items: WhyJoinUsItem[];
}
export interface JobItem {
    title: string;
    description: string;
    shortDescription: string;
    type: string;
    location: string;
    preferredBackground?: string[];
    whatWeOffer?: string[];
}
export interface JoinTeamData {
    heading: string;
    paragraph: string;
    jobs: JobItem[];
}
export interface StartJourneyData {
    heading: string;
    paragraph: string;   
}