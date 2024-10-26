import React from 'react'
import { Link } from 'react-router-dom'

const Services_section = () => {
  return (
    <section className="service-area service-area-v1 bototm-minus-200 position-relative z-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55 wow fadeInUp">
              <span className="sub-title st-one">Services</span>
              <h2>Creative Design Solutions</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".2s">
              <div className="icon">
                <i className="flaticon-strategy" />
              </div>
              <div className="text">
                <h3 className="title">Strategy</h3>
                <ul className="list-style-two" style={{ color: 'black' }}>
                  <li>Goal Setting</li>
                  <li>Market Research</li>
                  <li>Risk Management</li>
                </ul>
                <Link to="/Portfolio" className="btn-link">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".3s">
              <div className="icon">
                <i className="flaticon-design" />
              </div>
              <div className="text">
                <h3 className="title">Product Design</h3>
                <ul className="list-style-two" style={{ color: 'black' }}>
                  <li>User Experience (UX)</li>
                  <li>Brand Integration</li>
                  <li>Prototyping</li>
                </ul>
                <Link to="/Portfolio" className="btn-link">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-item service-style-three mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".4s">
              <div className="icon">
                <i className="flaticon-source-code" />
              </div>
              <div className="text">
                <h3 className="title">Development</h3>
                <ul className="list-style-two" style={{ color: 'black' }}>
                  <li>Code Quality</li>
                  <li>Performance Optimization</li>
                  <li>Integration</li>
                </ul>
                <Link to="/Portfolio" className="btn-link">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Services_section