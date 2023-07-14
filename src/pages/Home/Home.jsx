import React from 'react'
import HeroSection from '../../components/Sections/HeroSection'
import MottoSection from '../../components/Sections/MottoSection'
import DisplaySection from '../../components/Sections/DisplaySection'
import CameraSection from '../../components/Sections/CameraSection'
import BuzzModel from '../../components/Model/BuzzModel'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar alwayson={true} active="Home"/>
        <HeroSection />
        <MottoSection  />
        <DisplaySection />
        <CameraSection />
        <BuzzModel />
        <Footer />
    </div>
  )
}

export default Home