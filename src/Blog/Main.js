import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <section className="blog-details-section pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details-wrapper wow fadeInUp" data-aos="fade-up">
              <div className="blog-post-item">
                <div className="post-thumbnail mb-30">
                  <img src="assets/images/blog/blog-single-1.jpg" alt />
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <ul>
                      <li><span><a href="#" className="cat-link">Web Design</a></span></li>
                      <li><span><i className="far fa-calendar-alt" /><a href="#">25 March 2022</a></span></li>
                      <li><span><i className="far fa-comments" /><a href="#">Comment (5)</a></span></li>
                    </ul>
                  </div>
                  <h3 className="title">Powerful Terminal And Command Line  Seeny Tools  Modern Designing Better Links For Websites</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lau
                    dantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernate
                    aut odit aut fugit, sed quia consequuntur magni dolores eosqui ratione voluptatem nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipise velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                  <div className="content-img">
                    <img src="assets/images/blog/blog-single-2.jpg" alt />
                  </div>
                  <h4>Designing Better Links For Websites And Emails Guideline Useful VS Code Extensions For Front-End Developers</h4>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernate odit aut fugit quia coquuntur magni dolores eosqui ratione voluptatem nesciunt eque porro quisquam est qui dolorem epsum quia dolor sit amet, consectetur adipise velit sed quia non numquam</p>
                  <ul className="list-style-one mb-45">
                    <li>Digital Creative Agency</li>
                    <li>Professional Problem Solutions</li>
                    <li>Web Design &amp; Development</li>
                  </ul>
                  <blockquote className="mb-50">
                    <div className="content">
                      <h4>Newly Supported Modern  Pseudo-Class Selectors Smashing Podcast Episode Pauloag Conve Seen</h4>
                      <h5>William K. Parker</h5>
                    </div>
                  </blockquote>
                  <div className="post-share-tag mb-30">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="post-tag-cloud mb-30">
                          <ul>
                            <li className="item-heading">Tags :</li>
                            <li><a href="#">Graphics</a></li>
                            <li><a href="#">Digital</a></li>
                            <li><a href="#">Web UX/UI</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="social-share float-lg-right mb-30">
                          <ul className="social-link">
                            <li className="item-heading">Share :</li>
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            <li><a href="#"><i className="fab fa-behance" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-author-box mb-70">
                <div className="author-thumb">
                  <img src="assets/images/blog/author-1.jpg" alt="post author" />
                </div>
                <div className="author-content">
                  <h4>Shawn B. Bailey</h4>
                  <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                  <ul className="social-link">
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#"><i className="fab fa-behance" /></a></li>
                    <li><a href="#"><i className="fab fa-dribbble" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="comments-area mb-70 wow fadeInUp" data-aos="fade-up">
                <h4 className="comments-title">Popular Comments</h4>
                <ul className="comments-list">
                  <li className="comment mb-45">
                    <div className="comment-avatar">
                      <img src="assets/images/blog/comment-1.jpg" alt="comment author" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comment-author-content">
                        <span className="author-name">Randal L. Tomas<span className="date">25 Feb 2022</span></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <a href="#comment-respond" className="reply">Reply<i className="far fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </li>
                  <li className="comment mb-45">
                    <div className="comment-avatar">
                      <img src="assets/images/blog/comment-2.jpg" alt="comment author" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comment-author-content">
                        <span className="author-name">Randal L. Tomas<span className="date">25 Feb 2022</span></span>
                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo</p>
                        <a href="#comment-respond" className="reply">Reply<i className="far fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </li>
                  <li className="comment mb-45">
                    <div className="comment-avatar">
                      <img src="assets/images/blog/comment-3.jpg" alt="comment author" />
                    </div>
                    <div className="comment-wrap">
                      <div className="comment-author-content">
                        <span className="author-name">Randal L. Tomas<span className="date">25 Feb 2022</span></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <a href="#comment-respond" className="reply">Reply<i className="far fa-long-arrow-right" /></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="comments-respond mb-35" id="comment-respond">
                <h4 className="comments-heading">Leave A Message</h4>
                <form className="comment-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input type="text" className="form_control" placeholder="Your Full Name" name="name" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <select className="wide">
                          <option data-display="Subject :">Subject :</option>
                          <option value='01'>Customer Support</option>
                          <option value='02'>Server Support</option>
                          <option value='03'>24/7 Support</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input type="text" className="form_control" placeholder="Phone Number" name="phone" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea name="message" className="form_control" placeholder="Comments" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn arrow-btn">Send Us Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="sidebar-widget-area">
              <div className="widget search-widget mb-30 wow fadeInUp" data-aos="fade-up">
                <form>
                  <div className="form_group">
                    <input type="email" className="form_control" placeholder="Search here" name="email" required />
                    <button className="search-btn"><i className="far fa-search" /></button>
                  </div>
                </form>
              </div>
              <div className="widget category-widget mb-30 wow fadeInUp" data-aos="fade-up">
                <h4 className="widget-title">Category</h4>
                <ul className="category-nav">
                  <li><a href="#">Organic Vegetables<span><i className="far fa-arrow-right" /></span></a></li>
                  <li><a href="#">Fresh Jack Fruits<span><i className="far fa-arrow-right" /></span></a></li>
                  <li><a href="#">Chicken Meat &amp; Eggs<span><i className="far fa-arrow-right" /></span></a></li>
                  <li><a href="#">Organic Wheats<span><i className="far fa-arrow-right" /></span></a></li>
                  <li><a href="#">Cow Meat &amp; Milk<span><i className="far fa-arrow-right" /></span></a></li>
                </ul>
              </div>
              <div className="widget contact-info-widget bg_cover mb-30 wow fadeInUp" style={{ backgroundImage: 'url(assets/images/widget/contact-1.jpg)' }} data-aos="fade-up">
                <div className="contact-info-box text-center">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="info">
                    <h4><a href="tel:+91 94165-11010">+91 94165-11010</a></h4>
                    <h5><a href="mailto:reach@leodigitals.in">reach@leodigitals.in</a></h5>
                    <Link to="/Message" className="main-btn bordered-btn">Contact us</Link>
                  </div>
                </div>
              </div>
              <div className="widget recent-post-widget mb-30 wow fadeInUp" data-aos="fade-up">
                <h4 className="widget-title">Recent News</h4>
                <ul className="recent-post-list">
                  <li className="post-thumbnail-content">
                    <img src="assets/images/widget/news-1.jpg" alt="post image" />
                    <div className="post-title-date">
                      <h6><a href="blog-details.html">Guide Modern CSS Colors HWB, LAB</a></h6>
                      <span className="posted-on">By <a href="#">Somalia D. Silba</a></span>
                    </div>
                  </li>
                  <li className="post-thumbnail-content">
                    <img src="assets/images/widget/news-2.jpg" alt="post image" />
                    <div className="post-title-date">
                      <h6><a href="blog-details.html">Guide Modern CSS Colors HWB, LAB</a></h6>
                      <span className="posted-on">By <a href="#">Somalia D. Silba</a></span>
                    </div>
                  </li>
                  <li className="post-thumbnail-content">
                    <img src="assets/images/widget/news-3.jpg" alt="post image" />
                    <div className="post-title-date">
                      <h6><a href="blog-details.html">Guide Modern CSS Colors HWB, LAB</a></h6>
                      <span className="posted-on">By <a href="#">Somalia D. Silba</a></span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget tag-cloud-widget mb-30 wow fadeInUp" data-aos="fade-up">
                <h4 className="widget-title">Popular Tags</h4>
                <a href="#">3D Creative</a>
                <a href="#">Agency</a>
                <a href="#">Digital</a>
                <a href="#">Web Design</a>
                <a href="#">Strategy</a>
                <a href="#">UX/UI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Main