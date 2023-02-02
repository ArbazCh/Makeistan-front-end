import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./navbar.css"



export const Navbar=()=> {
    const {totalItems}=useSelector((state) => state.cart);
  return (
    <>
    <nav>
    <Link to={'/cart'}>
        <button className='cart-icon'>Cart {totalItems} </button>
    </Link>
    <Link to={'/'}>
        <h1>MakesitanShop.</h1>
    </Link>
    </nav>
    </>
  )
}
