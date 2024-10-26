import React from 'react'

const WorkingModule = () => {
  return (
    <section className="process-area process-area-v2 dark-blue-bg pt-130 pb-130 position-relative z-1">
      <div className="shape shape-one scene"><span data-depth=".5"><img src="assets/images/shape/shape-10.png" alt="" /></span></div>
      <div className="shape shape-two scene"><span data-depth={1}><img src="assets/images/shape/shape-11.png" alt="" /></span></div>
      <div className="shape shape-three"><span /></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title section-title-white text-center mb-55 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Working Module</span>
              <h2>Creative Web Design Process</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="process-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="process-item mb-65 wow fadeInUp" data-wow-delay=".2s" data-aos="fade-up">
                    <div className="icon">
                      <img src="assets/images/icon/icon-10.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="step">Step 01</span>
                      <h4>Make a Smart Plan</h4>
                      <p><b>Planning is the foundation of success.</b> </p>
                      <p style={{ color: 'black' }}> We believe in creating a customized, strategic plan that meets your specific needs. Our approach ensures that every move is calculated and every goal is within reach.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-item mb-65 wow fadeInUp" data-wow-delay=".3s" data-aos="fade-up">
                    <div className="icon">
                      <img src="assets/images/icon/icon-11.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="step">Step 02</span>
                      <h4>Prototype</h4>
                      <p ><b>Turning ideas into actionable prototypes.</b>   </p>
                      <p style={{ color: 'black' }}>Once the plan is set, we start crafting prototypes to visualize and test ideas in real-world scenarios. This step helps identify potential improvements early on.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-item mb-65 wow fadeInUp" data-wow-delay=".4s" data-aos="fade-up">
                    <div className="icon">
                      <img src="assets/images/icon/icon-12.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="step">Step 03</span>
                      <h4>Development</h4>
                      <p><b>Bringing your vision to life.</b> </p>
                      <p style={{ color: 'black' }}>With the prototype validated, our team gets to work on development. We employ the latest technology and best practices to create a product that performs as expected
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="process-item mb-65 wow fadeInUp" data-wow-delay=".5s" data-aos="fade-up">
                    <div className="icon">
                      <img src="assets/images/icon/icon-13.png" alt="" />
                    </div>
                    <div className="text">
                      <span className="step">Step 04</span>
                      <h4>Get Results</h4>
                      <p><b>Delivering measurable outcomes.</b> </p>
                      <p style={{ color: 'black' }}> Our goal is to deliver results that exceed expectations. After development, we provide measurable insights into how the solution is performing and continuously optimize for even better outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WorkingModule