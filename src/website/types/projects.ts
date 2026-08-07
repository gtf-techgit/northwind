export type SeoTags = {
  bodyData?: string;
  headData?: string;
  description?: string;
  meta_title?: string;
  meta_keywords?: string;
  meta_description?: string;
};

export type OtherDetails = {
  rera_no?: string;
  projectTag?: string;
  description?: string;
  rera_website?: string;
};

export type Typology = {
  name?: string;
  slug?: string;
};

export type SubTypology = {
  name?: string;
  slug?: string;
};

export type ProjectSubTypologyItem = {
  subTypology?: SubTypology;
  createdAt?: string;
  updatedAt?: string;
};

export type PlatterTitle = {
  heading?: string;
  description?: string;
};

export type Platter = {
  id?: string;
  name?: string;
  slug?: string;
  title?: PlatterTitle | string;
  description?: string | null;
  files?: {
    desktop_file?: string;
    mobile_file?: string;
  };
  type?: string;
  alt?: string;
  watermark?: string | null;
  status?: boolean;
  seoTags?: SeoTags;
  seq?: number;
};

export type ProjectCard = {
  id: string;
  platterId?: string | null;
  buildingTypeId?: string | null;
  projectBlockId?: string | null;
  projectStatusId?: string | null;
  projectCategoryId?: string | null;
  typologyId?: string | null;
  slug?: string;
  projectName?: string;
  name?: string;
  address?: string;
  shortDescription?: string;
  subTypology?: string;
  files?: {
    desktop_image?: string;
    desktop_file?: string;
    mobile_file?: string;
    mobile_image?: string;
  };
  alt?: string;
  watermark?: string | null;
  seoTags?: SeoTags;
  otherDetails?: OtherDetails;
  isPage?: boolean;
  isFeatured?: boolean;
  status?: boolean;
  seq?: number;
  typology?: Typology | null;
  projectSubTypology?: ProjectSubTypologyItem[];
  platter?: Platter | null;
};

export type ProjectList = {
  projects: ProjectCard[];
};

export type PlatterList = {
  platters: Platter[];
};
