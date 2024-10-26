import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing-area pricing-area-v1 dark-blue-bg pattern-bg pt-130 pb-120">
      <div className="shape shape-one scene"><span data-depth={1}><img src="assets/images/shape/shape-9.png" alt="" /></span></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title section-title-white text-center mb-55 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Pricing Plan</span>
              <h2>Pricing Package</h2>
              <p>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-md-12">
            <div className="pricing-item pricing-item-two bg-white mb-40 wow fadeInUp" data-wow-delay=".2s" data-aos="fade-up">
              <div className="pricing-head text-center">
                <span className="plan">Basic Plan</span>
                <h2 className="price" style={{ fontSize: "35px" }}><span className="currency">₹24999/month</span> </h2>
              </div>
              <div className="pricing-body">
                <p style={{ color: 'black' }}>This plan would be your entry-level offer, aimed at clients looking for a basic digital presence.</p>
                <ul className="pricing-list">
                  <li className="check">Web Design(Simple, static site)</li>
                  <li className="check">Web Development(Limited functionality)</li>
                  <li className="check">Basic SEO Optimizations</li>
                  {/* <li className="uncheck">Online Support</li> */}
                  {/* <li className="uncheck">Domain &amp; Hosting</li> */}
                </ul>
                <a href="service-details.html" className="main-btn arrow-btn bordered-btn btn-blue">Choose Plan</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-md-12">
            <div className="pricing-item pricing-item-two bg-white mb-40 wow fadeInUp" data-wow-delay=".3s" data-aos="fade-up">
              <div className="ribbon">Popular</div>
              <div className="pricing-head text-center" >
                <span className="plan">Standard Plan</span>
                <h2 className="price" style={{ fontSize: "35px" }}><span className="currency">₹44999/month </span></h2>
              </div>
              <div className="pricing-body">
                <p style={{ color: 'black' }}>This plan targets small businesses needing more comprehensive digital marketing services.</p>
                <ul className="pricing-list">
                  <li className="check">Web Design(Responsive, dynamic site)</li>
                  <li className="check">Web Development (CMS integration like WordPress)</li>
                  <li className="check">Advanced SEO Optimizations(On-page and off-page)</li>
                  <li className="check">Online Support(Email and basic support)</li>
                  <li className="check">Domain &amp; Hosting(for one year)</li>
                </ul>
                <a href="service-details.html" className="main-btn arrow-btn bordered-btn btn-blue">Choose Plan</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-md-12">
            <div className="pricing-item pricing-item-two bg-white mb-40 wow fadeInUp" data-wow-delay=".4s" data-aos="fade-up">
              <div className="pricing-head text-center">
                <span className="plan">Silver Plan</span>
                <h2 className="price" style={{ fontSize: "35px" }}><span className="currency">₹74999/month </span></h2>
              </div>
              <div className="pricing-body">
                <p style={{ color: 'black' }}>The premium plan offers full-service solutions for clients looking for an all-in-one package.</p>
                <ul className="pricing-list">
                  <li className="check">Web Design(Custom design)</li>
                  <li className="check">Web Development(E-commerce or advanced features)</li>
                  <li className="check">Full SEO Optimization(On-page, off-page, and technical SEO)</li>
                  <li className="check">24/7 Online Support(Phone, email, and chat)</li>
                  <li className="check">Domain &amp; Hosting(1 year with renewal support)</li>
                  <li className="check">Social Media Management(2 platforms) </li>
                  <li className="check">Digital Marketing Consultation(Monthly report and strategy session) </li>
                </ul>
                <a href="service-details.html" className="main-btn arrow-btn bordered-btn btn-blue">Choose Plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Pricing