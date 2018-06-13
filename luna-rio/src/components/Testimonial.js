import React from 'react';
import Slider from 'react-slick';

const Testimonial = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const renderTestimonials = () => {
    return (
      props.testimonialObj.map((testimonial) => {
        return (
          <div className="testimonial-background" key={testimonial.id}>
            <div className="testimonial-container" style={{display: 'flex'}}>
              <div className="single-testimonial">
                "{testimonial.testimonial1}"
                <h5>{testimonial.author1}</h5>
              </div>
              <div className="single-testimonial">
                "{testimonial.testimonial2}"
                <h5>{testimonial.author2}</h5>
              </div>
              <div className="single-testimonial">
                "{testimonial.testimonial3}"
                <h5>{testimonial.author3}</h5>
              </div>
            </div>
          </div>
        );
      })
    );
  }
  return (
    <Slider {...settings}>
      {renderTestimonials()}
    </Slider>
  );
}
export default Testimonial;
