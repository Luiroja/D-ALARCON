import React from 'react'
import "./categories.css"
import {Link} from "react-router-dom"

function CategoryItem({item}) {
  return (
    
    <div className="containerCategory">
       <Link to={`/products/${item.category}`}>
       <img src={item.img} alt="" className='imgCategory'/>
       <div className="infoCategory">
        <h1 className="titleCategory">{item.title}</h1>
        <button className='buttonCategory'>SHOW NOW</button>
       </div>
       </Link>
       
       
    </div>
    
  )
}

export default CategoryItem