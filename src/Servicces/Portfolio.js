import React from 'react';
import Slider from 'react-slick'; // Import the Slider
import './Portfolio.css'; // Create and style your Portfolio CSS

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the speed for autoplay (3000ms = 3 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="portfolio-area portfolio-area-v1 pt-130 pb-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Latest Work</span>
              <h2>Professional Experience</h2>
              <p style={{ color: 'black' }}>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="portfolio-item portfolio-style-one wow fadeInUp" data-aos="fade-up">
            <div className="img-holder">
              <img src="assets/images/portfolio/img-1.jpg" alt="Img" />
              <a href="assets/images/portfolio/img-1.jpg" className="portfolio-hover img-popup">
                <div className="hover-content">
                  <i className="far fa-plus" />
                </div>
              </a>
            </div>
            <div className="text">
              <h3 className="title"><a href="project-details.html">Mobile UI Mockup</a></h3>
              <a href="projects.html" className="cat-link">Creative Design</a>
            </div>
          </div>
          <div className="portfolio-item portfolio-style-one wow fadeInUp" data-aos="fade-up">
            <div className="img-holder">
              <img src="assets/images/portfolio/img-2.jpg" alt="Img" />
              <a href="assets/images/portfolio/img-2.jpg" className="portfolio-hover img-popup">
                <div className="hover-content">
                  <i className="far fa-plus" />
                </div>
              </a>
            </div>
            <div className="text">
              <h3 className="title"><a href="project-details.html">Landing Pages</a></h3>
              <a href="projects.html" className="cat-link">Creative Design</a>
            </div>
          </div>
          <div className="portfolio-item portfolio-style-one wow fadeInUp" data-aos="fade-up">
            <div className="img-holder">
              <img src="assets/images/portfolio/img-3.jpg" alt="Img" />
              <a href="assets/images/portfolio/img-3.jpg" className="portfolio-hover img-popup">
                <div className="hover-content">
                  <i className="far fa-plus" />
                </div>
              </a>
            </div>
            <div className="text">
              <h3 className="title"><a href="project-details.html">Illustration Design</a></h3>
              <a href="projects.html" className="cat-link">Creative Design</a>
            </div>
          </div>
          <div className="portfolio-item portfolio-style-one wow fadeInUp" data-aos="fade-up">
            <div className="img-holder">
              <img src="assets/images/portfolio/img-4.jpg" alt="Img" />
              <a href="assets/images/portfolio/img-4.jpg" className="portfolio-hover img-popup">
                <div className="hover-content">
                  <i className="far fa-plus" />
                </div>
              </a>
            </div>
            <div className="text">
              <h3 className="title"><a href="project-details.html">Dashboard Design</a></h3>
              <a href="projects.html" className="cat-link">Creative Design</a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;
