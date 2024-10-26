import React from "react";
import seodigitalimg from './seodigitalimg.webp'

import './content.css';
 const content1 = () =>{
    return(
        <div>
            <div className="content">
                <div className="content-div"   data-aos='fade-right' data-aos-delay='1000'>
                    <h1 > SEO Digital</h1>
                    <div className="inner-div" >
                        Ignite success with our Strategy services. We craft bespoke plans that align with your brand's goals, leveraging market insights to drive growth. From digital campaigns to comprehensive branding, we nevigate the ever-evolving landscape with precisions. Elevate your Business with strategies that resonate, capivate, and propel your brand to new heights in a dynamic and competitive market.
                    </div>
                    <a src='#'  className="btn">Learn More</a>
                    
                </div>
                <img className="seodigitalimg" src={seodigitalimg} alt="" />
            </div>
        </div>
    )
 }
 export default content1