"use client";

import MissionVisionDesktop from "./MissionVisionDesktop";
import MissionVisionMobile from "./MissionVisionMobile";
import type { MissionVisionProps } from "@/website/types/aboutUs";

interface MissionVisionSectionProps {
  data: MissionVisionProps[];
}

const MissionVision = ({ data }: MissionVisionSectionProps) => {
  return (
    <>
      <MissionVisionDesktop data={data} />
      <MissionVisionMobile data={data} />
    </>
  );
};

export default MissionVision;
