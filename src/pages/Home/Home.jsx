import React from 'react'
import QuoteSection from '../../components/Sections/QuoteSection'
import HeroSection from '../../components/Sections/HeroSection'
import MottoSection from '../../components/Sections/MottoSection'
import DisplaySection from '../../components/Sections/DisplaySection'
import CameraSection from '../../components/Sections/CameraSection'

const Home = () => {
  return (
    <div>
        <QuoteSection />
        <HeroSection />
        <MottoSection  />
        <DisplaySection />
        <CameraSection />
    </div>
  )
}

export default Home