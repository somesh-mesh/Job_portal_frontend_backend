import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'

const home = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     {/* <CategoryCarousel/>
     <LatestJobs/>
     <Footer/> */}
    </div>
  )
}

export default home
