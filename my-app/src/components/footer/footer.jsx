import React from 'react'
import { Grid, Link } from '@mui/material'
import './style.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
   <>
     <div className="main-footer">
        <div className="footer-inner">
            <Grid container spacing={3}>
              <Grid item xs={12}  md={4} >
                <div className="finnerlinks">
                  <h1>Useful links</h1>
                  <Link to="/login" className='routelink'>Login</Link>
                  <Link to="/register" className='routelink' >Register</Link>
                  <Link to="/sellerlogin" className='routelink' >Sellers Login</Link>
                  <Link to="/Admin " className='routelink' >admin</Link>
                </div>

              </Grid>
              <Grid item xs={12}  md={4} >
              <div className="finnerlinks">
                  <h1>Useful links</h1>
                  <Link to="/login" className='routelink'>Login</Link>
                  <Link to="/register" className='routelink' >Register</Link>
                  <Link to="/sellerlogin" className='routelink' >Sellers Login</Link>
                  <Link to="/Admin " className='routelink' >admin</Link>
                </div>
                
              </Grid>
              <Grid item xs={12}  md={4}  >
              <div className="fouterlinks">

                 <a href='#'  ><FacebookIcon className='footer-icons' /></a>
                 <a href='#'  ><TwitterIcon  className='footer-icons'/></a>
                 <a href='#'  ><InstagramIcon className='footer-icons' /></a>
                 <a href='#'  ><YouTubeIcon  className='footer-icons'/></a>

              </div>
              </Grid>

            </Grid>
        </div>
     </div>
   </>
  )
}

export default Footer