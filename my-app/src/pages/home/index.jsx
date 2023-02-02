import React from 'react'
import {Link} from 'react-router-dom'
import Swiper from '../../components/swiper'
import SideDrawer from '../../components/slidedrawer/'
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