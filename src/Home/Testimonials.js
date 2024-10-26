import React, { useState, useEffect } from 'react';
import './Testimonial.css';  // Custom styles

const testimonials = [
  {
    content:
      "Leo Digitals has been instrumental in increasing the visibility of my clinic. They completely transformed my social media presence, attracting new patients through well-targeted ads and engaging posts.",
    author: "Dr. Punit Arya",
    position: "Meta Ads Project",
    image: "assets/images/testimonial/img-1.jpg",  // Add an image for each testimonial
  },
  {
    content:
      "I was struggling to get the right kind of students for my stock market trading courses until Leo Digitals took over my social media. They created compelling content that truly resonated with my target audience and ran ads that brought in high-quality leads.",
    author: "Rinku",
    position: "Stock Market Trading Teacher",
    image: "assets/images/testimonial/img-2.jpg",  // Second image
  },
  {
    content:
      "The team at Leo Digitals has been fantastic at generating leads for my immigration office. They know exactly how to target the right audience and create ads that convert. Since partnering with them, I’ve seen a significant increase in consultations and inquiries.",
    author: "Lokesh Sharma",
    position: "Immigration Office Owner",
    image: "/assets/images/testimonial/img-3.jpg",  // Third image
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Automatically change testimonials every 5 seconds with fade effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false); // Trigger fade out

      // Wait for the fade-out transition before changing the content
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setFadeIn(true); // Trigger fade in
      }, 1000); // 500ms matches the transition duration in CSS
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <section className="testimonial-area testimonial-area-v1 dark-blue-bg pattern-bg pt-130 pb-80">
      <div className="shape-img wow fadeInRight animate-float-y" data-aos="fade-right">
        <span>
          <img
            src="assets/images/ांजदीू@3x-100.jpg"
            alt="Decorative pattern"
          />
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title section-title-white mb-50 wow fadeInLeft" data-aos="fade-left">
              <span className="sub-title st-one">Testimonials</span>
              <h2>What our clients say about us</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className={`img-holder mb-50 wow fadeInLeft ${fadeIn ? 'fade-in' : 'fade-out'}`}>
              <img
                src={testimonials[currentIndex].image}  // Dynamically display the current image
                alt={`Testimonial from ${testimonials[currentIndex].author}`}
              />
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-down">
            <div className={`testimonial-slider-one mb-50 wow fadeInRight ${fadeIn ? 'fade-in' : 'fade-out'}`}>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <i className="flaticon-quotation" />
                  <h3>{testimonials[currentIndex].content}</h3>
                  <div className="author-title">
                    <h4>{testimonials[currentIndex].author}</h4>
                    <p className="position">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
