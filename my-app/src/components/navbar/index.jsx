import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import "./navbar.css"
import { removeUser } from '../../redux/slices/auth';



export const Navbar=()=> {
    const {totalItems}=useSelector((state) => state.cart);
    const dispatch=useDispatch()
  return (
    <>
    <nav>
      <div className='logo'>
    <Link to={'/'} style={{ textDecoration: 'none' }}>
        <h1 >MakesitanShop.</h1>
    </Link>
      </div>
    <div className='right-text-container'>
    <Link to={'/login'}>
      <button className='cart-icon' onClick={()=>dispatch(removeUser())} >Logout</button>
    </Link>
    <Link to={'/login'}>
      <button className='cart-icon'>Login</button>
    </Link>
    
    <Link to={'/cart'}>
        <button className='cart-icon'>Cart {totalItems} </button>
    </Link>
    </div>
    </nav>
    </>
  )
}
