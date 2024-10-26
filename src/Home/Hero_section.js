import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Hero_section = () => {
  return (
    <section className="hero-banner-v1 position-relative">
      <div className="bg-one" />
      <div className="bg-two" />
      <div className="hero-img hero-img-one scene"><span data-depth=".5"><img src="/assets/images/hero/hero-one-img-1.jpg" className="wow fadeInLeft" alt="" /></span></div>
      <div className="hero-img hero-img-two scene"><span data-depth=".2"><img src="/assets/images/hero/hero-one-img-2.jpg" className="wow fadeInLeft" alt="" /></span></div>
      <div className="hero-img hero-img-three scene"><span data-depth=".3"><img src="assets/images/shape/circle-logo-1.png" className="wow fadeInLeft" alt="" /></span></div>
      <div className="shape shape-one scene"><span data-depth={1}><img src="assets/images/shape/shape-1.png" alt="shape" /></span></div>
      <div className="shape shape-two scene"><span data-depth={2}><img src="assets/images/shape/shape-2.png" alt="shape" /></span></div>
      <div className="shape shape-three scene"><span data-depth={3}><img src="assets/images/shape/shape-3.png" alt="shape" /></span></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-12" >
            <div className="hero-content">
              <h1 className="wow fadeInUp" data-aos="fade-up" data-wow-delay=".5s">Brand, Design
                &amp; Development
                Agency</h1>
              <p className="wow fadeInDown" data-aos="fade-down" style={{ color: "black" }} data-wow-delay="1s">Leo Digitals is a results-driven digital marketing company dedicated to helping businesses grow their online presence. With a team of experienced professionals, we specialize in SEO, social media marketing, PPC campaigns, content creation, and web development.</p>
              <Link to="/Contact_Us" className="main-btn arrow-btn wow fadeInUp" data-wow-delay=".5s">Let’s Connect</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero_section