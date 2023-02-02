import React from 'react'

const Feedback = () => {
  return (
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
  )
}

export default Feedback