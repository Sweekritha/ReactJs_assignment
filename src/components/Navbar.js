import React from 'react';
import '../styles/navbar.css'

const Navbar = ({size,setShow,setState}) => {
  return (
    <nav>
      <div className="nav_loc">
        <span className="My_basket" onClick={()=>(setShow(true) , setState(true))}>
            My Browsing 
        </span>
        <span className="wishlist" onClick={()=>(setState(false) , setShow(true))}> Wishlist</span>
        <div className="cart" onClick={()=>setShow(false)}>
            <span>
                <i className="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
        </div>
     </div>
    </nav>
  )
}

export default Navbar