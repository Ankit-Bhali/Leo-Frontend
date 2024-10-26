import React from 'react'
import Header from '../Home/Header'
import Banner from './Banner'
import Skils from './Skils'
import Team_section from './Team_section'
import Counter from './Counter'
import Footer_section from '../Home/Footer_section'

const ourteam = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Skils />
      <Team_section />
      <Counter />
      <Footer_section />
    </div>
  )
}

export default ourteam