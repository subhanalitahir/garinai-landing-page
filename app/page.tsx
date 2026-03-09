import DotGlobeHeroDemo from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ContributorRewards from '@/components/ContributorRewards'
import Payments from '@/components/Payments'
import BlockchainInfra from '@/components/BlockchainInfra'
import Roadmap from '@/components/Roadmap'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <div>
      <DotGlobeHeroDemo />
      <Features />
      <NewSection/>
      <HowItWorks />
      <ContributorRewards />
      <Payments />
      <BlockchainInfra />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  )
}