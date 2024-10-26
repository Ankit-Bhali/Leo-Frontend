import React from "react";
import "./content.css";
import imagehelpdiv from "./imagehelpdiv.webp";

const HelpforStrategy = () => {
  return (
    <div className="outer-div-3">
      <div className="inner-div-help">
        <h1 data-aos="fade-left">
          How Marketing Strategy Sevices Drive business Growth
        </h1>
        <div>
          Employer Branding Services drive business growth by cultivating a
          positive workplace reputation, attracting top talent, and fostering
          employee loyalty. culture.
        </div>
      </div>
      <div className="inner-div-help-img">
        <div className="help-1" data-aos="fade-right">
          <img src={imagehelpdiv} alt="" />
        </div>
        <div className="help-1 help-2" data-aos="fade-left">
          <ul>
            <li className="help-items">
            Top Talent Attraction: Build a compelling employer brand to attract high-caliber talent, creating a competitive advantage in the job market.
            </li>
            <li className="help-items">
            Positive Workplace Reputation: Cultivate a positive image as an employer of choice, enhancing your reputation in the industry and among potential candidates.
            </li>
            <li className="help-items">
            Employee Retention: Foster a strong company culture that promotes loyalty and engagement, reducing turnover and retaining valuable talent.
            </li>
            <li className="help-items">
            Enhanced Recruitment Efficiency: Streamline the recruitment process by attracting candidates who align with your company values, resulting in more efficient and effective hiring.
            </li>
            <li className="help-items">
            Improved Productivity and Performance: A positive employer brand contributes to higher employee morale, productivity, and performance, ultimately driving business growth through a motivated and dedicated workforce.
            </li>
          </ul>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};
export default HelpforStrategy;
