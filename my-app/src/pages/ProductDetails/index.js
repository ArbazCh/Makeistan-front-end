import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../redux/slices/product/thunk";
import "../../components/product/product.css";
import { Product } from "../../components/product";

import { Navbar } from "../../components/navbar";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let { product, error, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  // if (status) return <p> Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  return (
    <>
      <Navbar />
      <Product product={product} />
    </>
  );
};

// import AddToCartButton from "../../cartButton";
// const cart = useSelector((state) => state.cart);
// eslint-disable-next-line
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
/* <Link to="/cart">
        <button className="cart-icon">Cart {cart.totalItems}</button>
      </Link> */

/* <button
        className="add-to-cart"
        onClick={() => {
          addToCartHandler(product);
        }}
      >
        Add to Cart
      </button> */
