import React from 'react'
import "./categories.css"

function CategoryItem({item}) {
  return (
    <div className="containerCategory">
       <img src={item.img} alt="" className='imgCategory'/>
       <div className="infoCategory">
        <h1 className="h1Category">{item.title}</h1>
        <button className='buttonCategory'>SHOW NOW</button>
       </div>
    </div>
  )
}

export default CategoryItem