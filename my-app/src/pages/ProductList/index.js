import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "../../redux/slices/allproducts/thunk";
import Card from "../../components/Card";
import "./style.css";
import { Grid } from "@mui/material";
import Spinner from "../../components/images/loadingspinner.svg";
export const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  if (loading)
    return <img src={Spinner} style={{ position: "absolute", left: "50%" }} />;
  if (error) return <p>Error...</p>;

  return (
    <>
      {/* <Navbar /> */}
      {/* {products.map((item) => (
        <div key={item.id}>
          <Product product={item} />
        </div>
      ))} */}
      <ul>
        {/* {console.log(data)} */}

        <Grid item xs={12} container spacing={2}>
          {products.map((item) => (
            <Card item={item} />
            // <Grid item lg={3} sm={4} md={6} xs={12}>
            //   <div className="card-outer">
            //    <div className="card-inner">
            //      <div className="image-wrap">
            //       {item ?
            //        (<img src={item.thumbnail} alt="" style={{width:'200px', minHeight:'350px'}} loading="lazy"/>)
            //       : (<Skeleton variant="rectangular" animation="wave" width={210} height={118} />)}
            //        <div className="image-over"></div>
            //         </div>
            //          <h3>{item.title}</h3>
            //       <div className="product-grid__content">
            //         <div className="title">

            //             <a className='card-description' >
            //               {item.description}
            //             </a>

            //           {/* <button>add to cart <span><AddIcon className='add-icon' /></span></button> */}

            //         </div>
            //         <div className="price">
            //           <span className="main-price discounted">$17.00</span>
            //           <span className="discounted-price">$15.30</span>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </Grid>
          ))}
        </Grid>
      </ul>
    </>
  );
};
export default ProductList;
