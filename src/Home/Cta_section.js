import React from 'react'
import { Link } from 'react-router-dom'

const Cta_section = () => {
  return (
    <section className="cta-area cta-area-v1 pt-130">
      <div className="container-1450">
        <div className="cta-wrapper dark-blue-bg">
          {/* <div className="cta-img wow fadeInDown "><img src="assets/images/cta/img-1.jpg" alt="" /></div> */}
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="text-wrapper wow fadeInUp" data-aos="fade-up">
                <div className="section-title section-title-white mb-55">
                  <span className="sub-title st-one">Let’s Work</span>
                  <h2>Experience &amp; innovative <span className="fill-text">solutions </span> for <span className="fill-text"> creative</span> marketing &amp; development <span className="fill-text">agency</span></h2>
                </div>
                <Link to="Contact_Us" className="main-btn bordered-btn btn-white arrow-btn">Let's Work Together</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Cta_section