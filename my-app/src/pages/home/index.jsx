import React from 'react'
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import Swiper from '../../swiper/index'
import SideDrawer from '../../slidedrawer/index'
import Product from '../../allproducts/index'
import Card from '../../card'
import Footer from '../../footer/footer'
=======
import Swiper from '../../components/swiper'
import SideDrawer from '../../components/slidedrawer/'
>>>>>>> 0eb3a4fb083303a4fda9a090a49062b692f4f7c5
const Home = () => {
  return (
  <>
    <div>Home</div>
    <SideDrawer />
    <li><Link to="/Login">login</Link></li>
    <Swiper />
    <Product />
    {/* <Card /> */}
    <Footer />
  </>
  )
}

export default Home