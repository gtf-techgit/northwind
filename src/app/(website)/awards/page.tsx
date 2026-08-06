import HeroBanner from '@/website/components/common/HeroBanner'
import Awards from '@/website/components/pages/awards/Awards'
import { awardsData, awardsHeroData } from '@/website/lib/data/awards'

const page = () => {
  return (
      <main>
        <HeroBanner data={awardsHeroData} />  
        <Awards data={awardsData} />
      </main>
    )
}

export default page