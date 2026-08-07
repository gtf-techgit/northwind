export interface GallerySectionData {
    heading: string;
    paragraph: string;
}

export type GalleryMediaType = "image" | "video";

export interface GalleryItem {
    id: string;
    src: string;
    alt?: string;
    project: string;
    type: GalleryMediaType;
}
