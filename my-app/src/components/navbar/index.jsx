import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./navbar.css"



export const Navbar=()=> {
    const {totalItems}=useSelector((state) => state.cart);
  return (
    <>
    <nav>
      <div className='logo'>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h1 >MakesitanShop.</h1>
    </Link>
      </div>
    <div className='right-text-container'>
    <Link to={'/cart'}>
        <button className='cart-icon'>Cart {totalItems} </button>
    </Link>
    </div>
    </nav>
    </>
  )
}
