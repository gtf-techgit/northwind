"use client";

import { useRef, useState } from "react";
import { JoinTeamData, StartJourneyData } from "@/website/types/careers";
import JoinTeam from "./JoinTeam";
import StartJourney from "./StartJourney";

interface CareersApplySectionProps {
  joinTeamData: JoinTeamData;
  startJourneyData: StartJourneyData;
}

const CareersApplySection = ({
  joinTeamData,
  startJourneyData,
}: CareersApplySectionProps) => {
  const [selectedPosition, setSelectedPosition] = useState("");
  const startJourneyRef = useRef<HTMLDivElement>(null);

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    startJourneyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <JoinTeam data={joinTeamData} onApply={handleApply} />
      <div ref={startJourneyRef}>
        <StartJourney data={startJourneyData} selectedPosition={selectedPosition} />
      </div>
    </>
  );
};

export default CareersApplySection;
