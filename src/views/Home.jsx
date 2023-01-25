// comands to create arrow funcion: "rafce"
// comand to create class funcion: "rfc"

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import { sliderItems } from '../Data'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider items={sliderItems}/>
    </div>
  )
}

export default Home
