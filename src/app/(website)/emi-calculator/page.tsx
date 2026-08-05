import HeroBanner from '@/website/components/common/HeroBanner'
import Calculator from '@/website/components/pages/emi-calculator/Calculator'
import { emiCalculatorData, emiHeroData } from '@/website/lib/data/emi-calculator'

const page = () => {
  return (
      <main>
        <HeroBanner data={emiHeroData} />
        <Calculator data={emiCalculatorData} />
      </main>
    )
}

export default page