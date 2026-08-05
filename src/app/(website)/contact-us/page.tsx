import HeroBanner from '@/website/components/common/HeroBanner'
import ContactUs from '@/website/components/pages/contact/ContactUs'
import FindUs from '@/website/components/pages/contact/FindUs'
import OurSpaces from '@/website/components/pages/contact/OurSpaces'
import {
  contactHeroData,
  contactUsData,
  findUsData,
  ourSpacesData,
} from '@/website/lib/data/contact'

const page = () => {
  return (
      <main>
        <HeroBanner data={contactHeroData} />
        <ContactUs data={contactUsData} />
        <OurSpaces data={ourSpacesData} />
        <FindUs data={findUsData} />
      </main>
    )
}

export default page