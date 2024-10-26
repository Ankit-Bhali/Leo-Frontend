import React from 'react'

const Team_section = () => {
  return (
    <section className="team-area team-area-v1 pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-55 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Meet Our Team</span>
              <h2>Experience Team Members</h2>
              <p style={{ color: 'black' }}>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-item mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".2s">
              <div className="img-holder">
                <img src="assets/images/team/img-1.jpg" alt="Team Image" />
                <div className="team-hover">
                  <ul className="social-link">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="text text-center">
                <h4 className="title"><a href="team-details.html">Douglas J. Bleau</a></h4>
                <p className="position" style={{ color: 'black' }}>UX/UI Designer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-item mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".3s">
              <div className="img-holder">
                <img src="assets/images/team/img-2.jpg" alt="Team Image" />
                <div className="team-hover">
                  <ul className="social-link">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="text text-center">
                <h4 className="title"><a href="team-details.html">Thomas M. Wilso</a></h4>
                <p className="position" style={{ color: 'black' }}>Web Developer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-item mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".4s">
              <div className="img-holder">
                <img src="assets/images/team/img-3.jpg" alt="Team Image" />
                <div className="team-hover">
                  <ul className="social-link">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="text text-center">
                <h4 className="title"><a href="team-details.html">Robert J. Ryan</a></h4>
                <p className="position" style={{ color: 'black' }}>Lead Generation</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-item mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay=".5s">
              <div className="img-holder">
                <img src="assets/images/team/img-4.jpg" alt="Team Image" />
                <div className="team-hover">
                  <ul className="social-link">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="text text-center">
                <h4 className="title"><a href="team-details.html">Kenneth K. Joiner</a></h4>
                <p className="position" style={{ color: 'black' }}>UX/UI Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Team_section