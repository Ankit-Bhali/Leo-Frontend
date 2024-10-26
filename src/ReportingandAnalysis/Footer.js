import React from 'react'
import { Link } from 'react-router-dom'

const Footer_section = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        {/* <div className="footer-top pt-75 pb-40">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-logo mb-40 wow fadeInLeft">
                <img src="assets/images/logo/logo-1 - Copy.png" alt="Brand Logo" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-wrapper mb-40 wow fadeInRight">
                <h3>Modern Solutionsd For
                  <span className="blue-dark">Creative Agency</span></h3>
              </div>
            </div>
          </div>
        </div> */}
        <div className="footer-widget pt-70 pb-40">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget footer-nav-widget mb-40 wow fadeInUp" data-wow-delay=".15s">
                <h4 className="widget-title">Services</h4>
                <ul className="widget-nav" style={{ color: 'black' }}>
                  <li><Link to="services.html">UX/UI Design</Link></li>
                  <li><Link to="services.html">Web Development</Link></li>
                  <li><Link to="services.html">SEO Optimization</Link></li>
                  <li><Link to="services.html">Product Design</Link></li>
                  <li><Link to="services.html">Logo Design</Link></li>
                  <li><Link to="services.html">Brand Design</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget footer-nav-widget mb-40 wow fadeInUp" data-wow-delay=".20s">
                <h4 className="widget-title">Links</h4>
                <ul className="widget-nav" style={{ color: 'black' }}>
                  <li><Link to="/About_Us">About Agency</Link></li>
                  <li><Link to="/Blog">Latest News &amp; Blog</Link></li>
                  <li><Link to="/About_Us">Meet The Team</Link></li>
                  <li><Link to="/Services">Popular Services</Link></li>
                  <li><Link to="/Portfolio">Testimonials</Link></li>
                  <li><Link to="https://learn.leodigitals.in/" target='blank'>Need a Career?</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="widget social-widget mb-40 wow fadeInUp" data-wow-delay=".25s">
                <h4 className="widget-title">Follow</h4>
                <ul className="social-nav" style={{ color: 'black' }}>

                  <li><Link to="https://www.instagram.com/leo.digitals/" target="_blank" ><i className="fab fa-instagram" />Instagram</Link></li>
                  {/* <li><Link to="#"><i className="fab fa-twitter" />Twitter</Link></li> */}
                  <li><Link to="https://www.linkedin.com/company/104236644/admin/dashboard/" target="_blank" ><i className="fab fa-linkedin" />linkedin</Link></li>
                  <li><Link to="https://www.facebook.com/LeoDigitalStudio10" target="_blank" ><i className="fab fa-facebook-f" />Facebook</Link></li>
                  <li><Link to="https://www.quora.com/profile/Abhishek-Singh-28148" target="_blank" ><i className="fab fa-quora" />Quora</Link></li>
                  <li><Link to="https://www.reddit.com/user/SkinKind1903/" target="_blank" ><i className="fab fa-reddit-alien" style={{ 'font-size': '20px' }} />Reddit</Link></li>

                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="widget newsletter-widget mb-40 wow fadeInUp" data-wow-delay=".30s">
                <div className="newsletter-content">
                  <h3>Subscribe Our
                    Newsletter</h3>
                  <p style={{ color: 'black' }}>Stay updated with the latest trends and insights. Join our community today and never miss out on valuable updates that can benefit you in countless ways.</p>
                  <form>
                    <div className="form_group">
                      <input type="email" className="form_control" placeholder="Email Address" name="email" required autoComplete='off' />
                      <button className="main-btn">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright" style={{ color: 'black' }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>© 2024. All rights reserved design by Leo Digitals.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-nav float-lg-right">
                <ul>
                  {/* <li><Link to="service-details.html">Setting &amp; Privacy </Link></li> */}
                  <li><Link to="/FAQ">Faqs</Link></li>
                  <li><Link to="/Services">Services</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer_section