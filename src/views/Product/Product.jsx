import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {MdAdd, MdRemove} from "react-icons/md"
import "./product.css"

function Product() {
  return (
    
    <div className="containerProductView">
        <Navbar/>
        <div className="wrapperProduct">
            <div className="imgContainerProductView">
                <img src="https://i.ytimg.com/vi/H7uMpjzyaTU/maxresdefault.jpg" alt="" className="imgProductView"/>
            </div>
            <div className="infoProductView">
                <h1 className="titleProductView">Torta de chocolate</h1>
                <p className="descProductView">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut consequuntur cupiditate. Ex magni dolores assumenda qui inventore debitis facilis natus repellendus iste reiciendis animi unde quia distinctio, ipsum dolore.
                </p>
                <h4 className='price'> S/ 70</h4>

                <div className="addProductView">
                    <div className="amountContainer">
                        <MdAdd/>
                        <h3 className="amount">1</h3>
                        <MdRemove/>
                    </div>
                    <button className="buttonProductView">Comprar</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Product