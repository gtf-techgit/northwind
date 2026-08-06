import HeroBanner from '@/website/components/common/HeroBanner'
import CsrGallery from '@/website/components/pages/csr/CsrGallery'
import CsrOverview from '@/website/components/pages/csr/CsrOverview'
import ValueBehind from '@/website/components/pages/csr/ValueBehind'
import { csrGalleryData, csrHeroData, csrOverviewData, valueBehindData } from '@/website/lib/data/csr'

const page = () => {
  return (
      <main>
        <HeroBanner data={csrHeroData} />
        <CsrOverview data={csrOverviewData} />
        <ValueBehind data={valueBehindData} />
        <CsrGallery data={csrGalleryData} />
      </main>
    )
}

export default page