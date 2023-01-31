import { Link } from "react-router-dom";

import "./product.css";

export const Product = (item) => {
  const product = item.product;
  // console.log("product: ", product);

  return (
    <>
      <Link to="/cart">
        {/* <button className="cart-icon">Cart {cart.totalItems}</button> */}
      </Link>
      <Link to={`/products/${product?.id}`}>
        <div className="product-container">
          <div className="product-left">
            {/* <img
              src={product?.images[0]}
              alt={product?.title}
              className="product-image"
            /> */}
          </div>
          <div className="product-right">
            <h1 className="product-title">{product?.title}</h1>
            <div className="product-description">
              <p>{product?.description}</p>
            </div>
            <div className="product-price-container">
              <p className="product-price">PKR {product?.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getTotal, addToCart } from "../../redux/slices/cart";
// import { fetchProduct } from "../../redux/slices/product/thunk";
// console.log("Console Single item: ", product);
// let qty;
// const dispatch = useDispatch();
// const { id } = useParams();
// let { product, error, status } = useSelector((state) => state.product);
// const cart = useSelector((state) => state.cart);

// useEffect(() => {
//   // dispatch(fetchProduct(id));
//   dispatch(getTotal());
// }, []);

// useEffect(() => {
//   dispatch(fetchProduct(id));
//   dispatch(getTotal());
// }, [id] && [cart]);

// useEffect(() => {
//   dispatch(getTotal());
// }, [cart, dispatch]);

// const addToCartHandler = (product) => {
//   const tempProduct = {
//     ...product,
//     quantity: qty,
//   };
//   dispatch(addToCart(tempProduct));
// };

/* <button
    className="add-to-cart"
    // onClick={() => {
    //   addToCartHandler(product);
    // }}
  >
    Add to Cart
  </button> */
