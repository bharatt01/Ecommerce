import React from 'react'
import { Link,Outlet } from "react-router-dom";
import "./Navbar.css";
// import Loginpage from './Loginpage';
function Navbar() {
  return (
    <> 
    
    <h1 id='hy'>SHOP.CO</h1>
    <div className='navbar1'>
      <Link to='/Shop' className='Shop'>Shop
      <div className='dropdown'>
        <Link to={'/Men'}> Men </Link>
        <Link to={'/Women'} > Women </Link>
        <Link to={'/Kids'} > Kids </Link>
      </div>
      </Link>
      
      <Link to='/Onsale'>OnSale</Link>
      <Link to='/NewArrivals'>NewArrivals</Link>
      <Link to='/Brands'>Brands</Link>
       <input class="gm" type="text" placeholder="Search for products"/>
     <Link> <img id='shp' src="/images/shoppingcart.webp" alt="cart" /></Link>
     <Link to='Loginpage' > <img id='shp1' src="/images/profileicon.jpg" alt="user" /></Link>
    </div>
    <Outlet />
    </>
  )
}

export default Navbar;