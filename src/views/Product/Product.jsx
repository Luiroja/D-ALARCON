import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"
import { publicRequest } from "../../requests/requestMethod";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {MdAdd, MdRemove} from "react-icons/md"
import "./product.css"
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Product =() => {
const location = useLocation();
const id = location.pathname.split('/')[2];
const [product, setProduct] = useState({});
const [subcategories, setSubcategories] = useState("");
const [size, setSize] = useState("");
const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

useEffect (() => {
    const getProduct = async() => {
        try {
            const res = await publicRequest.get("/products/product/" + id);
            setProduct(res.data)
        } catch (error) {
            
        }
    }
    getProduct();
}, [id])

const handleQuantity = (type) => {
if(type === "decr") {
    quantity >1 && setQuantity(quantity -1)
}else {
    setQuantity(quantity +1)
}
}

const handleClick =() => {
    dispatch(
        addProduct ({...product, quantity, subcategories, size})
    )
}





  return (
    
    <div className="containerProductView">
        <Navbar/>
        <div className="wrapperProduct">
            <div className="imgContainerProductView">
                <img src={product.img} className="imgProductView"/>
            </div>
            <div className="infoProductView">
                <h1 className="titleProductView">{product.title}</h1>
                <p className="descProductView">{product.desc}</p>
                <p>{product.ingredients && product.ingredients.join(", ")}</p>
                <h4 className='price'> S/ {product.price}</h4>
                <div className="filterContainer">
                  
                    <div className="filter">
                    <span className="filterTitle">Especial para:</span>
                    <select className="selectOption" onChange={(e) => setSubcategories(e.target.value)}>
                    {product.subcategories?.map((s)=> (
                        <option key={s}>{s}</option>
                    ))}
                    </select>
                    </div>

                    <div className="filter">
                    <span className="filterTitle">Tamaño</span>
                    <select className="selectOption" onChange={(e) => setSize(e.target.value)}>
                    {product.size?.map((s)=> (
                        <option key={s}>{s}</option>
                    ))}
                    </select>
                    </div>
                
                </div>
                

                <div className="addProductView">
                    <div className="amountContainer">
                    <MdRemove className='iconContainer'
                        onClick = {() => handleQuantity("decr") }
                        />
        
                        <h3 className="amount">{quantity}</h3>
            
                        <MdAdd className='iconContainer' 
                        onClick = {() => handleQuantity("incr") }  
                        />
                    </div>
                    <button className="buttonProductView" onClick={handleClick}>Comprar</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )


}

export default Product;