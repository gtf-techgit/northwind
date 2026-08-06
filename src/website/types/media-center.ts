export interface VoiceTab {
    id: "all" | "online" | "offline";
    label: string;
}

export interface VoiceItem {
    id: string;
    category: "online" | "offline";
    logo: string;
    title: string;
    description: string;
}

export interface VoiceData {
    heading: string;
    paragraph: string;
    tabs: VoiceTab[];
    items: VoiceItem[];
}

export interface BrandAssetFile {
    label: string;
    url: string;
}

export interface BrandAssetLogo {
    id: string;
    theme: "light" | "dark";
    image: string;
    alt: string;
    files: BrandAssetFile[];
}

export interface BrandAssetData {
    heading: string;
    paragraph: string;
    logos: BrandAssetLogo[];
}
