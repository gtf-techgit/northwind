import HeroBanner from '@/website/components/common/HeroBanner'
import InvestorUpdates from '@/website/components/pages/investor/InvestorUpdates'
import Values from '@/website/components/pages/investor/Values'
import { investorHeroData, investorUpdatesData, investorValuesData } from '@/website/lib/data/investor'

const page = () => {
  return (
      <main>
        <HeroBanner data={investorHeroData} />     
        <Values data={investorValuesData} />
        <InvestorUpdates data={investorUpdatesData} />
      </main>
    )
}

export default page