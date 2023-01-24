import React from 'react'
import Products from "./Products"
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <div>
        <h1>
          Groceries delivered in 30 minutes
        </h1>
        <input type="text" aria-label='Search for Products (e.g. eggs, milk, potato'/>
      </div>
      <h2>Ad</h2>
      <h2>Ad</h2>
      <div>
        <Categories />
      </div>
      <div>
        <h1>How to order from Chaldal?</h1>
        <p>slider</p>
      </div>
      <div>
        <h3>Special Offers</h3>
        <p>Automated slider with arrows</p>
      </div>
      <div>
        <h2>Why People Love Chaldal</h2>
        <img src="" alt="" />
      </div>
      <div>
        <h6>What our clients are saying</h6>

        <img src="" alt="" />

      </div>


    </div>
  )
}

export default Home
