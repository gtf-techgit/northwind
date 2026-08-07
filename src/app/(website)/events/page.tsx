import HeroBanner from '@/website/components/common/HeroBanner'
import Moments from '@/website/components/pages/events/Moments'
import { eventItems, eventsHeroData, eventTabs, momentsData } from '@/website/lib/data/events'

const page = () => {
  return (
      <main>
        <HeroBanner data={eventsHeroData} />
        <Moments data={momentsData} tabs={eventTabs} items={eventItems} />
      </main>
    )
}

export default page