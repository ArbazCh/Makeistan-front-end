import React from 'react'
import {Link} from 'react-router-dom'
import SideDrawer from '../../components/slidedrawer/index'
import {Product} from '../../components/product/'
// import Card from '../../card'
import Footer from '../../components/footer/footer'
import Swiper from '../../components/swiper'
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