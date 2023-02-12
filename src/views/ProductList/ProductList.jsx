import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'
import "./productList.css"
import { useLocation } from 'react-router-dom'

function ProductList() {
  // Solved filters 
  const location = useLocation();
  const category =location.pathname.split('/')[2];
  const [filters, setFilters] = useState({})
 

  const handleFilters =(e) => {
    const value = e.target.value;
    setFilters ({
      ...filters,
      [e.target.name]: value,
    });
  }

  return (
    <div className='ContainerProductList'>
        <Navbar/>
        
        <h1 className='titleProductList'>{category}</h1>
        
        <div className="containerFilter">
            <div className="filterProductList">
            <span className='filterText'>Filtrar por</span>
            <select name="sabor" className = 'selectOption' onChange={handleFilters}>
                <option disabled selected>Sabor</option>
                <option >carrot cake</option>
                <option >tres leches café</option>
                <option >tres leches clásica</option>
                <option >chocolate</option>
                <option >cake apple pecan</option>
                <option >cake orange chocolate</option>
            </select>
            </div>
            <div className="filterProductList">
            <span className='filterText'>Filtrar por</span>
            <select name="size" id="" className='selectOption' onChange={handleFilters}>
                <option disabled selected>Tamaño</option>
                <option >2 kg</option>
                <option >1.5 kg</option>
                <option >1 kg</option>
                <option >1/2 kg</option>
                <option >1/4 kg</option>
            </select>
            </div>
            

        </div>
        
        <Products category={category} filters={filters} />
        <Footer/>
    </div>
  )
}

export default ProductList