import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";




const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const element = document.querySelector('.main-menu');
  
  // Function to toggle the offcanvas menu
  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
    
  };
  const togglecanvas2 = ()=>{
    element.classList.toggle('.main-menu');
    setIsOffcanvasOpen(!isOffcanvasOpen);
  }

  return (
    <div>
      {/* Offcanvas panel */}
      <div className={`offcanvas-panel ${isOffcanvasOpen ? "panel-on" : ""}`}>
        <div className="panel-overlay" onClick={toggleOffcanvas} />
        <div className="offcanvas-panel-inner">
          <div className="panel-logo">
            <NavLink to="/" onClick={toggleOffcanvas}>
              <img src="assets/images/logo/icon1 modi.png" alt="Qempo" />
            </NavLink>
          </div>
          <div className="about-us">
            <h5 className="panel-widget-title">About Us</h5>
            <p>
              Leo Digitals is a results-driven digital marketing company
              dedicated to helping businesses grow their online presence.
            </p>
          </div>
          <div className="contact-us">
            <h5 className="panel-widget-title">Contact Us</h5>
            <ul>
              <li>
                <i className="fal fa-map-marker-alt" />
                2nd floor, Delhi Rd, opposite C.R Law College, above Vegan
                Pizzeria,Rohtak, Haryana 124001
              </li>
              <li>
                <i className="fal fa-envelope-open" />
                <a href="mailto:reach@leodigitals.in">reach@leodigitals.in</a>
                {/* <a href="mailto:info@barky.com">info@barky.com</a> */}
              </li>
              <li>
                <i className="fal fa-phone" />
                <a href="tel:+91 94165-11010">+91 94165-11010</a>
                {/* <a href="tel:(312)-895-9888">(312) 895-9888</a> */}
              </li>
            </ul>
          </div>
          <button className="panel-close" onClick={toggleOffcanvas}>
            <i className="fal fa-times" />
          </button>
        </div>
      </div>
      {/* End Offcanvas panel */}

      {/* Start Header Section */}
      <header className="theme-header transparent-header">
        <div className="header-navigation navigation-style-v1">
          <div className="container-fluid">
            <div className="primary-menu">
              <div className="site-branding">
                <NavLink to="/" className="brand-logo">
                  <img src="assets/images/logo/logo-1.png" alt="Site Logo" />
                </NavLink>
              </div>

              <div className="nav-menu">
                {/* Navbar Close */}
                <div className="navbar-close">
                  <i className="far fa-times" />
                </div>

                {/* Main Menu */}
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item">
                      <NavLink
                        exact
                        to="/"
                        className="nav-link"
                        activeClassName="active-nav"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="menu-item services-links">
                      <NavLink
                        to="/Services"
                        className="nav-link "
                        activeClassName="active-nav"
                      >
                        Services
                      </NavLink>
                      <div className="service-hover">
                        <div className="div-1">
                          <div className="heading-link">DIGITAL MARKETING SERVICES</div>
                          <ul className="div-links">
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/MarketingPaidCompaigns"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                Marketing Paid Compaigns
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/SEODigital"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                SEO
                                Services
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/MarketingAutomation"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Marketing Automation
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/EmployerBrandingServices"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                Employer Branding Services
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/AccountBasedMarketing"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Account Based Marketing
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/PerformanceBasedMarketing"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Performance Based Marketing
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/ReportingandAnalysis"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Reporting and Analytics
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="div-1">
                        <div className="heading-link">MARKETING COMMUNICATION SERVICES</div>
                          <ul className="div-links">
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Branding Services
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Creative Services
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Video Creation
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                                normalStyle={{
                                  color:'black'
                                  
                                }}
                              >
                                
                                Content Writing Services
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Digital PDFs Services
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="div-1">
                          <div className="heading-link">MARKETING CONSULTING SERVICES</div>
                          <ul className="div-links">
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/Marketing_Strategy"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Marketing Strategy
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="/post_compaign_analysis"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                Post
                                Compaign Analysis
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Website Analysis
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Public Relations and ORM Consulting
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                        <div className="div-1">
                          <div className="heading-link">TECHNOLOGY CONSULTING4</div>
                          <ul className="div-links">
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Marketing Automation Technology
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Application Development and Integrations
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Software Development and Integrations
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Digital Transformation Strategy
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                IT
                                Project Management
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Cloud Computing and Migration Services
                              </NavLink>
                            </li>
                            <li className="list-links">
                              <NavLink
                                to="#"
                                className="active-nav-link"
                                activeClassName="active-nav-link"
                              >
                                
                                Annual Maintenance Contract
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="/Portfolio"
                        className="nav-link"
                        activeClassName="active-nav"
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="/About_Us"
                        className="nav-link"
                        activeClassName="active-nav"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="/Blog"
                        className="nav-link"
                        activeClassName="active-nav"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li className="menu-item">
                      <NavLink
                        to="/Contact_Us"
                        className="nav-link"
                        activeClassName="active-nav"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-right-nav">
                <ul>
                  <li className="bar-item">
                    <NavLink to="#" onClick={toggleOffcanvas}>
                      <img src="assets/images/dot.png" alt="dot" />
                    </NavLink>
                  </li>
                  <li className="navbar-toggle-btn">
                    <button
                      className="navbar-toggler"
                      onClick={togglecanvas2}
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
