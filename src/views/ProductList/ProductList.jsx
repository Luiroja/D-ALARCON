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

  if (category === "tortas") {
    return (
      <div className='ContainerProductList'>
          <Navbar/>
          
          <h1 className='titleProductList'>{category}</h1>
          
          <div className="containerFilter">
              
              <div className="filterProductList">
              <span className='filterText'>Filtrar por</span>
              <select name="tortaCategory" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Eventos</option>
                  <option >cumpleaños</option>
                  <option >bautizo</option>
                  <option >bebes</option>
                  <option >damas</option>
                  <option >celebración</option>
              </select>

              <select name="size" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Tamaño</option>
                  <option >2 kg</option>
                  <option >1 kg</option>
                  <option >1/2 kg</option>
                  <option >1/4 kg</option>
              </select>
              </div>

              <div className="filterProductList">
              <span className='filterText'>Filtrar por</span>
              <select name="inStock" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Disponibilidad</option>
                  <option >bajo pedido</option>
                  <option >con estock</option>
                  <option >sin estock</option>
              </select>
              
              
              </div>
              
  
          </div>
          
          <Products category={category} filters={filters} />
          <Footer/>
      </div>
    )
  }



  else if (category ==="postres") {
    return (
      <div className='ContainerProductList'>
          <Navbar/>
          
          
          <h1 className='titleProductList'>{category}</h1>
          
          <div className="containerFilter">
                     
              <div className="filterProductList">
              <span className='filterText'>Filtrar por</span>
              <select name="postreCategory" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Categoría</option>
                  <option >cheesecakes</option>
                  <option >pies</option>
                  <option >brownies</option>
                  <option >mouses</option>
                  
              </select>
              <select name="taste" className='selectOption' onChange={handleFilters}>
                  <option dsabled selected>Sabor</option>
                  <option >óreo</option>
                  <option >chocolate</option>
                  <option >tres leches</option>
                  <option >frutas</option>
                  
              </select>
              </div>

              <div className="filterProductList">
              <span className='filterText'>Filtrar por</span>
              <select name="mol" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Molde</option>
                  <option >8 porciones</option>
                  <option >6 porciones</option>
                  <option >4 porciones</option>
                  <option >2 porciones</option>
                  <option >1 porción</option>
              </select>
              </div>
          </div>
          
          <Products category={category} filters={filters} />
          <Footer/>
      </div>
    )
  }



  else if (category ==="bocaditos") {
    return (
      <div className='ContainerProductList'>
          <Navbar/>
          
          
          <h1 className='titleProductList'>{category}</h1>
          
          <div className="containerFilter">
                     
              <div className="filterProductList">
              <span className='filterText'>Filtrar por</span>
              <select name="bocaditoCategory" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Categoría</option>
                  <option >cupcakes</option>
                  <option >alfajores</option>
                  <option >dulces</option>
                  
              </select>

              </div>

              <div className="filterProductList">
              <span className='filterText'>Filtrar por</span>
              <select name="size" className='selectOption' onChange={handleFilters}>
                  <option disabled selected>Caja de</option>
                  <option >24 unidades</option>
                  <option >15 unidades</option>
                  <option >12 unidades</option>
                  <option >8 unidades</option>
                  <option >6 unidades</option>
                  <option >4 unidades</option>
              </select>
              </div>
          </div>
          
          <Products category={category} filters={filters} />
          <Footer/>
      </div>
    )
  }

  
     
    }
  
export default ProductList;