export type ProjectCard = {
  name: string;
  shortDescription: string;
  address: string;
  typology: string;
  subTypology: string;
  longDescription?: string;
  slug?: string;
  isPage?: boolean;
  files: {
    desktop_file: string;
    mobile_file: string;
  };
};

export type ProjectList = {
  projects: ProjectCard[];
};

export type Platters = {
  name: string;
  slug: string;
  files: {
    desktop_file: string;
    mobile_file: string;
  };
};

export type PlatterList = {
  platters: Platters[];
};
