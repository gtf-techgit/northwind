import { JoinTeamData } from '@/website/types/careers'
import SectionHeader from '../../ui/SectionHeader'

const JoinTeam = ({data}: {data: JoinTeamData}) => {
  return (
     <section className="relative w-full section-padding ">

      <div className="container-custom relative z-10">
        <SectionHeader
          className="max-w-2xl mx-auto text-center"
          heading={data.heading}
          paragraph={data.paragraph}
    />

    <div className="content mt-7 md:mt-14 max-w-7xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 items-center">
     
    </div>
      </div>

    </section>
  )
}

export default JoinTeam
