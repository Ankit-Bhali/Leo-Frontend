import React, { useState } from 'react'

const Text_Blcok = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="fancy-text-block fancy-text-block-v2 pt-210 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-holder mb-50 wow fadeInLeft" data-wow-delay=".2s" data-aos="fade-left">
              <img src="/assets/images/about/img-5.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-wrapper mb-50 wow fadeInRight" data-wow-delay=".4s" data-aos="fade-right">
              <div className="section-title mb-30">
                <span className="sub-title st-one">What We Do</span>
                <h2>Tailored Solutions for Business Growth</h2>
                <p className="blue-dark">Empowering Businesses to Thrive</p>
              </div>
              <p style={{ color: 'black' }}>At Leo Digital, we specialize in providing innovative design and marketing solutions that help businesses achieve sustainable growth. Our professional team tailors every project to your specific needs, ensuring that your brand stands out and succeeds in today’s competitive landscape.
                {!isExpanded && <span>...</span>}
                {isExpanded && (
                  <span>
                    Our team leverages industry-leading techniques and tools to create designs and strategies that drive results. Whether you're a startup or an established business, we ensure that every solution we deliver is crafted to support your growth objectives and meet the highest standards of quality.
                  </span>
                )}
              </p>

              <button onClick={handleToggle} className='main-btn arrow-btn'>
                {isExpanded ? 'Show Less' : 'More Details'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Text_Blcok