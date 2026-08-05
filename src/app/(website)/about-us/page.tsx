import HeroBanner from "@/website/components/common/HeroBanner";
import Overview from "@/website/components/pages/about-us/Overview";
import MissionVision from "@/website/components/pages/about-us/MissionVision";
import {
  aboutOverviewData,
  aboutUsHeroData,
  missionVisionData,
} from "@/website/lib/data/aboutUs";

const page = () => {
  return (
    <main className="about-us-page">
      <HeroBanner data={aboutUsHeroData} />
      <Overview data={aboutOverviewData} />
      <MissionVision data={missionVisionData} />
    </main>
  );
};

export default page;
