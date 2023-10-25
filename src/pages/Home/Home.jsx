import React from 'react'
import Hero from '../../components/Hero/Hero'
import Marquee from '../../components/Marquee/Marquee'
import Why from '../../components/Why/Why'
import OnlineVendor from '../../components/OnlineVendors/OnlineVendors'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Currencies from '../../components/Currencies/Currencies'
import WorldwWide from '../../components/WorldwWide/WorldwWide'
import Faq from '../../components/Faq/Faq'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <Marquee />
        <Why />
        <OnlineVendor />
        <HowItWorks />
        <Currencies />
        <WorldwWide />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home