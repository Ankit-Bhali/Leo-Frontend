import React from 'react'

const BannerPage = () => {
  return (
    <section className="page-banner bg_cover position-relative z-1">
      <div className="shape shape-one scene"><span data-depth={1}><img src="assets/images/shape/shape-1.png" alt='' /></span></div>
      <div className="shape shape-two scene"><span data-depth={2}><img src="assets/images/shape/shape-2.png" alt='' /></span></div>
      <div className="shape shape-three scene"><span data-depth={3}><img src="assets/images/shape/shape-3.png" alt='' /></span></div>
      <div className="shape shape-four scene"><span data-depth={4}><img src="assets/images/shape/shape-2.png" alt='' /></span></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="page-title">
              <h1>Projects</h1>
              <ul className="breadcrumbs-link">
                <li style={{ color: 'black' }}><a href="index.html">Home</a></li>
                <li >Projects</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="page-banner-img">
              <img src="assets/images/breadcrumb/img-3.jpg" alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default BannerPage