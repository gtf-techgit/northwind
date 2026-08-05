import HeroBanner from '@/website/components/common/HeroBanner'
import Policies from '@/website/components/common/Policies'
import { termsData, termsHeroData } from '@/website/lib/data/terms'

const page = () => {
  return (
    <main>
        <HeroBanner data={termsHeroData} />

        <Policies data={termsData} />
    </main>
  )
}

export default page