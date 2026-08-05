import HeroBanner from '@/website/components/common/HeroBanner'
import Policies from '@/website/components/common/Policies'
import { privacyData, privacyHeroData } from '@/website/lib/data/privacy'

const page = () => {
  return (
    <main>
        <HeroBanner data={privacyHeroData} />

        <Policies data={privacyData} />
    </main>
  )
}

export default page