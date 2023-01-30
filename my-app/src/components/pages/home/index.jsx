import React from 'react'
import {Link} from 'react-router-dom'
import Swiper from '../../swiper/index'
import SideDrawer from '../../slidedrawer/index'
import Product from '../../allproducts/index'
import Card from '../../card'
const Home = () => {
  return (
  <>
    <div>Home</div>
    <SideDrawer />
    <li><Link to="/Login">login</Link></li>
    <Swiper />
    <Product />
    <Card />
  </>
  )
}

export default Home