import React from "react";
import "./content.css";
import imagehelpdiv from "./imagehelpdiv.webp";

const HelpforStrategy = () => {
  return (
    <div className="outer-div-3">
      <div className="inner-div-help">
        <h1 data-aos="fade-left">
          How Marketing Automation Drive Business Growth
        </h1>
        <div>
          Marketing Automation Services drive business growth by optimizing
          workflows, enhancing customer engagement, and providing data-driven
          insights for informed decision-making.
        </div>
      </div>
      <div className="inner-div-help-img">
        <div className="help-1" data-aos="fade-right">
          <img src={imagehelpdiv} alt="" />
        </div>
        <div className="help-1 help-2" data-aos="fade-left">
          <ul>
            <li className="help-items">
            Efficiency Boost: Streamline repetitive tasks, saving time and resources for more strategic initiatives.
            </li>
            <li className="help-items">
            Personalized Engagement: Deliver tailored content, fostering deeper connections and increasing customer satisfaction.
            </li>
            <li className="help-items">
            Lead Nurturing: Automated nurturing processes guide leads through the sales funnel, improving conversion rates.
            </li>
            <li className="help-items">
            Scalability: Easily scale your marketing efforts to accommodate business growth with automated processes.
            </li>
            <li className="help-items">
            Data Insights: Leverage real-time analytics to gain insights into customer behavior, informing continuous improvement strategies for sustained business expansion.
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
