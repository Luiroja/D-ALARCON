import React, {useState} from 'react'
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import "./login.css"



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


MySwal.fire({
    icon: "error",
    title: "Lo sentimos",
    text: "Algo malo pasó, porfavor intentalo de nuevo",
    
})





const Login = () => {
  // Use redux authentication
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);



  const handleClick = (e) => {
    e.preventDefault();
    try {
      login(dispatch, {username,password});
    } catch (error) {
      <MySwal/>
    }
    
  }
  return (
    <div className="containerLogin">
        <div className="wrapperLogin">
            <h1 className="titleLogin">Login</h1>
            <form className="formLogin">
            <input 
            ype="text"  
            className="inputLogin" 
            placeholder="Nombre de Usuario"
            onChange ={(e)=> setUsername(e.target.value)} />
            <input 
            type="password" 
            className='inputLogin' 
            placeholder="Contraseña"
            onChange ={(e)=> setPassword(e.target.value)}/>

            <button 
            className="buttonLogin"
            onClick={handleClick}
            disabled={isFetching}
            >INICIAR SESIÓN
            </button>
             
           
            <link rel="stylesheet" href="#"  className='linkLogin'/> ¿No recuerdas tu contraseña?
            <link rel="stylesheet" href="#" className='linkLogin'/> Crea una cuenta
            </form>
            
        </div>
    </div>
  )
}

export default Login