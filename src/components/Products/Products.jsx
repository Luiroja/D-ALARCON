import React from 'react'
import { popularProducts } from '../../Data'
import Product from './Product'


function Products() {
  return (
    <div className="containerProducts">
        {popularProducts.map((item) =>(
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products