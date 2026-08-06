import HeroBanner from '@/website/components/common/HeroBanner'
import FaqSection from '@/website/components/pages/faq/FaqSection'
import { faqHeroData, faqSectionData } from '@/website/lib/data/faq'

const page = () => {
  return (
      <main>
        <HeroBanner data={faqHeroData} />  
        <FaqSection data={faqSectionData} />          
      </main>
    )
}

export default page