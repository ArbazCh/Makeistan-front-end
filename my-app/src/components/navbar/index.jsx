import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import "./navbar.css"



export const Navbar=()=> {
    const {totalItems}=useSelector((state) => state.cart);
  return (
    <>
    <nav>
      <div>
    <Link to={'/'}>
        <h1>MakesitanShop.</h1>
    </Link>
      </div>
    <div className='right-text-container'>
    <Link to={'/cart'}>
        <button className='cart-icon'>Cart {totalItems} </button>
    </Link>
    <Link to={'/Orders'}>
      <h3>Orders</h3>
    </Link>
    </div>
    </nav>
    </>
  )
}
