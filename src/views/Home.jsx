// comands to create arrow funcion: "rafce"
// comand to create class funcion: "rfc"

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories'
import { sliderItems } from '../Data'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider items={sliderItems}/>
        <Categories/>
    </div>
  )
}

export default Home
