import HeroBanner from '@/website/components/common/HeroBanner'
import KeyBenefits from '@/website/components/common/KeyBenefits'
import BuildingSuccess from '@/website/components/pages/channel-partner/BuildingSuccess'
import { cpBuildingSuccessData, cpHeroData, cpKeyBenefitsData } from '@/website/lib/data/channel-partner'

const page = () => {
  return (
      <main>
        <HeroBanner data={cpHeroData} />
        <BuildingSuccess data={cpBuildingSuccessData} />
        <KeyBenefits data={cpKeyBenefitsData} />
      </main>
    )
}

export default page