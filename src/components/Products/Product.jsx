import React from 'react'
import { Link } from "react-router-dom";
import { FiShoppingCart, FiSearch } from 'react-icons/fi'
import {GrFavorite} from 'react-icons/gr'
import "./products.css"

const Product =({item}) => {
  
  return (
    <div className="containerProduct">
        <img className="imgProduct" src={item.img} alt="product_imagen" />
        <div className="infoProduct">
            <i className='iconProduct'><FiShoppingCart/></i>
            <i className='iconProduct'>
            <Link to={`/product/${item._id}`}><FiSearch/></Link>
            </i>
            <i className='iconProduct'><GrFavorite/></i>
        </div>
    </div>
  )
}

export default Product