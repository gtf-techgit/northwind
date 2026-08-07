export interface BlogSectionData {
    heading: string;
    paragraph: string;
}

export type BlogContentBlock =
    | { type: "heading"; text: string }
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt?: string };

export interface BlogItem {
    id: string;
    image: string;
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    isFeature?: boolean;
    content: BlogContentBlock[];
}