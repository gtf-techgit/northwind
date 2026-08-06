import HeroBanner from '@/website/components/common/HeroBanner'
import JoinTeam from '@/website/components/pages/careers/JoinTeam'
import StartJourney from '@/website/components/pages/careers/StartJourney'
import WhyJoinUs from '@/website/components/pages/careers/WhyJoinUs'
import { careerHeroData, jointeam, startJourney, whyjoinus } from '@/website/lib/data/careers'

const page = () => {
  return (
      <main>
        <HeroBanner data={careerHeroData} />  
        <WhyJoinUs data={whyjoinus} />
        <JoinTeam data={jointeam} />
        <StartJourney data={startJourney} />
      </main>
    )
}

export default page