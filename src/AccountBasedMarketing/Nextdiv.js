import React from "react";
import "./content.css";
import nextdivimg from "./nextdivimg.webp";
export default function Nextdiv() {
  return (
    <div>
      <div className="inner-div-help">
        <h1 data-aos="fade-left">
        Why Your Business Should Be Using Account Based Marketing
        </h1>
        <div>
        Implement Account Based Marketing to precisely target high-value accounts, foster personalized engagement, and drive strategic business growth with maximum impact and efficiency.
        </div>
      </div>
      <div className="inner-div-help-img">
        <div className="help-1" data-aos="fade-right">
          <img src={nextdivimg} alt="" />
        </div>
        <div className="help-1  help-3" data-aos="fade-left">
          <ul>
            <li className="help-items">
            Targeted Precision: Account Based Marketing allows your business to focus efforts precisely on high-value accounts, ensuring resources are strategically allocated for maximum impact.
            </li>
            <li className="help-items">
            Personalized Engagement: Tailor your marketing efforts to the unique needs and challenges of specific accounts, fostering stronger, more meaningful relationships.
            </li>
            <li className="help-items">
            Strategic Alignment: Create a unified approach between sales and marketing teams, aligning efforts for the acquisition and retention of key clients.
            </li>
            <li className="help-items">
            Maximized ROI: Account Based Marketing maximizes return on investment by concentrating resources on the most promising accounts, ensuring efficient and effective campaigns.
            </li>
            <li className="help-items">
            Sustainable Business Growth: By targeting high-value accounts, Account-Based Marketing contributes to sustained business growth, driving acquisition and retention efforts with a targeted and strategic approach.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
