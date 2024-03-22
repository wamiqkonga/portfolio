import React from "react";
import './testimonials.css';
import TestimonialImg from '../../assets/reviews.jpeg'

const Testimonials = ()=> {
  return(
    <section id="reviews">
      <div>
        <span ><h2 className="reviewsTitle">Testimonials</h2></span>
        <div>
          <img src={TestimonialImg} alt="" className="imgReviews" />
          <img src={TestimonialImg}alt="" className="imgReviews" />
          <img src={TestimonialImg} alt="" className="imgReviews" />
        </div>
        
      </div>
    </section>
  )
}
export default Testimonials;