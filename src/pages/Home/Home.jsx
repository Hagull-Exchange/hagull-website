import React from 'react'
import Hero from '../../components/Hero/Hero'
import Why from '../../components/Why/Why'
import OnlineVendor from '../../components/OnlineVendors/OnlineVendors'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Currencies from '../../components/Currencies/Currencies'
import WorldwWide from '../../components/WorldwWide/WorldwWide'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <Currencies />
        <OnlineVendor />
        <Why />
        <HowItWorks />
        <WorldwWide />
        <Footer />
    </div>
  )
}

export default Home