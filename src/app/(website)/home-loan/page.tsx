import HeroBanner from '@/website/components/common/HeroBanner'
import BankingPartners from '@/website/components/pages/homeloan/BankingPartners'
import HomeFinancing from '@/website/components/pages/homeloan/HomeFinancing'
import LoanJourney from '@/website/components/pages/homeloan/LoanJourney'
import { bankingPartnersData, homeFinancingData, homeloanHeroData, loanJourneyData } from '@/website/lib/data/homeloan'

const page = () => {
  return (
      <main>
        <HeroBanner data={homeloanHeroData} />     
        <HomeFinancing data={homeFinancingData} />    
        <LoanJourney data={loanJourneyData} /> 
        <BankingPartners data={bankingPartnersData} />
      </main>
    )
}

export default page