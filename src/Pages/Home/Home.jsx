import React from 'react'
import PropertyType from '../propertyType/PropertyType'
import PropertyList from '../propertyList/PropertyList'
import About from '../about/About'
import PropertyAgent from '../propertyAgent/PropertyAgent'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <PropertyType/>
      <PropertyList/>
      <About/>
      <PropertyAgent/>
      <Testimonial/>
    </div>
  )
}

export default Home