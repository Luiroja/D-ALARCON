import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./cart.css"
import { FiMinus, FiPlus } from 'react-icons/fi'

function Cart() {
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
                    <div className="productCart">
                        <div className="productCartDetails">
                            <img src="https://d1uz88p17r663j.cloudfront.net/original/e89d19d331ac413811e3b1c11a893991_torta-princesa.jpg" alt="" className='imgCart'/>
                            <div className="detailsProduct">
                                <span className="productNameCart"><b>Producto:</b> </span>
                                <span className="productIdCart"><b>ID:</b> 93813718293 </span>
                                <div className="productColorCart"></div>
                                <span className="productSizeCart"><b>Tamaño:</b> Mediano</span>
                            </div>
                        </div>
                        <div className="priceDetailCart">
                            <div className="priceAmountContainerCart">
                                <FiPlus/>
                                <div className="priceAmountCart"> 2 </div>
                                <FiMinus/>
                            </div>
                            <div className="productPriceCart"> S/30</div>
                        </div>
                    </div>

                    <hr/>

                    <div className="productCart">
                        <div className="productCartDetails">
                            <img src="https://buenazo.cronosmedia.glr.pe/original/2022/11/08/636a9372a34aff27667a3b4f.jpg" alt="" className='imgCart'/>
                            <div className="detailsProduct">
                                <span className="productNameCart"><b>Producto:</b> </span>
                                <span className="productIdCart"><b>ID:</b> 93813489600 </span>
                                <div className="productColorCart"></div>
                                <span className="productSizeCart"><b>Cantidad:</b> 19 unidades</span>
                            </div>
                        </div>
                        <div className="priceDetailCart">
                            <div className="priceAmountContainerCart">
                                <FiPlus/>
                                <div className="priceAmountCart"> 1 </div>
                                <FiMinus/>
                            </div>
                            <div className="productPriceCart"> S/20</div>
                        </div>
                    </div>

                </div>
                <div className="summaryCart">
                    <h3 className='summaryTitle'> RESUMEN DE COMPRA</h3>
                    <div className="summaryItem">
                        <span className='summaryItemText'><b>Subtotal</b></span>
                        <span className='summaryItemPrice'> S/50.00</span>
                    </div>
                    <div className="summaryItem">
                        <span className='summaryItemText'><b>IVA</b></span>
                        <span className='summaryItemPrice'> S/5.00</span>
                    </div>
                    <div className="summaryItem">
                        <span className='summaryItemText'><b>TOTAL</b></span>
                        <span className='summaryItemPrice'> S/55.00</span>
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