import React from "react";
import "./content.css";
import nextdivimg from "./nextdivimg.webp";
export default function Nextdiv() {
  return (
    <div>
      <div className="inner-div-help">
        <h1 data-aos="fade-left">
          Why Your Business Should Be Using Employer Branding Services
        </h1>
        <div>
          Utilize Employer Branding Services to distinguish your business as an
          employer of choice, attracting top talent and fostering a positive
          workplace reputation.
        </div>
      </div>
      <div className="inner-div-help-img">
        <div className="help-1" data-aos="fade-right">
          <img src={nextdivimg} alt="" />
        </div>
        <div className="help-1  help-3" data-aos="fade-left">
          <ul>
            <li className="help-items">
            Attract Top Talent: Establish a compelling employer brand to attract high-caliber candidates, ensuring you have access to the best talent in your industry.
            </li>
            <li className="help-items">
            Positive Workplace Image: Cultivate a positive reputation, both internally and externally, creating a workplace that resonates with current employees and appeals to potential hires.
            </li>
            <li className="help-items">
            Employee Retention: Foster a sense of pride and loyalty among your workforce, reducing turnover and retaining valuable talent for long-term success.
            </li>
            <li className="help-items">
            Enhanced Recruitment Efficiency: Streamline recruitment efforts by creating an appealing employer brand, attracting candidates who align with your company culture and values, making the hiring process more efficient.
            </li>
            <li className="help-items">
            Boost Business Growth: A strong employer brand contributes to a motivated and engaged workforce, translating into improved productivity, innovation, and overall business growth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
