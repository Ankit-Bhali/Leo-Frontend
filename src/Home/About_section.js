import React from 'react'
import { Link } from 'react-router-dom'

const About_section = () => {
  return (
    <section className="about-area about-area-v1 position-relative pt-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-holder-box mb-50">
              <div className="img-holder wow fadeInLeft" data-aos="fade-left">
                <img src="/assets/images/about/about-1.jpg" alt="" />
              </div>
              <div className="shape shape-one"><span className="animate-float-y"><img src="assets/images/shape/circle-logo-2.png" className="circle-logo" alt="circle logo" /></span></div>
            </div>
          </div>
          <div className="col-lg-6" >
            <div className="text-wrapper mb-50 wow fadeInRight" data-aos="fade-right">
              <div className="section-title mb-15">
                <span className="sub-title st-one">About Us</span>
                <h2>We’re Creative
                  Agency Since 2014</h2>
              </div>
              <h4>Professional Design Agency to provide solutions</h4>
              <p style={{ color: "black" }}>Leo Digitals is a dynamic digital marketing agency dedicated to transforming your online presence. Our team of skilled professionals brings together expertise in SEO, social media, content creation, and web development to deliver innovative solutions tailored to your needs.</p>
              <ul className="list-style-one mb-35">
                <li>Digital Creative Agency</li>
                <li>Professional Lead Generation Strategy</li>
                <li>Web Design &amp; Development</li>
              </ul>
              <Link to="/Blog" className="main-btn bordered-btn btn-blue arrow-btn">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About_section