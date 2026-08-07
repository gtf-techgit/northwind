import HeroBanner from "@/website/components/common/HeroBanner";
import Overview from "@/website/components/pages/about-us/Overview";
import MissionVision from "@/website/components/pages/about-us/MissionVision";
import BrandStoryComponent from "@/website/components/pages/about-us/BrandStory";
import {
  aboutOverviewData,
  aboutUsHeroData,
  missionVisionData,
  BrandStory,
} from "@/website/lib/data/aboutUs";

const page = () => {
  return (
    <main className="about-us-page">
      <HeroBanner data={aboutUsHeroData} />
      <Overview data={aboutOverviewData} />
      <MissionVision data={missionVisionData} />
      <BrandStoryComponent data={BrandStory} />
    </main>
  );
};

export default page;
