import React from 'react'

const Process = () => {
  return (
    <section className="process-area process-area-v1 pt-90 pb-85">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center mb-55 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Process</span>
              <h2>How Do We Work</h2>
              <p style={{ color: 'black' }}>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 process-column">
            <div className="process-item text-center mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".15s">
              <div className="icon">
                <img src="assets/images/icon/icon-7.png" alt='' />
              </div>
              <div className="text">
                <h4>Discovery and Research</h4>
                <p style={{ color: 'black' }}>We start by understanding your business, goals, and target audience. Through market research and competitor analysis, we gather insights to inform our strategy.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 process-column">
            <div className="process-item text-center mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".20s">
              <div className="icon">
                <img src="assets/images/icon/icon-8.png" alt='' />
              </div>
              <div className="text">
                <h4>Strategy Development</h4>
                <p style={{ color: 'black' }}>Based on our research, we create a comprehensive digital marketing strategy tailored to your specific needs. This includes defining objectives, key performance indicators (KPIs), and outlining actionable steps.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 process-column">
            <div className="process-item text-center mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".25s">
              <div className="icon">
                <img src="assets/images/icon/icon-9.png" alt='' />
              </div>
              <div className="text">
                <h4>Quality Assurance and Testing</h4>
                <p style={{ color: 'black' }}> Before launch, we conduct thorough testing across various devices and browsers. We check for performance, compatibility, and usability, ensuring everything works flawlessly.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 process-column">
            <div className="process-item text-center mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".20s">
              <div className="icon">
                <img src="assets/images/icon/icon-8.png" alt='' />
              </div>
              <div className="text">
                <h4>Launch and Optimization</h4>
                <p style={{ color: 'black' }}>After final approvals, we launch your website and monitor its performance. Our team continuously optimizes based on user feedback and analytics, ensuring sustained growth and improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Process