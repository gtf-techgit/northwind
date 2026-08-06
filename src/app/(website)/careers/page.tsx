import HeroBanner from '@/website/components/common/HeroBanner'
import CareersApplySection from '@/website/components/pages/careers/CareersApplySection'
import WhyJoinUs from '@/website/components/pages/careers/WhyJoinUs'
import { careerHeroData, jointeam, startJourney, whyjoinus } from '@/website/lib/data/careers'

const page = () => {
  return (
      <main>
        <HeroBanner data={careerHeroData} />
        <WhyJoinUs data={whyjoinus} />
        <CareersApplySection joinTeamData={jointeam} startJourneyData={startJourney} />
      </main>
    )
}

export default page