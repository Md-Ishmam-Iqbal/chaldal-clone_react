import React from 'react'
import Navbar from '../components/Navbar'
import Head from '../components/Head'
import Categories from '../components/Categories'
import HowToOrder from '../components/HowToOrder'
import SpecialOffers from '../components/SpecialOffers'
import LoveChaldal from '../components/LoveChaldal'
import Feedback from '../components/Feedback'
import SideBar from '../components/SideBar'
import DiscountOffers from '../components/DiscountOffers'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <div className='componentsContainer'>
          <SideBar />
          <Cart />
          <div id='everythingElseWrapper'>
            <Head />
            <DiscountOffers />
            <Categories />
            <HowToOrder />
            <SpecialOffers />
            <LoveChaldal />
            <Feedback />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
