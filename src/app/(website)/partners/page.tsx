import HeroBanner from '@/website/components/common/HeroBanner'
import Partners from '@/website/components/pages/partners/Partners'
import { partnersData, partnersHeroData } from '@/website/lib/data/partners'

const page = () => {
  return (
      <main>
        <HeroBanner data={partnersHeroData} />     
        <Partners data={partnersData} />   
      </main>
    )
}

export default page