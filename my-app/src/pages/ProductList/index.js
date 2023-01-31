import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetcAllData } from "../../redux/slices/allproducts/thunk";

import { Product } from "../../components/product";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.allProducts
  );
  // console.log("Console all Products: ", products);

  useEffect(() => {
    dispatch(fetcAllData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      {products.map((item) => (
        <div key={item.id}>
          <Product product={item} />
        </div>
      ))}
    </>
  );
};
// <div className="card">
//   <img src={item.images[0]} alt="Denim Jeans" />
//   <h1>{item?.title}</h1>
//   <p class="price">{item?.price}</p>
//   <p>{item?.description}</p>
// </div>

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { getTotal, addToCart } from "../../../redux/slices/cart";
// import { fetchProduct } from "../../../redux/slices/product/thunk";
// import "../../product/product.css";

// export const ProductDetails = () => {
//   //   console.log("Console Single item: ", item.product);
//   //   const product = item.product;
//   let qty;
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   let { product, error, status } = useSelector((state) => state.product);
//   console.log("State Product: ", product);
//   const cart = useSelector((state) => state.cart);

//   //   useEffect(() => {
//   //     // dispatch(fetchProduct(id));
//   //     dispatch(getTotal());
//   //   }, []);

//   useEffect(() => {
//     dispatch(fetchProduct(id));
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getTotal());
//   }, [cart, dispatch]);

//   const addToCartHandler = (product) => {
//     const tempProduct = {
//       ...product,
//       quantity: qty,
//     };
//     dispatch(addToCart(tempProduct));
//   };

//   return (
//     <>
//       <Link to="/cart">
//         <button className="cart-icon">Cart {cart.totalItems}</button>
//       </Link>
//       <Link to={`/products/${id}`}>
//         <div className="product-container">
//           <div className="product-left">
//             <img
//               src={product[0]?.images[0]}
//               alt={product[0]?.title}
//               className="product-image"
//             />
//           </div>
//           <div className="product-right">
//             <h1 className="product-title">{product.title}</h1>
//             <div className="product-description">
//               <p>{product[0]?.description}</p>
//             </div>
//             <div className="product-price-container">
//               <p className="product-price">PKR {product[0]?.price}</p>
//               <button
//                 className="add-to-cart"
//                 onClick={() => {
//                   addToCartHandler(product[0]);
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// };
