// comands to create arrow funcion: "rafce"
// comand to create class funcion: "rfc"

import React from 'react'
import { sliderItems } from '../Data'

import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider items={sliderItems}/>
        <Categories/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home
