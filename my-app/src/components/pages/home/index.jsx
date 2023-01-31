import React from 'react'
import {Link} from 'react-router-dom'
import Swiper from '../../swiper/index'
import SideDrawer from '../../slidedrawer/index'
<<<<<<< HEAD
import Products from '../../allproducts/index'
=======
import Product from '../../allproducts/index'
>>>>>>> 955c40edb37bfe3325b02c80702601eb14615658
import Card from '../../card'
const Home = () => {
  return (
  <>
    <div>Home</div>
    <SideDrawer />
    <li><Link to="/Login">login</Link></li>
    <Swiper />
<<<<<<< HEAD
    {/* <Products /> */}
=======
    <Product />
>>>>>>> 955c40edb37bfe3325b02c80702601eb14615658
    <Card />
  </>
  )
}

export default Home