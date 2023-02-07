import React from 'react'
import Navbar from '../components/Navbar'
import Head from '../components/Head'
import Categories from '../components/Categories'
import HowToOrder from '../components/HowToOrder'
import SpecialOffers from '../components/SpecialOffers'
import LoveChaldal from '../components/LoveChaldal'
import Feedback from '../components/Feedback'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <div>
    <div>
      <Navbar />
    </div>
      <div>
        <div className='componentsContainer'>
          {/* <SideBar /> */}
          <Head />
          <h1>Ad</h1>
          <Categories />
          <HowToOrder />
          <SpecialOffers />
          <LoveChaldal />
          <Feedback />
        </div>
      </div>
    </div>
  )
}

export default Home
