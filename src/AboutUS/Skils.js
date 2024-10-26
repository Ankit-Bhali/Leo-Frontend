import React from 'react'

const Skils = () => {
  return (
    <div className="skill-area skill-area-v2 pt-130 pb-80 position-relative z-1">
      <div className="shape shape-one scene"><span data-depth={1}><img src="assets/images/shape/shape-7.png" alt /></span></div>
      <div className="shape shape-two scene"><span data-depth={2}><img src="assets/images/shape/shape-8.png" alt /></span></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="img-holder position-relative z-1 mb-50 wow fadeInLeft" data-aos="fade-left">
              <div className="shape shape-one"><span><img src="assets/images/shape/shape-5.png" alt /></span></div>
              <img src="assets/images/skill/img-1.jpg" alt />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text-wrapper mb-50 wow fadeInRight" data-aos="fade-right">
              <div className="section-title mb-30">
                <span className="sub-title st-one">Best Skills</span>
                <h2>Experience Team to
                  Provide Ideas</h2>
                <p style={{ color: 'black' }}>Professional agency to provide solutions</p>
              </div>
              <div className="skill-list">
                <div className="single-skill">
                  <div className="progress-title">
                    <h5>UX/UI Strategy <span>89%</span></h5>
                  </div>
                  <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: '89%' }} />
                  <div className="progress" />
                </div>
                <div className="single-skill">
                  <div className="progress-title">
                    <h5>Web Development <span>90%</span></h5>
                  </div>
                  <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: '90%' }} />
                  <div className="progress" />
                </div>
                <div className="single-skill">
                  <div className="progress-title">
                    <h5>Digital Marketing<span>93%</span></h5>
                  </div>
                  <div className="progress-bar wow slideInLeft" role="progressbar" style={{ width: '93%' }} />
                  <div className="progress" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skils