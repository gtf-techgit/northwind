export interface ValueCard {
  id: number;
  title: string;
  description: string;
  icon: string;

  /**
   * Final desktop position from center
   */
  x: number;
  y: number;

  /**
   * Rotation while coming out
   */
  rotation: number;
}



export const valueCards: ValueCard[] = [
  {
    id: 1,
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "leaf",
    x: 0,
    y: -250,
    rotation: 0,
  },

  {
    id: 2,
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "leaf",
    x: -450,
    y: -120,
    rotation: -8,
  },

  {
    id: 3,
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "leaf",
    x: 450,
    y: -120,
    rotation: 8,
  },

  {
    id: 4,
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "leaf",
    x: -450,
    y: 120,
    rotation: -6,
  },

  {
    id: 5,
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "leaf",
    x: 450,
    y: 120,
    rotation: 6,
  },

  {
    id: 6,
    title: "Innovation",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: "leaf",
    x: 0,
    y: 250,
    rotation: 0,
  },
];