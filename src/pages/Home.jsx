import React from 'react'
import Helmet from '../components/Helmet'
import Head from '../components/Head'
import Categories from '../components/Categories'
import HowToOrder from '../components/HowToOrder'
import SpecialOffers from '../components/SpecialOffers'
import LoveChaldal from '../components/LoveChaldal'
import Feedback from '../components/Feedback'

const Home = () => {
  return (
    <div>
      <Helmet />
      <Head />
      <h1>Ad</h1>
      <Categories />
      <HowToOrder />
      <SpecialOffers />
      <LoveChaldal />
      <Feedback />

    </div>
  )
}

export default Home
