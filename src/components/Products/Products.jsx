import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from "axios"
import "./products.css"


const Products = ({category, filters}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect (() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category ?
           `http://localhost:5001/api/products?category=${category}`
           : "http://localhost:5001/api/products"
        )
        setProducts(res.data)
        
      } catch (error) {
        
      };
      
    }
    getProducts()
  }, [category]);


  useEffect (() => {
    category &&
    setFilteredProducts(
      products.filter((item) => 
        Object.entries(filters).every(([key, value]) =>
        item[key].includes(value))
      )
    )
  }, [products, category, filters]);


  return (
    
    <div className="containerProducts">
      {category ?
        filteredProducts.map((item) => <Product item={item} key={item.id}/>)
        :products
          .slice(0,8)
          .map((item) => <Product item={item} key={item.id}/>)}
    </div>
  )
}

export default Products