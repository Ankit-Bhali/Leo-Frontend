import React from 'react'

const Contact_section = () => {
  return (
    <section className="contact-area contact-area-v1 pt-70 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="text-wrapper mb-50 wow fadeInLeft" data-aos="fade-left">
              <h2>Have Any on <span className="fill-text">Project</span>
                Mind! <span className="fill-text">Contact</span> Us</h2>
              <p style={{ color: 'black' }}>At Leo Digitals, we specialize in elevating your business presence through innovative digital solutions. From powerful social media marketing strategies to high-quality lead generation and content creation, we help businesses of all sizes achieve their growth goals.</p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="information-style-one mb-40" >
                    <div className="icon">
                      <span><i className="far fa-envelope-open" />Email Us</span>
                    </div>
                    <div className="info">
                      <h4 style={{ marginRight: '95px' }}><a href="mailto:reach@leodigitals.in">reach@leodigitals.in</a></h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="information-style-one mb-40" >
                    <div className="icon">
                      <span><i className="far fa-phone" />Phone Us</span>
                    </div>
                    <div className="info">
                      <h4 style={{ marginRight: '135px' }}><a href="tel:+91 94165-11010">+91 94165-11010</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input type="text" className="form_control" placeholder="Full Name" name="name" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea className="form_control" placeholder="Write Message" name="message" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn arrow-btn">Send Us Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4" >
            <div className="img-holder mb-50 wow fadeInRight" data-aos="fade-right">
              <div className="shape shape-icon-one scene"><span data-depth={1}><img src="assets/images/shape/shape-4.png" alt /></span></div>
              <div className="shape shape-icon-two"><span /></div>
              <img src="assets/images/contact/contact-1.jpg" alt="Contact Image" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact_section