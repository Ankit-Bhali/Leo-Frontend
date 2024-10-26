import React from 'react'
import Header from './Header'
import About from './About_section'
import Hero from './Hero_section'
import Services from './Services_section'
import Portfolio from './Portfolio_section'
import CTA from './Cta_section'
import Counter from './Counter_section'
import Testimonials from './Testimonials'
import Team from './Team_section'
import Contact from './Contact_section'
import Article from './Article_section'
import Footer from './Footer_section'
import FAQ from './FAQ'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA />
      <Counter />
      <Testimonials />
      <Team />
      <Contact />
      <Article />
      <FAQ />

      <Footer />


    </div>

  )
}

export default Home