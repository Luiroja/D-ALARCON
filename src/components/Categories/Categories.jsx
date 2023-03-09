import React from 'react'
import {categories} from "../../Data"
import CategoryItem from './CategoryItem'


const Categories = () => {
  
  return (
    <div className='containerCategories'>
         {categories.map((item) =>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Categories