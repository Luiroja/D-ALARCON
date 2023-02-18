import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./cart.css"
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'

function Cart() {
const cart = useSelector((state)=> state.cart)
const iva = cart.total *18/100



  return (
    <div className="containerCart">
        <Navbar/>
        <div className="wrapperCart">
            <h3 className="titleCart">TUS PEDIDOS</h3>
            <div className="topCart">
                <button className="topButtonCart"> AGREGAR OTRO PRODUCTO</button>
                <div className="topTexts">
                    <div className="topText">Agregados al carrito (2)</div>
                    <div className="topText">Notificaciones  (0)</div>
                </div>
                <button className="topButtonCart"> COMPRAR AHORA</button>
            </div>
            <div className="bottomCart">
                <div className="infoCart">
                    {cart.products.map((product) =>(


            <div className="productCart">
            <div className="productCartDetails">
                <img src={product.img}  alt="" className='imgCart'/>
                <div className="detailsProduct">
                    <span className="productNameCart"><b>Producto:</b> {product.title} </span>
                    <span className="productIdCart"><b>ID:</b> {product._id} </span>
                    <div className="productColorCart"></div>
                    <span className="productSizeCart"><b>Tamaño: </b>{product.size}</span>
                </div>
            </div>
            <div className="priceDetailCart">
                <div className="priceAmountContainerCart">
                    <FiMinus/>
                    <div className="priceAmountCart"> {product.quantity} </div>
                    <FiPlus/>
                </div>
                <div className="productPriceCart"> S/ {product.price*product.quantity}</div>
            </div>
            </div>

                    ))}

                    <hr/>

                </div>
                <div className="summaryCart">
                    <h3 className='summaryTitle'> RESUMEN DE COMPRA</h3>
                    <div className="summaryItem">
                        <span className='summaryItemText'><b>SUBTOTAL</b></span>
                        <span className='summaryItemPrice'> S/ {cart.total}</span>
                    </div>
                    <div className="summaryItem">
                        <span className='summaryItemText'><b>IVA</b></span>
                        <span className='summaryItemPrice'> S/ {iva}</span>
                    </div>
                    <div className="summaryItem">
                        <span className='summaryItemText'><b>TOTAL</b></span>
                        <span className='summaryItemPrice'> S/ {cart.total + iva}</span>
                    </div>
                    <button className='buttonCheckCart'>COMPRAR AHORA</button>
                </div>

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart