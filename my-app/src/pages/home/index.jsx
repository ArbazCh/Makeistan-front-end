import React from 'react'
import {Link} from 'react-router-dom'
<<<<<<< HEAD
import Swiper from '../../components/swiper'
import SideDrawer from '../../components/slidedrawer/index'
import ProductList from '../ProductList'
// import Card from '../../card'
import Footer from '../../components/footer/footer'

=======
import SideDrawer from '../../components/slidedrawer/index'
import {Product} from '../../components/product/'
// import Card from '../../card'
import Footer from '../../components/footer/footer'
import Swiper from '../../components/swiper'
>>>>>>> a079733ed29708bfbda705751265a173e99bc7d1
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