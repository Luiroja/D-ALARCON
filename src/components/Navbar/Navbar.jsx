import React from 'react';
import "./navbar.css";
import { FiSearch, FiShoppingCart } from 'react-icons/fi';



const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
      <div className='left'>
        <div className='searchContainer'>
          <input placeholder="Buscar"/>
        {/* add search button of font-awesome */}
        <FiSearch style={{ color: "gray", fontSize: 24 }} />
        </div>
      </div>
      <div className='center'>
        <h1>D´ALARCÓN</h1>
        </div>
      <div className='right'>
        <div className='menuItem'>REGISTER</div>
        <div className='menuItem'>SIGN IN</div>
        <div className='menuItem'>
          {/* add Shoppin card icon, of font-awesome */}
          <FiShoppingCart style={{ color: "gray", fontSize: 24 }}  />
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
