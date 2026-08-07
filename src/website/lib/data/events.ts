import { HeroData } from "@/website/types/common";
import { EventItem, EventTab, MomentsData } from "@/website/types/events";

export const eventsHeroData: HeroData = {
  title: "Events",
  media: {
    type: "image",
    desktop: "/pages/events/banner.png",
    mobile: "/pages/events/banner.png",
    alt: "Events",
  },
};

export const momentsData: MomentsData = {
    heading: "Moments That Bring Our Community Together",
    paragraph: "From exclusive launches to festive celebrations and community gatherings, discover the experiences that create lasting memories beyond the home."
}

export const eventTabs: EventTab[] = [
    { id: "all", label: "All Events" },
    { id: "launches", label: "Launches" },
    { id: "brand-milestones", label: "Brand Milestones" },
    { id: "cultural", label: "Cultural" },
    { id: "customer-experiences", label: "Customer Experiences" },
    { id: "community-csr", label: "Community & CSR" },
];

export const eventItems: EventItem[] = [
    {
        id: "event-1",
        image: "/pages/events/events/1.jpg",
        title: "New Tower Launch",
        category: "launches",
        isFeature: true,
    },
    {
        id: "event-2",
        image: "/pages/events/events/2.jpg",
        title: "Christmas Celebration",
        category: "cultural",
        isFeature: true,
    },
    {
        id: "event-3",
        image: "/pages/events/events/3.jpg",
        title: "Milestone Toast",
        category: "brand-milestones",
        isFeature: true,
    },
    {
        id: "event-4",
        image: "/pages/events/events/4.jpg",
        title: "Independence Day",
        category: "community-csr",
    },
    {
        id: "event-5",
        image: "/pages/events/events/5.jpg",
        title: "Community Breakfast",
        category: "customer-experiences",
    },
    {
        id: "event-6",
        image: "/pages/events/events/6.jpg",
        title: "Diwali Gathering",
        category: "cultural",
    },
    {
        id: "event-7",
        image: "/pages/events/events/7.jpg",
        title: "Family Day",
        category: "customer-experiences",
    },
    {
        id: "event-8",
        image: "/pages/events/events/8.jpg",
        title: "Project Handover",
        category: "brand-milestones",
    },
    {
        id: "event-9",
        image: "/pages/events/events/9.jpg",
        title: "CSR Plantation Drive",
        category: "community-csr",
    },
];