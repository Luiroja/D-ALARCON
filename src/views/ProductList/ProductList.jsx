import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import "./productList.css"

function ProductList() {
  return (
    <div className='ContainerProductList'>
        <Navbar/>
        
        <h1 className='titleProductList'>TORTAS</h1>
        
        <div className="containerFilter">
            <div className="filterProductList">
            <span className='filterText'>Filtrar por</span>
            <select name="" id="" className = 'selectOption'>
                <option value="" disabled selected>Sabor</option>
                <option value="">Carrot cake</option>
                <option value="">Tres leches café</option>
                <option value="">Tres leches clásica</option>
                <option value="">Chocolate</option>
                <option value="">Cake apple pecan</option>
                <option value="">Cake orange chocolate</option>
            </select>
            </div>
            <div className="filterProductList">
            <span className='filterText'>Filtrar por</span>
            <select name="" id="" className='selectOption'>
                <option value="" disabled selected>Molde de</option>
                <option value="">24 porciones</option>
                <option value="">16 porciones</option>
                <option value="">12 porciones</option>
                <option value="">8 porciones</option>
                <option value="">4 porciones</option>
            </select>
            </div>
            

        </div>
        
        <Products/>
        <Footer/>
    </div>
  )
}

export default ProductList