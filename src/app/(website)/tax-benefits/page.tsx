import HeroBanner from '@/website/components/common/HeroBanner'
import KeyBenefits from '@/website/components/common/KeyBenefits'
import HomeInvestment from '@/website/components/pages/tax-benefits/HomeInvestment'
import { homeInvestmentData, keyBenefitsData, taxBenefitHeroData } from '@/website/lib/data/tax-benefits'

const page = () => {
  return (
      <main>
        <HeroBanner data={taxBenefitHeroData} />
        <HomeInvestment data={homeInvestmentData} />
        <KeyBenefits data={keyBenefitsData} />
        <section className="relative w-full section-padding">
            <div className="container-custom rounded-2xl bg-[#F0F0DB]  p-14">
                <h3 className="text-[38px] font-heading text-center capitalize mb-4">please note</h3>
                <p className="text-center pera max-w-3xl mx-auto">
                    Tax benefits are governed by applicable income tax laws and may change from time to time. Eligibility depends on individual financial circumstances, loan structure, and prevailing government regulations. We recommend consulting a qualified tax advisor before making financial decisions.
                </p>
            </div>
        </section>
      </main>
    )
}

export default page