import { SectionBasicDetailsProps } from "./common";

export interface OverViewProps extends SectionBasicDetailsProps {}
export interface MissionVisionProps extends SectionBasicDetailsProps {}
export interface BrnadStoryProps extends SectionBasicDetailsProps {}

export interface LeaderShipItem {
  name: string;
  designation: string;
  desc?: string;
  files?: {
    desktop_file: string;
    mobile_file?: string;
  };
}

export interface LeaderShipProps extends Omit<
  SectionBasicDetailsProps,
  "listing"
> {
  listing?: LeaderShipItem[];
}
