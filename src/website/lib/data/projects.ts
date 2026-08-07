import { Platter, ProjectCard } from "@/website/types/projects";

export const PlatterListData: Platter[] = [
  {
    id: "platter-1",
    name: "Residential",
    slug: "residential",
  },
  {
    id: "platter-2",
    name: "Commercial",
    slug: "commercial",
  },
  {
    id: "platter-3",
    name: "Hospitality",
    slug: "hospitality",
  },
];

export const ProjectListData: ProjectCard[] = [
  {
    id: "fsadfsa3343",
    name: "Project 1",
    shortDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    address: "Plot 07, Sector Pi-1, Greater Noida",
    typology: {
      name: "Apartment",
      slug: "apartment",
    },
    platter: {
      name: "residential",
      slug: "residential",
    },
    projectSubTypology: [
      {
        subTypology: {
          name: "3, 4 & 4 BHK + Servant",
          slug: "3-4-4-bhk-servant-premium-residences",
        },
      },
      {
        subTypology: {
          name: "Premium Residences",
          slug: "premium-residences",
        },
      },
    ],
    slug: "project-1",
    isPage: true,
    files: {
      desktop_file: "/projects/residential/projects/project-1.webp",
      mobile_file: "/projects/residential/projects/project-1.webp",
    },
  },
  // {
  //   id: "dsfdsadfd",
  //   name: "Project 2",
  //   shortDescription:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   address: "Plot 07, Sector Pi-1, Greater Noida",
  //   typology: {
  //     name: "Apartment",
  //     slug: "apartment",
  //   },
  //   platter: {
  //     name: "residential",
  //     slug: "residential",
  //   },
  //   projectSubTypology: [
  //     {
  //       subTypology: {
  //         name: "3, 4 & 4 BHK + Servant",
  //         slug: "3-4-4-bhk-servant-premium-residences",
  //       },
  //     },
  //     {
  //       subTypology: {
  //         name: "Premium Residences",
  //         slug: "premium-residences",
  //       },
  //     },
  //   ],
  //   slug: "project-1",
  //   isPage: true,
  //   files: {
  //     desktop_file: "/projects/residential/projects/project-1.webp",
  //     mobile_file: "/projects/residential/projects/project-1.webp",
  //   },
  // },
];
