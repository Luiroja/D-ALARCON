import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className="containerLogin">
        <div className="wrapperLogin">
            <h1 className="titleLogin">Login</h1>
            <form className="formLogin">
            <input type="text"  className="inputLogin" placeholder="Nombre de Usuario"/>
            <input type="text" className='inputLogin' placeholder="Contraseña"/>
            <button className="buttonLogin">INICIAR SESIÓN</button>
            <link rel="stylesheet" href="#"  className='linkLogin'/> ¿No recuerdas tu contraseña?
            <link rel="stylesheet" href="#" className='linkLogin'/> Crea una cuenta
            </form>
            
        </div>
    </div>
  )
}

export default Login