import DotGlobeHeroDemo from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import ContributorRewards from '@/components/ContributorRewards'
import Payments from '@/components/Payments'
import BlockchainInfra from '@/components/BlockchainInfra'
import TechStack from '@/components/TechStack'
import Roadmap from '@/components/Roadmap'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <DotGlobeHeroDemo />
      <Features />
      <HowItWorks />
      <ContributorRewards />
      <Payments />
      <BlockchainInfra />
      <TechStack />
      <Roadmap />
      <CTA />
      <Footer />
    </div>
  )
}