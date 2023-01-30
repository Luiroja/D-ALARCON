import React from 'react'
import "./footer.css"
import { ImLocation, ImMobile, ImMail } from "react-icons/im";


function Footer() {
  return (
    <div className="containerFooter">
        
        <div className="footerLeft">
            <div className="logo">
            <img className='logoFooter' src="https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/322470245_887765815695149_2413674355644111238_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEvQ64A2qChdSC7uExTJZqppE5JGcqdXgGkTkkZyp1eAeyyIAnvi_YL8gDbd0gIj1tUKjebgpaHUS2DIw34gD5l&_nc_ohc=9RQx1BI7yF0AX_kyn_c&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfBTpqWdy5_Ymt7C5P7KCCZcFIna8u8Onx7YLALe0zUPkA&oe=63DAC41B" alt="" />
            </div>
            <div className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo asperiores eaque minima in expedita, possimus fugiat, maiores magni iure facilis nisi fuga! Autem delectus aliquam ipsum, incidunt magni voluptatem?
            </div>
        </div>
        <div className='footerCenter'>
            <div className="list">
            <ul className='ulFooter'><h3>D´ALARCÓN</h3>
                <li className='ilFooter'>Inicio</li>
                <li className='ilFooter'>Carrito</li>
                <li className='ilFooter'>Términos</li>
            </ul>
            </div>
            <div className="list">
            <ul className='ulFooter'><h3> CATEGORÍAS </h3>
                <li className='ilFooter'>Tortas</li>
                <li className='ilFooter'>Postres</li>
                <li className='ilFooter'>Bocaditos</li>
            </ul>
            </div>
            
            <div className="list">
            <ul className='ulFooter'> <h3>MI CUENTA</h3>
                <li className='ilFooter'>Pedidos</li>
                <li className='ilFooter'>Historial</li>
                <li className='ilFooter'>Favoritos</li>
            </ul>
            </div>
            
        </div>
        <div className='footerRight'>
            <div className='containerContact'>
            <h2 className='footerContacto'>CONTÁCTANOS!</h2>
                <h5>Ubicación:</h5>
                <p><ImLocation/> Calle las Amapolas N° 167 - Cajamarca</p>
                <h5>Correo:</h5>
                <p><ImMail/> dalarcon@gmail.com</p>
                <h5> Celular:</h5>
                <p><ImMobile/> 999 999 999</p>
            </div>
            <div className='payment'>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer