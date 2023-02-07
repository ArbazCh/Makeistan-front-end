import React, { useEffect } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { addToCart, getTotal } from "../../redux/slices/cart";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = ( {item} ) => {

    const dispatch = useDispatch();
    let qty ;
    const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

    const addToCartHandler = (product) => {
        const tempProduct = {
          ...product,
          quantity: qty,
        };
        dispatch(addToCart(tempProduct));
      };
    
  return (
    <>
    
    <Grid item lg={3} sm={4} md={6} xs={12}>
                  <div className="card-outer">
                   <div className="card-inner">
                   <Link to={`products/${item?.productId}`}>
                     <div className="image-wrap">
                      {item ?
                       (<img src={item?.image} alt="" style={{width:'200px', minHeight:'300px!important'}} loading="lazy"/>)
                      : (<Skeleton variant="rectangular" animation="wave" width={210} height={118} />)}
                       <div className="image-over"></div>
                        </div>
                        </Link>
                         {/* <h3>{item?.name}</h3> */}
                      <div className="product-grid__content">
                        <div className="title">
                          
                            <a className='card-description' >
                              {item?.name}
                            </a>
                          
                          <button 
                          className="add-to-cart"
                          onClick={() => {
                            addToCartHandler(item);
                          }}
                          > Add 
                            {/* <span><AddIcon className='add-icon' /></span> */}
                            </button>
                         
                        </div>
                        <div className="price">
                          <span className="main-price discounted">{item?.unitPrice}</span>
                          <span className="discounted-price">$15.30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
 
    </>
  )
}

export default Card