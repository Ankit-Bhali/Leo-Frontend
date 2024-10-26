import React, { useState, useEffect, useRef } from 'react';

const CounterItem = ({ iconClass, number, text, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number; // The number you want to count to
    const duration = 2000; // Duration in milliseconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={counterRef} className="counter-item mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay={delay}>
      <div className="icon">
        <i className={iconClass} />
      </div>
      <div className="text">
        <h2 className="number"><span>{count}</span>+</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

// Static counter for sections with no animation
const StaticCounterItem = ({ iconClass, number, text, delay }) => (
  <div className="counter-item mb-40 wow fadeInUp" data-aos="fade-up" data-wow-delay={delay}>
    <div className="icon">
      <i className={iconClass} />
    </div>
    <div className="text">
      <h2 className="number"><span>{number}</span>+</h2>
      <p>{text}</p>
    </div>
  </div>
);

const Counter_section = () => {
  return (
    <section className="counter-area counter-area-v1 pt-240 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-55 wow fadeInUp" data-aos="fade-up">
              <span className="sub-title st-one">Agency Statistics</span>
              <h2>Why People’s Like Us</h2>
              <p style={{ color: 'black' }}>Professional Design Agency to provide solutions</p>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          {/* Animated Counters */}
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ color: 'black' }}>
            <CounterItem iconClass="flaticon-start-up" number={190} text="Project Complete" delay=".2s" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ color: 'black' }}>
            <CounterItem iconClass="flaticon-creativity" number={110} text="Satisfied Clients" delay=".3s" />
          </div>

          {/* Static Counter */}
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ color: 'black' }}>
            <StaticCounterItem iconClass="flaticon-medal" number="48 K" text="Leads Generated" delay=".4s" />
          </div>

          {/* Animated Counter */}
          <div className="col-lg-3 col-md-6 col-sm-12" style={{ color: 'black' }}>
            <CounterItem iconClass="flaticon-technical-support" number={9} text="Years Of Experience" delay=".5s" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter_section;
