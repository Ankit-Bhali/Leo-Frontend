import React from "react";
import marketingautomationimg from './marketingautomationimg.webp'
import './content.css';
 const content1 = () =>{
    return(
        <div>
            <div className="content">
                <div className="content-div" data-aos='fade-right' data-aos-delay='1000'
>
                    <h1 >Marketing Automation</h1>
                    <div  className="inner-div" >
                    Revolutionize your marketing strategy with our Marketing Automation service. Streamline and optimize campaigns effortlessly, from lead nurturing to personalized content delivery. Our platform empowers you to analyze real-time data, adapting strategies dynamically for optimal results. Experience the efficiency of automated workflows, ensuring a seamless and personalized customer journey. Elevate your marketing impact with our tailored Marketing Automation service, driving engagement and achieving measurable success in the ever-evolving digital landscape.
                    </div>
                    <a src='#'  className="btn">Learn More</a>
                </div>
                <img className="marketingautomation" src={marketingautomationimg}  />

            </div>
        </div>
    )
 }
 export default content1