// import { getTotal, addToCart } from "../../redux/slices/cart";
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// export default function AddToCartButton(product) {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart);
//   console.log("cart: ", cart);
//   let qty;

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
//       <div>
//         <button
//           className="add-to-cart"
//           onClick={() => {
//             addToCartHandler(product);
//           }}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </>
//   );
// }
