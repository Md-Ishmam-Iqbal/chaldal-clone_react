import React from 'react'

const SpecialOffers = () => {
  return (
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
  )
}

export default SpecialOffers