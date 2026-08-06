import HeroBanner from '@/website/components/common/HeroBanner'
import BrandAsset from '@/website/components/pages/media-center/BrandAsset'
import Voices from '@/website/components/pages/media-center/Voices'
import { brandData, mediaHeroData, voiceData } from '@/website/lib/data/media-center'

const page = () => {
  return (
      <main>
        <HeroBanner data={mediaHeroData} />    
        <Voices data={voiceData} />  
        <BrandAsset data={brandData} />
      </main>
    )
}

export default page