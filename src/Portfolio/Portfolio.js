import React from 'react';
import Header from '../Home/Header';
import BannerPage from './BannerPage';
import Design_section from './Design_section';
import ProjectDetails from './ProjectDetails';
import Footer_section from '../Home/Footer_section';

const Portfolio = () => {
  return (
    <div>
      <Header />
      <BannerPage />
      <Design_section />
      <ProjectDetails />
      <Footer_section />

    </div>
  )
}

export default Portfolio