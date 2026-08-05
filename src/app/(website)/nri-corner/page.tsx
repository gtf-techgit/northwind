import HeroBanner from '@/website/components/common/HeroBanner'
import KeyBenefits from '@/website/components/common/KeyBenefits'
import HomeBuyingExperience from '@/website/components/pages/nri-corner/HomeBuyingExperience'
import { nriHeroData, nriHomeBuyingExperienceData, nriKeyBenefitsData } from '@/website/lib/data/nri-corner'

const page = () => {
  return (
      <main>
        <HeroBanner data={nriHeroData} />     
        <HomeBuyingExperience data={nriHomeBuyingExperienceData} />
        <KeyBenefits data={nriKeyBenefitsData} />        
      </main>
    )
}

export default page