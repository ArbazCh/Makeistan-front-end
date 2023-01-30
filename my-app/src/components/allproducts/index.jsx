import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../.././redux/slices/allproducts';

const Product = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <ul>
      {console.log(data)}
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          {/* <p>{item.body}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default Product;




























// import React from "react";
// import { Grid } from "@material-ui/core";
// // import "./style.css";

// import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// // import { fetchProduct } from '../../redux/slices/product'
// import { setAllProducts } from '../../redux/slices/allproducts'
// // import{ allProducts }from '../../redux/store'
// const Products = () => {
//   const dispatch = useDispatch()
  
//   useEffect(() => {
//     fetch(`https://dummyjson.com/products`)
//       .then(response => response.json())
//       .then(data => {
//         dispatch(setAllProducts(data));
//      });
//   }, [dispatch]);




//     const items = useSelector((state) => state.setAllProducts)
//   return (
//     <div>
//     {console.log(items)}
//     {items.map((item) =>{
//       <Grid item xs={12} container spacing={2}>
//       <Grid item lg={3} sm={4} md={6} xs={12}>
//         <div className="card-outer">
//           <div className="card-inner">
//             <div className="image-wrap">
//               <img src={item.images[1]} alt="" />
//               <div className="image-over"></div>
//             </div>
//             <div className="product-grid__content">
//               <div className="title">
//                 <h3>
//                   <a >
//                     Lorem ipsum decor one
//                   </a>
//                 </h3>
//                 <button>add to cart</button>
                
//               </div>
//               <div className="price">
//                 <span className="main-price discounted">$17.00</span>
//                 <span className="discounted-price">$15.30</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Grid>
//     </Grid>
//     })}
    
//     </div>
    
//   )
// }

// export default Products