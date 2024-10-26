import React from "react";
import accountbasedmarketing from './accountbasedmarketing.webp'
import './content.css';
 const content1 = () =>{
    return(
        <div>
            <div className="content">
                <div className="content-div"  data-aos='fade-right' data-aos-delay='1000'>
                    <h1 >Account Based Marketing</h1>
                    <div className="inner-div" >
                    Account Based Marketing (ABM) is a targeted strategy that focuses on personalized campaigns for specific high-value accounts. By tailoring marketing efforts to individual accounts, ABM aims to build strong, one-to-one relationships with key decision-makers. This approach involves understanding the unique needs and challenges of each target account, allowing for more precise and impactful engagement.
                    </div>
                    <a src='#'  className="btn">Learn More</a>
                </div>
                <img src={accountbasedmarketing} className="accountbasedmarketing" alt="" />
            </div>
        </div>
    )
 }
 export default content1