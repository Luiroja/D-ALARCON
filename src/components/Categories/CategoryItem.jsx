import React from 'react'
import "./categories.css"
import {Link} from "react-router-dom"
import { FiSearch } from 'react-icons/fi';

function CategoryItem({item}) {
  return (
    
    <div className="containerCategory">
       <Link to={`/products/${item.category}`}>
       <img src={item.img} alt="" className='imgCategory'/>
       <div className="infoCategory">
        <h1 className="titleCategory">{item.title}</h1>
        <button className='buttonCategory'>
        <FiSearch style={{ color: "gray", fontSize: 24, borderRadius:10 }}/>
        </button>
       </div>
       </Link>
       
       
    </div>
    
  )
}

export default CategoryItem