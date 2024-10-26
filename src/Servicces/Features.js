import React from 'react'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section className="features-area pt-210">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-wrapper mb-50 wow fadeInLeft" data-aos="fade-left">
              <div className="section-title mb-30">
                <span className="sub-title st-one">Features</span>
                <h2>Build Your Business
                  Workflow Faster</h2>
                <p className="blue-dark">Professional development and design agency </p>
              </div>
              <p style={{ color: 'black' }}>At Leo Digitals, we offer tailored digital marketing strategies designed to elevate your brand. From SEO and PPC to social media management, our experts craft campaigns that drive results and increase online visibility.</p>
              <Link to="/About_Us" className="main-btn">Discover More</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="features-list mb-50 wow fadeInRight" data-aos="fade-right">
              <div className="features-item mb-30">
                <div className="text">
                  <h4>Workflow</h4>
                  <p style={{ color: 'black' }}>We start by understanding your business, goals, and target audience. Through market research and competitor analysis, we gather insights to inform our strategy.</p>
                </div>
              </div>
              <div className="features-item mb-30">
                <div className="text">
                  <h4>Design Strategy</h4>
                  <p style={{ color: 'black' }}>We draft initial design concepts and wireframes, ensuring they align with your brand identity. Client feedback is crucial at this stage, as we refine the designs to meet your vision.</p>
                </div>
              </div>
              <div className="features-item mb-30">
                <div className="text">
                  <h4>Web Development</h4>
                  <p style={{ color: 'black' }}>Our developers bring the designs to life using the latest technologies. We ensure that all elements are visually appealing and interactive, providing an engaging experience for users.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Features