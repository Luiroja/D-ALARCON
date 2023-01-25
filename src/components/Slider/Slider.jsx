
import React, { useState } from 'react';
import "./slider.css";
import {sliderItems} from "../../Data"
import {FiChevronsLeft, FiChevronsRight} from "react-icons/fi";


const Slider = ({items}) => {
    const [current, setCurrent]= useState(0);
    const length = items.length;

    const nextSlide =() => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide =() => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }


    if (!Array.isArray(items) || items.length <= 0) {
        return current;
      }

  return (
    <div div className="container-slider">
            <div className="arrow-left" onClick={prevSlide}>
                <FiChevronsLeft/>
            </div>
            
            <div className="wrapper-slider">
            {sliderItems.map((item, index) => {
                    return (
                        < div 
                        className={index === current ? 'slide': 'slide'}
                        key={index}>
                    <div className="imgContainer">
                        {/* ADD IMG HERE*/}
                        {index === current && (
                            <img src={item.img} alt="" className='img-slider'/> 
                        )}     
                    </div>
                    <div className="infoContainer">
                        {index === current && (
                            <h1 className='h1Slider'>{item.title}</h1>
                            
                        )}
                        {index  === current && (
                            <p className='pSlider'>{item.desc}</p>
                        )}

                        {index === current && (
                            <button className='buttonSlider'>SHOW NOW</button>
                        )}
                        

                    </div>
                    
                </div>                   
                )
                })                 
                }

            </div>
           
            
            <div className="arrow-right" onClick={nextSlide}>
                <FiChevronsRight/>
            </div>
            
                   
            </div>
           
                    
  )
}

export default Slider;