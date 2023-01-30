import React from 'react';
import "./navbar.css";
import { FiSearch, FiShoppingCart } from 'react-icons/fi';



const Navbar = () => {
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
        <img className="logoNavbar" src="https://scontent.fpiu2-1.fna.fbcdn.net/v/t39.30808-6/322470245_887765815695149_2413674355644111238_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEvQ64A2qChdSC7uExTJZqppE5JGcqdXgGkTkkZyp1eAeyyIAnvi_YL8gDbd0gIj1tUKjebgpaHUS2DIw34gD5l&_nc_ohc=9RQx1BI7yF0AX_kyn_c&_nc_ht=scontent.fpiu2-1.fna&oh=00_AfBTpqWdy5_Ymt7C5P7KCCZcFIna8u8Onx7YLALe0zUPkA&oe=63DAC41B" alt="" />
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
