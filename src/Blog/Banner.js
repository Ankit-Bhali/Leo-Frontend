import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="page-banner bg_cover position-relative z-1">
      <div className="shape shape-one scene"><span data-depth={1}><img src="assets/images/shape/shape-1.png" alt /></span></div>
      <div className="shape shape-two scene"><span data-depth={2}><img src="assets/images/shape/shape-2.png" alt /></span></div>
      <div className="shape shape-three scene"><span data-depth={3}><img src="assets/images/shape/shape-3.png" alt /></span></div>
      <div className="shape shape-four scene"><span data-depth={4}><img src="assets/images/shape/shape-2.png" alt /></span></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="page-title text-center">
              <h1>Blog Standard</h1>
              <ul className="breadcrumbs-link">
                <li style={{ color: 'black' }}><Link to="/">Home</Link></li>
                <li >Blog Standard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >

  )
}

export default Banner