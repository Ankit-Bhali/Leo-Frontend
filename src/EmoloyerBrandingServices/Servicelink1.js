import React from "react";
import employerbrandingservices from './employerbrandingservices.webp'
import "./content.css";
const content1 = () => {
  return (
    <div>
      <div className="content">
        <div
          className="content-div"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <h1>Employer Branding Services</h1>
          <div className="inner-div">
          Elevate your company’s image and attract top talent with our Employer Branding Services. We craft compelling narratives, design impactful campaigns, and implement strategies to showcase your company culture. Our services strengthen your employer brand, making your organization a magnet for skilled professionals. Stand out in the competitive job market and foster a positive workplace reputation with our tailored Employer Branding Services.
          </div>
          <a src="#" className="btn">
            Learn More
          </a>
        </div>
        <img className="employerbrandingservices" src={employerbrandingservices} alt="" />
      </div>
    </div>
  );
};
export default content1;
