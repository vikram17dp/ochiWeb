import React from 'react'
import Navbar from './Compnents/Navbar'
import LandingPage from './Compnents/LandingPage'
import Merquee from './Compnents/Merquee'
import About from './Compnents/About'
import Eyes from './Compnents/Eyes'
import Featured from './Compnents/Featured'
import Clinets from './Compnents/Clinets'
import OchiImagePart from './Compnents/OchiImagePart'
import Footer from './Compnents/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Merquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Clinets/>
      <OchiImagePart/>
      <Footer/>
    
    </div>
  )
}

export default App
