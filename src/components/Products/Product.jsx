import React from 'react'
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import {GrFavorite} from 'react-icons/gr'
import "./products.css"

function Product({item}) {
  return (
    <div className="containerProduct">
        <img className="imgProduct" src={item.img}/>
        <div className="infoProduct">
            <i className='iconProduct'><FiShoppingCart/></i>
            <i className='iconProduct'><FiSearch/></i>
            <i className='iconProduct'><GrFavorite/></i>
            
            
            
        </div>
    </div>
  )
}

export default Product