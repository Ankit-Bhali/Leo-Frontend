import React from 'react'

const ProjectDetails = () => {
  return (
    <section className="portfolio-details-section pt-210 pb-130">
      <div className="container">
        <div className="portfolio-details-wrapper wow fadeInUp" data-aos="fade-up">
          <div className="portfolio-item">
            <div className="text">
              <div className="row">
                <div className="col-lg-8">
                  <div className="content">
                    <h3 className="title">Creative 3D Illustration</h3>
                    <p style={{ color: 'black' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis quasi architeto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna
                      turaut odit aut fugit sed quia consequntur magni dolore eosqui ratione voluptatem seque nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
                  </div>
                  <div className="content">
                    <h3 className="title">Project Benefit</h3>
                    <p style={{ color: 'black' }}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porroses quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore dolore magnam</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="portfolio-info mb-45">
                    <ul>
                      <li>
                        <h4>Category</h4>
                        <p>Design Agency, 3D illustration</p>
                      </li>
                      <li>
                        <h4>Clients</h4>
                        <p>Microsoft LTS, Washington</p>
                      </li>
                      <li>
                        <h4>Date</h4>
                        <p>25 February 2022</p>
                      </li>
                      <li>
                        <h4>Location</h4>
                        <p>55 Main Street, New York</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="content">
                    <img src="assets/images/portfolio/single-img-1.jpg" alt='' />
                    <h3 className="title">Summery</h3>
                    <p style={{ color: 'black' }}>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="post-nav-tag pt-80">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="post-nav-item prev-post">
                  <div className="thumb">
                    <img src="assets/images/portfolio/port 1.jpg" alt='' />
                  </div>
                  <div className="text">
                    <h4>Creative Web Design</h4>
                    <p style={{ color: 'black' }}>Design Agency</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="post-icon text-center">
                  <img src="assets/images/portfolio/icon-1.png" alt='' />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="post-nav-item next-post">
                  <div className="thumb">
                    <img src="assets/images/portfolio/port 2.jpg" alt='' />
                  </div>
                  <div className="text">
                    <h4>Creative Web Design</h4>
                    <p style={{ color: 'black' }}>Design Agency</p>
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

export default ProjectDetails