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
export interface JoinTeamData {
    heading: string;
    paragraph: string;   
}
export interface StartJourneyData {
    heading: string;
    paragraph: string;   
}