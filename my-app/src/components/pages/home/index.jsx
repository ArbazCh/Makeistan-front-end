import React from 'react'
import {Link} from 'react-router-dom'
import Swiper from '../../swiper/index'
import SideDrawer from '../../slidedrawer/index'
const Home = () => {
  return (
  <>
    <div>Home</div>
    <SideDrawer />
    <li><Link to="/Login">login</Link></li>
    <Swiper />
  </>
  )
}

export default Home