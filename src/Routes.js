import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Home from './Home/Home'
import Services from './Servicces/Services';
import Portfolio from './Portfolio/Portfolio';
import Ourteam from './AboutUS/Ourteam';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact_us';
import ScrollToTop from './ScrollToTop';
import FAQ from './Home/FAQ';
import Message from './Contact/Message';
import Marketing_Strategy from './Marketing_Strategy/strategy';
import MarketingPaidCompaigns from './MarketingPaidCompaigns/strategy';
import SEODigital from './SEODigital/strategy';
import MarketingAutomation from './MarketingAutomation/strategy';
import EmployerBrandingServices from './EmoloyerBrandingServices/strategy';
import AccountBasedMarketing from './AccountBasedMarketing/strategy';
import PerformanceBasedMarketing from './PerformanceBasedMarketing/strategy';
import ReportingandAnalysis from './ReportingandAnalysis/strategy';





function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Trigger loader when a route change starts
    handleStart();

    // Simulate loading completion after some delay (e.g., data fetching)
    const timer = setTimeout(() => {
      handleComplete();
    }, 1000); // Adjust the time as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [location]);


  return (
    <div>
      {loading && <Loader />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About_Us" element={<Ourteam />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact_Us" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Marketing_Strategy" element={<Marketing_Strategy/>}/>
        <Route path="/MarketingPaidCompaigns" element={<MarketingPaidCompaigns/>}/>
        <Route path='/SEODigital' element={<SEODigital/>}/>
        <Route path='/MarketingAutomation' element={<MarketingAutomation/>}/>
        <Route path='/EmployerBrandingServices' element={<EmployerBrandingServices/>}/>
        <Route path='/AccountBasedMarketing' element={<AccountBasedMarketing/>}/>
        <Route path='/PerformanceBasedMarketing' element={<PerformanceBasedMarketing/>}/>
        <Route path='/ReportingandAnalysis' element={<ReportingandAnalysis/>}/>
        {/* <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/>
        <Route path='' element={}/> */}
      </Routes>
    </div>
  );
}

export default App;
