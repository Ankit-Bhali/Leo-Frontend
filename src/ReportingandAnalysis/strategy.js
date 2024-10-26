import React from "react";
import Header from "../Home/Header";
import Content1 from "./Servicelink1";
import Marketingcontent from "./MarketingContent";
import HelpforStrategy from "./HelpforStrategy";
import Nextdiv from "./Nextdiv";
import Nextdivsecond from "./Nextdivsecond";
import Nextdivthird from "./Nextdivthird";
import Nextdivfourth from "./Nextdivfourth";
import Nextdivfifth from "./Nextdivfifth";
import Testing from './Testing';
import Nextdivsixth from "./Nextdivsixth";
import Footer from "./Footer";
const strategy = ()=>{
    return(
        <div>
        <Header/>
        <Content1/>
        <Marketingcontent/>
        <HelpforStrategy/>
        <Nextdiv/>
        <Nextdivsecond/>
        <Nextdivthird/>
        <Nextdivfourth/>
        <Nextdivfifth/>
        <Testing/>
        <Nextdivsixth/>
        <Footer/>
        </div>
    )
  
}
export default strategy