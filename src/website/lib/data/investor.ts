import { HeroData } from "@/website/types/common";
import { InvestorUpdatesData, InvestorValuesData } from "@/website/types/investor";

export const investorHeroData: HeroData = {
    title: "Investor",
    media: {
        type: "image",
        files: {
            desktop_file: "/pages/investors/banner.png",
            mobile_file: "/pages/investors/banner.png",
        },
        alt: "Investor",
    },
};

export const investorValuesData: InvestorValuesData = {
    heading: "Creating Value That Lasts",
    paragraph: "We are committed to sustainable growth, responsible development, and long-term value creation for our investors, partners, and stakeholders.",
    image: "/pages/investors/value.png",
}

export const investorUpdatesData: InvestorUpdatesData = {
    heading: "Investor Updates",
    paragraph: "Stay informed with the latest updates, financial reports, and strategic insights from our company. Our investor updates provide transparency and clarity on our performance, growth initiatives, and market outlook.",
    items: [
        {
            title: "Q3 2024 Interim Report",
            tag: "New Release",
            date: "24 October 2024",
            fileUrl: "/pages/investors/reports/q3-2024-interim-report.pdf",
            isNew: true,
        },
        {
            title: "2024 Financial Calendar",
            tag: "Annual",
            date: "24 October 2024",
            fileUrl: "/pages/investors/reports/2024-financial-calendar.pdf",
        },
        {
            title: "Q2 FY2024-25 Financial Highlights",
            tag: "Quarterly",
            date: "24 October 2024",
            fileUrl: "/pages/investors/reports/q2-fy2024-25-financial-highlights.pdf",
        },
        {
            title: "2023 Fiscal Governance Review",
            tag: "Quarterly",
            date: "24 October 2024",
            fileUrl: "/pages/investors/reports/2023-fiscal-governance-review.pdf",
        },
        {
            title: "Q1 FY2024-25 Financial Highlights",
            tag: "Quarterly",
            date: "18 July 2024",
            fileUrl: "/pages/investors/reports/q1-fy2024-25-financial-highlights.pdf",
        },
        {
            title: "2023 Annual Report",
            tag: "Annual",
            date: "12 April 2024",
            fileUrl: "/pages/investors/reports/2023-annual-report.pdf",
        },
    ],
}