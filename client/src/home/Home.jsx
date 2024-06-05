import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sastibook from '../components/Sastibook'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
     <Navbar/>
      <Banner/>
      <Sastibook/>
      <Footer/> 
    </div>
  )
}

export default Home
