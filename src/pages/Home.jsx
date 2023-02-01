import React from 'react'
import Helmet from '../components/Helmet'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Helmet />
      <div className='head'>
        <div className='floatingSearchBar'>
          <div className='searchBarContainer'>
            <h2 className='searchBarText'>
              Groceries delivered in 30 minutes
            </h2>
            <form className='searchArea'>
              <table className='headTable'>
                <tbody>
                  <tr className='trHead'>
                    <td>
                      <input type="text" className='searchBoxHead' autoComplete='off' placeholder='Search for Products (e.g. eggs, milk, potato' />
                    </td>
                    <td className='buttonCell'>
                      <button type='submit' className='button2'>
                        <svg className='svgSearch' x="0px" y="0px" viewBox='0 0 100 100'>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            {/* <input type="text" aria-label='Search for Products (e.g. eggs, milk, potato'/> */}
          </div>
        </div>
      </div>
      <h1>Ad</h1>
      <div>
        <Outlet />
      </div>
      <section id='how-to-order-chaldal'>
        <div className='intialLabel'>
          <h2>
            <span></span>
            <span>
              How to order from Chaldal?
            </span>
            <span></span>
          </h2>
        </div>
        <div className="how-to-slider">
          <div className="imageCarousel">
            <div className="banner-carousel-container transition">
              <span>
                <div className="banner-slide slide"></div>
              </span>
              <span>
                <div className="banner-slide slide"></div>
              </span>
              <span>
                <div className="banner-slide slide"></div>
              </span>
            </div>
            <div className="carousel-controls-wrapper">
              <ul className='carousel-controls'>
                <li className=''></li>
                <li className=''></li>
                <li className=''></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="OfferSlider">
        <div className='intialLabel'>
          <h2>
            <span>
              Special Offers
            </span>
          </h2>
        </div>
        <div className="mainTile">
          <div className="bestSellerContainer your-offers">
            <div className="carousel items-carousel">
              <div className="items-slides-container">
                <div className="items-slides-inner-container long-transition"></div>
              </div>
              <div className="carouselLeft carouselNavigation">
                <span></span>
                <span></span>
              </div>
              <div className="carouselRight carouselNavigation">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="love-chaldal">
        <div className="initialLabel">
          <h2>
            <span>
              "Why People heart Chaldal"
            </span>
          </h2>
        </div>
        <div className="mainTile">
          <div className="tile">
            <div className="tileHeaderImg">
              <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0+Deploy-Release-189/Default/stores/chaldal/components/landingPage2/LandingPage/images/lp-features-1.jpg?v=2&q=low&webp=1" alt="" />
            </div>
            <div className="tileHeaderText">
              <h3>
                <span></span>
                <span>Convenient & Quick</span>
                <span></span>
              </h3>
              <p>
                <span></span>
                <span>
                  No waiting in traffic, no haggling, no worries carrying groceries, they're delivered right at your door.
                </span>
                <span></span>
              </p>
            </div>
          </div>
          <div className="tile">
            <div className="tileHeaderImg">
              <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg…LandingPage/images/lp-features-2.jpg?q=low&webp=1" alt="" />
            </div>
            <div className="tileHeaderText">
              <h3>
                <span></span>
                <span>Freshly Picked</span>
                <span></span>
              </h3>
              <p>
                <span></span>
                <span>
                  Our fresh produce is sourced every morning, you get the best from us.
                </span>
                <span></span>
              </p>
            </div>
          </div>
          <div className="tile">
            <div className="tileHeaderImg">
              <img src="	https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg…LandingPage/images/lp-features-3.jpg?q=low&webp=1" alt="" />
            </div>
            <div className="tileHeaderText">
              <h3>
                A wide range of Products
              </h3>
              <p>
                  With 4000+ Products to choose from, forget scouring those aisles for hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="feedback">
        <div className="intialLabel">
          <h2>What our clients are saying</h2>
        </div>
        <div className="mainTile">
          <div className="tileRow">
            <div className="carousel">
              <div className="carousel-inner-container">
                <div className="carousel-banner-review transition">
                  <div className="userRecommendation slide"></div>
                  <div className="userRecommendation slide"></div>
                  <div className="userRecommendation slide"></div>
                  <div className="userRecommendation slide"></div>
                </div>
              </div>
              <div className="carouse-controls-wrapper">
                <ul className="carousel-controls">
                  <li className=''></li>
                  <li className=''></li>
                  <li className=''></li>
                  <li className=''></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
