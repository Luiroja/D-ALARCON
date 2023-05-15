import React from 'react';
import "./navbar.css";
import { FiSearch, FiShoppingCart, FiLogIn, FiUserPlus, FiHome } from 'react-icons/fi';
import Badge from "@mui/material/Badge";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { cartQuantitySelector } from '../../redux/cartRedux'



const Navbar = () => {
  const cartQuantity= useSelector( cartQuantitySelector);

  return (
    <div className="container-navbar">
      <div className="wrapper-navbar">
      <div className='left'>
        <div className='searchContainer'>
          <input placeholder="Buscar" className="inputSearch"/>
        {/* add search button of font-awesome */}
        <FiSearch style={{ color: "gray", fontSize: 24 }} />
        </div>
      </div>
      <div className='center'>
        <img className="logoNavbar" src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/322470245_887765815695149_2413674355644111238_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEvQ64A2qChdSC7uExTJZqppE5JGcqdXgGkTkkZyp1eAeyyIAnvi_YL8gDbd0gIj1tUKjebgpaHUS2DIw34gD5l&_nc_ohc=Fnb2LZDSy6YAX9Du0PH&_nc_ht=scontent-lim1-1.xx&oh=00_AfC76LAgJqK5XTcYmMZLkoYNAfBgoZ1GmgnhpWS_jHmFGw&oe=63F084DB" alt="" />
        </div>
        
      <div className='right'>
      <Badge badgeContent={cartQuantity} color="primary">
      <Link to ="/" >
        <div className='menuItem'>
          <FiHome style={{ color: "gray", fontSize: 24 }}/>
        </div>
        </Link>
    
        <Link to ="/register" >
        <div className='menuItem'>
          <FiUserPlus style={{ color: "gray", fontSize: 24 }}/>
        </div>
        </Link>
        <Link to = "/login" >
        <div className='menuItem'>
          <FiLogIn style={{ color: "gray", fontSize: 24 }}/>
        </div>
        </Link>
        <Link to="/cart">
        <div className='menuItem'>
          {/* add Soppin card icon, of font-awesome */}
          <FiShoppingCart style={{ color: "gray", fontSize: 24 }}  />
        </div>
        </Link>
        </Badge>
      </div>
      </div>
      </div>
  )
}

export default Navbar;
