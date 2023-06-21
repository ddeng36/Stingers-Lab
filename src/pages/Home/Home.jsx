import React from 'react'
import QuoteSection from '../../components/Sections/QuoteSection'
import HeroSection from '../../components/Sections/HeroSection'
import MottoSection from '../../components/Sections/MottoSection'
import DisplaySection from '../../components/Sections/DisplaySection'
import CameraSection from '../../components/Sections/CameraSection'
import BuzzModel from '../../components/Model/BuzzModel'

const Home = () => {
  return (
    <div>
        <QuoteSection />
        <HeroSection />
        <MottoSection  />
        <DisplaySection />
        <CameraSection />
        <BuzzModel />
    </div>
  )
}

export default Home