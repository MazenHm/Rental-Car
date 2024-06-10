import React from 'react'
import './ReviewSection.css'
const ReviewSection = () => {
  return (
    <div className="reviews-section">
          <div className="reviews-container">
            <div className="reviews-box">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="review-card">
              <div className="reviews-card-container">
                <div className="review-box-card">
                  <p>
                    "We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental rates were
                    very affordable. "
                  </p>
                  <div className="d-flex align-items-center justify-content-between gap-5 mt-4">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="/assets/car/pfp1.ba7974ae51bb5d44fa69.jpg"
                        height="70"
                        width="70"
                        alt=""
                      />
                      <div className="d-flex flex-column">
                        <h4>Parry Hotter</h4>
                        <p>Belgrade</p>
                      </div>
                    </div>
                    <i class="fas fa-quote-right"></i>
                  </div>
                </div>
                <div className="review-box-card">
                  <p>
                    "We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental rates were
                    very affordable. "
                  </p>
                  <div className="d-flex align-items-center justify-content-between gap-5 mt-4">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="/assets/car/pfp1.ba7974ae51bb5d44fa69.jpg"
                        height="70"
                        width="70"
                        alt=""
                      />
                      <div className="d-flex flex-column">
                        <h4>Parry Hotter</h4>
                        <p>Belgrade</p>
                      </div>
                    </div>
                    <i class="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ReviewSection
