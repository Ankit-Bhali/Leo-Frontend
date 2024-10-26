import React from 'react';
import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <section className="contact-info-v1 pt-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title mb-60">
              <span className="sub-title st-one">Get In Touch</span>
              <h2>Have Any Project on Mind? Work Together</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="information-container">
              <div className="information-item info-item-one">
                <div className="icon">
                  <i className="far fa-map-marker-alt" />
                </div>
                <div className="info">
                  <h4>Locations</h4>
                  <p style={{ color: 'black' }}>2nd floor, Delhi Rd, opposite C.R Law College, above Vegan Pizzeria,Rohtak, Haryana 124001</p>
                </div>
              </div>
              <div className="information-item info-item-two">
                <div className="icon">
                  <i className="far fa-envelope-open-text" />
                </div>
                <div className="info">
                  <h4>Email Address</h4>
                  <p style={{ color: 'black' }}><a href="mailto:reach@leodigitals.in">reach@leodigitals.in</a></p>
                </div>
              </div>
              <div className="information-item info-item-three">
                <div className="icon">
                  <i className="far fa-phone" />
                </div>
                <div className="info">
                  <h4>Phone Number</h4>
                  <p style={{ color: 'black' }}><a href="tel:+919416511010">+91 94165-11010</a></p>
                </div>
              </div>
              <div className="information-item info-item-four">
                <div className="icon">
                  <i className="far fa-clock" />
                </div>
                <div className="info">
                  <h4>Working Hours</h4>
                  <p style={{ color: 'black' }}><span>Monday-Saturday</span><span>10am - 08pm</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="map-box mb-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.43238235537!2d76.61182197534531!3d28.885496775527482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a51c54002ce7d4d%3A0x54ddb0181c17cf05!2sLeo%20Digital&#39;s%20Pvt%20Ltd%20-%20Digital%20Marketing%20Company%20in%20Rohtak!5e0!3m2!1sen!2sin!4v1727908916615!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                style={{ width: '100%', height: '520px', border: 0 }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-12 text-center">
            <a href="contact.html" className="main-btn arrow-btn btn-blue">Contact Us</a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
