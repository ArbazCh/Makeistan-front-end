import React from 'react'
import { Footer, SlideDrawer } from '../'

const Layout = ({children}) => {
  return (
    <div>
        <SlideDrawer />
        {children}
        <Footer />
    </div>
  )
}

export default Layout