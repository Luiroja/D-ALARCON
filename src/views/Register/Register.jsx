import React from 'react'
import "./register.css"

function Register() {
  return (
    <div className="containerRegister">
        <div className="wrapperRegister">
            <h1 className="titleRegister"> CREA UNA CUENTA</h1>
            <form action="" className="formRegister">
                <input type="text" className="inputFormRegister" placeholder="Nombres" />
                <input type="text" className="inputFormRegister"  placeholder="Apellidos" />
                <input type="text" className="inputFormRegister"  placeholder='Nombre de Usuario'/>
                <input type="email" className="inputFormRegister"  placeholder='Email'/>
                <input type="password" className="inputFormRegister"  placeholder='Contraseña'/>
                <input type="password" className="inputFormRegister"  placeholder='Confirmar contraseña'/>
                <p className='agreement'>
                By creating an account, I consent to the processing of personal data in accordance with the <b>PRIVACY POLICY</b>
                </p>
                <button className='buttonRegister'>CREAR CUENTA</button>
            </form>
        </div>
    </div>
  )
}

export default Register