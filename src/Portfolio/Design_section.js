import React, { useState } from 'react';

const Design_section = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState('design');

  // Portfolio data with categories
  const portfolioItems = [
    { id: 1, category: 'design', title: 'Dashboard Design', image: 'assets/images/portfolio/img-1.jpg' },
    // { id: 2, category: 'branding', title: 'Landing Pages', image: 'assets/images/portfolio/img-1.jpg' },
    { id: 3, category: 'development', title: 'Illustration Design', image: 'assets/images/portfolio/img-3.jpg' },
    { id: 4, category: 'seo', title: 'SEO Dashboard', image: 'assets/images/portfolio/img-4.jpg' },
    { id: 5, category: 'Social Media Marketing', title: 'Social Media Marketing', image: 'assets/images/portfolio/img-5.jpg' },
    // { id: 6, category: 'branding', title: 'Website Design', image: 'assets/images/portfolio/img-6.jpg' },
  ];

  // Function to handle filter button click
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="portfolio-area portfolio-area-v1 light-gray-bg pt-130 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mb-45 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Latest Work</span>
              <h2>Professional Experience</h2>
              <p style={{ color: 'black' }}>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-filter-button mb-50 wow fadeInLeft" data-aos="fade-left">
              <ul className="filter-btn mb-20">
                {/* <li className={selectedCategory === 'all' ? 'active' : ''} onClick={() => handleFilterClick('all')}>Show All</li> */}
                <li className={selectedCategory === 'design' ? 'active' : ''} onClick={() => handleFilterClick('design')}>Design</li>
                {/* <li className={selectedCategory === 'branding' ? 'active' : ''} onClick={() => handleFilterClick('branding')}>Branding</li> */}
                <li className={selectedCategory === 'development' ? 'active' : ''} onClick={() => handleFilterClick('development')}>Development</li>
                <li className={selectedCategory === 'seo' ? 'active' : ''} onClick={() => handleFilterClick('seo')}>SEO</li>
                <li className={selectedCategory === 'Social Media Marketing' ? 'active' : ''} onClick={() => handleFilterClick('Social Media Marketing')}>Social Media Marketing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row portfolio-grid">
          {portfolioItems
            .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
            .map(item => (
              <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 portfolio-column">
                <div className="portfolio-item portfolio-style-one mb-55 wow fadeInUp" data-aos="fade-up">
                  <div className="img-holder">
                    <img src={item.image} alt={item.title} />
                    <a href={item.image} className="portfolio-hover img-popup">
                      <div className="hover-content">
                        <i className="far fa-plus" />
                      </div>
                    </a>
                  </div>
                  <div className="text">
                    <h3 className="title">
                      <a href="project-details.html">{item.title}</a>
                    </h3>
                    <a href="projects.html" className="cat-link">Creative Design</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Design_section;
