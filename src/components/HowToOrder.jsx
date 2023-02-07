import React from 'react'
import Carousel from 'react-elastic-carousel'

const slides = [
  {id: 1, title: 'Place Order' },
  {id: 2, title: 'Easy Payment' },
  {id: 3, title: 'Fast Delivery' },
];

const HowToOrder = () => {

  return (
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
              <Carousel slides={slides}>
                {/* {slides.map(slide => <span key={slides.id}>{slides.title}</span>)} */}
                  <div className="banner-slide1 slide" key={slides.id}>{slides.title}</div>
                  <div className="banner-slide2 slide" key={slides.id}>{slides.title}</div>
                  <div className="banner-slide3 slide" key={slides.id}>{slides.title}</div>
              </Carousel>
            </div>
            {/* <div className="carousel-controls-wrapper">
              <ul className='carousel-controls'>
                <li className=''></li>
                <li className=''></li>
                <li className=''></li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
  )
}

export default HowToOrder