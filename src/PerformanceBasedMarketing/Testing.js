import React, { useState, useEffect, useRef } from "react";
import "./texting.css";
import textimgslider from "./textimgslider.webp";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Scroll the slider at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % 6; // Assuming 6 divs, adjust this as needed
      });
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Scroll to the current div
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollTo({
        left: slider.offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="slider-container" ref={sliderRef}>
      <div className="slider-content">
        <div className="slider-item">
          <div className="text">
            Leo Digital fuels Ecoderma's digital triumph, employing holistic
            marketing and IT solutions for sustained growth and impactful
            outcomes.
          </div>
          <div className="text-flex">
            <img src={textimgslider} />
            <div>
              <h5>Ecoderma</h5>
              <span>Company</span>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="text">
            Leo Digital propels Language Wala success with strategic marketing
            and IT solutions , fostering online presence and audience resonance.
          </div>
          <div className="text-flex">
            <img src={textimgslider} />
            <div>
              <h5>Language Walah</h5>
              <span>Company</span>
            </div>
          </div>
        </div>
        <div className="slider-item">
          <div className="text">
            Leo Digital elevates Upskills Yourself, blending marketing and IT
            services for enhanced visibility, engagement, and transformative
            impact in education.
          </div>
          <div className="text-flex">
            <img src={textimgslider} />
            <div>
              <h5>Upskill Yourself</h5>
              <span>Company</span>
            </div>
          </div>
        </div>
        <div className="slider-item"><div className="text">
            Leo Digital fuels Ecoderma's digital triumph, employing holistic marketing and IT solutions sustained growth and impactful outcomes.
          </div>
          <div className="text-flex">
            <img src={textimgslider} />
            <div>
              <h5>Ecoderma</h5>
              <span>Company</span>
            </div>
          </div></div>
        <div className="slider-item"><div className="text">
            Leo Digital propels Language Wala success with strategic marketing
            and IT solutions , fostering online presence and audience resonance.
          </div>
          <div className="text-flex">
            <img src={textimgslider} />
            <div>
              <h5>Language Walah</h5>
              <span>Company</span>
            </div>
          </div></div>
        
      </div>
    </div>
  );
};

export default Slider;
