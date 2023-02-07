import React from 'react'
import {Link} from 'react-router-dom'
import Swiper from '../../components/swiper'
import SideDrawer from '../../components/slidedrawer/index'
import ProductList from '../ProductList'
// import Card from '../../card'
import Footer from '../../components/footer/footer'

const Home = () => {
  return (
  <>
    <div>Home</div>
    <SideDrawer />
    <li><Link to="/Login">login</Link></li>
    <Swiper />
    <ProductList />
    {/* <Card /> */}
    <Footer />
  </>
  )
}

export default Home